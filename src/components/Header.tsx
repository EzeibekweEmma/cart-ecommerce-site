"use client";
import React from "react";
import {
    HiOutlineShoppingCart,
    HiOutlineHeart,
    HiOutlineSearch,
    HiOutlineUserCircle,
} from "react-icons/hi";
import Logo from "./common/Logo";
import Link from "next/link";
import { useStore } from "@/store/store";

export default function Header() {
    interface style {
        div: string;
        span: string;
        icon: string;
        number: string;
    }
    const linkStyle: style = {
        div: "flex items-center space-x-1 p-1 text-gray-600 cursor-pointer hover:text-cPrimary/60",
        span: "text-lg font-medium sl:flex hidden pt-2",
        icon: "h-8 w-8",
        number: "absolute top-0.5 left-[1.7rem] px-1 text-xs rounded-full\
        bg-white font-semibold text-cPrimary",
    };

    const favorites = useStore((state) => state.favorites);
    const cartQuantity = useStore((state) => state.cartQuantity);

    return (
        <header className="bg-white ls:h-[4.5rem] h-[7rem] px-10 shadow-md flex flex-col justify-evenly w-screen fixed z-50">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <Logo />
                {/* Search Bar */}
                {/* TODO: Add search functionality */}
                <form className="text-gray-600 relative hidden ls:flex flex-[0.7]">
                    <input
                        type="search"
                        placeholder="Search Products, brands and Categories"
                        className="w-full h-10 border border-gray-300 rounded-s-md
                    px-5 focus:outline-none border-r-0 shadow-md"
                    />
                    <button
                        type="submit"
                        className="absolute -right-10 p-[0.33rem] rounded-e-md border border-gray-300
                    bg-cPrimary/5 hover:text-cPrimary/60 shadow-md"
                    >
                        <HiOutlineSearch className="h-7 w-7" />
                    </button>
                    <input type="submit" hidden />
                </form>
                <section className="flex justify-between items-center md:flex-[0.2]">
                    {/* Favorites */}
                    <Link
                        href="favorites"
                        className={`${linkStyle.div} relative `}
                    >
                        {favorites.length > 0 && (
                            <span className="absolute flex h-2 w-2 left-[1.9rem] top-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-900" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cPrimary" />
                            </span>
                        )}
                        <HiOutlineHeart className={linkStyle.icon} />
                        <span className={linkStyle.span}>Favorites</span>
                    </Link>
                    {/* Cart */}
                    <Link href="cart" className={`${linkStyle.div} relative`}>
                        <span className={linkStyle.number}>
                            {cartQuantity ? cartQuantity : 0}
                        </span>
                        <HiOutlineShoppingCart className={linkStyle.icon} />
                        <span className={linkStyle.span}>Cart</span>
                    </Link>
                    {/* Account */}
                    <Link href="account" className={linkStyle.div}>
                        <HiOutlineUserCircle className={linkStyle.icon} />
                        <span className={linkStyle.span}>Account</span>
                    </Link>
                </section>
            </nav>
            {/* Search Bar for mobile */}
            {/* TODO: Add search functionality */}
            <form className="text-gray-600 relative ls:hidden mr-10">
                <input
                    type="search"
                    placeholder="Search Products, brands and Categories"
                    className="w-full h-10 border border-gray-300 rounded-s-md
                    px-5 focus:outline-none border-r-0 shadow-md"
                />
                <button
                    type="submit"
                    className="absolute -right-10 p-[0.33rem] rounded-e-md border border-gray-300
                    bg-cPrimary/5 hover:text-cPrimary/60 shadow-md"
                >
                    <HiOutlineSearch className="h-7 w-7" />
                </button>
                <input type="submit" hidden />
            </form>
        </header>
    );
}
