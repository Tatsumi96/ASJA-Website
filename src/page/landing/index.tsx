import { Description } from "./components/description";
import { FiliereSection } from "./components/filiere_section";
import { MissionSection } from "./components/mission_section";
import { Navbar } from "./components/navbar";
import {FaqSection} from "./components/faq_section"
export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-col items-center justify-center">
        <Description />
        <MissionSection />
        <FiliereSection />
        <FaqSection />
      </div>
    </div>
  );
};
