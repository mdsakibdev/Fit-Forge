'use client';

import { useWorkout } from '../../context/WorkoutContext';
import { FaPlus, FaBookmark } from 'react-icons/fa6';

export default function WorkoutActionButtons({ workout }) {
  const { addToPlan, toggleSaveWorkout } = useWorkout();

  return (
    <div className="flex flex-wrap items-center gap-4 pt-4">
      <button
        onClick={() => addToPlan(workout)}
        className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer"
      >
        <FaPlus className="text-xs" />
        <span>Add to Todayes Plan</span>
      </button>

      <button
        onClick={() => toggleSaveWorkout(workout)}
        className="border border-zinc-800 hover:border-zinc-600 bg-transparent text-zinc-300 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer"
      >
        <FaBookmark className="text-xs text-zinc-400" />
        <span>Save for Later</span>
      </button>
    </div>
  );
}