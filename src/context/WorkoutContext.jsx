'use client';

import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast'; // Import toast

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [planList, setPlanList] = useState([]);
  const [savedList, setSavedList] = useState([]);

  // Add to plan with Toast logic
  const addToPlan = (workout) => {
    const exists = planList.some((item) => item.id === workout.id);

    if (exists) {
      toast('Already in your plan!', {
        icon: '⚠️',
        style: {
          background: '#18181b',
          color: '#fbbf24',
          border: '1px solid #3f3f46',
        },
      });
      return;
    }

    if (planList.length >= 5) {
      toast.error("You can only add up to 5 workouts for today!");
      return;
    }

    setPlanList((prev) => [...prev, workout]);
    toast.success("Added to today's plan");
  };

  // Remove from plan
  const removeFromPlan = (id) => {
    setPlanList((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from today's plan");
  };

  // Save for later with Toast logic
  const toggleSaveWorkout = (workout) => {
    const exists = savedList.some((item) => item.id === workout.id);

    if (exists) {
      toast('Already saved for later!', {
        icon: '⚠️',
        style: {
          background: '#18181b',
          color: '#fbbf24',
          border: '1px solid #3f3f46',
        },
      });
      return;
    }

    setSavedList((prev) => [...prev, workout]);
    toast.success("Saved for later");
  };

  // Remove from Saved
  const removeFromSaved = (id) => {
    setSavedList((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from saved list");
  };

  return (
    <WorkoutContext.Provider
      value={{
        planList,
        savedList,
        addToPlan,
        removeFromPlan,
        toggleSaveWorkout,
        removeFromSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};