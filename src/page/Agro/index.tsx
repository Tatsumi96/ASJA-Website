import Agro from "@/assets/Mentions/AgronomieImage/Agro.jpg";
import Image3 from "@/assets/Mentions/AgronomieImage/Brochure-Agro.jpg";
import Image1 from "@/assets/Mentions/AgronomieImage/Labo.jpg";
import { DispositionAboutFiliere } from "../landing/components/disposition-about-filiere";

const mention = {
  name: "SCIENCES AGRONOMIQUES",
  ImageMention: Agro,
};

const descriptionMention = {
  title: "SCIENCES AGRONOMIQUES",
  description:
    "Formation complète en agronomie, sciences des plantes et technologies agricoles.",
};

const descriptionParcours = [
  {
    title: "PRODUCTION ANIMALE",
    description:
      "Production animale & Production et Santé Animale (PA & PSA) Compétences acquises à la fin de votre formation chez nous : Techniques d’élevage Rationnement et nutrition animale Bien-être animal Diagnostic et prévention des maladies Débouchés professionnels : Technicien Ingénieur en élevage Responsable d’unité de production animale Conseiller en alimentation et reproduction animale Gestionnaire de ferme zootechnique Chef de projet de développement local Consultants Cadres et Techiciens au sein du Ministère de l’Agriculture et de l’Elevage ",
    categorieParcours: "PRODUCTION ANIMALE",
  },
  {
    title: "PRODUCTION VEGETALE",
    description:
      "Production végétale & Développement Agricole et Rural (PV & DAR) Compétences acquises à la fin de votre formation chez nous : Conduites des cultures (vivrière, maraichère, …) Gestion de l’irrigation et du sol Amélioration des rendements agricoles Animation des communautés rurales Gestion des projets de développement Débouchés professionnels : Conseiller en cultures végétales Responsable d’exploitation agricole Animateur ou Agent de développement rural Chargé de programme agricole Agent de vulgarisation agricole Conseiller en organisation paysanne Chef de projet de développement local Consultants Cadres et Techniciens au sein du Ministère de l’Agriculture et de l’Elevage, des ONG et des sociétés",
    categorieParcours: "PRODUCTION VEGETALE",
  },
  {
    title: "AGROALIMENTAIRE",
    description:
      "Compétences acquises à la fin de votre formation chez nous : Transformation des matières premières (artisanales et industrielles) Recherche et Développement Gestion de la chaîne de production Normes d’hygiène et sécurité alimentaire Contrôle qualité des denrées alimentaires Analyses physico-chimiques et microbiologiques Traçabilité et évaluation sensorielle Nutrition Débouchés professionnels : Techniciens/Ingénieur agroalimentaire Responsable de production Chargé de développement de produits Technicien/Ingénieur en contrôle qualité Analyste en laboratoire alimentaire Responsable assurance qualité Consultant Cadres et Techniciens au sein du Ministère de l’Industrialisation et du Commerce, des ONG, des sociétés et des bureaux d’études.",
    categorieParcours: "AGROALIMENTAIRE",
  },
];

const shortDescriptionList = [
  {
    titleEvent: "Hackathon 2023",
    descriptionEvent: "Victoire de nos étudiants.",
    RandomImage: Image3,
  },
  {
    titleEvent: "Visite PAMF",
    descriptionEvent: "Renforcement de la collaboration.",
    RandomImage: Image1,
  },
];

export const AgroPage = () => {
  return (
    <div>
      <DispositionAboutFiliere
        mention={mention}
        descriptionMention={descriptionMention}
        descriptionParcours={descriptionParcours}
        shortDescriptionList={shortDescriptionList}
      />
    </div>
  );
};
