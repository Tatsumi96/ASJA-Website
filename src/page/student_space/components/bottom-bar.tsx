import type { Dispatch, SetStateAction } from 'react';
import { MdFileDownload, MdHome, MdPerson } from 'react-icons/md';

export const BottomBar = ({
  callBack,
  index,
}: {
  callBack: Dispatch<SetStateAction<number>>;
  index: number;
}) => {
  return (
    <div className="md:hidden flex bg-zinc-100 shadow-xl dark:bg-zinc-800 transition-all duration-500 rounded-full mx-25  justify-between bottom-5 left-0 right-0 py-3 px-4 fixed  text-gray-800 z-50">
      <button
        onClick={() => callBack(0)}
        className={`${index == 0 ? ' bg-green-700' : 'bg-transparent'} rounded-full   hover:bg-green-700/70`}
      >
        <div className=" p-3">
          <MdHome
            className={` ${index == 0 ? 'text-white' : 'text-green-700 dark:text-white'}  text-2xl `}
          />
        </div>
      </button>
      <button
        onClick={() => callBack(1)}
        className={`${index == 1 ? ' bg-green-700' : 'bg-transparent'} rounded-full   hover:bg-green-700/70`}
      >
        <div className=" p-3">
          <MdFileDownload
            className={` ${index == 1 ? 'text-white' : 'text-green-700 dark:text-white'}  text-2xl `}
          />
        </div>
      </button>
      <button
        onClick={() => callBack(2)}
        className={`${index == 2 ? ' bg-green-700' : 'bg-transparent'} rounded-full   hover:bg-green-700/70`}
      >
        <div className=" p-3">
          <MdPerson
            className={` ${index == 2 ? 'text-white' : 'text-green-700 dark:text-white'}  text-2xl `}
          />
        </div>
      </button>
    </div>
  );
};
