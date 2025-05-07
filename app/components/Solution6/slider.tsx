"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const CardSlider = () => {
    const [sliderHeight, setSliderHeight] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    
    const sliderObjects = [
        {
            first: "Entreprises de plateformes SaaS, Marketplace, E-commerce, Services financiers intégrés, Espace Numérique de travail",
            second: "Entreprises de plateforme SaaS, Marketplace, E-commerce, Services financiers intégrés. Intégrez notre suite logicielle à vos systèmes existants pour prendre en charge l'ensemble du cycle de vie de vos flux financiers (de l'acquisition de clients à la clôture de vos livres, en passant par la collecte de revenus et la déclaration des taxes perçues). La solution complète d'automatisation des revenus et des finances vous permet d'éviter les systèmes surdimensionnés ou fragmentés."
        },
        {
            first: "Entreprises de plateformes SaaS, Marketplace, E-commerce, Services financiers intégrés, Espace Numérique de travail",
            second: "Optimisez la gestion, l'efficacité et la croissance de votre entreprise avec nos solutions PEM, conçues pour répondre aux défis uniques des entreprises SaaS, Marketplace, E-commerce, et Services Financiers Intégrés."
        },
        {
            first: "Entreprises de plateformes SaaS, Marketplace, E-commerce, Services financiers intégrés, Espace Numérique de travail",
            second: `"Nos solutions PEM vous permettent de gérer efficacement les finances, de suivre les performances en temps réel, et d'automatiser les processus clés pour maximiser la croissance et l'innovation dans un environnement numérique compétitif."`
        }
    ];

    // Observer les changements de hauteur
    useEffect(() => {
        if (!sliderRef.current) return;
        
        const updateHeight = () => {
            if (sliderRef.current) {
                setSliderHeight(sliderRef.current.clientHeight);
            }
        };
        
        // Observer pour détecter les changements de taille
        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(sliderRef.current);
        
        // Mise à jour initiale
        updateHeight();
        
        return () => {
            if (sliderRef.current) {
                resizeObserver.unobserve(sliderRef.current);
            }
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
                                <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[18px] text-[#494949] font-medium pb-10">
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