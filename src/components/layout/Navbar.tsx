"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-arihant-green text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="shrink-0 flex flex-col">
            <span className="text-2xl font-bold leading-none">
              ArihantCapital
            </span>
            <span className="text-[10px] tracking-widest uppercase">
              Generating Wealth
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {siteConfig.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href || "#"}
                  className="flex items-center text-sm font-medium hover:text-opacity-80 transition-all"
                >
                  {item.label}
                  {item.children && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 hidden group-hover:block transition-all">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-arihant-lightGreen hover:text-arihant-green"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-4">
              <Link
                href="/login"
                className="text-sm font-semibold hover:underline"
              >
                Login
              </Link>
              <Link
                href="/open-account"
                className="bg-arihant-orange text-white px-6 py-2 rounded-full font-bold text-sm hover:brightness-110 transition-all"
              >
                Open an Account
              </Link>
            </div>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu log ic goes here... */}
    </nav>
  );
}
