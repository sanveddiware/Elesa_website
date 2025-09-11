import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/sections/Main/home.jsx";
import About from "./components/sections/Main/About.jsx";
import Electrovert from "./components/sections/Main/Electrovert.jsx";
import Gallery from "./components/sections/Main/Gallery.jsx";
import Contact from "./components/sections/Main/Contact.jsx";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Home />} />  
      <Route path="about" element={<About />} />
      <Route path="events" element={<Electrovert />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)

