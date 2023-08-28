"use client";
import { useProduct } from "@/store/product";
import React, { useEffect } from "react";
import { ProductProps } from "../../../type";
import Image from "next/image";
import Link from "next/link";
import {
    HiHeart,
    HiOutlineShoppingCart,
    HiOutlineHeart,
    HiOutlineMinus,
    HiOutlinePlus,
} from "react-icons/hi";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";
import FormattedPrice from "./FormattedPrice";
import AddToCartBtn from "./AddToCartBtn";

export default function Products() {
    const product: object[] = useProduct((state) => state.product);
    const fetchProduct = useProduct((state) => state.fetchProduct);
    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    return (
        <section className="flex justify-center">
            <div
                className="md:w-[90vw] grid grid-cols-1 md:grid-cols-2
                ls:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                {product.map(
                    ({
                        _id,
                        title,
                        brand,
                        category,
                        description,
                        image,
                        isNew,
                        oldPrice,
                        price,
                    }: ProductProps) => {
                        return (
                            <div
                                key={_id}
                                className="group w-full bg-white/90 overflow-hidden
                                drop-shadow-xl hover:shadow-md rounded-lg"
                            >
                                <div className="w-full h-[260px] relative border-b-2 mb-1">
                                    <Link href="/">
                                        <Image
                                            className="w-full h-full object-cover
                                        scale-90 hover:scale-100
                                        transition-transform duration-300"
                                            src={image}
                                            alt={title}
                                            width={300}
                                            height={300}
                                        />
                                    </Link>
                                    {/* Favorites */}
                                    <div
                                        className="w-12 h-12 absolute bottom-1 
                                    right-1 border-[1px] bg-white rounded-lg
                                    translate-x-14 group-hover:translate-x-0
                                    text-cPrimary cursor-pointer
                                    shadow-md flex items-center justify-center
                                    text-2xl hover:bg-cPrimary/10 duration-300"
                                    >
                                        {true ? (
                                            <HiOutlineHeart />
                                        ) : (
                                            <HiHeart />
                                        )}
                                    </div>
                                    {/* Discount */}
                                    {isNew && (
                                        <p
                                            className="absolute top-3 right-3
                                            text-cPrimary font-medium text-xs
                                            tracking-wide animate-bounce"
                                        >
                                            Save{" "}
                                            <FormattedPrice
                                                amount={oldPrice - price}
                                            />
                                        </p>
                                    )}
                                </div>
                                {/* star */}
                                {/* TODO: Render it dynamic */}
                                <div className="px-4 pb-3 font-medium mb-14 relative">
                                    <Link
                                        href="/"
                                        className="absolute right-1 top-0 text-sm
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
                                    <p className="text-base font-medium">
                                        {title}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-cPrimary font-semibold">
                                            <FormattedPrice amount={price} />
                                        </span>
                                        <span className="text-sm line-through">
                                            <FormattedPrice amount={oldPrice} />
                                        </span>
                                    </p>
                                    <p className="truncate text-sm">
                                        {description}
                                    </p>
                                </div>
                                {/* Add to cart */}
                                <div
                                    className="w-[95%] h-12 absolute bottom-3
                                     left-2.5 duration-300 text-white
                                    translate-y-16 group-hover:translate-y-0
                                    "
                                >
                                    <AddToCartBtn />
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
}
