import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Route';
import AuthProvider from './Authintication/AuthProvider';
import { ThemeProvider } from '@material-tailwind/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>

   <ThemeProvider>
   <RouterProvider router={routes} />
   </ThemeProvider>
   
   </AuthProvider>
  </React.StrictMode>,
)
