import { CardWithForm } from "./cardInput";
import { CardInputUser } from "./cardInputUser";

export const AddUserAndDocument = () => {
  return (
    <div className=" flex gap-5 bg-zinc-100 dark:bg-zinc-900 transition-all  duration-500">
      <CardInputUser />
      <CardWithForm />
    </div>
  );
};
