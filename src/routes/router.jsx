import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Contact from '../pages/Contact';
import Design1 from '../pages/Design1';

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
        path: '/design1',
        element: <Design1></Design1>,
      },

    ]
  },
]);

export default router;