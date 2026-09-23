'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getFitData } from '../../../lib/apps';
import { useWorkout } from '../../../context/WorkoutContext';
import { FaPlus, FaBookmark, FaArrowLeft, FaCheck } from 'react-icons/fa6';

export default function WorkoutDetailsPage({ params }) {
  const { id } = use(params);
  const { planList, savedList, addToPlan, toggleSaveWorkout } = useWorkout();

  const [fit, setFit] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const data = await getFitData();
      const selected = data.find((item) => String(item.id) === String(id));
      setFit(selected);
    }
    fetchData();
  }, [id]);

  if (!fit) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-zinc-400">
        Loading details...
      </div>
    );
  }

  const isAddedToPlan = planList.some((item) => item.id === fit.id);
  const isSaved = savedList.some((item) => item.id === fit.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          <span>Back to Library</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-5 w-full flex">
          <div className="relative w-full h-87.5 sm:h-112.5 lg:h-full min-h-100 rounded-2xl overflow-hidden bg-[#121418] border border-zinc-800/80">
            <Image
              src={fit.image}
              alt={fit.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
              {fit.name}
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {fit.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {fit.muscleGroups?.map((muscle, idx) => (
              <span
                key={idx}
                className="bg-[#ccff00] text-black text-xs font-black uppercase px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="bg-[#121418] border border-zinc-800/80 rounded-2xl p-5 space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between py-1 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase">Equipment</span>
              <span className="text-zinc-200 font-semibold">{fit.equipment}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase">Difficulty</span>
              <span className="text-zinc-200 font-semibold">{fit.difficulty}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase">Duration</span>
              <span className="text-zinc-200 font-semibold">{fit.duration} min</span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase">Calories</span>
              <span className="text-zinc-200 font-semibold">{fit.caloriesBurned} kcal</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => addToPlan(fit)}
              className={`font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-200 ${
                isAddedToPlan 
                  ? 'bg-zinc-800 text-zinc-300 border border-zinc-700' 
                  : 'bg-[#ccff00] hover:bg-[#b8e600] text-black'
              }`}
            >
              {isAddedToPlan ? <FaCheck className="text-xs" /> : <FaPlus className="text-xs" />}
              <span>{isAddedToPlan ? "Added to today's plan" : "Add to today's plan"}</span>
            </button>

            <button 
              onClick={() => toggleSaveWorkout(fit)}
              className={`border font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-200 ${
                isSaved 
                  ? 'bg-zinc-800 text-[#ccff00] border-[#ccff00]' 
                  : 'border-zinc-800 hover:border-zinc-600 bg-transparent text-zinc-300 hover:text-white'
              }`}
            >
              <FaBookmark className="text-xs" />
              <span>{isSaved ? 'Saved' : 'Save for later'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}