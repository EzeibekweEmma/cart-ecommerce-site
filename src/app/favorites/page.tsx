"use client";

import React from "react";
import { useStore } from "@/store/store";
import { StoreProduct } from "../../../type";
import FavoritesProduct from "./FavoritesProduct";
import Link from "next/link";
import ResetFavorites from "./ResetFavorites";
/**
 * Favorites component displays the user's shopping favorites with a list of favorites items.
 */
const Favorites = () => {
    const favorites = useStore((state) => state.favorites);

    return (
        <main className="max-w-screen-2xl mx-auto px-6 ml:w-9/12 lg:w-8/12 xl:w-7/12 gap-10 py-4">
            {favorites.length > 0 ? (
                <>
                    <section className="bg-white p-4 rounded-lg">
                        <div
                            className="flex items-center justify-between border-b-2
                         border-b-gray-400 pb-1 text-gray-700"
                        >
                            <p className="font-semibold md:text-lg">
                                Shopping Favorites
                            </p>
                            <p className="font-semibold hidden md:block">
                                Unit Price
                            </p>
                        </div>

                        {favorites.map((item: StoreProduct) => (
                            <div
                                key={item._id}
                                className="pt-2 flex flex-col gag-2"
                            >
                                <FavoritesProduct item={item} />
                            </div>
                        ))}
                        <ResetFavorites />
                    </section>
                </>
            ) : (
                <section
                    className="bg-white h-52 flex flex-col py-5 rounded-lg
                items-center justify-center shadow-lg"
                >
                    <h1 className="text-lg font-semibold">
                        Nothing is in your favorites!
                    </h1>
                    <Link
                        href="/"
                        className="text-sm text-green-600 underline p-2"
                    >
                        Back to shopping
                    </Link>
                </section>
            )}
        </main>
    );
};

export default Favorites;
