import { useStore } from "@/store/store";
import React from "react";
import { HiOutlineArrowPath } from "react-icons/hi2";
/**
 * ResetCart component empty the cart data.
 */
const ResetCart = () => {
    const resetCart = useStore((state) => state.resetCart);
    return (
        <button
            className="h-10 font-semibold bg-gray-200 rounded-lg text-cPrimary 
        hover:bg-red-600 hover:text-white duration-300 px-5 flex items-center
        space-x-1 mt-3"
            onClick={() =>
                confirm("Your are about to empty your cart!") && resetCart()
            }
        >
            <HiOutlineArrowPath className="text-lg stroke-2" />
            <span>Reset Cart</span>
        </button>
    );
};

export default ResetCart;
