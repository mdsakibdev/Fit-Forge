import MyPlanClient from '../../components/client/MyPlanClient';

export default function MyPlanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12 space-y-8">
      {/* Header Section (Server Rendered) */}
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
          MY PLAN
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Interactive Client Component */}
      <MyPlanClient />
    </div>
  );
}