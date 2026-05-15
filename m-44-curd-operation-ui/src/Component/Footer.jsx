// app/components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F5F0] border-t border-[#2F4F4F]/10">
      {/* Book Now CTA */}
      <div className="bg-[#2F4F4F] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-4xl">
              🍃
            </div>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl mb-4">
            Don’t Wait – Book Now!
          </h2>
          <p className="text-lg text-white/80 max-w-md mx-auto mb-10">
            Unicusine is more than just a meal, it’s an experience. We bring the
            treasures of South Asian spices and the comforts of home-style
            cooked.
          </p>

          <Button
            size="lg"
            className="bg-white text-[#2F4F4F] hover:bg-white/90 font-medium text-lg px-12 py-7 rounded-full"
          >
            Book a Table
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-[#2F4F4F] rounded-full flex items-center justify-center text-white text-2xl">
                🍃
              </div>
              <span className="font-serif text-3xl text-[#2F4F4F]">
                Unicusine
              </span>
            </div>

            <div className="space-y-3 text-[#2F4F4F]/80">
              <a
                href="tel:602-744-4735"
                className="block hover:text-[#2F4F4F] transition-colors"
              >
                (602) 744-4735
              </a>
              <div>11022 South 51st Street Suite 105</div>
              <div>Phoenix, AZ 85044</div>
              <a
                href="mailto:hi@unicuisine.co"
                className="block hover:text-[#2F4F4F] transition-colors"
              >
                hi@unicuisine.co
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-semibold text-[#2F4F4F] mb-6 text-lg">
              Navigate
            </h4>
            <div className="flex flex-col gap-3 text-[#2F4F4F]/80">
              <Link href="/" className="hover:text-[#D97757] transition-colors">
                Home
              </Link>
              <Link
                href="/menu"
                className="hover:text-[#D97757] transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="hover:text-[#D97757] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#D97757] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/book"
                className="hover:text-[#D97757] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-[#2F4F4F] mb-6 text-lg">Menu</h4>
            <div className="flex flex-col gap-3 text-[#2F4F4F]/80">
              <Link href="#" className="hover:text-[#D97757] transition-colors">
                Breakfast
              </Link>
              <Link href="#" className="hover:text-[#D97757] transition-colors">
                Lunch
              </Link>
              <Link href="#" className="hover:text-[#D97757] transition-colors">
                Dinner
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-[#2F4F4F] mb-6 text-lg">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3 text-[#2F4F4F]/80">
              <a href="#" className="hover:text-[#D97757] transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-[#D97757] transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-[#D97757] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#D97757] transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2F4F4F]/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#2F4F4F]/60">
          <div>©2025 Unicusine | All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#2F4F4F]">
              License
            </a>
            <a href="#" className="hover:text-[#2F4F4F]">
              Changelog
            </a>
            <a href="#" className="hover:text-[#2F4F4F]">
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
