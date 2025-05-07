"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';

const Slider2: React.FC = () => {
  useEffect(() => {
    class InfiniteSlider {
      private elements: {
        slider: HTMLElement;
        prevButton: HTMLElement;
        nextButton: HTMLElement;
      };
      private currentIndex: number;
      private totalCards: number;
      private isTransitioning: boolean;
      private autoSlideInterval: number | null;

      constructor() {
        const slider = document.getElementById("slider-2");
        const prevButton = document.getElementById("prevBt");
        const nextButton = document.getElementById("nextBt");

        if (!slider || !prevButton || !nextButton) {
          throw new Error("Required slider elements not found");
        }

        this.elements = { slider, prevButton, nextButton };
        this.isTransitioning = false;
        this.autoSlideInterval = null;
        this.totalCards = this.elements.slider.children.length;
        this.currentIndex = this.totalCards;
        
        this.init();
      }

      private cloneCards(): void {
        const cards = Array.from(this.elements.slider.children);
        if (!cards.length) return;

        const clonesStart = cards.map(card => card.cloneNode(true));
        const clonesEnd = cards.map(card => card.cloneNode(true));

        clonesStart.forEach(clone => this.elements.slider.appendChild(clone));
        clonesEnd.reverse().forEach(clone => this.elements.slider.prepend(clone));
      }

      private getSlideWidth(): number {
        if (this.elements.slider.children.length === 0) return 0;
        const firstCard = this.elements.slider.children[0] as HTMLElement;
        const cardRect = firstCard.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(firstCard);
        const marginLeft = parseInt(computedStyle.marginLeft || '0');
        const marginRight = parseInt(computedStyle.marginRight || '0');
        return cardRect.width + marginLeft + marginRight;
      }

      private updateSliderPosition(withTransition: boolean = true): void {
        const slideWidth = this.getSlideWidth();
        this.elements.slider.style.transition = withTransition ? "transform 0.5s ease-in-out" : "none";
        this.elements.slider.style.transform = `translateX(-${slideWidth * this.currentIndex}px)`;
      }

      private slide(direction: 'next' | 'prev'): void {
        if (this.isTransitioning) return;
        this.isTransitioning = true;

        this.currentIndex += direction === "next" ? 1 : -1;
        this.updateSliderPosition();

        const handleTransitionEnd = (): void => {
          this.isTransitioning = false;

          if (this.currentIndex >= this.totalCards * 2) {
            this.currentIndex = this.totalCards;
            this.updateSliderPosition(false);
          } else if (this.currentIndex < this.totalCards) {
            this.currentIndex = this.totalCards + this.totalCards - 1;
            this.updateSliderPosition(false);
          }

          this.elements.slider.removeEventListener('transitionend', handleTransitionEnd);
        };

        this.elements.slider.addEventListener('transitionend', handleTransitionEnd);
      }

      private startAutoSlide(): void {
        this.stopAutoSlide();
        this.autoSlideInterval = window.setInterval(() => {
          this.slide('next');
        }, 6000);
      }

      private stopAutoSlide(): void {
        if (this.autoSlideInterval) {
          clearInterval(this.autoSlideInterval);
          this.autoSlideInterval = null;
        }
      }

      private init(): void {
        this.cloneCards();
        this.updateSliderPosition(false);
        
        this.elements.nextButton.addEventListener('click', () => {
          this.stopAutoSlide();
          this.slide('next');
          this.startAutoSlide();
        });

        this.elements.prevButton.addEventListener('click', () => {
          this.stopAutoSlide();
          this.slide('prev');
          this.startAutoSlide();
        });

        this.startAutoSlide();
      }
    }

    // Initialize slider
    let slider: InfiniteSlider;
    try {
      slider = new InfiniteSlider();
    } catch (error) {
      console.error("Failed to initialize slider:", error);
    }

    // Cleanup function
    return () => {
      const sliderElement = document.getElementById("slider-2");
      if (sliderElement) {
        sliderElement.style.transform = '';
        sliderElement.style.transition = '';
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="mt-[90px]">
        <div className="flex w-full gap-10 md:gap-0 lg:gap-48">
            <span className="lg:w-[890px] w-full h-auto text-[28px] lg:text-[38px] poppins-semibold ml-[20px] md:ml-[68px] font-black">
                <span className="lg:text-[40px] text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-[#0000FF] via-[#00FFFF] to-[#008000] font-bold text-4xl ml-2">
                Flux de travail associés
                </span>
            </span>
            <section className="flex md:gap-10 gap-4 justify-end">
                <Image src="images/ArrowL.svg" id="prevBt" className="cursor-pointer" height={50} width={50} alt="Flèche gauche" />
                <Image src="images/ArrowR.svg" id="nextBt" className="cursor-pointer" height={50} width={50} alt="Flèche droite" />
            </section>
        </div>

        {/* Slider */}
        <div id="slider-container-2" className="overflow-hidden w-full h-[700px] mt-[25px] md:mt-[52px] border-b border-[#00000026]">
            <div id="slider-2" className="flex transition-transform duration-500 gap-3">
                {/* Cartes */}
                <div className="card lg:min-w-[80%] min-w-[90%] mx-4 h-[597.69px] bg-contain bg-left bg-no-repeat border-[#00000026] border rounded-[25px] flex flex-col justify-center lg:items-end items-center"
                    style={{ backgroundImage: `url("images/funColor3.svg")` }}>
                    <div className="lg:w-1/2 w-[80%] lg:pr-16 lg:bg-transparent bg-[#a3f7ffd3] p-6 rounded-xl">
                        <span className="block md:text-[28px] text-[16px] md:leading-[48px] leading-[24px] font-black mb-6">
                        🚛 Optimisation du transport et des itinéraires
                        </span>
                        <p className="font-light text-[16px]">
                        Nos agents IA analysent le trafic, les coûts et les délais pour choisir les itinéraires les plus rapides et les plus économiques.
                        </p>
                    </div>
                </div>

                <div className="card lg:min-w-[80%] min-w-[90%] mx-4 h-[597.69px] bg-contain bg-left bg-no-repeat border-[#00000026] border rounded-[25px] flex flex-col justify-center lg:items-end items-center"
                    style={{ backgroundImage: `url("images/funColor4.png")` }}>
                    <div className="lg:w-1/2 w-[80%] lg:pr-16 lg:bg-transparent bg-[#a3f7ffd3] p-6 rounded-xl">
                        <span className="block md:text-[28px] text-[16px] md:leading-[48px] leading-[24px] font-black mb-6">
                        📦 Gestion prédictive des stocks
                        </span>
                        <p className="font-light text-[16px]">
                        L’IA anticipe les fluctuations de la demande et ajuste les niveaux de stock pour éviter les ruptures ou le surstockage.
                        </p>
                    </div>
                </div>

                <div className="card lg:min-w-[80%] min-w-[90%] mx-4 h-[597.69px] bg-contain bg-left bg-no-repeat border-[#00000026] border rounded-[25px] flex flex-col justify-center lg:items-end items-center"
                    style={{ backgroundImage: `url("images/funColor5.png")` }}>
                    <div className="lg:w-1/2 w-[80%] lg:pr-16 lg:bg-transparent bg-[#a3f7ffd3] p-6 rounded-xl">
                        <span className="block md:text-[28px] text-[16px] md:leading-[48px] leading-[24px] font-black mb-6">
                        ⚙️ Automatisation des opérations logistiques
                        </span>
                        <p className="font-light text-[16px]">
                        De la gestion des commandes à l’assignation des ressources, nos agents IA optimisent chaque étape pour réduire les délais et maximiser l’efficacité.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Slider2;