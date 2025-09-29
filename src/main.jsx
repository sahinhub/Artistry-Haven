import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './routes/Routes.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import ThemeProvider from './context/ThemeProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={routes}>
    </RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
