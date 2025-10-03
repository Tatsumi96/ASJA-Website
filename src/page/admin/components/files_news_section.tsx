import { CardWithForm } from "./cardInput";
import { CardInputUser } from "./cardInputUser";
import { MentionCart } from "./MentionCart";

export const FileAndNewsSection = () => {
  return (
    <div className=" flex  w-full gap-3 p-4">
      <MentionCart mention="Droit" className="from-red-700 to-red-600" />
      <MentionCart mention="Informatique" className="from-violet-800 to-violet-700" />
      <MentionCart mention="Economie" className="from-yellow-500 to-yellow-400" />
      <MentionCart mention="Agronomie" className="from-green-500 to-green-600" />
      <MentionCart mention="Langue Etrangere Applique" className="from-blue-500 to-blue-600" />
      <MentionCart mention="Science de la Terre" className="from-gray-500 to-gray-600" />

      {/* <CardInputUser />
      <CardWithForm /> */}
    </div>
  );
};
