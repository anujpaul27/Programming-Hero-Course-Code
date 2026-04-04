import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router";
import Check from './Component/Check.jsx';
import Login from './Component/Login.jsx';
import Registration from './Component/Registration.jsx';


const router = createBrowserRouter ([
  {
    path: '/',
    element: <Check/>,
    children: [
      {
        path: '/login',
        element: <Login/>,
        loader: ()=> {return fetch('https://jsonplaceholder.typicode.com/users')},
      },
      {
        path: 'registration',
        element: <Registration/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App></App>
  </RouterProvider>
)
