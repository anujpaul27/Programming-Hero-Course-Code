import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, RouterProvider, Routes } from "react-router";
import Navbar from './Component/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)
