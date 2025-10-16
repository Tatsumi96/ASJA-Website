import { DispositionAboutFiliere } from "@/page/landing/components/disposition-about-filiere";
import informatiqueImg from "@/assets/Mentions/InformatiqueImage/Informatique.jpg";

import Image2 from "@/assets/Mentions/InformatiqueImage/event-info_1.jpg";
import Image3 from "@/assets/Mentions/InformatiqueImage/hackathon.jpg";

export const InfoPage = () => {
  const mention = {
    name: "Mention Informatique",
    ImageMention: informatiqueImg,
  };

  const descriptionMention = {
    title: "La Mention Informatique",
    description:
      "Formation complète en développement logiciel, réseaux, IA et cybersécurité.",
  };

  const descriptionParcours = [
    { title: "Génie Logiciel", description: "Formation en conception logicielle.", categorieParcours: "Genie Logiciel" },
    { title: "Télécommunication", description: "Focus sur les systèmes de communication.", categorieParcours: "Telecom" },
    { title: "Genie Industriel", description: "Formation en conception industrielle.", categorieParcours: "Genie Industriel" },
  ];

  const shortDescriptionList = [
    { titleEvent: "Hackathon 2023", descriptionEvent: "Victoire de nos étudiants.", RandomImage: Image3 },

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
