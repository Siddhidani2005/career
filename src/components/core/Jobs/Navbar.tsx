"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [cartQuantity] = useState<number>(0);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          title="Better Talent — Home"
          aria-label="Better Talent Home"
        >
          <Image
            src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/66293d545a4b7dca0058f9a9_Better%20Talent%20Webflow%20CMS%20Job%20board%20recruitment%20template%20Logo.svg"
            alt="Better Talent Logo"
            width={120}
            height={50}
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/about-us"
            className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/featured-jobs"
            className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition"
          >
            Pricing
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          {/* Browse Jobs Button */}
          <Link
            href="/jobs"
            className="hidden md:inline-block bg-neutral-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition"
          >
            Browse Jobs
          </Link>

          {/* Cart Icon */}
          <button
            className="relative flex items-center justify-center w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Open cart"
          >
            <Image
              src="https://cdn.prod.website-files.com/66277126b8030d4bdcebdaf0/662949e435c6192ede0398f5_panier-dachat-simple%20(1).svg"
              alt="Cart"
              width={20}
              height={20}
            />
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
