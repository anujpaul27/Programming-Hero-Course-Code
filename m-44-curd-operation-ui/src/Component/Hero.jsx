// app/components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';

export default function Hero() {
  return (
    <section className="bg-[#F8F5F0] pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Rating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 shadow-sm border border-[#2F4F4F]/10">
            <div className="flex text-amber-500">⭐⭐⭐⭐⭐</div>
            <span className="text-sm font-medium text-[#2F4F4F]">
              Loved by 2.6k users with <span className="font-semibold">4.9 rating</span>
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl  text-center leading-[1.05] text-[#2F4F4F] max-w-4xl mx-auto">
          Welcome to Food Heaven<br />
          Where <span className="text-[#D97757]">Flavor Meets Excellence!</span>
        </h1>

        {/* CTA Button */}
        <div className="flex justify-center mt-5 mb-10">
          <Button
            size="lg"
            className="bg-[#2F4F4F] hover:bg-[#1F3A3A] text-white font-medium text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            endContent={<span className="text-xl">→</span>}
          >
            View Menu
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-5xl">
          <Image
            src="/hero-food.jpg" 
            alt="Spring rolls with dipping sauce and fresh ingredients"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          
          {/* Optional decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}