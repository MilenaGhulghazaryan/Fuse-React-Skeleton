import { lazy } from 'react';
import AddPartners from './AddPartners';

const Partners = lazy(() => import('./Partners'));

const PartnersConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/partners',
      element: <Partners />,
      children: [
        {
          path: ':id',
          element: <AddPartners />,
        },
        {
          path: ':id/edit',
          element: <AddPartners />,
        }
      ]
    }
  ],
};

export default PartnersConfig;