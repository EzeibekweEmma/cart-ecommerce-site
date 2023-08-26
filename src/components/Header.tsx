import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.png";
import {
    HiOutlineShoppingCart,
    HiOutlineHeart,
    HiOutlineSearch,
    HiOutlineUserCircle,
} from "react-icons/hi";

export default function Header() {
    interface style {
        div: string;
        span: string;
        icon: string;
    }
    const linkStyle: style = {
        div: "flex items-center space-x-2 p-1 text-gray-600 cursor-pointer hover:text-cPrimary/60",
        span: "text-lg font-medium sl:flex hidden",
        icon: "h-8 w-8",
    };
    return (
        <header className="bg-white ls:h-[4.5rem] h-[7rem] px-10 shadow-md flex flex-col justify-evenly">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <div className={`${linkStyle.div} flex-col`}>
                    <Image src={Logo} alt={"Logo"} width="30" height="30" />
                    <span className="font-bold text-cPrimary/60">CART</span>
                </div>
                {/* Search Bar */}
                <form className="text-gray-600 relative hidden ls:flex flex-[0.7]">
                    <input
                        type="search"
                        placeholder="Search Products, brands and Categories"
                        className="w-full h-10 border border-gray-300 rounded-s-md
                    px-5 focus:outline-none border-r-0"
                    />
                    <button
                        type="submit"
                        className="absolute -right-10 p-[0.33rem] rounded-e-md border border-gray-300
                    bg-cPrimary/5 hover:text-cPrimary/60"
                    >
                        <HiOutlineSearch className="h-7 w-7" />
                    </button>
                    <input type="submit" hidden />
                </form>
                <section className="flex justify-between items-center md:flex-[0.2]">
                    {/* Favorites */}
                    <div className={linkStyle.div}>
                        <HiOutlineHeart className={linkStyle.icon} />
                        <span className={linkStyle.span}>Favorites</span>
                    </div>
                    {/* Cart */}
                    <div className={`${linkStyle.div} relative`}>
                        <span
                            className="absolute top-0 left-[1.9rem] px-0.5 rounded-full
                 bg-white font-semibold text-sm text-cPrimary"
                        >
                            0
                        </span>
                        <HiOutlineShoppingCart className={linkStyle.icon} />
                        <span className={linkStyle.span}>Cart</span>
                    </div>
                    {/* Account */}
                    <div className={linkStyle.div}>
                        <HiOutlineUserCircle className={linkStyle.icon} />
                        <span className={linkStyle.span}>Account</span>
                    </div>
                </section>
            </nav>
            {/* Search Bar for mobile */}
            <form className="text-gray-600 relative ls:hidden mr-10">
                <input
                    type="search"
                    placeholder="Search Products, brands and Categories"
                    className="w-full h-10 border border-gray-300 rounded-s-md
                    px-5 focus:outline-none border-r-0"
                />
                <button
                    type="submit"
                    className="absolute -right-10 p-[0.33rem] rounded-e-md border border-gray-300
                    bg-cPrimary/5 hover:text-cPrimary/60"
                >
                    <HiOutlineSearch className="h-7 w-7" />
                </button>
                <input type="submit" hidden />
            </form>
        </header>
    );
}
