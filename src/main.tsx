import { createRoot } from "react-dom/client";
import "./index.css";
import AsjaWebApp from "./App.tsx";
import "./i18n";

createRoot(document.getElementById("root")!).render(<AsjaWebApp />);
