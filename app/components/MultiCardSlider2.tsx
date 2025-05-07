"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MultiCardSlider2 = () => {

  const [IAManag, setIAManag] = useState(
    [
      {
        title: "Automatisation du suivi des ventes",
        details: "L’agent autonome pourra suivre vos prospects et vos clients, puis automatiser l'envoi de rappels ou de messages personnalisés basés sur l'historique de l'engagement."
      },
      {
        title: "Analyse prédictive des ventes",
        details: "L’agent autonome pourra prédire les tendances des ventes et les comportements d'achat des clients, permettant de mieux orienter vos efforts commerciaux."
      },
      {
        title: "Personnalisation des offres",
        details: "L'agent autonome analyse les préférences de vos clients et génère des offres personnalisées pour maximiser les chances de conversion."
      },
      {
        title: "Optimisation de la gestion des relations clients",
        details: "L'agent autonome vous aide à anticiper les besoins de vos clients et à ajuster vos stratégies de vente pour améliorer la fidélisation."
      },
      {
        title: "Amélioration de l'engagement client multicanal",
        details: "L'agent autonome optimise la communication avec les clients via plusieurs canaux (e-mail, chatbot, SMS) pour offrir une expérience fluide et réactive à vos clients."
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
            nextEl: '.swiper-button-next-custom2',
            prevEl: '.swiper-button-prev-custom2',
          }}
          scrollbar={{
            draggable: true,
            el: '.swiper-scrollbar-custom2',
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
        <div className="swiper-button-prev-custom2 !absolute !left-[-50px] !top-1/2 !-translate-y-1/2 !z-10 !text-[#0000FF] !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"><ChevronLeft size={40} /></div>
        <div className="swiper-button-next-custom2 !absolute !right-[-50px] !top-1/2 !-translate-y-1/2 !z-10 !text-[#0000FF] !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"><ChevronRight size={40} /></div>
      </div>

      {/* Barre de défilement en dessous */}
      <div className="swiper-scrollbar-custom2 !h-[25px] !mt-4 !relative !z-10 flex items-center !bg-white border border-black !px-2 !rounded-full">
        <div className="swiper-scrollbar-drag !h-[11px] !bg-gray-400 !rounded-full"></div>
      </div>
    </div>
  );
};

export default MultiCardSlider2;