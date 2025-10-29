import Lea from '@/assets/Mentions/LEA/LC.webp';
import Image1 from '@/assets/Mentions/LEA/brochure-LEA.jpg';
import Image3 from '@/assets/Mentions/LEA/terrain-basket.jpg';
import { DispositionAboutFiliere } from '../landing/components/disposition-about-filiere';
export const LeaPage = () => {
  const mention = {
    name: 'LANGUES ÉTRANGÈRES APPLIQUÉES',
    ImageMention: Lea,
  };

  const descriptionMention = {
    title: 'LANGUES ÉTRANGÈRES APPLIQUÉES',
    description:
      'La filière Langues Étrangères Appliquées combine la maîtrise linguistique et la compréhension du monde professionnel. Les étudiants y développent des compétences avancées en anglais, français et autres langues étrangères, tout en apprenant les bases de la communication, du commerce international, du tourisme et de la traduction. La formation met l’accent sur la pratique orale et écrite, la culture générale et la capacité à interagir dans un environnement multiculturel. Elle ouvre la voie à des carrières dans les relations internationales, le marketing, la traduction ou la communication interculturelle.',
  };

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
  ];

  return (
    <div>
      <DispositionAboutFiliere
        mention={mention}
        descriptionMention={descriptionMention}
        shortDescriptionList={shortDescriptionList}
      />
    </div>
  );
};
