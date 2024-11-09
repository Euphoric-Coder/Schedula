// Footer.js
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-to-r from-white via-blue-100 to-indigo-100 dark:bg-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 lg:flex-row">
        {/* Logo and Brand */}
        <div className="flex items-center mb-6 lg:mb-0 gap-4">
          {/* Logo Icon */}
          <Link href={'/dashboard'} className="flex items-center gap-2 hover:scale-105 transition-all duration-500 hover:animate-pulse">
            <Image
              src="/icon.png"
              alt="Logo"
              width={48}
              height={100}
            />
            {/* <Image
              src="/logo.png"
              alt="Logo"
              width={170}
              height={100}
            /> */}
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Schedula
            </span>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">
          © {new Date().getFullYear()} Schedula. All rights reserved. | Created
          by Sagnik Dey
        </p>

        {/* Social Links */}
        <div className="flex mt-6 lg:mt-0 space-x-4">
          <Link
            href="https://facebook.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook size={28} />
          </Link>
          <Link
            href="https://twitter.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={28} />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </Link>
          <Link
            href="https://github.com"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300"
          >
            <FaGithub size={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
