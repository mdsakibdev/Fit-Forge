'use client';

import { useState } from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaDumbbell as DumbbellIcon, FaBars as BarsIcon, FaXmark as XIcon } from 'react-icons/fa6';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Exact path check korar jonno function
  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-black text-white border-b border-zinc-800/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src={logo} alt='Logo Image'/>
          <span className="font-extrabold tracking-wider text-xl uppercase font-sans">
            FITLOG
          </span>
        </Link>

        {/* Middle Nav Links (Desktop) */}
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

        {/* Right Side Badges + Mobile Toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xs sm:text-sm font-medium text-zinc-300">Plan</span>
            <span className="bg-[#ccff00] text-black text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xs sm:text-sm font-medium text-zinc-300">Saved</span>
            <span className="border border-zinc-700 text-zinc-300 text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-2 text-xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? <XIcon /> : <BarsIcon />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-zinc-800 px-4 py-4 flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive('/')
                ? 'bg-[#1a2e05] text-[#ccff00]'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/myplan"
            onClick={() => setIsOpen(false)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive('/myplan')
                ? 'bg-[#1a2e05] text-[#ccff00]'
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
}