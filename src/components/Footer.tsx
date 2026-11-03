'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200/80 bg-white/70 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <svg
                className="h-8 w-auto text-[#065457]"
                viewBox="0 0 160 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 4 C16 4, 4 14, 4 26 C4 38, 16 48, 32 48 C46 48, 56 40, 68 31 L92 21 C104 12, 114 4, 128 4 C144 4, 156 14, 156 26 C156 38, 144 48, 128 48 C114 48, 104 40, 92 31 L68 21 C56 12, 46 4, 32 4 Z"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <text
                  x="32"
                  y="31"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="currentColor"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  CYN
                </text>
                <text
                  x="128"
                  y="31"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="currentColor"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  BIT
                </text>
              </svg>
            </div>
            <p className="text-xs text-gray-500">
              Cynbit Technologies Private Limited · 32/115, RHB, Pratap Nagar, Jaipur, RJ 302033
            </p>
          </div>

          {/* Links & Copyright */}
          <div className="text-center md:text-right space-y-1">
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs font-semibold text-gray-600">
              <a href="#blueprint" className="hover:text-[#065457]">The Blueprint</a>
              <a href="https://www.cynbit.in" target="_blank" rel="noreferrer" className="hover:text-[#065457]">Original Site</a>
              <a href="#contact" className="hover:text-[#065457]">Contact</a>
            </div>
            <p className="text-[11px] text-gray-400">
              © {new Date().getFullYear()} Cynbit Technologies. All rights reserved. Full Stack Assessment Prototype.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
