import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MdWarning } from 'react-icons/md';

export const DeleteModalConfirmation = ({
  text,
  cancel,
  confirm,
}: {
  text: string;
  cancel: () => void;
  confirm: () => Promise<void>;
}) => {
  return (
    <div className=" flex flex-col gap-5 w-1/3">
      <Card className="transition-all duration-500 p-5 items-center border-l-5 border-l-red-600">
        <MdWarning className=" text-7xl dark:text-white text-red-600" />
        <p className="font-semibold">{text}</p>
        <section className="flex justify-end gap-3">
          <Button
            onClick={cancel}
            className="cursor-pointer bg-gray-400 dark:bg-gray-300 dark:hover:bg-gray-200"
          >
            Annuler
          </Button>
          <Button
            onClick={confirm}
            className="bg-red-600 cursor-pointer hover:bg-red-700 text-white"
          >
            Supprimer
          </Button>
        </section>
      </Card>
    </div>
  );
};
