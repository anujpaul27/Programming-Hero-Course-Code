// app/components/HealthierSection.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function HealthierSection() {
  return (
    <section className="bg-[#F4A261] py-16 text-[#2F4F4F] lg:px-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl leading-tight">
              A healthier way now has
              <br />a seat at the table.
            </h2>

            <p className="text-lg">
              Take advantage of exclusive deals and packages designed to elevate
              your stay. Whether it’s a romantic getaway or a family vacation.
            </p>

            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-1">🌱</span>
                <span>
                  Whatever your taste, we have something for everyone.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-1">📱</span>
                <span>
                  Ordering is a breeze, select, and pay securely — all from the
                  comfort of your seat.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-1">🎟️</span>
                <span>Save more with special promotions and discounts.</span>
              </li>
            </ul>

            <Button
              size="lg"
              className="bg-[#2F4F4F] hover:bg-[#1F3A3A] text-white font-medium text-lg px-10 py-7 rounded-full"
            >
              View Menu
            </Button>
          </div>

          {/* Right Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/food1.jpg"
                alt="Food dish"
                width={300}
                height={200}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <Image
                src="/waiter.jpg"
                alt="Woman at restaurant"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="pt-12 space-y-4">
              <Image
                src="/food2.jpg"
                alt="Grilled steak"
                width={300}
                height={200}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <Image
                src="/food3.jpg"
                alt="Fresh salad"
                width={300}
                height={200}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>

            {/* Vegan Party Badge */}
            <div className="absolute -right-4 -top-4 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-3xl">
                🥬
              </div>
              <div>
                <p className="font-semibold text-sm">Vegan Party</p>
                <p className="text-xs text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
