'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWorkout } from '../../context/WorkoutContext';
import { FaDumbbell } from 'react-icons/fa6';
import { HiBars3, HiXMark } from 'react-icons/hi2'; // Corrected import path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const context = useWorkout();

  // Context properties fallback
  const myPlanList = context?.myPlanList || context?.planList || [];
  const savedList = context?.savedList || [];

  // Active Link logic
  const isActive = (path) => pathname === path;

  return (
    <header className="bg-black text-white border-b border-zinc-800/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group z-50"
        >
          <FaDumbbell className="text-[#ccff00] text-2xl transform -rotate-45 transition-transform group-hover:scale-110" />
          <span className="font-extrabold tracking-wider text-xl uppercase font-sans">
            FITLOG
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center bg-[#111111] p-1.5 rounded-full border border-zinc-800/80">
          <Link
            href="/"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive('/') 
                ? 'bg-[#1a2e05] text-[#ccff00]' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/myplan"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive('/myplan') 
                ? 'bg-[#1a2e05] text-[#ccff00]' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right side: Counter Badges & Hamburger Toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Plan Counter Badge */}
          <Link 
            href="/myplan" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="hidden sm:inline text-sm font-medium text-zinc-300 group-hover:text-white">
              Plan
            </span>
            <span className="bg-[#ccff00] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              {myPlanList?.length || 0}
            </span>
          </Link>

          {/* Saved Counter Badge */}
          <Link 
            href="/myplan" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="hidden sm:inline text-sm font-medium text-zinc-300 group-hover:text-white">
              Saved
            </span>
            <span className="border border-zinc-700 text-zinc-300 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              {savedList?.length || 0}
            </span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiXMark className="w-7 h-7" /> : <HiBars3 className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0d0e] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 transition-all">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
              isActive('/') 
                ? 'bg-[#1a2e05] text-[#ccff00]' 
                : 'text-zinc-300 hover:bg-zinc-900'
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/myplan"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
              isActive('/myplan') 
                ? 'bg-[#1a2e05] text-[#ccff00]' 
                : 'text-zinc-300 hover:bg-zinc-900'
            }`}
          >
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
}