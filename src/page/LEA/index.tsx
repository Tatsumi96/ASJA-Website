import Lea from '@/assets/Mentions/LEA/LC.webp';
import Image1 from '@/assets/Mentions/LEA/brochure-LEA.jpg';
import Image3 from '@/assets/Mentions/LEA/terrain-basket.jpg';
import { DispositionAboutFiliere } from '../landing/components/disposition-about-filiere';
export const LeaPage = () => {
  const mention = {
    name: 'Mention LEA',
    ImageMention: Lea,
  };

  const descriptionMention = {
    title: 'La Mention LEA',
    description:
      'Découvrez les cultures des pays du monde entier et apprenez à parler leurs langues tout en développant vos capacités de communications. OBJECTIFS DE LA LEA Une formation pluridisciplinaire : Maîtrise de plusieurs langues étrangères (à l’oral et à l’écrit) Compréhension des cultures et civilisations étrangères Développement de compétences professionnelles (communication, traduction, synthèses, analyses, travail en équipe…) COMPÉTENCES CLÉS Traduction et interprétation (générale, économique, juridique) Communication multilingue écrite et orale Conception de support (tourisme, marketing, évènementiel…) Veille et analyse de l’actualité internationale Rédaction professionnelle en langues étrangères DOMAINES D’ACTIVITÉS Communication Commerce international Enseignement Journalisme Marketing Relation internationale Traduction et interprétation Tourisme et hôtellerie POURSUITE D’ÉTUDES EN MASTER Master Interprétariat Traduction orale fluide entre trois langues et plus Master Didactique des langues Didactique des langues, ingénierie pédagogique E-learning Débouchés professionnels : Assistant(e) de communication Attaché(e) de presse Commercial(e) export, tourisme Chef de projet Enseignant(e) / Formateur(rice) Ingénieur(e) pédagogique Journaliste, documentaliste Traducteur(rice) / Interprète',
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
