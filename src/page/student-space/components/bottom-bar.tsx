import { type Dispatch, type SetStateAction } from 'react';
import { MdFileDownload, MdHome, MdPerson } from 'react-icons/md';

export const BottomBar = ({
  callBack,
  index,
}: {
  callBack: Dispatch<SetStateAction<number>>;
  index: number;
}) => {
  return (
    <div
      className={`md:hidden flex h-full dark:bg-zinc-900 bg-white transition-all duration-500  justify-between items-center relative z-150`}
    >
      <div
        className="absolute bg-green-700 rounded-2xl  transition-all duration-300 ease-in-out"
        style={{
          width: '56px',
          height: '3px',
          left: `calc(33.333% * ${index} + 16.666% - 28px)`,
          top: '100%',
          transform: 'translateY(-50%)',
        }}
      />

      <button
        onClick={() => callBack(0)}
        className="relative rounded-full z-10 flex-1 flex justify-center"
      >
        <div className="p-3">
          <MdHome
            className={`
              'text-green-700 dark:text-white text-green-700 text-2xl transition-colors duration-300 relative z-20`}
          />
        </div>
      </button>

      <button
        onClick={() => callBack(1)}
        className="relative rounded-full z-10 flex-1 flex justify-center"
      >
        <div className="p-3">
          <MdFileDownload
            className={`
              'text-green-700 dark:text-white text-green-700 text-2xl transition-colors duration-300 relative z-20`}
          />
        </div>
      </button>

      <button
        onClick={() => callBack(2)}
        className="relative rounded-full z-10 flex-1 flex justify-center"
      >
        <div className="p-3">
          <MdPerson
            className={`
              'text-green-700 dark:text-white text-green-700 text-2xl transition-colors duration-300 relative z-20`}
          />
        </div>
      </button>
    </div>
  );
};
