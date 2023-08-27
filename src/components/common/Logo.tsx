import React from "react";
import ImgLogo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center p-1 flex-col">
            <Image src={ImgLogo} alt={"ImgLogo"} width="30" height="30" />
            <span className="font-bold text-cPrimary/60">CART</span>
        </Link>
    );
}
