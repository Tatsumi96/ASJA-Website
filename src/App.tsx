import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { LandingPage } from "./page/landing";
import { LogInSection } from "./page/login";

interface LogPayload {
  message: string;
  timestamp: string;
}
const App: React.FC = () => {
  useEffect(() => {
    const sendLog = async () => {
      try {
        const payload = {
          identifier: "0388257986",
          password: "1234",
        };

        const response = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Erreur réseau");
        }

        const data: unknown = await response.json();
        console.log("Log envoyé au serveur:", data);
      } catch (error) {
        console.error("Erreur lors de l'envoi du log:", error);
      }
    };

    sendLog();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<LogInSection />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;

// test
