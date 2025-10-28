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
    'La filière Sciences de la Terre s’adresse aux passionnés de la nature, de l’environnement et des phénomènes géologiques. Elle forme des spécialistes capables de comprendre, analyser et exploiter les ressources naturelles tout en respectant l’équilibre écologique. Les enseignements portent sur la géologie, la géophysique, la minéralogie, la cartographie, l’hydrologie et la gestion des risques naturels.Grâce à des travaux pratiques sur le terrain et en laboratoire, les étudiants acquièrent une expérience scientifique et technique essentielle pour travailler dans les domaines de l’environnement, des mines ou de l’aménagement du territoire.',
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
