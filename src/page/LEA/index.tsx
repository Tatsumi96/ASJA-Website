import Image1 from '@/assets/Mentions/LEA/Theatre_1.jpg';
import Image3 from '@/assets/Mentions/LEA/Visite_Culinaire_française.jpg';
import { DispositionAboutFiliere } from '../landing/components/disposition-about-filiere';
export const LeaPage = () => {
  const mention = {
    name: 'LANGUES ÉTRANGÈRES APPLIQUÉES',
    ImageMention: "",
  };

  const descriptionMention = {
    title: 'LANGUES ÉTRANGÈRES APPLIQUÉES',
    description:
      'La filière Langues Étrangères Appliquées combine la maîtrise linguistique et la compréhension du monde professionnel. Les étudiants y développent des compétences avancées en anglais, français et autres langues étrangères, tout en apprenant les bases de la communication, du commerce international, du tourisme et de la traduction. La formation met l’accent sur la pratique orale et écrite, la culture générale et la capacité à interagir dans un environnement multiculturel. Elle ouvre la voie à des carrières dans les relations internationales, le marketing, la traduction ou la communication interculturelle.',
  };

  const shortDescriptionList = [
    {
      titleEvent: 'Bain Culinaire',
      descriptionEvent: 'Bain Culinaire de la cuisine française.',
      RandomImage: Image3,
    },
    {
      titleEvent: 'Theathre',
      descriptionEvent: '',
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
