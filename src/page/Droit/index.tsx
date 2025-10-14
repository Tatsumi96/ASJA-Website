import { DispositionAboutFiliere } from "@/page/landing/components/disposition-about-filiere";
import Droit from "@/assets/Mentions/Droit/Droit.jpeg";
import Image1 from "@/assets/Mentions/Droit/event-droi_conference.jpg";
import Image3 from "@/assets/Mentions/Droit/event-licence_sortie.jpg";
export const DroitPage = () => {
  const mention = {
    name: "Mention Droit",
    ImageMention: Droit,
  };

  const descriptionMention = {
    title: "La Mention Droit",
    description:
      "Formation complète en droit des affaires, droit international et droits de l'homme.",
  };

  const descriptionParcours = [
    { title: "Droit des Affaires", description: "Formation en droit commercial.", categorieParcours: "Droit des Affaires" },
    { title: "Droit Processuel", description: "Focus sur les procédures juridiques.", categorieParcours: "Droit Processuel" },

  ];

  const shortDescriptionList = [
    { titleEvent: "Hackathon 2023", descriptionEvent: "Victoire de nos étudiants.", RandomImage: Image3 },
    { titleEvent: "Visite PAMF", descriptionEvent: "Renforcement de la collaboration.", RandomImage: Image1 },
    
  ];

  return <div>
    <DispositionAboutFiliere
      mention={mention}
      descriptionMention={descriptionMention}
      descriptionParcours={descriptionParcours}
      shortDescriptionList={shortDescriptionList}
    />
  </div>;
};
