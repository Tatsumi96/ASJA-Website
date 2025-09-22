import { Description } from "./components/description";
import { FiliereSection } from "./components/filiere_section";
import { MissionSection } from "./components/mission_section";
import  EvenementSection  from "./components/evenement_section";
import { Navbar } from "./components/navbar";

export const LandingPage = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <div className="flex-col items-center justify-center">
        <Description />
        <MissionSection />
        <FiliereSection />
        <EvenementSection />
      </div>
    </div>
  );
};
