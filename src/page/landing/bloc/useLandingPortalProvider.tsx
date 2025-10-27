import { useLanding } from './useLanding';
import { LandingContext } from './useLandingContext';

export const LandingDashBoardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const landing = useLanding();
  return (
    <LandingContext.Provider value={landing}>
      {children}
    </LandingContext.Provider>
  );
};
