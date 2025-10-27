import { Description } from "./components/description";
import { FiliereSection } from "./components/filiere-section";
import { MissionSection } from "./components/mission-section";
import { EvenementSection } from "./components/evenement-section";
import { Footer } from "./components/footer";
import { Navbar } from "./components/nav-bar";
import { SystemePedagogiqueSection } from "./components/systeme-pegdagogique-section";
import { TestimonySection } from "./components/testimony-section";
import { FaqSection } from "./components/faq-section";
import Chatbot from "./components/chatbot";
export const LandingPage = () => {
  return (
    <div className=" overflow-x-hidden ">
      <Navbar />
      <div className="flex-col items-center justify-center">
        <Description />
        <MissionSection />
        <FiliereSection />
        <Chatbot />
        <EvenementSection />
        <SystemePedagogiqueSection />
        <TestimonySection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};
