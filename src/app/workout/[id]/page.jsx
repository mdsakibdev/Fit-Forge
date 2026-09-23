import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getFitData } from '../../../lib/apps';
import { FaPlus, FaBookmark, FaArrowLeft } from 'react-icons/fa6';

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const fitData = await getFitData();
  const fit = fitData.find((item) => String(item.id) === String(id));

  if (!fit) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Workout Not Found!</h1>
        <Link href="/" className="text-[#ccff00] underline text-sm">
          Back to Home
        </Link>
      </div>
    );
  }

  const imageUrl = fit?.image && fit.image.trim() !== '' 
    ? fit.image 
    : 'https://via.placeholder.com/600x600?text=No+Image';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          <span>Back to Library</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Image Container */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden bg-[#121418] border border-zinc-800/80">
            <Image
              src={imageUrl}
              alt={fit.name || 'Workout Image'}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Header Title & Description */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-sans">
              {fit.name}
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {fit.description}
            </p>
          </div>

          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {fit.muscleGroups?.map((muscle, idx) => (
              <span
                key={idx}
                className="bg-[#ccff00] text-black text-xs font-black uppercase px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Data Specs Table Box */}
          <div className="bg-[#121418] border border-zinc-800/80 rounded-2xl p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Equipment</span>
              <span className="text-zinc-200 font-semibold">{fit.equipment}</span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Difficulty</span>
              <span className="text-zinc-200 font-semibold">{fit.difficulty}</span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Sets</span>
              <span className="text-zinc-200 font-semibold">{fit.sets}</span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Reps</span>
              <span className="text-zinc-200 font-semibold">{fit.reps}</span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Duration</span>
              <span className="text-zinc-200 font-semibold">{fit.duration} min</span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/60">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Calories</span>
              <span className="text-zinc-200 font-semibold">{fit.caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between items-center py-1.5">
              <span className="text-zinc-500 font-bold uppercase tracking-wider">Rating</span>
              <span className="text-zinc-200 font-semibold">{fit.rating}</span>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="space-y-3 pt-2">
            <h3 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wider">
              Instructions
            </h3>
            <ol className="space-y-2.5 text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {fit.instructions?.map((step, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-zinc-500 font-semibold">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-200">
              <FaPlus className="text-xs" />
              <span>Add to toda yes plan</span>
            </button>

            <button className="border border-zinc-800 hover:border-zinc-600 bg-transparent text-zinc-300 hover:text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-200">
              <FaBookmark className="text-xs" />
              <span>Save for later</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}