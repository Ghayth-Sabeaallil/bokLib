import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.scss'
import { RouterProvider } from 'react-router-dom';
import { WebRoute } from './Routes/Route';
import SaveAuthContextProvider from './Data/SaveAuthContextProvider/SaveAuthContextProvider';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading ...</div>}>
      <SaveAuthContextProvider>
        <RouterProvider router={WebRoute} />
      </SaveAuthContextProvider>
    </Suspense>
  </React.StrictMode>,
);
