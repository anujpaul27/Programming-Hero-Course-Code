// app/components/HowItWorksSection.tsx
import React from 'react';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Browse Our Menu",
    image: "/step1.jpg",
    shape: "star"
  },
  {
    number: "02",
    title: "Find Favorite Food",
    image: "/step2.jpg",
    shape: "circle"
  },
  {
    number: "03",
    title: "Book a Table",
    image: "/step3.jpg",
    shape: "hexagon"
  },
  {
    number: "04",
    title: "Enjoy Meal",
    image: "/step4.jpg",
    shape: "heart"
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">❓</div>
          <h2 className="font-serif text-5xl text-[#2F4F4F]">How Does it Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mx-auto w-56 h-56 mb-6">
                <div className="absolute inset-0 bg-[#F4A261]/10 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform" />
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  loading='lazy'
                  className="object-cover rounded-3xl shadow-xl relative z-10 border-8 border-white"
                />
              </div>
              
              <div className="font-mono text-4xl font-bold text-[#D97757] mb-2">{step.number}</div>
              <h3 className="font-serif text-2xl text-[#2F4F4F]">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}