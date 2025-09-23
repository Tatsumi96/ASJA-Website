import { CardWithForm } from "./cardInput";
import { DocDataTable } from "./docList";

export const FileAndNewsSection = () => {
  return (
    <div className=" flex w-full gap-3 p-4">
      <DocDataTable />
      <CardWithForm />
    </div>
  );
};
