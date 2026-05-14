// app/components/BestFoodSection.tsx
import React from 'react';
import Image from 'next/image';

export default function BestFoodSection() {
  return (
    <section className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-6xl text-[#2F4F4F] italic">
            -Best food in town is here-
          </h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <Image
            src="/salad-video.jpg"
            alt="Fresh salad being served"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 ml-2 border-t-[18px] border-t-transparent border-l-[28px] border-l-[#2F4F4F] border-b-[18px] border-b-transparent" />
            </div>
          </div>

          {/* Optional label */}
          <div className="absolute bottom-8 left-8 bg-white/90 text-[#2F4F4F] px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <span>▶</span> Watch the Experience
          </div>
        </div>
      </div>
    </section>
  );
}