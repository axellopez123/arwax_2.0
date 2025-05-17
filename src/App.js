import './App.css';
import { VortexProps } from "./components/VortexProps";
import Logo from "./components/Logo";
import TextLogo from "./components/TextLogo";
import "./components/Logo.css";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from 'react';

function App() {
  const words = `Optimiza tu negocio`;

  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  useEffect(() => {
    // Empieza el fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Luego oculta el primero y muestra el segundo con un poco de delay
      setTimeout(() => {
        setShowFirstDiv(false);
        setShowSecondDiv(true);
      }, 1000); // tiempo de animación
    }, 4000); // Espera inicial

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFirstDiv && (
        <Box className={`${fadeOut ? 'fade-out' : ''}`}>
          <VortexProps className="w-full h-full">
            <div className="w-full h-full rounded-[22px] flex justify-center items-center">
              <div className="w-screen px-4 md:px-0 md:w-2/4">
                <Logo className="text-white" text="ARWAX" />
                <TextLogo words={words} className="flex justify-center items-center" />
              </div>
            </div>
          </VortexProps>
        </Box>
      )}

      {showSecondDiv && (
        <Box className={`h-screen flex flex-col fade-in`}>
          hola
        </Box>
      )}
    </>
  );
}

export default App;
