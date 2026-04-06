import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './Component/EventTarget.jsx';
import Navbar from './Component/Navbar.jsx';
import FormDataHandle from './Component/FormDataHandle.jsx';
import InstantControlForm from './Component/InstantControlForm.jsx';
import Gsap from './Gsap/Animation.jsx';
import Context from './Context/Context.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FormDataHandle />,
    children: [
      {
        path: '/navbar',
        element: <Navbar />
      }
    ]
  },
  {
    path: '/instantcontrolform',
    element: <InstantControlForm />
  },
  {
    path: '/gsap',
    element: <Gsap />
  }

])

createRoot(document.getElementById('root')).render(
  <Context>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Context>
)
