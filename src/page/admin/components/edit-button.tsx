import { Button } from '@/components/ui/button';
import { MdEdit } from 'react-icons/md';

export const EditButton = ({ callBack }: { callBack: () => void }) => {
  return (
    <Button
      onClick={callBack}
      size="icon"
      variant="outline"
      className="rounded-full size-8 cursor-pointer border-transparent text-green-600 hover:bg-green-600 hover:text-white"
    >
      <div className=" px-1 py-0.5">
        <MdEdit />
      </div>
    </Button>
  );
};
