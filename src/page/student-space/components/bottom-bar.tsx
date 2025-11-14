import { type Dispatch, type SetStateAction } from 'react';
import { LayoutGrid, FileText, CircleUserRound } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: LayoutGrid, label: 'Accueil' },
  { icon: FileText, label: 'Documents' },
  { icon: CircleUserRound, label: 'Profil' },
];

export const BottomBar = ({
  callBack,
  index,
}: {
  callBack: Dispatch<SetStateAction<number>>;
  index: number;
}) => {
  return (
    <div className="md:hidden flex w-full justify-center mt-2">
      <div className="flex h-16 w-full max-w-xs items-center justify-around relative bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-full shadow-lg border border-white/10">
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => callBack(i)}
            className="relative rounded-full z-10 flex-1 flex justify-center items-center h-full focus:outline-none"
            aria-label={item.label}
          >
            <item.icon
              className={`size-6 transition-colors duration-300 ${
                index === i ? 'text-white' : 'text-gray-300'
              }`}
            />
            {index === i && (
              <motion.div
                className="absolute inset-2 bg-green-700/60 rounded-full z-[-1]"
                layoutId="active-pill"
                transition={{ duration: 0.6, type: 'spring', bounce: 0.25 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
