
import React from 'react';

import { getFitData } from '../../lib/apps';
import WorkeoutCard from '../shared/WorkoutCard';


const AllFitCard = async () => {
  const fitData = await getFitData();

  return (
    <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Section Header */}
      <div className="mb-8 space-y-1 text-left">
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
          THE LIBRARY
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Responsive Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fitData.map((fit) => (
         <WorkeoutCard key={fit.id} fit={fit} />
        ))}
      </div>
    </section>
  );
};

export default AllFitCard;