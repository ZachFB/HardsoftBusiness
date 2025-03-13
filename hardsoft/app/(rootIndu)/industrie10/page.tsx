import Slider2 from '@/app/components/Industrie10/slider'
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
                        <h3 className='text-[14px] uppercase'>Sécurité & Surveillance</h3>
                        <h1 className='text-[38px] lg:text-[52px]'>🛡️ L’IA pour une Sécurité et une Surveillance Intelligentes</h1>
                        <p>
                            Nos agents IA avancés analysent en temps réel les flux vidéo, détectent les anomalies et optimisent la gestion des risques. Grâce à l’intelligence prédictive, bénéficiez d’une surveillance proactive et d’une protection renforcée pour prévenir les menaces et sécuriser vos environnements.
                        </p>
                        <div className='flex gap-6'>
                            <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
                            <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
                        </div>
                    </div>
                </section>

                <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
                    <Image src="/images/heroIndu10.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
                    <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
                </section>

            </div>


            <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
                <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
                    <span className='text-[16px] leading-[18.91px]'>
                        L’intelligence artificielle révolutionne la sécurité et la surveillance, en apportant une réactivité accrue et une précision inégalée. Nos agents IA analysent en continu les flux vidéo, détectent les comportements suspects et alertent en cas d’anomalie, garantissant une surveillance efficace et proactive.
                        Grâce à l’analyse prédictive, ils identifient les menaces potentielles avant qu’elles ne se produisent et permettent d’optimiser les stratégies de sécurité. L’IA facilite également la gestion des accès, la reconnaissance d’intrusion et le suivi des incidents, réduisant les risques tout en améliorant la réactivité des équipes.
                        Que ce soit pour la sécurité des infrastructures, la protection des données ou la gestion des foules, nos agents IA s’intègrent parfaitement aux systèmes existants pour offrir une surveillance intelligente, continue et fiable.
                    </span>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[20px]'>Principales caractéristiques :</h1>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Détection et analyse en temps réel 🔍 – L’IA surveille en continu les flux et détecte toute activité anormale.
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Identification des menaces et réponse automatisée ⚠️ – Nos agents IA évaluent les risques et déclenchent des alertes instantanées.
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation de la gestion des accès 🔑 – L’IA contrôle les entrées et sorties pour sécuriser les infrastructures sensibles.
                            </p>
                        </div>

                    </div>
                </section>

                <section className='flex flex-col gap-10 w-[80%] lg:w-[50%]'>
                    <div className='flex lg:flex-row flex-col gap-12 w-full'>
                        <span className='bg-[#0000FF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
                        <div className='h-[160px] w-auto flex relative'>
                            <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
                            <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
                            <Image src="/images/indu18.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
                            <Image src="/images/indu19.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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