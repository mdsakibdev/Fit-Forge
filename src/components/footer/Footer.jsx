"use client"

import Link from 'next/link';
import { 
  FaDumbbell, 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPaperPlane 
} from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-zinc-800/80 mt-20">
      
      {/* Top Section: Branding, Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 Columns wide on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="p-2.5 bg-[#ccff00]/10 rounded-xl border border-[#ccff00]/20 group-hover:bg-[#ccff00]/20 transition-all">
                <FaDumbbell className="text-[#ccff00] text-2xl transform -rotate-45" />
              </div>
              <span className="font-extrabold tracking-wider text-2xl uppercase font-sans text-white">
                FITLOG
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Your ultimate workout companion. Track exercises, build custom routines, and level up your fitness journey every single day.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-all">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-all">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-all">
                <FaYoutube className="text-sm" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-all">
                <FaGithub className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#ccff00] transition-colors">
                  Workout Library
                </Link>
              </li>
              <li>
                <Link href="/my-plan" className="hover:text-[#ccff00] transition-colors">
                  Todayes Plan
                </Link>
              </li>
              <li>
                <Link href="/my-plan" className="hover:text-[#ccff00] transition-colors">
                  Saved Exercises
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Target Muscles
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><span className="hover:text-white cursor-pointer transition-colors">Chest & Triceps</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Back & Biceps</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Legs & Core</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Shoulders</span></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Stay Motivated
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Subscribe to get weekly workout tips and new routines right in your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-[#ccff00]/60 pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ccff00] hover:text-white p-1.5 transition-colors"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Section: Copyright & Legal */}
      <div className="border-t border-zinc-900 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} FitLog — Workout Library. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}