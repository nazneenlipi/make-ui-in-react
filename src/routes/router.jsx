import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Design43 from '../pages/Design43';
import Design46 from '../pages/Design46';
import Design49 from '../pages/Design49';
import Design47 from '../pages/Design47';
import Design50 from '../pages/Design50';
import Design45 from '../pages/Design45';
import Design44 from '../pages/Design44';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/design43',
        element: <Design43></Design43>,
      },
      {
        path: '/design44',
        element: <Design44></Design44>,
      },
      {
        path: '/design45',
        element: <Design45></Design45>,
      },
      {
        path: '/design46',
        element: <Design46></Design46>,
      },
      {
        path: '/design47',
        element: <Design47></Design47>,
      },
      {
        path: '/design49',
        element: <Design49></Design49>,
      },
      {
        path: '/design50',
        element: <Design50></Design50>
      },

    ]
  },
]);

export default router;