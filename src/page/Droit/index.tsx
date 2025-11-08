import Image1 from '@/assets/droitEvent1-quality.jpeg';
import Image2 from '@/assets/droitEvent2-quality.jpeg';
import Image3 from '@/assets/droitEvent3-quality.jpeg';

import { DispositionAboutFiliere } from '@/page/landing/components/disposition-about-filiere';
export const DroitPage = () => {
  const mention = {
    name: 'DROIT',
    ImageMention: '',
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
        'Former des juristes d’entreprise et des conseils juridiques Maîtriser le droit commercial, fiscal, des sociétés, contrats… Compétences acquises à la fin de votre formation chez nous : Gestion juridique des sociétés, Analyse des risques et conformités, Négociations et rédactions des contrats',
      debouche:
        'Fonctionnaire international, Notaire spécialisé en sociétés, Consultant en fiscalité, Juriste d’entreprise et Avocat d’affaires',
      categorieParcours: 'Droit des Affaires',
    },
    {
      title: 'Droit Processuel',
      description:
        'Préparer aux concours de barreau, magistrature, greffier et avocat, former à toutes les procédures (civile, pénale, administrative…), compétences acquises à la fin de votre formation chez nous : analyse juridique et argumentation, rédaction d’actes juridiques et stratégies procédurales.',
      categorieParcours: 'Droit Processuel',
      debouche:
        'Débouchés professionnels : Assistant(e) de justice, Avocat, Magistrat et Greffier',
    },
  ];

  const shortDescriptionList = [
    {
      titleEvent: 'Proces Fictif',
      descriptionEvent: 'Nos étudiants mettent en pratique leurs connaissances juridiques en participant à des procès simulés, développant ainsi leurs compétences en plaidoirie, argumentation, analyse et stratégie juridique dans un cadre réaliste mais pédagogique.',
      RandomImage: Image3,
    },
    {
      titleEvent: 'Proces Fictif',
      descriptionEvent: 'Préparez-vous à maîtriser les rouages de la justice, à défendre les causes importantes et à bâtir une carrière impactante au service de la nation. Rejoignez l\'élite juridique de demain !',
      RandomImage: Image2,
    },
    {
      titleEvent: 'Proces Fictif',
      descriptionEvent: 'Nos étudiants en Droit plongent au cœur de la justice avec les procès fictifs ! Une immersion grandeur nature pour maîtriser l\'art de la plaidoirie, de la défense et de la procédure. Bien plus qu\'un exercice, c\'est la future carrière qui prend forme, ici et maintenant.',
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
