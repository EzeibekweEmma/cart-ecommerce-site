import { useStore } from "@/store/store";
import React from "react";
import { HiOutlineArrowPath } from "react-icons/hi2";
/**
 * ResetFavorites component empty the favorites data.
 */
const ResetFavorites = () => {
    const resetFavorites = useStore((state) => state.resetFavorites);
    return (
        <button
            className="h-10 font-semibold bg-gray-200 rounded-lg text-cPrimary 
        hover:bg-red-600 hover:text-white duration-300 px-5 flex items-center
        space-x-1 mt-3"
            onClick={() =>
                confirm("Your are about to empty your favorites!") &&
                resetFavorites()
            }
        >
            <HiOutlineArrowPath className="text-base md:text-lg stroke-2" />
            <span className="text-sm md:text-base">Reset Favorites</span>
        </button>
    );
};

export default ResetFavorites;
