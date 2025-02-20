'use client'

import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'

const SliderSolu = () => {
    type Slide = {
        heading: string;
        paragraph: string;
    };

    const sliderContent: Slide[] = [
        {
            heading: "Demandez une Démo",
            paragraph: "Voyez par vous-même comment notre solution PEM peut répondre aux besoins uniques de votre entreprise.",
        },
        {
            heading: "Contactez-Nous",
            paragraph: "Parlez avec nos experts pour discuter de la manière dont nous pouvons vous aider à atteindre vos objectifs stratégiques et opérationnels.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderContainerRef = useRef<HTMLDivElement>(null);
    const autoSlideTimerRef = useRef<NodeJS.Timeout>();

    const updateSlider = (index: number) => {
        if (!sliderContainerRef.current || isAnimating) return;

        setIsAnimating(true);
        const container = sliderContainerRef.current;
        container.classList.add("animate-slide-out");

        setTimeout(() => {
            setCurrentSlide(index);
            container.classList.remove("animate-slide-out");
            container.classList.add("animate-slide-in");
            
            setTimeout(() => {
                container.classList.remove("animate-slide-in");
                setIsAnimating(false);
            }, 500);
        }, 500);
    };

    const startAutoSlide = () => {
        autoSlideTimerRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % sliderContent.length);
        }, 5000);
    };

    const resetAutoSlide = () => {
        if (autoSlideTimerRef.current) {
            clearInterval(autoSlideTimerRef.current);
        }
        startAutoSlide();
    };

    const handlePrevClick = () => {
        if (isAnimating) return;
        setCurrentSlide(prev => (prev - 1 + sliderContent.length) % sliderContent.length);
        resetAutoSlide();
    };

    const handleNextClick = () => {
        if (isAnimating) return;
        setCurrentSlide(prev => (prev + 1) % sliderContent.length);
        resetAutoSlide();
    };

    // Effect pour gérer l'animation quand currentSlide change
    useEffect(() => {
        if (sliderContainerRef.current) {
            const container = sliderContainerRef.current;
            container.classList.add("animate-slide-out");
            
            setTimeout(() => {
                container.classList.remove("animate-slide-out");
                container.classList.add("animate-slide-in");
                
                setTimeout(() => {
                    container.classList.remove("animate-slide-in");
                }, 500);
            }, 500);
        }
    }, [currentSlide]);

    // Effect pour démarrer le slider automatique
    useEffect(() => {
        startAutoSlide();
        return () => {
            if (autoSlideTimerRef.current) {
                clearInterval(autoSlideTimerRef.current);
            }
        };
    }, []);

    return (
        <div>
            <section className="mt-[48px] w-[460px] overflow-hidden relative">
                <div 
                    ref={sliderContainerRef}
                    className="flex flex-col gap-2 transition-transform duration-500 relative"
                >
                    <h2 className="text-[20px] poppins-semibold mt-[22px] leading-[19.2px]">
                        {sliderContent[currentSlide].heading}
                    </h2>
                    <p className="text-[16px] poppins-light leading-[19.2px]">
                        {sliderContent[currentSlide].paragraph}
                    </p>
                </div>
            </section>
            <section className="w-[120px] mt-[35px] flex justify-between">
                <Image 
                    src="/images/Arrow Left Now .svg" 
                    height={40} 
                    width={40} 
                    alt="Précédent" 
                    onClick={handlePrevClick}
                    className={`cursor-pointer ${isAnimating ? 'pointer-events-none' : ''}`}
                />
                <Image 
                    src="/images/Arrow Right Now .svg" 
                    height={40} 
                    width={40} 
                    alt="Suivant" 
                    onClick={handleNextClick}
                    className={`cursor-pointer ${isAnimating ? 'pointer-events-none' : ''}`}
                />
            </section>
        </div>
    )
}

export default SliderSolu