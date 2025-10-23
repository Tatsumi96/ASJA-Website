import { DispositionAboutFiliere } from "../landing/components/disposition-about-filiere";
import Lea from "@/assets/Mentions/LEA/LC.webp";
import Image1 from "@/assets/Mentions/LEA/brochure-LEA.jpg";
import Image3 from "@/assets/Mentions/LEA/terrain-basket.jpg";
export const LeaPage = () => {
  const mention = {
    name: "Mention LEA",
    ImageMention: Lea,
  };

  const descriptionMention = {
    title: "La Mention LEA",
    description:
      "Formation complète en langues étrangères appliquées, commerce international et communication.",
  };

  const descriptionParcours = [
    { title: "Langues et Cultures Étrangères", description: "Formation en langues et cultures.", categorieParcours: "Langues et Cultures Étrangères" },
    { title: "Commerce International", description: "Focus sur le commerce international.", categorieParcours: "Commerce International" },

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
