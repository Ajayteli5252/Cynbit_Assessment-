'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Exact Cynbit Infinity Logo (CYN ∞ BIT) from Image 1 */}
        <div className="flex items-center cursor-pointer">
          <div className="flex items-center gap-1">
            {/* SVG Replica of Cynbit's distinctive (CYN ∞ BIT) emblem */}
            <svg
              className="h-9 w-auto text-[#065457]"
              viewBox="0 0 160 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer interconnected loop */}
              <path
                d="M32 4 C16 4, 4 14, 4 26 C4 38, 16 48, 32 48 C46 48, 56 40, 68 31 L92 21 C104 12, 114 4, 128 4 C144 4, 156 14, 156 26 C156 38, 144 48, 128 48 C114 48, 104 40, 92 31 L68 21 C56 12, 46 4, 32 4 Z"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Left word: CYN */}
              <text
                x="32"
                y="31"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill="currentColor"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.5"
              >
                CYN
              </text>
              {/* Right word: BIT */}
              <text
                x="128"
                y="31"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill="currentColor"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.5"
              >
                BIT
              </text>
            </svg>
          </div>
        </div>

        {/* Center Desktop Navigation - Exact items from screenshot */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wider text-gray-700 uppercase">
          <div className="flex items-center gap-1 hover:text-[#065457] cursor-pointer transition-colors">
            <span>COMPANY</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </div>

          <div className="flex items-center gap-1 hover:text-[#065457] cursor-pointer transition-colors">
            <span>EXPERTISE</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </div>

          <div className="flex items-center gap-1 hover:text-[#065457] cursor-pointer transition-colors">
            <span>BITELEVATE</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </div>

          <a href="#blog" className="hover:text-[#065457] transition-colors">
            BLOG
          </a>

          {/* Active Contact Item with Teal Underline */}
          <a
            href="#contact"
            className="text-[#065457] relative py-1 border-b-2 border-[#065457]"
          >
            CONTACT
          </a>
        </nav>

        {/* Right CTA Button - Exact JOIN US pill */}
        <div className="hidden md:flex items-center">
          <a
            href="#blueprint"
            className="px-6 py-2.5 rounded-full bg-[#065457] hover:bg-[#043e40] text-white text-[12px] font-bold tracking-wider uppercase shadow-sm transition-all"
          >
            JOIN US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-[#065457]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 text-sm font-semibold tracking-wider text-gray-800">
          <div className="py-2 border-b border-gray-100">COMPANY</div>
          <div className="py-2 border-b border-gray-100">EXPERTISE</div>
          <div className="py-2 border-b border-gray-100">BITELEVATE</div>
          <div className="py-2 border-b border-gray-100">BLOG</div>
          <div className="py-2 text-[#065457] font-bold">CONTACT</div>
          <div className="pt-2">
            <a
              href="#blueprint"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-full bg-[#065457] text-white text-xs font-bold uppercase"
            >
              JOIN US
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
