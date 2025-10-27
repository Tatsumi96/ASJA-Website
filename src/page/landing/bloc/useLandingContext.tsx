import { createContext, useContext } from 'react';
import type { useLanding } from './useLanding';

export const LandingContext = createContext<ReturnType<
  typeof useLanding
> | null>(null);

export const useLandingContext = () => {
  const context = useContext(LandingContext);
  if (!context)
    throw new Error('useLandingDashboardContext must be initialized');
  return context;
};
