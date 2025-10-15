import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { MdFileDownload, MdHome, MdPerson } from 'react-icons/md';

export const BottomBar = ({
  callBack,
  index,
}: {
  callBack: Dispatch<SetStateAction<number>>;
  index: number;
}) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const isAtBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight;

      if (isAtBottom) {
        setShow(false);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`md:hidden flex mx-15  bg-zinc-100 shadow-xl dark:bg-zinc-800 transition-all duration-500 rounded-full justify-between items-center left-0 right-0 py-4   fixed text-gray-800 z-50 ${
        show ? 'bottom-5' : 'bottom-[-100px]'
      }`}
    >
      <div
        className="absolute bg-green-700 rounded-full transition-all duration-200 ease-in-out"
        style={{
          width: '56px',
          height: '56px',
          left: `calc(33.333% * ${index} + 16.666% - 28px)`,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />

      <button
        onClick={() => callBack(0)}
        className="relative rounded-full z-10 flex-1 flex justify-center"
      >
        <div className="p-3">
          <MdHome
            className={`${
              index === 0 ? 'text-white' : 'text-green-700 dark:text-white'
            } text-2xl transition-colors duration-300 relative z-20`}
          />
        </div>
      </button>

      <button
        onClick={() => callBack(1)}
        className="relative rounded-full z-10 flex-1 flex justify-center"
      >
        <div className="p-3">
          <MdFileDownload
            className={`${
              index === 1 ? 'text-white' : 'text-green-700 dark:text-white'
            } text-2xl transition-colors duration-300 relative z-20`}
          />
        </div>
      </button>

      <button
        onClick={() => callBack(2)}
        className="relative rounded-full z-10 flex-1 flex justify-center"
      >
        <div className="p-3">
          <MdPerson
            className={`${
              index === 2 ? 'text-white' : 'text-green-700 dark:text-white'
            } text-2xl transition-colors duration-300 relative z-20`}
          />
        </div>
      </button>
    </div>
  );
};
