import { LandingPage } from "@/page/landing";
import { StudentSpacePage } from "@/page/student_space";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export const PageRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<StudentSpacePage />} />
      </Routes>
    </BrowserRouter>
  );
};
