import Slider2 from '@/app/components/Industrie7/slider'
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
                        <h3 className='text-[14px] uppercase'>Hôtellerie & Restauration</h3>
                        <h1 className='text-[38px] lg:text-[52px]'>🍽️ L’IA au Service d’une Expérience Client Unique et d’une Gestion Optimisée</h1>
                        <p>Nos agents IA avancés transforment le secteur de l’hôtellerie et de la restauration en améliorant la gestion des réservations, l’optimisation des stocks et la personnalisation des services. Offrez une expérience fluide et mémorable à vos clients tout en réduisant les coûts et en maximisant l’efficacité opérationnelle.</p>
                        <div className='flex gap-6'>
                            <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
                            <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
                        </div>
                    </div>
                </section>

                <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
                    <Image src="/images/heroIndu7.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
                    <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
                </section>

            </div>


            <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
                <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
                    <span className='text-[16px] leading-[18.91px]'>
                        L’hôtellerie et la restauration évoluent dans un environnement exigeant, où l’expérience client et l’efficacité opérationnelle sont essentielles. L’intelligence artificielle apporte une valeur ajoutée en automatisant la gestion des réservations, en analysant les préférences des clients et en optimisant la gestion des stocks et des ressources.
                        Nos agents IA sont capables d’anticiper la demande, de personnaliser les services en fonction des attentes des clients et de simplifier les opérations quotidiennes. Grâce à l’analyse de données avancée et à l’apprentissage automatique, ils permettent une prise de décision rapide et efficace, améliorant ainsi la satisfaction client et la rentabilité.
                        Avec l’IA, l’hôtellerie et la restauration deviennent plus fluides, intelligentes et adaptées aux nouveaux besoins du marché.
                    </span>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[20px]'>Principales caractéristiques :</h1>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Gestion intelligente des réservations et du taux d’occupation 🏨 – Nos agents IA optimisent la disponibilité des chambres et des tables en fonction des tendances et de la demande.
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Personnalisation avancée de l’expérience client 🍷 – Grâce à l’analyse des préférences, l’IA permet d’offrir des recommandations et des services sur mesure.</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
                            <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation des stocks et des approvisionnements 📦 – Anticipez les besoins et réduisez le gaspillage alimentaire grâce à une gestion IA des ressources.</p>
                        </div>

                    </div>
                </section>

                <section className='flex flex-col gap-10 w-[80%] lg:w-[50%]'>
                    <div className='flex lg:flex-row flex-col gap-12 w-full'>
                        <span className='bg-[#0000FF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
                        <div className='h-[160px] w-auto flex relative'>
                            <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
                            <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
                            <Image src="/images/indu12.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
                            <Image src="/images/indu13.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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