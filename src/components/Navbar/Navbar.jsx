'use client';

import Link from 'next/link';
import { useWorkout } from '../../context/WorkoutContext';
import { FaDumbbell } from 'react-icons/fa6';

export default function Navbar() {
  const { planList, savedList } = useWorkout();

  return (
    <nav className="border-b border-zinc-800/80 bg-[#0a0c0e] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-black text-xl text-white tracking-wider">
          <FaDumbbell className="text-[#ccff00] text-2xl" />
          <span>FITLOG</span>
        </Link>

        {/* Middle Navigation */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-semibold text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">
            Workouts
          </Link>
          <Link href="/my-plan" className="bg-[#121418] text-[#ccff00] px-4 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-700 transition-all">
            My Plan
          </Link>
        </div>

        {/* Right Badges (Plan & Saved Counter) */}
        <div className="flex items-center gap-3 text-xs font-bold">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Plan</span>
            <span className="bg-[#ccff00] text-black w-5 h-5 rounded-full flex items-center justify-center font-black">
              {planList.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Saved</span>
            <span className="bg-zinc-800 text-white border border-zinc-700 w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {savedList.length}
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
}