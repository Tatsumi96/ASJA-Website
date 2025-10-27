import { createContext, useContext } from "react";
import { useAdminDashboard } from "./useAdminDashboard";

export const AdminDashboardContext = createContext<ReturnType<
  typeof useAdminDashboard
> | null>(null);

export const useAdminDashboardContext = () => {
  const context = useContext(AdminDashboardContext);
  if (!context) throw new Error("useAdminDashboardContext must be initialized");
  return context;
};
