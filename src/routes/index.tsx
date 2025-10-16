import { AdminDashboardPage } from "@/page/admin";
import { LandingPage } from "@/page/landing";
import { LogInSection } from "@/page/login";
import { InfoPage } from "@/page/Info";
import { AgroPage } from "@/page/Agro";
import { LeaPage } from "@/page/LEA";
import { EcoPage } from "@/page/Eco";
import { STPage } from "@/page/ST";
import { DroitPage } from "@/page/Droit";
import { useTheme } from "@/page/theme/useTheme";
import "@/i18n";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudentSpacePage } from "@/page/student-space";

export const PageRoute = () => {
  useTheme();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogInSection />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/student-space" element={<StudentSpacePage />} />
        <Route path="/infoPage" element={<InfoPage />} />
        <Route path="/agroPage" element={<AgroPage />} />
        <Route path="/ecoPage" element={<EcoPage />} />
        <Route path="/leaPage" element={<LeaPage />} />
        <Route path="/stPage" element={<STPage />} />
        <Route path="/droitPage" element={<DroitPage />} />
      </Routes>
    </BrowserRouter>
  );
};
