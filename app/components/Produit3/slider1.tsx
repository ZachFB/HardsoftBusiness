"use client"
import Image from 'next/image';
import { useEffect } from 'react';

const Slider = () => {
    useEffect(() => {
        const slider = document.getElementById("slider") as HTMLElement | null;
        const prevBtn = document.getElementById("prevBtn") as HTMLElement | null;
        const nextBtn = document.getElementById("nextBtn") as HTMLElement | null;

        if (!slider || !prevBtn || !nextBtn) {
            console.error("Impossible de trouver l'un des éléments slider, prevBtn ou nextBtn.");
            return;
        }

        const cardWidth = window.innerWidth < 768 ? window.innerWidth - 40 : 380; // Largeur d'une carte
        const gap = 20; // Espacement entre les cartes
        const slideWidth = cardWidth + gap; // Largeur totale utilisée
        const totalCards = 6; // Nombre de cartes originales
        let currentIndex = totalCards; // Index initial (après les clones ajoutés)

        let isTransitioning = false; // Empêche les clics multiples pendant une transition
        let autoSlideInterval: NodeJS.Timeout | null = null; // Intervalle pour le défilement automatique

        // Clonage des cartes pour un effet infini
        const cards = Array.from(slider.children) as HTMLElement[];
        const clonesStart = cards.map((card) => card.cloneNode(true) as HTMLElement);
        const clonesEnd = cards.map((card) => card.cloneNode(true) as HTMLElement);

        clonesStart.forEach((clone) => slider.appendChild(clone)); // Clones à la fin
        clonesEnd.reverse().forEach((clone) => slider.prepend(clone)); // Clones au début

        // Position initiale du slider (centré sur les cartes originales)
        slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

        // Fonction pour déplacer le slider
        const slide = (direction: "next" | "prev") => {
            if (isTransitioning) return;
            isTransitioning = true;

            // Calcul de l'index en fonction de la direction
            currentIndex += direction === "next" ? 1 : -1;

            // Transition pour le déplacement
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

            slider.addEventListener(
                "transitionend",
                () => {
                    isTransitioning = false;

                    // Gestion des clones : repositionnement fluide
                    if (currentIndex >= totalCards * 2) {
                        currentIndex = totalCards; // Revenir au centre
                        slider.style.transition = "none"; // Supprime temporairement la transition
                        slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
                    } else if (currentIndex < totalCards) {
                        currentIndex = totalCards + totalCards - 1; // Aller à la fin des clones
                        slider.style.transition = "none";
                        slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
                    }
                },
                { once: true }
            );
        };

        // Gestion des boutons de navigation
        prevBtn.addEventListener("click", () => {
            stopAutoSlide(); // Arrêter temporairement le défilement automatique
            slide("prev");
            startAutoSlide(); // Redémarrer le défilement automatique
        });

        nextBtn.addEventListener("click", () => {
            stopAutoSlide();
            slide("next");
            startAutoSlide();
        });

        // Défilement automatique
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(() => slide("next"), 3000);
        };

        const stopAutoSlide = () => {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
        };

        // Initialisation
        slider.style.transition = "none"; // Pas de transition au démarrage
        slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        startAutoSlide();

        // Nettoyage
        return () => {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
        };
    }, []);

    return (
        <div className="h-[595px] w-full border-b border-[#00000026] mt-[66px]">
            {/* <!-- Titre et contrôles --> */}
            <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0 lg:gap-48">
                <span className="w-full md:w-[700px] lg:w-[1000px] md:h-[120px] text-[28px] lg:text-[38px] poppins-semibold ml-[20px] md:ml-[68px] font-black">
                    Notre solution <span className="text-[28px] lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[10px] lg:leading-[48px]">Financial Perfomance Management</span> vous propose principalement :
                </span>
                <section className="flex md:gap-10 gap-4 justify-end">
                    <Image src="/images/ArrowL.svg" id="prevBtn" className="cursor-pointer w-14 h-14" height={100} width={100} alt="Flèche gauche" />
                    <Image src="/images/ArrowR.svg" id="nextBtn" className="cursor-pointer w-14 h-14" height={100} width={100} alt="Flèche droite" />
                </section>
            </div>

            {/* <!-- Slider --> */}
            <div id="slider-container" className="overflow-hidden w-full h-[400px] mt-[25px] md:mt-[52px] relative">
                <div id="slider" className="flex transition-transform duration-500 gap-[32px]">
                    {/* <!-- Cartes --> */}
                    <div className="card flex flex-col justify-center w-full md:w-[380px] h-full">
                        <Image src="/images/cart3.svg" className="w-full h-full" height={100} width={100} alt="Carte 1" />
                        <div className="text-left w-full md:w-[380px]">
                            <p className="mt-[26px] poppins-light text-[16px] w-[301px]">Une plateforme omnicanale qui peut intégrer une infrastructure de paiement électronique pour des opérations financières de commerce électronique, de points de vente (POS), et de gestion des commandes.</p>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center w-full md:w-[380px] h-full">
                        <Image src="/images/carrousel2.gif" className="w-full h-full" height={100} width={100} alt="Carte 2" />
                        <div className="text-left w-full md:w-[380px]">
                            <p className="mt-[26px] poppins-light text-[16px] w-[344px]">Une plateforme de budgétisation financière avancée pour créer, gérer et ajuster les budgets avec précision.</p>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center w-full md:w-[380px] h-full">
                        <Image src="/images/cart2.svg" className="w-full h-full" height={100} width={100} alt="Carte 3" />
                        <div className="text-left w-full md:w-[380px]">
                            <p className="mt-[26px] poppins-light text-[16px] w-[307px]">Des outils de prévision financière  pour anticiper les flux de trésorerie, les revenus, et les dépenses futures en fonction de différents scénarios.</p>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center w-full md:w-[380px] h-full">
                        <Image src="/images/cart4.svg" className="w-full h-full" height={100} width={100} alt="Carte 4" />
                        <div className="text-left w-full md:w-[380px]">
                            <p className="mt-[26px] poppins-light text-[16px] w-[301px]">Des espaces de planification stratégique intégrant l’intervention de consultants experts en projets d'innovation, d'investissement, de réinvestissement, de capitalisation et de restructuration.</p>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center w-full md:w-[380px] h-full">
                        <Image src="/images/carrousel1.gif" className="w-full h-full" height={100} width={100} alt="Carte 5" />
                        <div className="text-left w-full md:w-[380px]">
                            <p className="mt-[26px] poppins-light text-[16px] w-[344px]">Des modules de suivi budgétaire en temps réel pour surveiller l'exécution des budgets alloués et anticiper les dépassements.</p>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center w-full md:w-[380px] h-full">
                        <Image src="/images/cart5.png" className="w-full h-full" height={100} width={100} alt="Carte 6" />
                        <div className="text-left w-full md:w-[380px]">
                            <p className="mt-[26px] poppins-light text-[16px] w-[307px]">Une plateforme omnicanale qui peut intégrer une infrastructure de paiement électronique pour des opérations financières de commerce électronique, de points de vente (POS), et de gestion des commandes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;