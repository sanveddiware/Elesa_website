import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/sections/Main/home.jsx";
import About from "./components/sections/Main/About.jsx";
import Electrovert from "./components/sections/Main/Electrovert.jsx";
import Contact from "./components/sections/Main/Contact.jsx";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Events from './components/sections/Main/Events.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Home />} />  
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events/>} />
      <Route path="electrovert" element={<Electrovert />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)

