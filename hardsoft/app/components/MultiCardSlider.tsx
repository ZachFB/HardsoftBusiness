"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const MultiCardSlider = () => {
  return (
    <div className="relative">
      {/* Slider */}
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={20} // Espace entre les cartes
        slidesPerView={3} // Par défaut
        breakpoints={{
          300: { slidesPerView: 1 }, // 1 cartes sur les écrans >= 300px
          640: { slidesPerView: 2 }, // 2 cartes sur les écrans >= 640px
          1024: {slidesPerView: 3}, //  3 cartes sur les écrans >= 1024px
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }} // Configuration des flèches de navigation
        scrollbar={{
          draggable: true,
          el: '.swiper-scrollbar', // Cible la barre de défilement
        }} // Configuration de la barre de défilement
        className="w-full"
      >
        {/* Exemple de cartes */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <SwiperSlide key={item} className='py-20 px-2'>
            <div className='bg-[#0000FF] px-[-4px] rounded-[30px] pt-3 ml-3'>
            <div className="bg-white p-9 rounded-[20px] flex flex-col gap-2 shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]">
              <h3 className="text-xl font-light text-[20px]">Investment Perfomance Management</h3>
              <p className="text-[16px] mb-4">Nous pouvons intégrer des portails où vos clients pourront accéder à leurs commandes, factures, et documents contractuels, </p>
              <Link href={"/"} className='underline text-[20px] font-thin'>Learn more</Link>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Barre de défilement personnalisée */}
      <div className="swiper-scrollbar !h-[25px] flex items-center !bg-white border border-black !px-2 !rounded-full">
        <div className="swiper-scrollbar-drag !h-[11px] !bg-gray-400 !rounded-full"></div>
      </div>

      {/* Flèches de navigation personnalisées */} 
      <div className="swiper-button-next !right-0 !left-auto !text-blue-500 !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"></div>
      <div className="swiper-button-prev !left-0 !right-auto !text-blue-500 !bg-white !w-10 !h-10 !rounded-full !shadow-lg hover:!bg-blue-50 transition-all after:!text-xl after:!font-bold"></div>
    </div>
  );
};

export default MultiCardSlider;