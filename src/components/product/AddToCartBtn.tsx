import React from "react";
import {
    HiOutlineMinus,
    HiOutlinePlus,
    HiOutlineShoppingCart,
} from "react-icons/hi";

export default function AddToCartBtn() {
    const btnStyle: string =
        "h-full border-[1px] bg-cPrimary/80 cursor-pointer shadow-md flex\
        items-center justify-center hover:bg-cPrimary duration-500 rounded-lg";

    return (
        <>
            {true ? (
                <div
                    className={`${btnStyle} text-sm space-x-2 w-full group/cart font-semibold`}
                >
                    <HiOutlineShoppingCart className="duration-300 w-5 h-5 stroke-2 group-hover/cart:translate-x-[6.5rem]" />
                    <span className="group-hover/cart:-translate-x-8 duration-300">
                        ADD TO CART
                    </span>
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-between text-2xl">
                    <span className={`${btnStyle} w-12 text-2xl`}>
                        <HiOutlineMinus />
                    </span>
                    <span className="text-black">1</span>
                    <span className={`${btnStyle} w-12 text-2xl`}>
                        <HiOutlinePlus />
                    </span>
                </div>
            )}
        </>
    );
}
