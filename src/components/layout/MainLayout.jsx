import React, { useEffect, useState } from "react";
import Navbar from "../sections/header/Navbar.jsx";
import Footer from "../sections/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import SplashCursor from "../UI/SplashCursor.jsx";
import { WavyBackground } from "../UI/WavyBackground";
import { useLocation } from "react-router-dom";

function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);
   const { pathname } = useLocation();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); 
  }, [pathname]);


  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <WavyBackground />
      </div>

      {/* Foreground content */}
      {/* {!isMobile && <SplashCursor />} Disable on mobile */}
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
