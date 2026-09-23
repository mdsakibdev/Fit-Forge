'use client';

import React, { createContext, useContext, useState } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [planList, setPlanList] = useState([]);
  const [savedList, setSavedList] = useState([]);

  // Today's plan-e workout add korar function (Cap of 5 lifts constraint-সহ)
  const addToPlan = (workout) => {
    setPlanList((prev) => {
      const exists = prev.find((item) => item.id === workout.id);
      if (exists) return prev; // Already added
      if (prev.length >= 5) {
        alert('You can only add up to 5 workouts to today\'s plan!');
        return prev;
      }
      return [...prev, workout];
    });
  };

  // Today's plan theke remove korar function
  const removeFromPlan = (id) => {
    setPlanList((prev) => prev.filter((item) => item.id !== id));
  };

  // Saved list-e add/remove toggle korar function
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

  return (
    <WorkoutContext.Provider
      value={{
        planList,
        savedList,
        addToPlan,
        removeFromPlan,
        toggleSaveWorkout,
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