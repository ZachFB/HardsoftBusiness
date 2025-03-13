import Slider2 from '@/app/components/Industrie11/slider'
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
                        <h3 className='text-[14px] uppercase'>Politiques Publiques</h3>
                        <h1 className='text-[38px] lg:text-[52px]'>🏛️ L’IA au Service des Politiques Publiques</h1>
                        <p>
                            Nos agents IA spécialisés analysent les données, anticipent les tendances et optimisent la prise de décision pour des politiques publiques plus efficaces. Grâce à l’intelligence prédictive, améliorez la gestion des ressources, la transparence et l’impact des initiatives gouvernementales.
                        </p>
                        <div className='flex gap-6'>
                            <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
                            <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
                        </div>
                    </div>
                </section>

                <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
                    <Image src="/images/heroIndu11.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
                    <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
                </section>

            </div>


            <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
                <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
                    <span className='text-[16px] leading-[18.91px]'>
                        L’intelligence artificielle transforme la conception et la gestion des politiques publiques en offrant des outils puissants d’analyse et d’optimisation. Nos agents IA permettent aux gouvernements et institutions de mieux comprendre les enjeux sociétaux, d’anticiper les besoins des citoyens et de prendre des décisions fondées sur des données fiables.
                        Grâce à l’analyse prédictive, les acteurs publics peuvent identifier des tendances émergentes, ajuster leurs stratégies et maximiser l’impact de leurs actions. L’IA contribue aussi à la transparence administrative, à l’efficacité des services publics et à la gestion intelligente des ressources pour une gouvernance moderne et proactive.
                        Que ce soit pour l’urbanisme, l’éducation, la santé ou l’environnement, nos solutions permettent d’élaborer des politiques plus inclusives et adaptées aux réalités du terrain.
                    </span>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[20px]'>Principales caractéristiques :</h1>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Analyse avancée des données publiques 📊 – L’IA traite de vastes volumes d’informations pour éclairer la prise de décision.
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation de la gestion des services publics 🏢 – Réduction des coûts, amélioration de l’efficacité et anticipation des besoins.
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Renforcement de la transparence et de la participation citoyenne 🗳️ – Des politiques plus accessibles et mieux adaptées grâce à l’IA.
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
                            <Image src="/images/indu20.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
                            <Image src="/images/indu21.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
                            <Image src="/images/indu23.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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