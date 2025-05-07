"use client";

import React, { useRef, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Text3DAnimation2() {
  const textRef = useRef(null); // Référence pour le conteneur du synonyme
  const leftTextRef = useRef(null); // Référence pour le texte à gauche ("Administration")
  const rightTextRef = useRef(null); // Référence pour le texte à droite ("- Legal & Finance")
  const [currentWord, setCurrentWord] = useState("Recruting"); // État pour le mot actuel

  // Tableau des synonymes avec leurs classes de couleur Tailwind
  const synonyms = [
    { word: "& marketing"},
    { word: "& promotion"},
    { word: "& advertising"},
    { word: "& branding"},

  ];

  useGSAP(() => {
    let currentIndex = 0;

    const changeWord = () => {
      const nextWord = synonyms[currentIndex].word;
      const currentWidth = textRef.current.offsetWidth; // Largeur actuelle du synonyme
      const nextWidth = nextWord.length * 10; // Estimation de la largeur du prochain synonyme

      // Déterminer la direction du déplacement
      const direction = nextWidth > currentWidth ? 10 : -10;

      // Animation pour déplacer l'expression et le synonyme
      gsap.to([rightTextRef.current, textRef.current], {
        x: direction, // Déplacer dans la même direction
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
           // Animation pour revenir à la position d'origine
           gsap.to([rightTextRef.current, textRef.current], {
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      });

      gsap.to([textRef.current], {
        duration: 0.5,
        ease: "power2.inOut",
        opacity: 0,
       
        onComplete: () => {
          // Changer le mot après le déplacement
          setCurrentWord(nextWord);
          currentIndex = (currentIndex + 1) % synonyms.length; // Passer au mot suivant

          gsap.to(textRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          })
        },
      });
    };

    // Changer le mot toutes les 3 secondes
    const interval = setInterval(changeWord, 5000);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='z-30 text-[#06060c]'>
      <h1 className='text-[28px] lg:text-[52px]'>
        <span ref={leftTextRef} className="inline-block">
        Communication{" "}
        </span>
        <span
          ref={textRef}
          className={`transition-colors duration-500 inline-block pl-3 z-30 font-semibold`} // Appliquer la couleur dynamique
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {currentWord}
        </span>
        <span ref={rightTextRef} className="inline-block z-10">
          {" "}
          - Sales
        </span>
      </h1>
    </div>
  );
}