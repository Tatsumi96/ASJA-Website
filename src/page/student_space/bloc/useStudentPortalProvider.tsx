import { useStudentSpace } from './useStudentSpace';
import { StudentPortalContext } from './useStudentSpaceContext';

export const StudentPortalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const docBloc = useStudentSpace();
  return (
    <StudentPortalContext.Provider value={docBloc}>
      {children}
    </StudentPortalContext.Provider>
  );
};
