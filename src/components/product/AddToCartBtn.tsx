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
    // Define CSS classes for button styles
    const btnStyle: string =
        "h-full border-[1px] bg-cPrimary/80 shadow-md flex items-center\
    justify-center hover:bg-cPrimary duration-500 rounded-lg text-white";
    // Access cart state and functions from the store
    const cart = useStore((state) => state.cart);
    const existingCartItem = cart.find((cartItem) => cartItem._id === _id);
    const addToCart = useStore((state) => state.addToCart);
    const removeFromCart = useStore((state) => state.removeFromCart);

    // Handle the addition of an item to the cart
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
        // Render the component based on the existingCartItem's quantity
        <>
            {existingCartItem?.quantity > 0 ? (
                <div
                    className="w-full h-full flex items-center justify-between 
                text-2xl duration-300 translate-y-0"
                >
                    <button
                        onClick={() => removeFromCart(_id)}
                        className={`${btnStyle} w-9 ml:w-12 text-base font-semibold ml:text-2xl`}
                    >
                        <HiOutlineMinus />
                    </button>
                    <span className="text-black text-base ml:text-lg">
                        {existingCartItem?.quantity}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        className={`${btnStyle} w-9 ml:w-12 text-base font-semibold ml:text-2xl`}
                    >
                        <HiOutlinePlus />
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleAddToCart}
                    className={`${btnStyle} text-xs ml:text-sm space-x-2 w-full group/cart
                    font-semibold duration-300 md:translate-y-16 md:group-hover:translate-y-0`}
                >
                    <HiOutlineShoppingCart className="duration-300 w-4 ml:w-5 h-4 ml:h-5 stroke-2 group-hover/cart:translate-x-[6.5rem]" />
                    <span className="group-hover/cart:-translate-x-8 duration-300">
                        ADD TO CART
                    </span>
                </button>
            )}
        </>
    );
}
