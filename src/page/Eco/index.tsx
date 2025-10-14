import { DispositionAboutFiliere } from "@/page/landing/components/disposition-about-filiere";
import Economie from "@/assets/Mentions/Economie/Eco.jpg";
import Image1 from "@/assets/Mentions/Economie/event-donation_2.jpg";
import Image2 from "@/assets/Mentions/Economie/event-chorale_asja.jpg";
import Image3 from "@/assets/Mentions/Economie/brochure-economie.jpg";

export const EcoPage = () => {
const mention = {
    name: "Mention Economie",
    ImageMention: Economie,
  };

  const descriptionMention = {
    title: "La Mention Economie",
    description:
      "Formation complète en développement économique, gestion des entreprises et analyse de données.",
  };

  const descriptionParcours = [
    { title: "Economie et Développement", description: "Formation en conception économique.", categorieParcours: "Economie et Développement" },
    { title: "Gestion et commerces Internationaux", description: "Focus sur les systèmes de communication.", categorieParcours: "Gestion et commerces Internationaux" },

  ];

  const shortDescriptionList = [
    { titleEvent: "Hackathon 2023", descriptionEvent: "Victoire de nos étudiants.", RandomImage: Image3 },
    { titleEvent: "Visite PAMF", descriptionEvent: "Renforcement de la collaboration.", RandomImage: Image1 },
    { titleEvent: "Viavy Tech", descriptionEvent: "Girl tech hackathon", RandomImage: Image2 },
  ];

  return (
      <DispositionAboutFiliere
        mention={mention}
        descriptionMention={descriptionMention}
        descriptionParcours={descriptionParcours}
        shortDescriptionList={shortDescriptionList}
      />
    );
};
