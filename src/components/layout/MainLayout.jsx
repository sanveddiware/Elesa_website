import React, { useEffect, useState } from "react";
import Navbar from "../sections/header/Navbar.jsx";
import Footer from "../sections/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import SplashCursor from "../UI/SplashCursor.jsx";
import { WavyBackground } from "../UI/WavyBackground";

function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <WavyBackground />
      {!isMobile && <SplashCursor />} {/* Disable on mobile */}
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
