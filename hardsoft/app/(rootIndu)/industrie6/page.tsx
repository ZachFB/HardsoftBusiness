import Slider2 from '@/app/components/Industrie6/slider'
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
                        <h3 className='text-[14px] uppercase'>Agriculture</h3>
                        <h1 className='text-[38px] lg:text-[52px]'>🌱 L’IA au Service d’une Agriculture Plus Intelligente et Performante</h1>
                        <p>Nos agents IA avancés révolutionnent l’agriculture en optimisant la gestion des cultures, en surveillant les conditions climatiques et en améliorant l’utilisation des ressources. Grâce à l’analyse de données en temps réel, augmentez vos rendements tout en réduisant les coûts et l’impact environnemental.</p>
                        <div className='flex gap-6'>
                            <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
                            <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
                        </div>
                    </div>
                </section>

                <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
                    <Image src="/images/heroIndu6.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
                    <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
                </section>

            </div>



            <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
                <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
                    <span className='text-[16px] leading-[18.91px]'>L’agriculture moderne fait face à des défis majeurs : gestion des sols, préservation des ressources, et maximisation des rendements tout en réduisant les pertes. L’intelligence artificielle apporte des solutions innovantes en analysant les données environnementales, en anticipant les maladies des cultures et en optimisant l’irrigation et la fertilisation.
                        Nos agents IA utilisent des algorithmes avancés pour surveiller les conditions météorologiques, détecter les anomalies dans les cultures et proposer des recommandations précises aux agriculteurs. Ils permettent ainsi une gestion plus efficace des terres agricoles et une réduction significative des pertes liées aux conditions climatiques et aux maladies des plantes.
                        Avec l’IA, l’agriculture devient plus précise, durable et rentable, garantissant une production optimisée tout en respectant l’environnement.
                    </span>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[20px]'>Principales caractéristiques :</h1>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation de la gestion des cultures et des ressources 🌾 – Nos agents IA analysent les sols, les conditions climatiques et les besoins des plantes pour maximiser la productivité agricole.</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Surveillance intelligente et détection précoce des maladies 🦠 – Grâce à l’IA, identifiez rapidement les menaces pour vos cultures et appliquez des solutions adaptées avant qu’elles ne se propagent.</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Gestion durable de l’eau et des fertilisants 💧 – L’IA optimise l’irrigation et l’apport en nutriments pour réduire les gaspillages et améliorer l’impact environnemental.</p>
                        </div>

                    </div>
                </section>

                <section className='flex flex-col gap-10 w-[80%] lg:w-[50%]'>
                    <div className='flex lg:flex-row flex-col gap-12 w-full'>
                        <span className='bg-[#0000FF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
                        <div className='h-[160px] w-auto flex relative'>
                            <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
                            <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
                            <Image src="/images/indu99.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
                            <Image src="/images/indu11.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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