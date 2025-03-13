"use client";

import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

export default function Text3DAnimation() {
  const helloRef = useRef(null); // Référence pour le mot "Hello"

  useGSAP(() => {
    // Animation GSAP
    gsap.to(helloRef.current, {
      rotationY: 180, // Rotation complète en 3D sur l'axe Y
      duration: 5,    // Durée de l'animation (5 secondes)
      ease: 'power2.inOut', // Courbe d'accélération/décélération
      repeat: -1,      // Répéter l'animation à l'infini
      repeatDelay: 1, // Délai avant de répéter l'animation (2 secondes)
      delay: 1,       // Délai avant de démarrer l'animation (2 secondes)
      yoyo: true,     // Revenir à l'état initial après chaque cycle
    });
  }, []);

  return (
    <div className='z-30'>
      <h1
       className='text-[38px] lg:text-[52px]' 
      >
        Administration <span
          ref={helloRef}
          style={{
            display: 'inline-block', // Nécessaire pour les transformations 3D
            transformStyle: 'preserve-3d', // Active les transformations 3D
          }}
        >
           Recruting
        </span> - Legal & Finance
      </h1>
    </div>
  );
}