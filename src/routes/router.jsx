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
import Design48 from '../pages/Design48';
import Design42 from '../pages/Design42';
import Test from '../pages/Test';
import TestLandingPage from '../pages/TestLandingPage';
import LandingPage2 from '../pages/LandingPage2';
import LandingPage3 from '../pages/LandingPage3';
import Test2 from '../pages/Test2';
import Test3 from '../pages/Test3';
import Test4 from '../pages/Test4';
import Test5 from '../pages/Test5';
import Test6 from '../pages/Test6';
import Test7 from '../pages/Test7';

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
        path: '/design42',
        element: <Design42></Design42>,
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
        path: '/design48',
        element: <Design48></Design48>,
      },
      {
        path: '/design49',
        element: <Design49></Design49>,
      },
      {
        path: '/design50',
        element: <Design50></Design50>
      },
      {
        path: '/test',
        element: <Test></Test>
      },
      {
        path: '/test2',
        element: <Test2></Test2>
      },
      {
        path: '/test3',
        element: <Test3></Test3>
      },
      {
        path: '/test4',
        element: <Test4></Test4>
      },
      {
        path: '/test5',
        element: <Test5></Test5>
      },
      {
        path: '/test6',
        element: <Test6></Test6>
      },
      {
        path: '/test7',
        element: <Test7></Test7>
      },
      {
        path: '/landingPage',
        element: <TestLandingPage></TestLandingPage>
      },
      {
        path: '/landingPage2',
        element: <LandingPage2></LandingPage2>
      },
      {
        path: '/landingPage3',
        element: <LandingPage3></LandingPage3>
      },

    ]
  },
]);

export default router;