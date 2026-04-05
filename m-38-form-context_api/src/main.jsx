import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './Component/EventTarget.jsx';
import Navbar from './Component/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/navbar',
        element: <Navbar />
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
