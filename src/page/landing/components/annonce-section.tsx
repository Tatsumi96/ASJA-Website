import { Alert, AlertDescription } from '@/components/ui/alert';
import { BellRing } from 'lucide-react';
import { useLandingContext } from '../bloc/useLandingContext';

export const AnnonceSection = () => {
  const { isAnnonce, annonce } = useLandingContext();
  if (isAnnonce)
    return (
      <div className="w-full flex  ">
        <Alert className="w-full flex justify-center bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200">
          <BellRing className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            {annonce}
          </AlertDescription>
        </Alert>
      </div>
    );
  return null;
};
