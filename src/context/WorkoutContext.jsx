'use client';

import React, { createContext, useContext, useState } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [planList, setPlanList] = useState([]);
  const [savedList, setSavedList] = useState([]);

  // Add to plan
  const addToPlan = (workout) => {
    setPlanList((prev) => {
      const exists = prev.find((item) => item.id === workout.id);
      if (exists) return prev;
      if (prev.length >= 5) {
        alert("You can only add up to 5 workouts for today!");
        return prev;
      }
      return [...prev, workout];
    });
  };

  // Remove from plan
  const removeFromPlan = (id) => {
    setPlanList((prev) => prev.filter((item) => item.id !== id));
  };

  // Toggle Save Workout
  const toggleSaveWorkout = (workout) => {
    setSavedList((prev) => {
      const exists = prev.find((item) => item.id === workout.id);
      if (exists) {
        return prev.filter((item) => item.id !== workout.id);
      } else {
        return [...prev, workout];
      }
    });
  };

  // Remove from Saved
  const removeFromSaved = (id) => {
    setSavedList((prev) => prev.filter((item) => item.id !== id));
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