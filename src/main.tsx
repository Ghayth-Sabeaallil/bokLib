import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.scss'
import { RouterProvider } from 'react-router-dom';
import { WebRoute } from './Routes/Route';

import ContextProvider from './Data/ContextProvider';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading ...</div>}>
      <ContextProvider>
        <RouterProvider router={WebRoute} />
      </ContextProvider>
    </Suspense>
  </React.StrictMode>,
);
