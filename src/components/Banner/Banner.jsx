'use client';

import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa6';
import bannerImage from '@/assets/banner.png'

export default function HeroBanner() {
  const scrollToLibrary = () => {
    const librarySection = document.getElementById('library');
    if (librarySection) {
      librarySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-6 pb-12">
      <div className="bg-[#0f1216] border border-zinc-800/80 rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 z-10 text-left">
          {/* Eyebrow text */}
          <span className="text-[#ccff00] text-xs sm:text-sm font-bold tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase font-sans">
            TRAIN WITH INTENT. <br className="hidden sm:inline" />
            LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2">
            <button
              onClick={scrollToLibrary}
              className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm px-6 py-3.5 rounded-lg flex items-center gap-2.5 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#ccff00]/10"
            >
              <span>BROWSE WORKOUTS</span>
              <FaArrowDown className="text-xs" />
            </button>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end z-10">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-100 lg:h-87.5">
            {/* Apnar banner image ekhane boshaten */}
            <Image
              src={bannerImage} // public/images/hero-workout.png e image rakhtuben
              alt="Workout Hero"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}