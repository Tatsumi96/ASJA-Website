import { useLanding } from './useLanding';
import { LandingContext } from './useLandingContext';

export const LandingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const adminDasboard = useLanding();
  return (
    <LandingContext.Provider value={adminDasboard}>
      {children}
    </LandingContext.Provider>
  );
};
