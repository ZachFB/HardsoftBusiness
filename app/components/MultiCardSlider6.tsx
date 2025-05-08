"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MultiCardSlider6 = () => {

  const [IAManag] = useState(
    [
      {
        title: "Développement de nouveaux produits",
        details: "L'agent autonome analyse les tendances du marché et les besoins des clients pour inspirer la création de nouveaux produits innovants."
      },
      {
        title: "Amélioration continue des produits existants",
        details: "L'agent autonome aide à détecter des faiblesses dans les produits actuels et propose des améliorations basées sur les retours des clients."
      },
      {
        title: "Automatisation de la R&D",
        details: "L'agent autonome accélère le processus de recherche et de développement en générant des hypothèses, en analysant des données et en testant des prototypes plus rapidement."
      },
      {
        title: "Personnalisation des produits",
        details: "L'agent autonome analyse les préférences des clients et aide à créer des produits personnalisés pour mieux répondre aux besoins individuels."
      },
      {
        title: "Simulation et test de nouveaux concepts",
        details: "L'agent intelligent communique avec des potentiels utilisateurs pour tester de nouveaux concepts et produits en simulant des scénarios réels avant leur lancement."
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
            nextEl: '.swiper-button-next-custom6',
            prevEl: '.swiper-button-prev-custom6',
          }}
          scrollbar={{
            draggable: true,
            el: '.swiper-scrollbar-custom6',
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
        <div className="swiper-button-prev-custom6 !absolute !left-[-50px] !top-1/2 !-translate-y-1/2 !z-10 !text-[#0000FF] !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"><ChevronLeft size={40} /></div>
        <div className="swiper-button-next-custom6 !absolute !right-[-50px] !top-1/2 !-translate-y-1/2 !z-10 !text-[#0000FF] !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"><ChevronRight size={40} /></div>
      </div>

      {/* Barre de défilement en dessous */}
      <div className="swiper-scrollbar-custom6 !h-[25px] !mt-4 !relative !z-10 flex items-center !bg-white border border-black !px-2 !rounded-full">
        <div className="swiper-scrollbar-drag !h-[11px] !bg-gray-400 !rounded-full"></div>
      </div>
    </div>
  );
};

export default MultiCardSlider6;