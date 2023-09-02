"use client";
import { useStore } from "@/store/store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { StoreProduct } from "../../../type";
import FormattedPrice from "@/components/common/FormattedPrice";
import AddToCartBtn from "@/components/common/AddToCartBtn";
import Link from "next/link";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const ItemPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const product = useStore((state) => state.product);
    const favorites = useStore((state) => state.favorites);
    const addToFavorites = useStore((state) => state.addToFavorites);

    const id = +useParams()._id;
    const item: StoreProduct = product.find((item) => item._id === id && item);
    useEffect(() => {
        id;
        setTimeout(() => {
            setIsLoading(false);
        }, 700);
    }, [id]);

    const favoriteStyle =
        "w-12 h-12 absolute bottom-2 flex right-6 rounded-full\
        text-cPrimary items-center justify-center text-3xl bg-cPrimary/10";
    const {
        _id,
        title,
        brand,
        category,
        description,
        image,
        isNew,
        oldPrice,
        price,
    } = item;
    return (
        <>
            {isLoading ? (
                <div className="w-full flex justify-center items-center py-20">
                    <PulseLoader color="#86a397" size={20} />
                </div>
            ) : (
                item && (
                    <section className="flex flex-col md:flex-row gap-3 shadow-xl border rounded-lg items-center pb-5 md:pb-0 md:mx-5 lg:mx-10">
                        <div className="md:flex-[0.5] lg:flex-[0.3] w-full h-[60vh] md:h-[50vh] md:col-span-1 bg-white rounded-l-lg relative md:border-b-0 border-b-2 py-2">
                            <Image
                                className="w-full h-full object-cover"
                                src={image}
                                alt={title}
                                width={200}
                                height={200}
                            />
                            {/* Favorites */}
                            <button
                                onClick={() =>
                                    addToFavorites({
                                        _id,
                                        title,
                                        brand,
                                        category,
                                        description,
                                        image,
                                        isNew,
                                        oldPrice,
                                        price,
                                    })
                                }
                            >
                                {/* Check if the current item is in favorites */}
                                <div className={favoriteStyle}>
                                    {favorites.find(
                                        (favoritesItem) =>
                                            favoritesItem._id === _id
                                    ) ? (
                                        <HiHeart />
                                    ) : (
                                        <HiOutlineHeart />
                                    )}
                                </div>
                            </button>
                            {/* Discount */}
                            {isNew && (
                                <p
                                    className="absolute top-3 right-6
                                            text-cPrimary font-medium text-xs
                                            tracking-wide animate-bounce"
                                >
                                    Save{" "}
                                    <FormattedPrice amount={oldPrice - price} />
                                </p>
                            )}
                        </div>
                        {/* TODO: Render the stars dynamic */}
                        <div className="pl-2 pr-5 pb-2 font-medium space-y-2 md:flex-[0.7] relative">
                            {/* star */}
                            <Link
                                href="/"
                                className="absolute right-6 top-0 text-sm
                                    flex text-cPrimary space-x-0.5"
                            >
                                <ImStarFull />
                                <ImStarFull />
                                <ImStarFull />
                                <ImStarHalf />
                                <ImStarEmpty />
                            </Link>
                            <p
                                className="text-xs text-gray-600 px-1
                                    tracking-wide bg-cPrimary/10 rounded-sm w-fit"
                            >
                                {category}
                            </p>
                            <p className="text-lg font-medium">{title}</p>
                            <p className="flex items-center gap-2">
                                <span className="text-cPrimary font-semibold text-base">
                                    <FormattedPrice amount={price} />
                                </span>
                                <span className="text-sm line-through">
                                    <FormattedPrice amount={oldPrice} />
                                </span>
                            </p>
                            <p className="md">{description}</p>
                            {/* Add to cart */}
                            <div className="w-full h-12">
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
                    </section>
                )
            )}
        </>
    );
};

export default ItemPage;
