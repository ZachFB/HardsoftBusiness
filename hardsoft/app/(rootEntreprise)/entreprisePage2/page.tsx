import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div
                className="w-full m-auto max-w-[1300px] h-auto lg:h-[494px] rounded-[15px] mt-[26px] flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 lg:gap-4 p-4">
                {/* <!-- Texte --> */}
                <div className="w-full lg:w-[45%] lg:px-10 flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                    <span className="poppins-light text-[12px]">Entreprises</span>
                    <span
                        className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[60px] bg-gradient-to-r from-[#0000FF] via-[#00FFFF] to-[#0000FF] bg-clip-text text-transparent leading-[38px] lg:leading-[78px]">
                        Comment vous satisfaire ?
                    </span>
                    <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[24px] text-[#494949] font-medium">
                    Une plateforme sécurisée et performante                    
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">

                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] lg:ml-20 h-[250px] md:h-[350px] lg:h-[494px] rounded-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroEntreprise2.jpg)` }}></div>
            </div>


            <div className='bg-[#f6f8fc] flex justify-center lg:p-20 py-20 mt-20'>
                <p className='text-[16px] text-center lg:text-[18px] lg:w-[70%] w-[90%]'>Nous mettons à disposition une plateforme sécurisée de robots-copilots conversationnels, spécialement conçue pour accompagner les entreprises dans leurs prises de décisions stratégiques. Ces outils avancés analysent de volumineuses quantités de données en temps réel, permettant d’anticiper les risques et de proposer des actions adaptées aux besoins spécifiques de chaque organisation.</p>
            </div>
            
            <div className='flex justify-center w-full'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-14 mt-20 mb-24 w-[80%] place-items-center'>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Une gestion optimisée de la performance commerciale
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robots-conseillers améliorent la performance commerciale des entreprises en analysant les tendances du marché, en optimisant les stratégies de vente et en identifiant les meilleures opportunités de croissance. Grâce à une vision data-driven, ils permettent aux équipes commerciales d’accroître leur efficacité et d’augmenter leur taux de conversion.                        
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image14.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <section className='w-auto h-auto'>
                        <Image src="/images/image10.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Un pilotage stratégique des investissements
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Le Investment Performance Management est crucial pour maximiser la rentabilité des investissements. Nos robots évaluent les opportunités financières, analysent les risques associés et recommandent des stratégies d’investissement optimisées. Ils offrent également un suivi en temps réel pour garantir des ajustements stratégiques en fonction de l’évolution des marchés.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Une gestion financière intelligente
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Le Financial Performance Management permet aux entreprises de mieux gérer leurs finances en optimisant leurs flux de trésorerie, en réduisant les coûts inutiles et en améliorant la rentabilité globale. Nos robots conseillers analysent les états financiers, détectent les inefficacités et proposent des solutions adaptées pour renforcer la stabilité financière.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image12.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <section className='w-auto h-auto'>
                        <Image src="/images/image8.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Une optimisation de la chaîne d’approvisionnement                       
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos solutions en Supply Chain Performance permettent d’améliorer la gestion logistique en automatisant l’analyse des stocks, en prévoyant la demande et en optimisant les processus d’approvisionnement. Cela se traduit par une réduction des coûts, une meilleure fluidité des opérations et une satisfaction accrue des clients.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Une amélioration des performances de production
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Grâce au Production Performance Management, nous aidons les entreprises à optimiser leurs processus industriels. Nos robots surveillent la qualité, la productivité et la maintenance des équipements, réduisant ainsi les temps d’arrêt et augmentant l’efficacité des opérations.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image27.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <section className='w-auto h-auto'>
                        <Image src="/images/indu33.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Un moteur d’innovation pour l’entreprise
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        L’Enterprise Performance Innovation repose sur une approche proactive de l’amélioration continue. Nos robots identifient les tendances émergentes, suggèrent des innovations adaptées et accompagnent la mise en place de nouvelles stratégies, permettant ainsi aux entreprises de rester compétitives dans leur secteur.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Une sécurité stratégique renforcée
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Le Strategy Security Performance assure la protection des données et des opérations stratégiques de l’entreprise. Nos solutions intègrent des algorithmes avancés pour détecter les menaces potentielles, anticiper les cyberattaques et garantir un niveau élevé de sécurité informationnelle.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image26.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <section className='w-auto h-auto'>
                        <Image src="/images/image23.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Une gestion intelligente des bâtiments
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Grâce au Smart Building Performance, nos robots aident les entreprises à optimiser la gestion de leurs infrastructures. Ils analysent la consommation énergétique, améliorent la maintenance prédictive et veillent à l’optimisation des espaces de travail, garantissant ainsi une meilleure efficacité opérationnelle et une réduction des coûts énergétiques.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Un accompagnement en temps réel et sur mesure
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        L’un des points forts de nos robots-copilots conversationnels est leur capacité à fournir des recommandations en temps réel et à exécuter des plans d’action automatisés. Grâce à leur intelligence artificielle avancée, ils s’adaptent aux besoins spécifiques de chaque entreprise et garantissent une amélioration continue des performances.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image22.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                </div>
            </div>


            <div className="w-full h-auto flex justify-center text-[#FFFFFF] mb-24">
                <div className="bg-[#9B0069] py-20 w-[90%] h-full flex lg:flex-row flex-col justify-center items-center rounded-2xl gap-8">
                    <section className="lg:w-[45%] w-[80%]">
                        <h1 className="text-[32px]">Le Diag Data IA, une brique essentielle dans le programme France 2030</h1>
                        <div className="flex flex-col gap-9 mt-4">
                            <p>Découvrez le programme d’accompagnement IA Booster, composé de 4 phases :</p>
                            <div className="flex gap-2 items-start"><Image src="/images/5ac.svg" alt="alt" width={40} height={40} />
                                <div className="flex flex-col">
                                    <h2 className="text-[20px]"></h2>
                                    <p className="text-[16px]">Un autodiagnostic pour évaluer la capacité de votre entreprise à conduire des projets d'IA en 15 minutes.</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-start"><Image src="/images/6ac.svg" alt="alt" width={40} height={40} />
                                <div className="flex flex-col">
                                    <h2 className="text-[20px]"></h2>
                                    <p className="text-[16px]">Un cursus de formation gratuit de 10 heures pour vous former sur l'IA, ses concepts, ses techniques et technologies et faire le point sur les implications éthiques et réglementaires.</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-start bg-[#7A0053] py-3 px-2 rounded-lg"><Image src="/images/7ac.svg" alt="alt" width={40} height={40} />
                                <div className="flex flex-col">
                                    <h2 className="text-[20px]"></h2>
                                    <p className="text-[16px]">Le Diag Data IA, pour trouver de nouveaux axes de croissance et mettre l'intelligence artificielle au service des projets de transformation de votre entreprise.</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-start"><Image src="/images/8ac.svg" alt="alt" width={40} height={40} />
                                <div className="flex flex-col">
                                    <h2 className="text-[20px]"></h2>
                                    <p className="text-[16px]">La mission “Choix de l'approche IA” (dans la limite de l'enveloppe budgétaire disponible) pour vous aider à qualifier la meilleure approche pour mettre en oeuvre votre projet IA (acquisition d'une solution existante sur le marché, développement d'une solution maison...).</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-[80%] lg:w-[45%]">
                        <Image src="/images/agentIA2.svg" alt="alt" width={500} height={500} />
                    </section>
                </div>
            </div>


            <div className="mt-[70px] w-full bg-[#0000FF] pt-20 px-10 md:px-28 md:rounded-t-[100px] text-white h-auto flex lg:flex-row flex-col gap-5">
                <div className="flex flex-col mt-[-50px] gap-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[32px]">Une question, une demande ?</h1>
                        <h3 className="text-[16px]">Contactez-nous ou appelez directement notre service client au 01 89 19 86 47, disponible du lundi au vendredi de 9h à 17h.</h3>
                        <p className="text-[12px]">Vos données à caractère personnel sont collectées et traitées par Bpifrance en qualité de responsable de traitement dans le cadre du présent formulaire. En savoir plus sur la protection des données personnelles..</p>
                    </div>
                    <button className="p-4 w-[225px] rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            Nous contactez
                        </span>
                        <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                    </button>
                </div>

                <div>
                    <Image src="/images/contactAc.svg" alt="alt" width={950} height={950} />
                </div>

            </div>


        </div>
    )
}

export default page