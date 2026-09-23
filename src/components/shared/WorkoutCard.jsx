'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaClock, FaFire, FaStar } from 'react-icons/fa6';

export default function WorkoutCard({ fit }) {
  const router = useRouter();

  const imageUrl = fit?.image && fit.image.trim() !== '' 
    ? fit.image 
    : 'https://via.placeholder.com/400x300?text=No+Image';

  const handleCardClick = () => {
    if (fit?.id) {
      router.push(`/workout/${fit.id}`);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-[#121418] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-[#ccff00] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Top Image Section */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-900">
          <Image
            src={imageUrl}
            alt={fit?.name || 'Workout Image'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-3">
          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-2">
            {fit?.muscleGroups?.map((muscle, idx) => (
              <span
                key={idx}
                className="bg-[#ccff00] text-black text-[10px] sm:text-xs font-black uppercase px-2.5 py-0.5 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title & Equipment */}
          <div>
            <h3 className="text-white font-extrabold text-lg sm:text-xl uppercase tracking-wide group-hover:text-[#ccff00] transition-colors">
              {fit?.name}
            </h3>
            <p className="text-zinc-400 text-xs mt-0.5 font-medium">
              {fit?.equipment}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-5 pb-5 pt-2 border-t border-zinc-800/60 flex items-center gap-4 text-zinc-400 text-xs font-semibold">
        <div className="flex items-center gap-1.5">
          <FaClock className="text-zinc-500 text-sm" />
          <span>{fit?.duration} min</span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaFire className="text-zinc-500 text-sm" />
          <span>{fit?.caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaStar className="text-zinc-500 text-sm" />
          <span>{fit?.rating}</span>
        </div>
      </div>
    </div>
  );
}