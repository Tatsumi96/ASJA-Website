import { AdminDashboardPage } from "@/page/admin";
import { LandingPage } from "@/page/landing";
import { LogInSection } from "@/page/login";
import { StudentSpacePage } from "@/page/student_space";
import { useTheme } from "@/page/theme/useTheme";
import "@/i18n";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export const PageRoute = () => {
  useTheme();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogInSection />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/student-space" element={<StudentSpacePage />} />
      </Routes>
    </BrowserRouter>
  );
};
