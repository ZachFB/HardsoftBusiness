import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div
                className="w-full m-auto max-w-[1300px] h-auto lg:h-[494px] rounded-[15px] mt-[150px] flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 lg:gap-4 p-4">
                {/* <!-- Texte --> */}
                <div className="w-full lg:w-[45%] lg:px-10 flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                    <span className="poppins-light text-[12px]">Entreprises</span>
                    <span
                        className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[60px] bg-gradient-to-r from-[#0000FF] via-[#00FFFF] to-[#0000FF] bg-clip-text text-transparent leading-[38px] lg:leading-[78px]">
                     Comment accompagner votre performance ?                    
                     </span>
                    <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[24px] text-[#494949] font-medium">
                    🚀 Une organisation agile et performante pour la réussite des entreprises
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">

                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] lg:ml-20 h-[250px] md:h-[350px] lg:h-[494px] rounded-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroEntreprise4.png)` }}></div>
            </div>


            <div className='flex flex-col justify-center items-center mt-32'>
                <h1 className='text-[30px] font-semibold lg:text-[40px] text-[#0000FF]'>Chez Hardsoft Business</h1>
                <p className='mt-4 text-[16px] text-justify md:text-center lg:text-[18px] lg:w-[70%] w-[80%]'>Nous combinons la puissance de l’IA et l’intelligence humaine pour aider nos clients à prendre des décisions stratégiques éclairées. Nos robo-advisors analysent, recommandent et optimisent, tandis que nos consultants accompagnent, valident et exécutent.</p>
            </div>

            <div className='bg-[#f6f8fc] flex flex-col justify-center items-center gap-4 lg:p-20 py-20 mt-20'>
                <p className='text-[16px] text-center lg:text-[18px] lg:w-[70%] w-[90%]'>Cette synergie entre automatisation et expertise humaine permet aux entreprises d’être plus performantes, plus innovantes et plus compétitives dans un monde en constante évolution. 🎯💡</p>
                <p className='text-[16px] text-center lg:text-[18px] lg:w-[70%] w-[90%]'>Nos robots-conseils conversationnels permettent d’analyser en temps réel des volumes massifs de données, d’anticiper les risques, de recommander des actions stratégiques et d’exécuter des plans d’action, tout en étant épaulés par des consultants humains qui assurent la pertinence et l’adaptation des recommandations aux enjeux spécifiques de chaque entreprise.</p>
            </div>

            <div className='flex justify-center w-full'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-14 mt-20 mb-24 w-[90%] place-items-center'>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        📈 Phase de Croissance : Booster l’Acquisition Client                        
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Notre approche hybride IA + expertise humaine permet aux entreprises d’accélérer leur croissance grâce à :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅Optimisation du coût d’acquisition client (CAC) via des analyses prédictives et des stratégies marketing sur-mesure.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Amélioration du taux de conversion (CRO) avec des recommandations basées sur des données comportementales.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Expansion des canaux d’acquisition grâce à l’automatisation des campagnes publicitaires et un ciblage intelligent.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Stratégies de scale-up équilibrées entre croissance rapide et maîtrise des coûts.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        Nos consultants valident ces recommandations et accompagnent les dirigeants dans leur mise en œuvre opérationnelle.
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
                    🎯 Phase de Performance : Maximiser Rentabilité & Efficacité
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robo-advisors analysent les performances économiques et financières de l’entreprise pour identifier les points d’optimisation. Nos consultants assurent l’application des meilleures pratiques pour :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Maximiser la rentabilité des opérations et améliorer les marges.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Optimiser les processus commerciaux et marketing en automatisant les tâches inefficaces.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Renforcer les stratégies de pricing en analysant la concurrence et la sensibilité des clients.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        L’association IA + consultants permet d’accélérer la mise en œuvre des stratégies et d’améliorer leur efficacité.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    🚀 Lancement de Nouveaux Produits : Sécuriser la Mise sur le Marché
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robots analysent les tendances du marché et détectent le Product-Market Fit (PMF) pour s’assurer que les nouveaux produits répondent à une demande réelle. Nos experts en stratégie interviennent pour :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Définir les meilleures stratégies de lancement (GTM) et éviter les erreurs coûteuses.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Optimiser les campagnes marketing et de pricing grâce à une approche data-driven.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Itérer rapidement grâce aux feedbacks clients et aux tests A/B pour ajuster l’offre en temps réel.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        L’IA identifie les opportunités et les risques, tandis que nos consultants aident à structurer et exécuter les décisions stratégiques.
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
                    🤝 Fusion et Acquisition (M&A) : Structurer et Sécuriser les Transactions
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Grâce à nos robots IA, nous réalisons une analyse approfondie des opportunités de fusion et acquisition en évaluant les risques, les synergies et la rentabilité des opérations. Nos experts en finance et en M&A interviennent pour :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Identifier les meilleurs candidats à l’acquisition ou à la fusion.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Analyser les synergies possibles et anticiper les risques financiers.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Optimiser le processus de due diligence grâce à l’automatisation des analyses.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Faciliter l’intégration des équipes et des processus post-acquisition.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        L’IA accélère l’analyse et la prise de décision, tandis que nos consultants assurent une exécution fluide et performante.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    📦 Optimisation de la Supply Chain : Réduction des Coûts et Gain d’Efficacité
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robots IA analysent les flux logistiques, les coûts de transport et les stocks pour optimiser la gestion de la supply chain. Nos consultants stratégiques apportent une expertise complémentaire pour :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Réduire les coûts logistiques et améliorer la gestion des stocks.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Intégrer des technologies avancées (IA, IoT, blockchain) pour une supply chain plus performante.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Développer des scénarios de gestion des risques pour anticiper les crises.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        La synergie de l’IA et des experts permet une supply chain plus agile, rentable et résiliante.
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
                    🌱 Transition Énergétique et Développement Durable : Un Engagement RSE Fort
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robots IA identifient les meilleures stratégies pour réduire l’impact environnemental des entreprises, tandis que nos consultants aident à les mettre en œuvre :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Réduction de l’empreinte carbone en optimisant les processus industriels et logistiques.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Intégration d’énergies renouvelables et identification des financements écologiques.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Mise en place de stratégies RSE et d’économies circulaires.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        L’IA propose des solutions basées sur les données, et nos experts assurent leur application stratégique.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    🏢 Facility Management : Optimiser la Gestion des Infrastructures
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robo-advisors aident les entreprises à améliorer la gestion de leurs bâtiments en automatisant l’analyse des données énergétiques et de maintenance. Nos experts interviennent pour :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Optimiser la gestion des espaces de travail et la maintenance.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Réduire les coûts énergétiques en ajustant les consommations.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Mettre en place des solutions intelligentes pour une gestion plus efficace.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        L’IA intervient pour une meilleure gestion des bâtiments et une réduction des coûts opérationnels.
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
                    👥 Réduction du Turnover et Engagement des Employés
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robots IA analysent les causes du turnover et prédisent les risques de départ des employés, tandis que nos experts RH mettent en place des actions concrètes pour :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Améliorer l’expérience collaborateur et la culture d’entreprise.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Automatiser les processus RH pour fluidifier la gestion des talents.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Développer des parcours de carrière attractifs et des formations adaptées.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        L’IA détecte les signaux faibles, et nos consultants assurent une stratégie RH efficace.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    🌍 Exportation et Expansion Internationale : Une Stratégie Data-Driven
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robo-advisors identifient les marchés porteurs et les meilleures stratégies d’entrée. Nos experts en expansion internationale interviennent pour :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Adapter les stratégies marketing et commerciales aux spécificités locales.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Gérer les risques liés à l’expansion (réglementations, logistique, RH…).
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Établir des partenariats stratégiques pour faciliter l’implantation.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        L’IA détecte les opportunités, et nos consultants facilitent leur concrétisation.
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