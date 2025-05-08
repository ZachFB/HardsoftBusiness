"use client"

import React, { useState, useEffect, useRef } from 'react';

const SliderServ = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderContent = [
        {
            h2: "Pour réduire vos coûts énergétiques :",
            paragraph: "Nos consultants vous aident à identifier des solutions pour diminuer vos dépenses énergétiques tout en optimisant vos opérations."
        },
        {
            h2: "Respecter les obligations réglementaires :",
            paragraph: "Nous vous guidons pour assurer votre conformité avec les lois environnementales, évitant ainsi les sanctions et améliorant votre crédibilité."
        },
        {
            h2: "Améliorer votre image de marque :",
            paragraph: "En adoptant des pratiques durables, vous renforcez votre réputation auprès des clients, des partenaires et des investisseurs."
        },
        {
            h2: "Contribuer à la lutte contre le changement climatique :",
            paragraph: "En intégrant des pratiques de décarbonation, vous jouez un rôle actif dans la protection de l'environnement."
        },
        {
            h2: "Renforcer votre compétitivité et votre résilience :",
            paragraph: "Nos recommandations stratégiques vous positionnent avantageusement dans un marché de plus en plus orienté vers le développement durable, vous assurant une croissance durable à long terme."
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
            <section className="w-[100px] mt-[35px] flex justify-between">
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