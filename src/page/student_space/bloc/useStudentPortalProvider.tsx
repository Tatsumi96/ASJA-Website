import { useDocBloc } from "./useDocBloc";
import { StudentPortalContext } from "./useStudentSpaceContext";

export const StudentPortalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const docBloc = useDocBloc();
  return (
    <StudentPortalContext.Provider value={docBloc}>
      {children}
    </StudentPortalContext.Provider>
  );
};
