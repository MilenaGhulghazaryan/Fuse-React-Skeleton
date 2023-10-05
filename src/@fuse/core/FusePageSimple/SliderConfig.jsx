import { lazy } from 'react';
import AddSlide from './AddSlide';

const Slider = lazy(() => import('./Slider'));

const SliderConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/slider',
      element: < Slider />,
      children: [
        {
          path: ':id',
          element: <AddSlide />,
        },
        {
          path: ':id/edit',
          element: <AddSlide />,
        }
      ]
    }
    // {
    //   path:'pages/partners',
    //   element:<Partners/>,
    //   // children:[
    //   //   {
    //   //     path: ':id',
    //   //     element: <AddPartners />,
    //   //   },
    //   //   {
    //   //     path: ':id/edit',
    //   //     element: <AddPartners />,
    //   //   }
    //   // ]
    // }
  ],
};

export default SliderConfig;