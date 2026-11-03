'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BlueprintSection } from '@/components/BlueprintSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#FBFDFD] via-[#F0F7F6] to-[#E6F3F2] text-[#111827] font-sans">
      {/* 1. Header / Navbar from Screenshot 1 */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section from Screenshot 1 */}
        <Hero />

        {/* 3. The Blueprint & Interactive Scoper (Our Core Improvement) from Screenshot 2 */}
        <BlueprintSection />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
