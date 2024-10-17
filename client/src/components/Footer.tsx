import React from 'react';
import Logo from './common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-20 bg-gray-300 flex items-center justify-center">
      {/* Logo */}
      <span className="hidden sl:block">
        <Logo />
      </span>
      {/* TODO: More Links goes here! */}
      <p className="text-gray-600 text-sm sl:text-base">
        Copyright © {new Date().getFullYear()} CART All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
