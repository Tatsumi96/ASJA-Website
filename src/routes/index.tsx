import '@/i18n';
import { AgroPage } from '@/page/Agro';
import { DroitPage } from '@/page/Droit';
import { EcoPage } from '@/page/Eco';
import { InfoPage } from '@/page/Info';
import { LandingPage } from '@/page/landing';
import { LeaPage } from '@/page/LEA';
import { STPage } from '@/page/ST';
import { NotFoundPage } from '@/page/not-found/NotFoundPage';
import { useTheme } from '@/page/theme/useTheme';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const PageRoute = () => {
  useTheme();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mention/informatique" element={<InfoPage />} />
        <Route path="/mention/agronomie" element={<AgroPage />} />
        <Route path="/mention/economie" element={<EcoPage />} />
        <Route
          path="/mention/langue-etrangere-applique"
          element={<LeaPage />}
        />
        <Route path="/mention/science-de-la-terre" element={<STPage />} />
        <Route path="/mention/droit" element={<DroitPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

