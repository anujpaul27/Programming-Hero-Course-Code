// app/components/MenuVarietyBanner.tsx
import React from "react";

export default function MenuVarietyBanner() {
  return (
    <section className="bg-[#1F3A3A] py-16 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-2xl md:text-3xl leading-relaxed font-light">
          From savory <span className="inline-block mx-2">🍲</span> appetizers
          to decadent
          <span className="inline-block mx-2">🍰</span> options
        </p>

        <p className="text-2xl md:text-3xl mt-3 leading-relaxed font-light">
          Our menu offers a variety of options
          <span className="inline-block mx-2">🍣</span> suit all diets,
          preferences, and occasions.
        </p>
      </div>
    </section>
  );
}
