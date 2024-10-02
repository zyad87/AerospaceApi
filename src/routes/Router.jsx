import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <Details />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
