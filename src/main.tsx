import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.scss'
import { RouterProvider } from 'react-router-dom';
import { WebRoute } from './Routes/Route';

import ContextDataProvider from './Data/ContextDataProvider';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading ...</div>}>
      <ContextDataProvider>
        <RouterProvider router={WebRoute} />
      </ContextDataProvider>
    </Suspense>
  </React.StrictMode>,
);
