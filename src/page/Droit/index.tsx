import Droit from '@/assets/Mentions/Droit/Droit.jpeg';
import Image1 from '@/assets/droitEvent1.jpeg';
import Image2 from '@/assets/droitEvent2.jpeg';
import Image3 from '@/assets/droitEvent3.jpeg';

import { DispositionAboutFiliere } from '@/page/landing/components/disposition-about-filiere';
export const DroitPage = () => {
  const mention = {
    name: 'DROIT',
    ImageMention: Droit,
  };

  const descriptionMention = {
    title: 'DROIT',
    description:
      'La filière Droit offre une formation complète en droit civil, pénal, constitutionnel, administratif et commercial. Elle vise à développer une solide culture juridique et un esprit critique, indispensables à la compréhension des institutions et des règles qui régissent la société. Les étudiants apprennent à analyser, interpréter et appliquer les textes juridiques, mais aussi à défendre des arguments de manière rigoureuse et éthique. Cette formation prépare à des carrières variées : avocat, juriste d’entreprise, magistrat, fonctionnaire, conseiller juridique ou encore chercheur en droit.',
  };

  const descriptionParcours = [
    {
      title: 'Droit des Affaires',
      description:
        'Former des juristes d’entreprise et des conseils juridiques Maîtriser le droit commercial, fiscal, des sociétés, contrats… Compétences acquises à la fin de votre formation chez nous : Gestion juridique des sociétés Analyse des risques et conformités Négociations et rédactions des contrats',
      debouche:
        'Fonctionnaire international Notaire spécialisé en sociétés Consultant en fiscalité Juriste d’entreprise Avocat d’affaires',
      categorieParcours: 'Droit des Affaires',
    },
    {
      title: 'Droit Processuel',
      description:
        'Préparer aux concours de barreau, magistrature, greffe Former à toutes les Procédures (civile, pénale, administrative…) Compétences acquises à la fin de votre formation chez nous : Analyse juridique et argumentation Rédaction d’actes juridiques Stratégies procédurales',
      categorieParcours: 'Droit Processuel',
      debouche:
        'Débouchés professionnels : Assistant(e) de justice Avocat Magistrat Greffier',
    },
  ];

  const shortDescriptionList = [
    {
      titleEvent: 'Proces Fictif',
      descriptionEvent: '',
      RandomImage: Image3,
    },
    {
      titleEvent: 'Proces Fictif',
      descriptionEvent: '',
      RandomImage: Image2,
    },
    {
      titleEvent: 'Proces Fictif',
      descriptionEvent: '',
      RandomImage: Image1,
    },
  ];

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
