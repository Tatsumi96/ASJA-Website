import Image2 from '@/assets/Mentions/InformatiqueImage/Victoir_Hackathon2025-quality.jpg';
import Image3 from '@/assets/Mentions/InformatiqueImage/hackathon-quality.jpg';
import { DispositionAboutFiliere } from '@/page/landing/components/disposition-about-filiere';

export const InfoPage = () => {
  const mention = {
    name: 'INFORMATIQUE',
    ImageMention: '',
  };

  const descriptionMention = {
    title: 'INFORMATIQUE',
    description:
      'La filière Informatique prépare les étudiants à maîtriser les outils et technologies de l’ère numérique. Elle couvre des domaines essentiels tels que la programmation, le développement web et mobile, les bases de données, les réseaux, la cybersécurité, l’intelligence artificielle et la gestion de projets logiciels. Grâce à une approche pratique et professionnalisante, les étudiants développent une véritable expertise technique, leur permettant d’évoluer comme développeurs, ingénieurs logiciels, administrateurs systèmes ou chefs de projets IT. La formation met aussi l’accent sur la créativité, l’innovation et la résolution de problèmes concrets.',
  };

  const descriptionParcours = [
    {
      title: 'Génie Logiciel',
      description:
        'Compétences acquises à la fin de votre formation chez nous : Développement d’applications web, Gestion de bases de données, Programmation orientée objet et UML',
      categorieParcours: 'Genie Logiciel',
      debouche:
        "Data scientist et Programmation Développeur Full Stack, Designer web et d'applications",
    },
    {
      title: 'Télécommunication',
      description:
        'Compétences acquises à la fin de votre formation chez nous : Protocoles de transmission Installation d’équipements et Maîtrise des architectures réseaux',
      debouche:
        'Débouchés Professionnels Administrateur systèmes et réseaux Ingénieur de transmission et Radio Technicien Polyvalent',
      categorieParcours: 'Télécommunication',
    },
    {
      title: 'Genie Industriel',
      description:
        'Compétences acquises à la fin de votre formation chez nous : Conception des chaînes de production Gestion de la logistique industrielle Optimisation des processus industriels',
      categorieParcours: 'Genie Industriel',
      debouche: ' Responsable maintenance Logisticien industriel',
    },
  ];

  const shortDescriptionList = [
    {
      titleEvent: 'Hackathon Inter-Univestaire 2023',
      descriptionEvent:
        'Lors de l’Hackathon 2023, nos étudiants ont remporté la 3ᵉ place, prouvant que curiosité, ingéniosité et soif d’apprendre mènent à l’excellence.',
      RandomImage: Image3,
    },

    {
      titleEvent: 'Hackathon DevFest 2025',
      descriptionEvent:
        'Nos étudiants triomphent à l’Hackathon 2025 du Devfest Antsirabe !',
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
