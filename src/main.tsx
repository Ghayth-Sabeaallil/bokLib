import React from 'react'
import ReactDOM from 'react-dom/client'
import WebRoute from './Routes/Route.tsx'
import './Styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WebRoute />
  </React.StrictMode>,
)
