import { createContext, useContext } from 'react';
import { useStudentSpace } from './useStudentSpace';

export const StudentPortalContext = createContext<ReturnType<
  typeof useStudentSpace
> | null>(null);

export const useStudentPortalContext = () => {
  const context = useContext(StudentPortalContext);
  if (!context) throw new Error('useStudentPortalContext must be initialized');
  return context;
};
