import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Contact from '../pages/Contact';
import Design43 from '../pages/Design43';
import Design46 from '../pages/Design46';

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
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/design43',
        element: <Design43></Design43>,
      },
      {
        path: '/design46',
        element: <Design46></Design46>,
      },

    ]
  },
]);

export default router;