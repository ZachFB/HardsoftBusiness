"use client"

import React, { useState, useEffect, useRef } from 'react';

const SliderServ = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // Pour gérer l'état de l'animation
    const sliderContent = [
        {
            h2: "Aligner la gestion managériale avec les objectifs stratégiques de l'entreprise :",
            paragraph: "En synchronisant la gestion quotidienne avec la vision à long terme de l'entreprise, les dirigeants s'assurent que chaque action managériale contribue à la réalisation des objectifs stratégiques globaux. Cela évite les efforts dispersés et garantit une cohérence dans l'exécution des plans stratégiques."
        },
        {
            h2: "Améliorer l'efficacité et la cohésion :",
            paragraph: "En définissant clairement les rôles, les responsabilités, et les objectifs, les équipes travaillent plus efficacement, réduisant les redondances et les erreurs. Une gestion bien alignée crée un environnement où les équipes collaborent mieux, renforçant ainsi la cohésion organisationnelle."
        },
        {
            h2: "Préparer les équipes aux défis futurs :",
            paragraph: "En anticipant les besoins futurs et en formant les équipes pour relever ces défis, l'entreprise devient plus agile et résiliente. Les dirigeants peuvent ainsi garantir que leurs équipes sont prêtes à s'adapter aux changements du marché, aux nouvelles technologies, ou aux évolutions réglementaires, assurant ainsi la pérennité de l'entreprise."
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