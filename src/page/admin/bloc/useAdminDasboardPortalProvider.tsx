import { AdminDashboardContext } from './useAdminContext';
import { useAdminDashboard } from './useAdminDashboard';

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
