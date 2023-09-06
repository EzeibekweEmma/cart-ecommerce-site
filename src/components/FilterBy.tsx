"use client";
import { useStore } from "@/store/store";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight, FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import PriceSlider from "./PriceSlider";

/*
 * FilterBy Component
 *
 * The FilterBy component is responsible for rendering filter options
 * and enabling users to refine their product search based on various criteria.
 *
 * Key Features:
 * - Allows filtering by category, brand, and price.
 * - Supports expanding/collapsing filter options.
 * - Dynamically generates filter options based on available data.
 * - Provides a PriceSlider component for price range selection
 * - Price filtering is facilitated through the PriceSlider component.
 *
 */

const FilterBy = () => {
    // State for managing the expansion/collapse of the filter panel
    const [fold, setFold] = useState(false);
    // State for tracking selected filter options
    const [filters, setFilters] = useState({
        category: false,
        brand: false,
        price: false,
        rating: false,
    });

    const product = useStore((state) => state.product);
    // Extract unique categories, brands, and predefined ratings from the product data
    const category = new Set(product.map((a) => a.category));
    const brand = new Set(product.map((a) => a.brand));
    const rating = [3.5];
    // Extract price data from the product and find the maximum price
    let price: number[] = product.map((p) => p.price);
    const maxPrice = Math.max(...price);

    const filterBy = ["category", "brand", "rating"];
    // Generate filter options dynamically
    const filterOption = filterBy.map((f) => {
        return (
            <div className="flex flex-col space-y-0.5" key={f}>
                <span
                    className="flex justify-between items-center py-2 pl-4 pr-2
                    cursor-pointer hover:bg-cPrimary hover:text-white"
                    onClick={() =>
                        setFilters((prev) => {
                            return {
                                ...prev,
                                [f]: !prev[f],
                            };
                        })
                    }
                >
                    <p className="text-base font-semibold capitalize">{f}</p>
                    {filters[f] ? (
                        <FiChevronDown className="h-4 w-4" />
                    ) : (
                        <FiChevronRight className="h-4 w-4" />
                    )}
                </span>
                {filters[f] && (
                    <>
                        {Array.from(
                            f === "category"
                                ? category
                                : f === "brand"
                                ? brand
                                : rating
                        ).map((i) => (
                            <Link
                                href={{
                                    pathname: "/",
                                    query: { filter: [f, i] },
                                }}
                                key={i}
                                className="pl-5 py-1 cursor-pointer hover:text-white
                                 hover:bg-cPrimary hover:font-semibold"
                            >
                                {i}
                            </Link>
                        ))}
                    </>
                )}
            </div>
        );
    });
    // Function to close all filter options
    const closeAll = () => {
        setFilters({
            category: false,
            brand: false,
            price: false,
            rating: false,
        });
        setFold((prev) => !prev);
    };

    return (
        <section
            className={`absolute mt-0.5 left-0 bg-white w-64 rounded-b-lg duration-500
            shadow-lg border ${
                fold ? "translate-x-0" : "-translate-x-[16.1rem]"
            }`}
        >
            <div className="relative">
                <span
                    className="text-xl p-2 rounded-lg border shadow-lg absolute top-1 -right-12
                    hover:scale-110 bg-white/50 hover:cursor-pointer"
                    onClick={closeAll}
                >
                    {fold ? (
                        <IoMdClose className="stroke-2" />
                    ) : (
                        <FiMenu className="stroke-2" />
                    )}
                </span>
                <span className="font-semibold text-sm pl-1 text-cPrimary">
                    Filter By:
                </span>
                <div
                    className="flex text-xs flex-col [&>*:nth-child(odd)]:bg-gray-100
                 h-[70vh] overflow-y-auto"
                >
                    {filterOption}
                    {/* Filter by price */}
                    <div className="flex flex-col">
                        <span
                            className="flex justify-between items-center py-2 pl-4 pr-2
                    cursor-pointer hover:bg-cPrimary hover:text-white"
                            onClick={() =>
                                setFilters((prev) => {
                                    return {
                                        ...prev,
                                        price: !prev.price,
                                    };
                                })
                            }
                        >
                            <p className="text-base font-semibold capitalize">
                                price
                            </p>
                            {filters.price ? (
                                <FiChevronDown className="h-4 w-4" />
                            ) : (
                                <FiChevronRight className="h-4 w-4" />
                            )}
                        </span>
                        {filters.price && (
                            <div className="pr-2 pl-7 w-60">
                                <PriceSlider maxPrice={maxPrice} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterBy;
