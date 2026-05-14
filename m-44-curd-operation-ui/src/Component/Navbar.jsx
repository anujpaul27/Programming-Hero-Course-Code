// app/components/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
// import { Button } from '@nextui-org/button';

export default function Navbar() {
  return (
    <nav className="bg-[#F8F5F0] border-b border-[#2F4F4F]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#2F4F4F] rounded-full flex items-center justify-center text-white text-2xl">
            🍃
          </div>
          <div>
            <span className="font-serif text-3xl tracking-tight text-[#2F4F4F]">Unicusine</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[#2F4F4F] font-medium">
          <Link href="/" className="hover:text-[#D97757] transition-colors">Home</Link>
          <Link href="/menu" className="hover:text-[#D97757] transition-colors">Menu</Link>
          <Link href="/about" className="hover:text-[#D97757] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#D97757] transition-colors">Contact</Link>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:8085550111" 
            className="hidden sm:flex items-center gap-2 text-[#2F4F4F] hover:text-[#D97757] transition-colors font-medium"
          >
            <span className="text-xl">☎</span>
            <span>(808) 555-0111</span>
          </a>
          
          {/* Mobile Menu Button */}
          <Button 
            isIconOnly 
            variant="light" 
            className="md:hidden text-[#2F4F4F]"
          >
            <span className="text-2xl">☰</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}