'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWorkout } from '../../context/WorkoutContext';
import { FaDumbbell } from 'react-icons/fa6';

export default function Navbar() {
  const pathname = usePathname();
  const { planList, savedList } = useWorkout();

  // Active Link নির্ধারণ করার জন্য
  const isActive = (path) => pathname === path;

  return (
    <header className="bg-black text-white border-b border-zinc-800/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* ১. বাম দিকে Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <FaDumbbell className="text-[#ccff00] text-2xl transform -rotate-45 transition-transform group-hover:scale-110" />
          <span className="font-extrabold tracking-wider text-xl uppercase font-sans">
            FITLOG
          </span>
        </Link>

        {/* ২. মাঝখানে Nav Links */}
        <nav className="flex items-center bg-[#111111] p-1.5 rounded-full border border-zinc-800/80">
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

        {/* ৩. ডান দিকে Status Badges (ক্লিক করলে /my-plan পেজে নিয়ে যাবে) */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Plan Counter Badge */}
          <Link 
            href="/myplan" 
            className="flex items-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
              Plan
            </span>
            <span className="bg-[#ccff00] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              {planList?.length || 0}
            </span>
          </Link>

          {/* Saved Counter Badge */}
          <Link 
            href="/myplan" 
            className="flex items-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
              Saved
            </span>
            <span className="border border-zinc-700 text-zinc-300 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              {savedList?.length || 0}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}