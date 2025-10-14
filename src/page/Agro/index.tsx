import { DispositionAboutFiliere } from "../landing/components/disposition-about-filiere";
import Agro from "@/assets/Mentions/AgronomieImage/Agro.jpg";
import Image3 from "@/assets/Mentions/AgronomieImage/Brochure-Agro.jpg";
import Image1 from "@/assets/Mentions/AgronomieImage/Labo.jpg";

  
  const mention = {
    name: "Mention Agro",
    ImageMention: Agro,
  };

  const descriptionMention = {
    title: "La Mention Agro",
    description:
      "Formation complète en agronomie, sciences des plantes et technologies agricoles.",
  };

  const descriptionParcours = [
    { title: "Droit des Affaires", description: "Formation en droit commercial.", categorieParcours: "Droit des Affaires" },
    { title: "Droit Processuel", description: "Focus sur les procédures juridiques.", categorieParcours: "Droit Processuel" },

  ];

  const shortDescriptionList = [
    { titleEvent: "Hackathon 2023", descriptionEvent: "Victoire de nos étudiants.", RandomImage: Image3 },
    { titleEvent: "Visite PAMF", descriptionEvent: "Renforcement de la collaboration.", RandomImage: Image1 },
    
  ];

export const AgroPage = () => {
  return <div>
    <DispositionAboutFiliere
      mention={mention}
      descriptionMention={descriptionMention}
      descriptionParcours={descriptionParcours}
      shortDescriptionList={shortDescriptionList}
    />
  </div>;
};
