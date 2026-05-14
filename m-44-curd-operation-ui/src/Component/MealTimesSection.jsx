// app/components/MealTimesSection.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';

const meals = [
  {
    title: "Breakfast Cravings",
    time: "Light meal • Fruit drink • From 7am",
    image: "/breakfast.jpg",
    emoji: "🥐"
  },
  {
    title: "Lunch Blast",
    time: "Spicy meal • Beverage • From 1pm",
    image: "/noodles.jpg",
    emoji: "🍜"
  },
  {
    title: "Dinner Madness",
    time: "Light meal • Beverage • From 9pm",
    image: "/steak-dinner.jpg",
    emoji: "🥩"
  },
];

export default function MealTimesSection() {
  return (
    <section className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-4xl mb-4">🍽️</div>
          <h2 className="font-serif text-5xl text-[#2F4F4F]">
            We’re always here for you
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#2F4F4F]/5"
            >
              <div className="relative h-64">
                <Image
                  src={meal.image}
                  alt={meal.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <div className="text-4xl mb-4">{meal.emoji}</div>
                <h3 className="font-serif text-3xl mb-2 text-[#2F4F4F]">{meal.title}</h3>
                <p className="text-[#2F4F4F]/70 mb-8">{meal.time}</p>

                <Button
                  className="w-full bg-[#2F4F4F] hover:bg-[#1F3A3A] text-white rounded-2xl py-6 text-base"
                >
                  Book a Table
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}