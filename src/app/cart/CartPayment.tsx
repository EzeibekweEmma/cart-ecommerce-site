import FormattedPrice from "@/components/common/FormattedPrice";
import { useStore } from "@/store/store";
import Link from "next/link";
import React from "react";
import { SiMediamarkt } from "react-icons/si";

/**
 * CartPayment component displays the payment details section in the cart.
 */
const CartPayment = () => {
    const cart = useStore((state) => state.cart);

    // Calculate for the total price
    const totalPrice = (): number => {
        let total: number = 0;
        cart.map((item) => {
            {
                return item.quantity
                    ? (total += item.quantity * item.price)
                    : (total += item.price);
            }
        });

        return total;
    };

    return (
        <section className="flex flex-col gap-4">
            <div className="flex gap-2 text-sm space-y-2">
                <span
                    className="bg-green-600 rounded-full p-1 h-6 w-6 flex
                    items-center justify-center mt-1 text-white"
                >
                    <SiMediamarkt />
                </span>
                <p>
                    Your order qualifies for FREE Shipping by Choosing this
                    option as checkout. See details...
                </p>
            </div>
            <p className="flex items-center justify-between px-2 font-semibold">
                Total:
                <span className="font-bold text-lg text-cPrimary">
                    <FormattedPrice amount={totalPrice()} />
                </span>
            </p>
            <div className="flex flex-col items-center text-sm space-y-2">
                <button
                    className="w-full h-10 font-semibold bg-cPrimary/50
                text-white rounded-lg cursor-not-allowed"
                >
                    Proceed&nbsp;To&nbsp;Buy
                </button>
                <Link
                    href="/"
                    className="text-cPrimary underline animate-bounce"
                >
                    Please login to continue
                </Link>
            </div>
        </section>
    );
};

export default CartPayment;
