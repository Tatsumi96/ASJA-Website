import ST from '@/assets/Mentions/SienceDeLaTerre/St.jpg';
import Image2 from '@/assets/Mentions/SienceDeLaTerre/event-prime_master.jpg';
import Image1 from '@/assets/Mentions/SienceDeLaTerre/event-reboisement-2.jpg';
import { DispositionAboutFiliere } from '../../page/landing/components/disposition-about-filiere';

const mention = {
  name: 'Mention ST',
  ImageMention: ST,
};

const descriptionMention = {
  title: 'La Mention ST',
  description:
    'La terre est notre avenir. Construisez le vôtre au sein de la filière « Science de la terre » et explorer',
};

const descriptionParcours = [
  {
    title: 'HYDROGEOLOGIE',
    description:
      'Recherche, exploitation et gestion des ressources en eaux Techniques de forage d’eau Système d’AEP, système d’irrigation, Aménagement hydro-électrique et Aménagement hydroagricole... Modélisation des processus hydrogéologiques et hydrologiques Analyse et traitement des eaux usées Débouchés professionnels : Hydrogéologue Cadres et techniciens au sein du Ministère de l’eau (MEAH), des ONG et bureaux d’études œuvrant dans le secteur de l’eau et de l’assainissement Chefs de projet',
    categorieParcours: 'HYDROGEOLOGIE',
  },
  {
    title: 'GEOLOGIE MINIERE',
    description:
      'Techniques de prospection géologique et minière Exploitation minière Cartographie (Télédétection et SIG) Caractérisation et valorisation des matériaux géologiques Gestion environnementale et restauration des sites miniers Débouchés professionnels : Géologue consultant Cadres et techniciens dans les industries minières Cadres et techniciens au sein du Ministère des Mines (MMRS)',
    categorieParcours: 'GEOLOGIE MINIERE',
  },
];

const shortDescriptionList = [
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

export const STPage = () => {
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
