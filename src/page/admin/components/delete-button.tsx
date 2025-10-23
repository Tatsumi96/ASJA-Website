import { Button } from '@/components/ui/button';
import { MdDelete } from 'react-icons/md';

export const DeleteButton = ({
  callBack,
}: {
  callBack: () => Promise<void>;
}) => {
  return (
    <Button
      onClick={callBack}
      size="icon"
      variant="outline"
      className="rounded-full size-8 cursor-pointer border-transparent text-red-600 hover:bg-red-600 hover:text-white"
    >
      <div className=" px-1 py-0.5">
        <MdDelete />
      </div>
    </Button>
  );
};
