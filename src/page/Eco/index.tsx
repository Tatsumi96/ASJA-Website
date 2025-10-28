import Image3 from '@/assets/Mentions/Economie/brochure-economie.jpg';
import Economie from '@/assets/Mentions/Economie/Eco.jpg';
import Image2 from '@/assets/Mentions/Economie/event-chorale_asja.jpg';
import Image1 from '@/assets/Mentions/Economie/event-donation_2.jpg';
import { DispositionAboutFiliere } from '@/page/landing/components/disposition-about-filiere';

export const EcoPage = () => {
  const mention = {
    name: 'Mention Economie',
    ImageMention: Economie,
  };

  const descriptionMention = {
    title: 'La Mention Economie',
    description:
      'Compétences acquises à la fin de votre formation chez nous : Esprit d’analyse et esprit critique Création et gestion d’entreprises Gestion financière des entreprises Économie territoriale, rurale et inclusive Techniques de commerce et négociation Management des équipes et organisation Analyse des politiques publiques et sociales Gestion de projets et planification stratégique Évaluation d’impacts économiques et sociaux Stratégies de marketing digital et international Analyse économique, stratégique et financière',
  };

  const descriptionParcours = [
    {
      title: 'Economie et Développement',
      description:
        'Économiste/analyste (secteur public/international) Chargé de mission en développement local Expert en politiques publiques ou économie rurale Responsable de projet (ONG, coopération) Consultant en développement et impac',
      categorieParcours: 'Economie et Développement',
    },
    {
      title: 'Gestion et commerces Internationaux',
      description:
        'Responsable administratif ou marketing Directeur de PME ou chef de produit Analyste financier ou chargé d’affaires Chef de projet (commerce/export) Entrepreneur (services, innovation) Consultant en gestion ou finance',
      categorieParcours: 'Gestion et commerces Internationaux',
    },
  ];

  const shortDescriptionList = [
    {
      titleEvent: 'Hackathon 2023',
      descriptionEvent: 'Victoire de nos étudiants.',
      RandomImage: Image3,
    },
    {
      titleEvent: 'Visite PAMF',
      descriptionEvent: 'Renforcement de la collaboration.',
      RandomImage: Image1,
    },
    {
      titleEvent: 'Viavy Tech',
      descriptionEvent: 'Girl tech hackathon',
      RandomImage: Image2,
    },
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
