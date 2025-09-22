import { useAdminDashboard } from "./useAdminDashboard";
import { AdminDashboardContext } from "./useStudentSpaceContext";

export const AdminDashBoardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const adminDasboard = useAdminDashboard();
  return (
    <AdminDashboardContext.Provider value={adminDasboard}>
      {children}
    </AdminDashboardContext.Provider>
  );
};
