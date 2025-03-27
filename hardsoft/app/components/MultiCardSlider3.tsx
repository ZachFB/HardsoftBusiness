"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MultiCardSlider3 = () => {

  const [IAManag, setIAManag] = useState(
    [
      {
        title: "Prévisions financières automatisées",
        details: "L’agent autonome prédit les flux de trésorerie, les recettes et les dépenses, améliorant la planification financière à long terme."
      },
      {
        title: "Gestion des risques financiers",
        details: "L’agent  autonome vous communique son analyse des risques financiers et vous propose des stratégies d'atténuation des risques que vous pouvez vérifiez et valider."
      },
      {
        title: "Optimisation des dépenses",
        details: "L'agent autonome analyse les dépenses de votre entreprise pour recommander des domaines où des économies pouvant être réalisées."
      },
      {
        title: "Automatisation des rapports financiers",
        details: "L'agent génère des rapports financiers en temps réel, réduisant ainsi le temps consacré à la production de vos rapports manuels."
      },
      {
        title: "Détection de fraudes",
        details: "L'agent analyse les transactions financières pour repérer des anomalies et identifier des activités suspectes en temps réel."
      }
    ]
  );
  
  
  return (
    <div className="relative w-full">
      {/* Conteneur principal avec padding pour les flèches */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            300: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom3',
            prevEl: '.swiper-button-prev-custom3',
          }}
          scrollbar={{
            draggable: true,
            el: '.swiper-scrollbar-custom3',
          }}
          className="w-full"
        >
          {IAManag.map((item, index) => (
            <SwiperSlide key={index} className='py-20 px-1 w-full'>
              <div className='bg-[#0000FF] px-[-4px] rounded-[30px] pt-3 ml-1'>
                <div className="bg-white p-9 rounded-[20px] flex flex-col gap-2 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]">
                  <h3 className="text-xl font-light text-[20px]">{item.title}</h3>
                  <p className="text-[16px] mb-4">{item.details}</p>
                  <Link href={"/"} className='underline text-[20px] font-thin'>Learn more</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flèches de navigation positionnées absolument */}
        <div className="swiper-button-prev-custom3 !absolute !left-[-50px] !top-1/2 !-translate-y-1/2 !z-10 !text-[#0000FF] !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"><ChevronLeft size={40} /></div>
        <div className="swiper-button-next-custom3 !absolute !right-[-50px] !top-1/2 !-translate-y-1/2 !z-10 !text-[#0000FF] !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"><ChevronRight size={40} /></div>
      </div>

      {/* Barre de défilement en dessous */}
      <div className="swiper-scrollbar-custom3 !h-[25px] !mt-4 !relative !z-10 flex items-center !bg-white border border-black !px-2 !rounded-full">
        <div className="swiper-scrollbar-drag !h-[11px] !bg-gray-400 !rounded-full"></div>
      </div>
    </div>
  );
};

export default MultiCardSlider3;