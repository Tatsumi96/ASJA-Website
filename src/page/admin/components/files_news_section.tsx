import { CardWithForm } from "./cardInput";
import { CardInputUser } from "./cardInputUser";

export const FileAndNewsSection = () => {
  return (
    <div className=" flex w-full gap-3 p-4">
      <CardInputUser />
      <CardWithForm />
    </div>
  );
};
