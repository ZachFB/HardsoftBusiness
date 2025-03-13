import Slider2 from '@/app/components/Industrie8/slider'
import ListeIndu from '@/app/components/listeIndu'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex lg:flex-row flex-col h-auto bg-[#0000FF] py-6 lg:mt-[34px]'>

                <section className='flex  w-full lg:w-[52%] h-[575px] text-white'>
                    <span className='w-[69px] h-[599px] from-[#0000FF] to-[#00FFFF] bg-gradient-to-b'></span>
                    <div className='w-full h-full flex flex-col gap-4 justify-center px-8'>
                        <h3 className='text-[14px] uppercase'>Énergie & Environnement</h3>
                        <h1 className='text-[38px] lg:text-[52px]'>⚡ Optimisation Énergétique et Gestion Durable grâce à l’IA</h1>
                        <p>Nos agents IA intelligents révolutionnent le secteur de l’énergie et de l’environnement en optimisant la consommation, en prédisant les besoins énergétiques et en améliorant la gestion des ressources. Grâce à l’analyse de données avancée, réduisez le gaspillage, améliorez l’efficacité et favorisez une transition vers un avenir plus durable.</p>
                        <div className='flex gap-6'>
                            <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
                            <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
                        </div>
                    </div>
                </section>

                <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
                    <Image src="/images/heroIndu8.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
                    <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
                </section>

            </div>


            <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
                <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
                    <span className='text-[16px] leading-[18.91px]'>
                        L’intelligence artificielle transforme la manière dont nous produisons, distribuons et consommons l’énergie. Face aux défis environnementaux et à la nécessité d’une gestion plus durable des ressources, les agents IA offrent des solutions avancées pour une meilleure optimisation énergétique et une réduction de l’empreinte carbone.
                        Grâce à l’analyse en temps réel, nos technologies ajustent la distribution de l’énergie en fonction de la demande, prévoient les pics de consommation et optimisent l’utilisation des infrastructures énergétiques. Que ce soit pour la gestion des réseaux intelligents (smart grids), le suivi des émissions de CO₂ ou l’amélioration de l’efficacité des systèmes énergétiques, l’IA permet une prise de décision plus rapide et plus précise.
                        En combinant puissance de calcul et algorithmes prédictifs, nous contribuons à une transition énergétique plus responsable, alliant performance et durabilité.
                    </span>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[20px]'>Principales caractéristiques :</h1>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Prédiction et ajustement de la consommation énergétique ⚙️ – Nos agents IA analysent la demande en temps réel pour optimiser l’allocation des ressources.
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Surveillance et réduction de l’empreinte carbone 🌍 – Des analyses avancées permettent de suivre et d’améliorer l’impact environnemental des activités énergétiques.</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation des énergies renouvelables et des smart grids ⚡ – L’IA améliore l’intégration des énergies vertes et maximise l’efficacité des réseaux intelligents.</p>
                        </div>

                    </div>
                </section>

                <section className='flex flex-col gap-10 w-[80%] lg:w-[50%]'>
                    <div className='flex lg:flex-row flex-col gap-12 w-full'>
                        <span className='bg-[#0000FF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
                        <div className='h-[160px] w-auto flex relative'>
                            <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
                            <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
                            <Image src="/images/indu14.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <h2 className='text-[18px]'>Jeudi 13 février 2025</h2>
                            <span className='text-[16px]'>Reggie Clairville</span>
                            <button className='p-3 px-8 rounded-3xl bg-[#0000FF] text-white'><span className="mr-2">&#8594;</span>enregistrer</button>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col gap-12 w-full'>
                        <span className='bg-[#00EDFF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
                        <div className='h-[160px] w-auto flex relative'>
                            <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
                            <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
                            <Image src="/images/indu15.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <h2 className='text-[18px]'>Jeudi 13 février 2025</h2>
                            <span className='text-[16px]'>Reggie Clairville</span>
                            <button className='p-3 px-8 rounded-3xl bg-[#0000FF] text-white'><span className="mr-2">&#8594;</span>enregistrer</button>
                        </div>
                    </div>

                </section>

            </div>

            <Slider2 />

            <ListeIndu/>

        </div>
    )
}

export default page