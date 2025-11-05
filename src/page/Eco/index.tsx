import Image3 from '@/assets/Mentions/Economie/brochure-economie.jpg';
import Economie from '@/assets/Mentions/Economie/Eco.jpg';
import Image2 from '@/assets/Mentions/Economie/event-chorale_asja.jpg';
import Image1 from '@/assets/Mentions/Economie/event-donation_2.jpg';
import { DispositionAboutFiliere } from '@/page/landing/components/disposition-about-filiere';

export const EcoPage = () => {
  const mention = {
    name: 'ECONOMIE ET COMMERCE',
    ImageMention: Economie,
  };

  const descriptionMention = {
    title: 'ECONOMIE ET COMMERCE',
    description:
      'La filière Économie et Commerce forme des cadres polyvalents capables d’analyser, de gérer et de dynamiser les activités économiques. Elle offre une solide formation en économie générale, gestion, marketing, finance, comptabilité et commerce international. Les étudiants apprennent à comprendre les mécanismes du marché, à élaborer des stratégies commerciales et à utiliser des outils modernes d’analyse économique. La filière met en avant l’esprit d’entreprise et l’ouverture sur le monde professionnel, afin de préparer des gestionnaires compétents et responsables.',
  };

  const descriptionParcours = [
    {
      title: 'Economie et Développement',
      description:
        'Économiste/analyste (secteur public/international) Chargé de mission en développement local Expert en politiques publiques ou économie rurale Responsable de projet (ONG, coopération) Consultant en développement et impac',
      categorieParcours: 'Economie et Développement',
      debouche: 'Économiste/analyste (secteur public/international)',
    },
    {
      title: 'Gestion et commerces Internationaux',
      description:
        'Responsable administratif ou marketing Directeur de PME ou chef de produit Analyste financier ou chargé d’affaires Chef de projet (commerce/export) Entrepreneur (services, innovation) Consultant en gestion ou finance',
      categorieParcours: 'Gestion et commerces Internationaux',
      debouche: 'Responsable administratif ou marketing Directeur',
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
