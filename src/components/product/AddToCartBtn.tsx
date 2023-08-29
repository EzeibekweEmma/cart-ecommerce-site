import { useStore } from "@/store/store";
import React from "react";
import {
    HiOutlineMinus,
    HiOutlinePlus,
    HiOutlineShoppingCart,
} from "react-icons/hi";

export default function AddToCartBtn({
    _id,
    title,
    brand,
    category,
    description,
    image,
    isNew,
    oldPrice,
    price,
}) {
    const btnStyle: string =
        "h-full border-[1px] bg-cPrimary/80 shadow-md flex items-center\
    justify-center hover:bg-cPrimary duration-500 rounded-lg";
    const cart = useStore((state) => state.cart);
    const existingCartItem = cart.find((cartItem) => cartItem._id === _id);
    const addToCart = useStore((state) => state.addToCart);
    const removeFromCart = useStore((state) => state.removeFromCart);

    const handleAddToCart = () => {
        addToCart({
            _id,
            title,
            brand,
            category,
            description,
            image,
            isNew,
            oldPrice,
            price,
            quantity: 1,
        });
    };

    return (
        <>
            {existingCartItem?.quantity > 0 ? (
                <div className="w-full h-full flex items-center justify-between text-2xl">
                    <button
                        onClick={() => removeFromCart(_id)}
                        className={`${btnStyle} w-12 text-2xl`}
                    >
                        <HiOutlineMinus />
                    </button>
                    <span className="text-black">
                        {existingCartItem?.quantity}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        className={`${btnStyle} w-12 text-2xl`}
                    >
                        <HiOutlinePlus />
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleAddToCart}
                    className={`${btnStyle} text-sm space-x-2 w-full group/cart font-semibold`}
                >
                    <HiOutlineShoppingCart className="duration-300 w-5 h-5 stroke-2 group-hover/cart:translate-x-[6.5rem]" />
                    <span className="group-hover/cart:-translate-x-8 duration-300">
                        ADD TO CART
                    </span>
                </button>
            )}
        </>
    );
}
