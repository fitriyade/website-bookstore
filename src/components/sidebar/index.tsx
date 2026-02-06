"use client";

import Link from "next/link";
import { useState } from "react";
import MenuItems from "@/helpers/menu-item";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col bg-[#0C134F] text-white w-72 sticky top-0 h-[calc(100vh-4rem)] my-4 ml-4 rounded-2xl shadow-xl">
        {/* Avatar + Nama */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            {/* Avatar bulat */}
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-700/10">
                <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">E</span>
                </div>
              </div>
            </div>

            {/* Nama & status member */}
            <div>
              <h1 className="text-s font-semibold">Hi! Emma Wong</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <p className="text-sm text-blue-200">Gold Member</p>
              </div>
            </div>
          </div>
        </div>

        {/* Garis tipis */}
        <div className="border-t border-gray-700"></div>

        {/* Menu Items */}
        <div className="flex-1 pl-2 overflow-y-auto">
          <div className="space-y-2">
            {MenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-700/50 transition-colors"
              >
                <div className="text-gray-400">{item.icon}</div>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#222831] p-3 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar overlay"
          />
          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-64 h-full bg-[#0C134F] text-white shadow-xl z-50 p-6 overflow-y-auto">
            {/* Avatar  */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <h1 className="text-base font-semibold">Hi! Emma Wong</h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <p className="text-sm text-blue-200">Gold Member</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-2">
              {MenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-700/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-gray-400">{item.icon}</div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
