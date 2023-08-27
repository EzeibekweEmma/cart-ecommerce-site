import React from "react";
import Logo from "./common/Logo";

const Footer: React.FC = () => {
    return (
        <footer className="w-full h-20 bg-gray-300 flex items-center justify-center">
            {/* Logo */}
            <Logo />
            {/* TODO: More Links goes here! */}
            <p className="text-gray-600">
                Copyright © 2023 CART All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
