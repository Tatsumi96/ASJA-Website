import informatiqueImg from '@/assets/Mentions/InformatiqueImage/Informatique.jpg';
import { DispositionAboutFiliere } from '@/page/landing/components/disposition-about-filiere';

import Image2 from '@/assets/Mentions/InformatiqueImage/event-info_1.jpg';
import Image3 from '@/assets/Mentions/InformatiqueImage/hackathon.jpg';

export const InfoPage = () => {
  const mention = {
    name: 'Mention Informatique',
    ImageMention: informatiqueImg,
  };

  const descriptionMention = {
    title: 'La Mention Informatique',
    description:
      'Formation complète en développement logiciel, réseaux, IA et cybersécurité.',
  };

  const descriptionParcours = [
    {
      title: 'Génie Logiciel',
      description:
        "Compétences acquises à la fin de votre formation chez nous : Développement d’applications web Gestion de bases de données Programmation orientée objet et UML Débouchés Professionnels : Data scientist et Programmation Développeur Full Stack Designer web et d'applications",
      categorieParcours: 'Genie Logiciel',
    },
    {
      title: 'Télécommunication',
      description:
        'Compétences acquises à la fin de votre formation chez nous : Protocoles de transmission Installation d’équipements et Maîtrise des architectures réseaux Débouchés Professionnels Administrateur systèmes et réseaux Ingénieur de transmission et Radio Technicien Polyvalent',
      categorieParcours: 'Télécommunication',
    },
    {
      title: 'Genie Industriel',
      description:
        'Compétences acquises à la fin de votre formation chez nous : Conception des chaînes de production Gestion de la logistique industrielle Optimisation des processus industriels Débouchés Professionnels Responsable maintenance Logisticien industriel',
      categorieParcours: 'Genie Industriel',
    },
  ];

  const shortDescriptionList = [
    {
      titleEvent: 'Hackathon 2023',
      descriptionEvent: 'Victoire de nos étudiants.',
      RandomImage: Image3,
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
