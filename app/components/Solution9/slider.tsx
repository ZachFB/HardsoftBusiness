"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const CardSlider = () => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [sliderHeight, setSliderHeight] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    
    const sliderObjects = [
        {
            first: "Startups Deeptech, Fintech, Edtech, Cleantech",
            second: `Boostez la Performance de Votre Startup Deeptech avec Notre Solution PEM "Accélérez l'innovation et la croissance de votre startup Deeptech grâce à des outils de gestion de la performance conçus pour les entreprises technologiques de pointe."`
        },
        {
            first: "Startups Deeptech, Fintech, Edtech, Cleantech",
            second: `"Nos solutions PEM permettent aux startups Deeptech de gérer efficacement leurs finances, de suivre les projets d'innovation, et de maximiser leur potentiel de croissance."`
        },
    ];

    // Observer les changements de hauteur
    useEffect(() => {
        if (!sliderRef.current) return;
        
        // Stocker la référence actuelle dans une variable locale
        const sliderElement = sliderRef.current;
        
        const updateHeight = () => {
            setSliderHeight(sliderElement.clientHeight);
        };
        
        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(sliderElement);
        
        updateHeight();
        
        return () => {
            // Utiliser la variable locale capturée
            resizeObserver.unobserve(sliderElement);
        };
    }, []);

    return (
        <div className="w-full" ref={sliderRef}>
            <div className="relative w-full lg:px-6 px-0">
                <Swiper
                    modules={[Navigation, Scrollbar, Autoplay]}
                    slidesPerView={1}
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    scrollbar={{
                        draggable: true,
                        el: '.swiper-scrollbar',
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="w-full"
                    autoHeight={true}
                >
                    {sliderObjects.map((item, index) => (
                        <SwiperSlide key={index} className='pt-5 px-2'>
                            <div className="flex flex-col gap-2">
                                <h1 className="lg:text-[35px] text-[29px] leading-[38px] lg:leading-[48px] font-black">
                                    {item.first}
                                    <span
                                        className="text-[29px] font-semibold lg:text-[35px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                                    </span>
                                </h1>
                                <span className="mt-[20px] lg:mt-[40px] text-[16px] text-center lg:text-[18px] text-[#494949] font-medium pb-10">
                                    {item.second}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Flèches de navigation personnalisées avec positionnement adaptatif */}
                <div 
                    className="swiper-button-next !text-blue-500 !right-[-10px] !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"
                    
                ></div>
                <div 
                    className="swiper-button-prev !text-blue-500 !left-[-10px] !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"
                ></div>
            </div>
        </div>
    );
};

export default CardSlider;