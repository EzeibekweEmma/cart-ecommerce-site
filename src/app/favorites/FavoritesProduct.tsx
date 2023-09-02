import React from "react";
import { StoreProduct } from "../../../type";
import Image from "next/image";
import FormattedPrice from "@/components/common/FormattedPrice";
import { HiHeart } from "react-icons/hi";
import { useStore } from "@/store/store";
import Link from "next/link";
import AddToCartBtn from "@/components/common/AddToCartBtn";

/**
 * FavoritesProduct component displays a single product in the favorites with functionalities like
 * adjusting quantity, removing from favorites.
 */

interface favoritesProductProps {
    item: StoreProduct;
}
const FavoritesProduct = ({ item }: favoritesProductProps) => {
    const removeFromFavorites = useStore((state) => state.addToFavorites);

    const {
        _id,
        title,
        description,
        image,
        price,
        oldPrice,
        brand,
        category,
        isNew,
    } = item;

    const btnStyle: string =
        "border-[1px] bg-cPrimary/80 flex items-center h-7 w-7\
        justify-center hover:bg-cPrimary duration-500 rounded-lg text-white";

    return (
        <section
            className="bg-gray-100 relative rounded-lg flex flex-col border shadow-lg
        sl:flex-row items-center"
        >
            <Link
                href={{
                    pathname: `/${_id}`,
                    query: { _id, title },
                }}
                className="h-[8.2rem] w-full ls:h-full sl:w-[7.3rem] md:w-[8.8rem] left-0 top-0 absolute"
            />
            <Image
                className="object-cover h-[8.2rem] w-[8.2rem] md:h-[10rem] md:w-[10rem] rounded-l-lg"
                width={150}
                height={150}
                src={image}
                alt={title}
            />
            {/* Favorites */}
            <button onClick={() => removeFromFavorites({ _id })}>
                <div
                    className="w-8 md:w-9 ml:w-10 h-8 md:h-9 ml:h-10 absolute top-2 flex right-2 rounded-full
        text-cPrimary shadow-md items-center justify-center text-lg ml:text-xl bg-cPrimary/10"
                >
                    <HiHeart />
                </div>
            </button>
            <section className="flex items-center p-2 gap-4 text-gray-600 text-xs md:text-sm">
                <div className="flex flex-col gap-1">
                    <Link
                        href={{
                            pathname: `/${_id}`,
                            query: { _id, title },
                        }}
                        className="text-base md:text-lg font-semibold w-fit text-cPrimary"
                    >
                        {title}
                    </Link>
                    <p className="line-clamp-2">{description}</p>
                    <p className="font-semibold text-cPrimary flex justify-between">
                        <span className="block md:hidden">
                            Unit Price: <FormattedPrice amount={price} />
                        </span>
                    </p>
                    {/* Add to cart */}
                    <div className="w-full h-10 ml:h-12 relative">
                        <AddToCartBtn
                            _id={_id}
                            title={title}
                            brand={brand}
                            category={category}
                            description={description}
                            image={image}
                            isNew={isNew}
                            oldPrice={oldPrice}
                            price={price}
                            quantity={1}
                        />
                    </div>
                </div>
                {/* price desktop  display */}
                <div className="text-base font-semibold text-cPrimary hidden md:block">
                    <FormattedPrice amount={price} />
                </div>
            </section>
        </section>
    );
};

export default FavoritesProduct;
