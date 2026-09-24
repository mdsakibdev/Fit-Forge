'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWorkout } from '../../context/WorkoutContext';
import { FaChevronDown, FaClock, FaFire, FaStar, FaXmark, FaCheck } from 'react-icons/fa6';

export default function MyPlanClient() {
  const { planList, savedList, removeFromPlan, removeFromSaved } = useWorkout();
  const [activeTab, setActiveTab] = useState('plan');
  const [sortBy, setSortBy] = useState('Default');

  const currentList = activeTab === 'plan' ? planList : savedList;

  const extractNumber = (val) => {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    const parsed = parseFloat(String(val).replace(/[^0-9.]/g, ''));
    return isNaN(parsed) ? 0 : parsed;
  };

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, curr) => acc + extractNumber(curr.duration), 0);
  const totalCalories = currentList.reduce((acc, curr) => acc + extractNumber(curr.caloriesBurned), 0);

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'Default') return 0;

    const valA_duration = extractNumber(a.duration);
    const valB_duration = extractNumber(b.duration);
    const valA_calories = extractNumber(a.caloriesBurned);
    const valB_calories = extractNumber(b.caloriesBurned);
    const valA_rating = extractNumber(a.rating);
    const valB_rating = extractNumber(b.rating);

    let diff = 0;

    if (sortBy === 'Duration') diff = valB_duration - valA_duration;
    else if (sortBy === 'Calories') diff = valB_calories - valA_calories;
    else if (sortBy === 'Rating') diff = valB_rating - valA_rating;

    return diff;
  });

  return (
    <div className="space-y-8">
      {/* Summary Stats Box */}
      <div className="bg-[#0f1216] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-3 gap-4">
        <div>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-1">Exercises</p>
          <span className="text-3xl sm:text-5xl font-medium text-[#ccff00]">
            {totalExercises}
          </span>
        </div>

        <div>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-1">Minutes</p>
          <span className="text-3xl sm:text-5xl font-medium text-white">
            {totalMinutes}
          </span>
        </div>

        <div>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-1">Calories</p>
          <span className="text-3xl sm:text-5xl font-medium text-white">
            {totalCalories}
          </span>
        </div>
      </div>

      {/* Control Bar: Tabs & Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-zinc-400 text-xs sm:text-sm font-medium">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#0f1216] border border-zinc-800 text-white text-xs sm:text-sm font-bold py-2 pl-4 pr-9 rounded-xl focus:outline-none focus:border-zinc-600 cursor-pointer"
            >
              <option value="Default">Default</option>
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content List Section */}
      {sortedList.length === 0 ? (
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
      ) : (
        <div className="space-y-4">
          {sortedList.map((fit) => (
            <div
              key={fit.id}
              className="bg-[#121418] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-zinc-700 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-20 sm:w-32 sm:h-24 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                  <Image
                    src={fit.image}
                    alt={fit.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-white font-extrabold text-base sm:text-lg uppercase tracking-wide">
                    {fit.name}
                  </h3>
                  <p className="text-zinc-400 text-xs">{fit.equipment}</p>

                  <div className="flex items-center gap-3 text-zinc-400 text-xs pt-1 font-semibold">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-zinc-500 text-xs" />
                      <span>{fit.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaFire className="text-zinc-500 text-xs" />
                      <span>{fit.caloriesBurned} kcal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-zinc-500 text-xs" />
                      <span>{fit.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center">
                <Link
                  href={`/workout/${fit.id}`}
                  className="border border-zinc-800 hover:border-zinc-600 bg-transparent text-zinc-300 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
                >
                  View Details
                </Link>

                <button
                  onClick={() => {
                    if (activeTab === 'plan') removeFromPlan(fit.id);
                    else removeFromSaved(fit.id);
                  }}
                  className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all"
                >
                  <FaCheck className="text-xs" />
                  <span>Mark as Done</span>
                </button>

                <button
                  onClick={() => {
                    if (activeTab === 'plan') removeFromPlan(fit.id);
                    else removeFromSaved(fit.id);
                  }}
                  className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                  title="Remove"
                >
                  <FaXmark className="text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}