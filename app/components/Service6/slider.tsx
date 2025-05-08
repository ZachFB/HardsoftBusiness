"use client"

import React, { useState, useEffect, useRef } from 'react';

const SliderServ = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderContent = [
        {
            h2: "Pour stabiliser l'entreprise :",
            paragraph: "Nos consultants interviennent pour apporter des solutions rapides et efficaces afin de gérer les crises et stabiliser l'organisation."
        },
        {
            h2: "Restaurer la rentabilité :",
            paragraph: "Grâce à des stratégies ciblées, nous aidons à rétablir une gestion financière saine, permettant à l'entreprise de redevenir rentable."
        },
        {
            h2: "Repositionner l'entreprise pour un avenir plus solide :",
            paragraph: "En réorientant les ressources et en adaptant les stratégies, nous aidons à redéfinir la position de l'entreprise sur le marché, assurant sa pérennité et sa croissance future."
        },
    ];

   const autoSlideTimer = useRef<NodeJS.Timeout | null>(null);
  
      useEffect(() => {
          const autoSlide = () => {
              autoSlideTimer.current = setInterval(() => {
                  setIsAnimating(true); // Déclenche l'animation
                  setTimeout(() => {
                      setCurrentSlide(prev => (prev + 1) % sliderContent.length);
                      setIsAnimating(false); // Termine l'animation
                  }, 500); // Durée de l'animation
              }, 9000);
          };
      
          autoSlide();
          return () => {
              if (autoSlideTimer.current) {
                  clearInterval(autoSlideTimer.current);
              }
          };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      
      const updateSlider = (index:number) => {
          setIsAnimating(true); // Déclenche l'animation
          setTimeout(() => {
              setCurrentSlide(index);
              setIsAnimating(false); // Termine l'animation
              if (autoSlideTimer.current) {
                  clearInterval(autoSlideTimer.current);
              }
              autoSlideTimer.current = setInterval(() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                      setCurrentSlide(prev => (prev + 1) % sliderContent.length);
                      setIsAnimating(false);
                  }, 500);
              }, 9000);
          }, 500); // Durée de l'animation
      };

    return (
        <div>
            <section className="lg:mt-[100px] mt-10 lg:w-[771px] w-full">
                <div
                    id="slider-container"
                    className={`transition-transform duration-500 ${isAnimating ? 'animate-slide-out' : 'animate-slide-in'}`}
                >
                    <p className="lg:w-[771px] w-full text-[24px] leading-[24px] poppins-light text-justify">
                        {sliderContent[currentSlide].h2}
                    </p>
                    <p className="text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                        {sliderContent[currentSlide].paragraph}
                    </p>
                </div>
            </section>
            <section className="w-[80px] mt-[35px] flex justify-between">
                {sliderContent.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => updateSlider(index)}
                        className={`button w-[15px] h-[15px] rounded-[50%] border border-white ${currentSlide === index ? 'active' : ''}`}
                    ></span>
                ))}
            </section>
        </div>
    );
};

export default SliderServ;