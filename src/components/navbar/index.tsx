"use client";
import Image from "next/image";
import { Search, ShoppingCart, BookHeart, ArrowLeft } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <header className="bg-white border-b border-gray-200 py-4 flex items-center justify-between p-4 shadow-sm rounded-lg">
        {/*Desktop Size */}
        {/*Logo */}
        <div>
          <Image
            src="/image/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="object-contain w-24 md:w-32 lg:w-36 xl:w-40 px-4"
          />
        </div>

        {/*Search bar */}
        <div className="hidden lg:flex justify-end items-right  gap-4 ml-auto">
          <div className="relative ">
            <input
              type="text"
              placeholder="find book"
              className="border boder-gray-600 rounded-lg pl-10 pr-3 py-1 w-64"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
          </div>

          <div className="flex gap-4 mr-8 mt-1 items-right cursor-pointer">
            <ShoppingCart />
            <BookHeart />
          </div>
        </div>

        {/*Responsive Mobile */}
        <div className="flex lg:hidden item-center gap-2">
          {/*Menu search terbuka */}
          <button className="p-2" onClick={() => setSearchOpen(true)}>
            <Search />
          </button>

          <div className="flex gap-2 items-center">
            <ShoppingCart />
            <BookHeart />
          </div>
        </div>

        {/*overlay */}
        {searchOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden">
            <div className="p-4 flex items-center gap-4 border-b">
              {/*Menu search tertutup */}
              <button className="p-2" onClick={() => setSearchOpen(false)}>
                <ArrowLeft className="bx bx-arrow-back text-2xl" />
              </button>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="find book"
                  className="border border-gray-600 rounded-lg pl-10 pr-3 py-2 w-full"
                  autoFocus
                />
                <Search className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
export default Navbar;
