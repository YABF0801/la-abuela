import { DashboardScreen, HomeScreen, Submision, Circulos ,DashboardIndex, GeneralList, Statistics } from '@/pages';
import { Config } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: 'dashboard',
    element: <DashboardScreen />,
    children: [
      {
        index: true,
        element: <DashboardIndex />,
      },
      {
        path: 'nueva_solicitud',
        element: <Submision />,
      },
      {
        path: 'circulos',
        element: <Circulos />,
      },
      {
        path: 'listado',
        element: <GeneralList />,
      },
      {
        path: 'estadisticas',
        element: <Statistics />,
      },
    ],
  },
  {
    path: 'configuracion',
    element: <Config/>,
    /* children: [
      {
        index: true,
        element: <DashboardIndex />,
      },
    ], */
  },
]);

export default router;
