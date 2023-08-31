import React from "react";
import { StoreProduct } from "../../../type";
import Image from "next/image";
import FormattedPrice from "@/components/common/FormattedPrice";
import {
    HiOutlineMinus,
    HiOutlinePlus,
    HiOutlineHeart,
    HiOutlineTrash,
} from "react-icons/hi";
import { useStore } from "@/store/store";
import Link from "next/link";

/**
 * CartProduct component displays a single product in the cart with functionalities like
 * adjusting quantity, removing from cart, saving for later, etc.
 */

interface cartProductProps {
    item: StoreProduct;
}
const CartProduct = ({ item }: cartProductProps) => {
    const increaseQuantity = useStore((state) => state.increaseQuantity);
    const removeFromCart = useStore((state) => state.removeFromCart);
    const deleteFromCart = useStore((state) => state.deleteFromCart);
    const onlyAddToFavorites = useStore((state) => state.onlyAddToFavorites);

    const saveForLater = () => {
        onlyAddToFavorites(item);
        deleteFromCart(item._id);
    };

    const btnStyle: string =
        "border-[1px] bg-cPrimary/80 flex items-center h-7 w-7\
        justify-center hover:bg-cPrimary duration-500 rounded-lg text-white";

    return (
        <section
            className="bg-gray-100 relative rounded-lg flex flex-col
        sl:flex-row items-center"
        >
            <Link
                href="/"
                className="h-[8.2rem] w-full ls:h-full sl:w-[7.3rem] md:w-[8.8rem] left-0 top-0 absolute"
            />
            <Image
                width={150}
                height={150}
                src={item.image}
                alt={item.title}
                className="object-cover h-[8.2rem] w-[8.2rem] md:h-[10rem] md:w-[10rem]"
            />
            <section className="flex items-center px-2 gap-4 text-gray-600 text-xs md:text-sm">
                <div className="flex flex-col gap-1">
                    <Link
                        href="/"
                        className="text-base md:text-lg font-semibold text-cPrimary"
                    >
                        {item.title}
                    </Link>
                    <p className="line-clamp-2">{item.description}</p>
                    <p className="font-semibold text-cPrimary flex justify-between">
                        <span>
                            Unit Price: <FormattedPrice amount={item.price} />
                        </span>
                        <span className="block md:hidden">
                            Subtotal:{" "}
                            <FormattedPrice
                                amount={item.price * item.quantity}
                            />
                        </span>
                    </p>
                    <div className="flex items-center space-x-3 font-semibold duration-300 mb-1">
                        {item.quantity > 1 ? (
                            <button
                                onClick={() => removeFromCart(item._id)}
                                className={btnStyle}
                            >
                                <HiOutlineMinus className="stroke-2" />
                            </button>
                        ) : (
                            <button
                                disabled
                                className={`${btnStyle} hover:cursor-not-allowed bg-cPrimary/50`}
                            >
                                <HiOutlineMinus className="stroke-2" />
                            </button>
                        )}

                        <span>{item.quantity}</span>
                        <button
                            onClick={() => increaseQuantity(item._id)}
                            className={btnStyle}
                        >
                            <HiOutlinePlus className="stroke-2" />
                        </button>
                        <div className="flex space-x-3 font-medium">
                            <button
                                className="flex items-center space-x-1 group"
                                onClick={() => deleteFromCart(item._id)}
                            >
                                <HiOutlineTrash className="text-lg text-red-600 group-hover:scale-125" />
                                <span className="pt-0.5">Remove</span>
                            </button>
                            <button
                                className="flex items-center space-x-1 group"
                                onClick={saveForLater}
                            >
                                <HiOutlineHeart className="text-lg text-cPrimary group-hover:scale-125" />
                                <span className="pt-0.5">
                                    Save&nbsp;for&nbsp;later
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* subtotal desktop  display */}
                <div className="text-base font-semibold text-cPrimary hidden md:block">
                    <FormattedPrice amount={item.price * item.quantity} />
                </div>
            </section>
        </section>
    );
};

export default CartProduct;
