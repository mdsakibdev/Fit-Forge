import Image from 'next/image';
import Link from 'next/link';
import WorkoutActionButtons from '../../../components/client/WorkoutActionButtons';
import { getFitData } from '../../../lib/apps';
import { FaArrowLeft } from 'react-icons/fa6';

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  const fitData = await getFitData();
  const fit = fitData.find((item) => String(item.id) === String(id));

  if (!fit) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Workout Not Found</h2>
        <Link href="/" className="text-[#ccff00] underline text-sm">
          Back to Workouts
        </Link>
      </div>
    );
  }

  const workoutDetailsList = [
    { key: 'Equipment', value: fit.equipment || 'Barbell, Bench' },
    { key: 'Difficulty', value: fit.difficulty || 'Intermediate' },
    { key: 'Sets', value: fit.sets ? `${fit.sets}` : '4' },
    { key: 'Reps', value: fit.reps ? `${fit.reps}` : '6-8' },
    { key: 'Duration', value: fit.duration ? `${fit.duration} min` : '25 min' },
    { key: 'Calories', value: fit.caloriesBurned ? `${fit.caloriesBurned} kcal` : '180 kcal' },
    { key: 'Rating', value: fit.rating ? `${fit.rating}` : '4.9' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:py-12 space-y-6 bg-black min-h-screen text-white">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-xs sm:text-sm font-bold transition-colors"
      >
        <FaArrowLeft />
        <span>Back to Workouts</span>
      </Link>

      {/* Grid Container with items-stretch for equal height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Side: Image container (Takes 5 columns in large screen) */}
        <div className="lg:col-span-5 relative w-full min-h-87.5 sm:min-h-112.5 lg:min-h-full rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <Image
            src={fit.image || 'https://via.placeholder.com/600x600'}
            alt={fit.name || 'Workout Image'}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Content Area (Takes 7 columns in large screen) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {fit.name}
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {fit.description || 'A compound press that builds chest thickness, triceps, and pressing power from a stable bench.'}
            </p>

            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {fit.muscleGroups?.map((muscle, idx) => (
                <span
                  key={idx}
                  className="bg-[#ccff00] text-black text-[10px] font-extrabold uppercase px-3 py-1 rounded-full"
                >
                  {muscle}
                </span>
              )) || (
                <>
                  <span className="bg-[#ccff00] text-black text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">Chest</span>
                  <span className="bg-[#ccff00] text-black text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">Arms</span>
                </>
              )}
            </div>

            {/* Detailed Stats Card Table */}
            <div className="mt-4 p-5 bg-zinc-900/60 rounded-2xl border border-zinc-800/80 divide-y divide-zinc-800/60">
              {workoutDetailsList.map((detail, index) => (
                <div key={index} className="flex items-center justify-between text-xs py-2.5">
                  <span className="font-bold text-zinc-400 uppercase tracking-wider">{detail.key}</span>
                  <span className="font-semibold text-zinc-100">{detail.value}</span>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="space-y-2 pt-2">
              <h3 className="text-white font-extrabold text-xs uppercase tracking-wider">Instructions</h3>
              {fit.instructions && fit.instructions.length > 0 ? (
                <ol className="list-decimal list-inside space-y-1.5 text-zinc-400 text-xs leading-relaxed">
                  {fit.instructions.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              ) : (
                <ol className="list-decimal list-inside space-y-1.5 text-zinc-400 text-xs leading-relaxed">
                  <li>Lie on the bench with eyes under the bar and feet planted.</li>
                  <li>Unrack with locked elbows and lower the bar to mid-chest.</li>
                  <li>Press up in a slight arc until elbows lock without bouncing.</li>
                  <li>Keep shoulder blades pinched and a natural arch in the back.</li>
                </ol>
              )}
            </div>
          </div>

          {/* Buttons at bottom */}
          <div className="pt-2">
            <WorkoutActionButtons workout={fit} />
          </div>
        </div>

      </div>
    </div>
  );
}