"use client";
import React, { useEffect, useRef } from 'react';

const ProgressGradient = () => {
    // Créer des refs pour les conteneurs de progression
    const progressContainersRef = useRef<(HTMLDivElement | null)[]>([]);

    // Fonction helper pour assigner les refs
    const setProgressRef = (index: number) => (el: HTMLDivElement | null) => {
        progressContainersRef.current[index] = el;
    };

    useEffect(() => {
        // Copier la référence pour le cleanup
        const currentContainers = progressContainersRef.current;

        // Créer l'Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const progressBar = entry.target.querySelector('.progress-bar') as HTMLElement | null;
                    
                    if (progressBar) {
                        if (entry.isIntersecting) {
                            progressBar.classList.add('animate-gradient-progress');
                        } else {
                            progressBar.classList.remove('animate-gradient-progress');
                            progressBar.style.height = '0';
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observer tous les conteneurs de progression
        currentContainers.forEach((container) => {
            if (container) {
                observer.observe(container);
            }
        });

        // Cleanup
        return () => {
            currentContainers.forEach((container) => {
                if (container) {
                    observer.unobserve(container);
                }
            });
        };
    }, []);

    return (
        <section className="lg:w-[250px] w-full h-[269px] lg:flex lg:flex-row flex-row justify-end hidden">
            <div 
                className="relative w-full lg:w-[74px] progress-container h-full bg-[#0000FF] overflow-hidden"
                ref={setProgressRef(0)}
            >
                <div className="absolute progress-bar progress-bar-1 bottom-0 w-full bg-gradient-to-t from-[#00FFFF] to-[#D9D9D957]"
                    style={{ height: 0 }}></div>
            </div>
            <div 
                className="relative w-full lg:w-[74px] progress-container h-full bg-[#0000FF] overflow-hidden"
                ref={setProgressRef(1)}
            >
                <div className="absolute progress-bar progress-bar-2 bottom-0 w-full bg-gradient-to-t from-[#E8E8E8] to-[#00FFFF]"
                    style={{ height: 0 }}></div>
            </div>
            <div 
                className="relative w-full lg:w-[74px] progress-container h-full bg-[#0000FF] overflow-hidden"
                ref={setProgressRef(2)}
            >
                <div className="absolute progress-bar progress-bar-3 bottom-0 w-full bg-gradient-to-t from-[#05FC05] to-[#00FFFF]"
                    style={{ height: 0 }}></div>
            </div>
            <div 
                className="relative w-full lg:w-[74px] progress-container h-full bg-[#0000FF] overflow-hidden"
                ref={setProgressRef(3)}
            >
                <div className="absolute progress-bar progress-bar-4 bottom-0 w-full bg-gradient-to-t from-[#FCE258] to-[#FF153E]"
                    style={{ height: 0 }}></div>
            </div>
        </section>
    );
};

export default ProgressGradient;