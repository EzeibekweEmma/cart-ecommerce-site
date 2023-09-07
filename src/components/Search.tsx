"use client";
import { useStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
const Search = () => {
    const [filteredSearch, setFilteredSearch] = useState([]);
    // Extract unique categories, brands, and predefined ratings from the product data
    const product = useStore((state) => state.product);

    // This Function filter products based on search input => category, brand or title
    const search = (e: string) => {
        const filtered = product.filter((p) => {
            return (
                e.toLowerCase() !== "" &&
                (p.title.toLowerCase().includes(e.toLowerCase()) ||
                    p.brand.toLowerCase().includes(e.toLowerCase()) ||
                    p.category.toLowerCase().includes(e.toLowerCase()))
            );
        });
        setFilteredSearch(filtered);
    };
    // Function to prevent the Enter key from triggering a form submission
    const handleKeyPress = (e: { key: string; preventDefault: () => void }) => {
        if (e.key === "Enter") e.preventDefault();
    };

    return (
        <>
            {/* Search input field */}
            <input
                type="search"
                placeholder="Search Products, brands and Categories"
                className="w-full h-10 border border-gray-300 rounded-md indent-7
                    px-5 focus:outline-none shadow-md focus:bg-cPrimary/5"
                onChange={(e) => search(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <HiOutlineSearch className="h-5 w-5 absolute left-4 top-2.5" />
            {/* Display filtered search results */}
            {filteredSearch.length > 0 && (
                <div
                    className="absolute left-0 flex flex-col bg-cGray p-2
            rounded-b-lg shadow-md opacity-90 text-xs w-full space-y-1 h-[60vh]
            overflow-y-auto ml:top-10"
                >
                    {filteredSearch?.map(
                        ({ _id, title, brand, image, category }) => {
                            return (
                                // Link to product details page
                                <Link
                                    key={_id}
                                    href={{
                                        pathname: `/${_id}`,
                                        query: { _id, title },
                                    }}
                                    className="flex h-12 p-1.5 space-x-2 items-center
                                bg-gray-300 hover:bg-slate-400 w-full"
                                    onClick={() => search("")}
                                >
                                    <Image
                                        src={image}
                                        height="100"
                                        width="100"
                                        alt="something"
                                        className="h-full w-12 border object-cover"
                                    />
                                    <span className=" w-full">
                                        <span className="font-semibold truncate">
                                            {title}
                                        </span>
                                        <div className="flex justify-between items-center">
                                            <span>{category}</span>
                                            <span>{brand}</span>
                                        </div>
                                    </span>
                                </Link>
                            );
                        }
                    )}
                </div>
            )}
        </>
    );
};

export default Search;
