import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router";
import Check from './Component/Check.jsx';
import Login from './Component/Login.jsx';
import Registration from './Component/Registration.jsx';
import User from './Component/User.jsx';
import UserDetails from './Component/UserDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Check />,
    children: [
      {
        path: '/login/:pr',
        element: <Login />,
        loader: () => { return fetch('https://jsonplaceholder.typicode.com/users') },
      },
      {
        path: 'registration',
        element: <Registration />
      },
      {
        path: '/users',
        element: <User/>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/users/user/:id',
        element: <UserDetails/>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App></App>
  </RouterProvider>
)
