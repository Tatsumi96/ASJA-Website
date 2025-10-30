import { useLandingContext } from '../bloc/useLandingContext';

export const AnnonceSection = () => {
  const { isAnnonce, annonce } = useLandingContext();
  if (isAnnonce)
    return (
      <div className="flex justify-center items-center text-center w-screen font-semibold bg-green-700 text-white p-1">
        {annonce}
      </div>
    );
};
