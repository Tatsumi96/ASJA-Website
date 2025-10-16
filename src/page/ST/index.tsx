import { DispositionAboutFiliere } from "../../page/landing/components/disposition-about-filiere";
import ST from "@/assets/Mentions/SienceDeLaTerre/St.jpg";
import Image1 from "@/assets/Mentions/SienceDeLaTerre/event-reboisement-2.jpg";
import Image2 from "@/assets/Mentions/SienceDeLaTerre/event-prime_master.jpg";


const mention = {
  name: "Mention ST",
  ImageMention: ST,
};

const descriptionMention = {
  title: "La Mention ST",
  description:
    "Formation complète en sciences et technologies aondiai aina fa naznciac  jiazjfiano aifioahfiha afhaiohfioaho ahoiahzfiuh ajfoaizhfoiahzfio nfazifnaiouznfuazfuha afhauzfhuahzfuiabeiufb fhauihfiuahifue",
};

const descriptionParcours = [
  { title: "Genie Logiciel", description: "Formation en conception logicielle.", categorieParcours: "Genie Logiciel" },
  { title: "Genie Industriel", description: "Formation en conception industrielle la mention ST etudie dans djaoaokznfioaznfinazzzzzzzzzzzzzz.", categorieParcours: "Genie Industriel" },

];

const shortDescriptionList = [
 
  { titleEvent: "Visite PAMF", descriptionEvent: "Renforcement de la collaboration.", RandomImage: Image1 },
  { titleEvent: "Viavy Tech", descriptionEvent: "Girl tech hackathon", RandomImage: Image2 },
];  

export const STPage = () => {
  return <div>
    <DispositionAboutFiliere
      mention={mention}
      descriptionMention={descriptionMention}
      descriptionParcours={descriptionParcours}
      shortDescriptionList={shortDescriptionList}
    />
  </div>;
};
