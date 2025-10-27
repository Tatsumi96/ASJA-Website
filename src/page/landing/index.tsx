import { LandingProvider } from './bloc/useLandingProvider';
import Chatbot from './components/chatbot';
import { Description } from './components/description';
import { EvenementSection } from './components/evenement-section';
import { FaqSection } from './components/faq-section';
import { FiliereSection } from './components/filiere-section';
import { Footer } from './components/footer';
import { MissionSection } from './components/mission-section';
import { Navbar } from './components/nav-bar';
import { SystemePedagogiqueSection } from './components/systeme-pegdagogique-section';
import { TestimonySection } from './components/testimony-section';
export const LandingPage = () => {
  return (
    <div className=" overflow-x-hidden ">
      <Navbar />
      <div className="flex-col items-center justify-center">
        <LandingProvider>
          <Description />
          <MissionSection />
          <FiliereSection />
          <Chatbot />
          <EvenementSection />
          <SystemePedagogiqueSection />
          <TestimonySection />
          <FaqSection />
          <Footer />
        </LandingProvider>
      </div>
    </div>
  );
};
