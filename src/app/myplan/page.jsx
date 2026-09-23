'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState('plan'); // 'plan' or 'saved'
  const [sortBy, setSortBy] = useState('Duration');

  // Initial stats values (Prathomic babe 0)
  const stats = {
    exercises: 0,
    minutes: 0,
    calories: 0,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12 space-y-8">
      {/* Header Section */}
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans mb-4">
          MY PLAN
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Summary Stats Box */}
      <div className="bg-[#0f1216] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-3 gap-4">
        <div>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-1">Exercises</p>
          <span className="text-3xl sm:text-5xl font-medium text-[#ccff00]">
            {stats.exercises}
          </span>
        </div>

        <div>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-1">Minutes</p>
          <span className="text-3xl sm:text-5xl font-medium text-white">
            {stats.minutes}
          </span>
        </div>

        <div>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-1">Calories</p>
          <span className="text-3xl sm:text-5xl font-medium text-white">
            {stats.calories}
          </span>
        </div>
      </div>

      {/* Control Bar: Tabs & Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left Side: Today's Plan & Saved Tabs */}
        <div className="bg-[#0f1216] border border-zinc-800/80 p-1 rounded-xl flex items-center">
          <button
            onClick={() => setActiveTab('plan')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'plan'
                ? 'bg-zinc-800 text-white shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Todayes Plan
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'saved'
                ? 'bg-zinc-800 text-white shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Saved
          </button>
        </div>

        {/* Right Side: Sort By Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-zinc-400 text-xs sm:text-sm font-medium">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#0f1216] border border-zinc-800 text-white text-xs sm:text-sm font-bold py-2 pl-4 pr-9 rounded-xl focus:outline-none focus:border-zinc-600 cursor-pointer"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Main Empty State Box */}
      <div className="border border-dashed border-zinc-800 rounded-2xl p-12 sm:p-20 text-center flex flex-col items-center justify-center space-y-4 bg-[#0a0c0e]/50">
        <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
          NOTHING HERE YET
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-md">
          Browse the library and add a lift to get todayes moving.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200"
          >
            Go to workouts
          </Link>
        </div>
      </div>
    </div>
  );
}