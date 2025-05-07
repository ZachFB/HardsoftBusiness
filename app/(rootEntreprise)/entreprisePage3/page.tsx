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
                        A qui nous nous adressons?
                    </span>
                    <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[24px] text-[#494949] font-medium">
                        Un accompagnement pour toutes les entreprises
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">

                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] lg:ml-20 h-[250px] md:h-[350px] lg:h-[494px] rounded-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroEntreprise3.jpg)` }}></div>
            </div>


            <div className='bg-[#f6f8fc] flex justify-center lg:p-20 py-20 mt-20'>
                <p className='text-[16px] text-center lg:text-[18px] lg:w-[70%] w-[90%]'>Nous nous adressons à toutes les entreprises, qu'il s'agisse de PME en pleine croissance ou de grandes entreprises en quête d'innovation et d'expansion. Nos solutions sont conçues pour répondre aux défis stratégiques des dirigeants, qu'il s'agisse de croissance, d'exportation, de fusions-acquisitions ou d'optimisation de la gestion interne.</p>
            </div>

            <div className='flex justify-center w-full'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-14 mt-20 mb-24 w-[80%] place-items-center'>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Une approche hybride entre intelligence artificielle et expertise humaine
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Nous combinons la puissance des robo-advisors conversationnels et l’expertise des consultants en stratégie pour offrir un accompagnement stratégique complet aux entreprises. Cette synergie permet d’allier l’analyse de données en temps réel de l’IA à la vision stratégique et au savoir-faire des experts, garantissant ainsi des prises de décision rapides, précises et efficaces.
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
                            Des robots-copilots IA pour un pilotage intelligent
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Nos robots-conseils conversationnels analysent de vastes volumes de données, anticipent les risques et proposent des plans d’action stratégiques. En parallèle, nos consultants valident, ajustent et optimisent ces recommandations en fonction des enjeux spécifiques et du contexte de chaque entreprise, assurant ainsi une exécution sur-mesure et performante.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Étude de marché et campagnes publicitaires pilotées par l’IA et les experts
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Nos robo-advisors identifient les meilleures opportunités de marché et suggèrent des campagnes publicitaires optimisées en fonction des tendances et des comportements des consommateurs. Nos consultants stratégiquesaffinent ces recommandations et les adaptent aux objectifs commerciaux spécifiques, garantissant une acquisition client efficace sur LinkedIn, Meta et Google Display.
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
                            Coaching pour dirigeants et optimisation des décisions
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Nos robots analysent les données de performance des entreprises et proposent des pistes d’amélioration basées sur des benchmarks sectoriels. Nos consultants assurent ensuite un coaching personnalisé pour aider les PDG, comités de direction et investisseurs à traduire ces recommandations en stratégies concrètes et à surmonter leurs défis spécifiques.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Conseil en croissance : intelligence prédictive et vision stratégique
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Grâce à l’intelligence artificielle, nous détectons les leviers de croissance les plus prometteurs en analysant les performances des canaux d’acquisition et des processus commerciaux. Nos consultants en stratégie valident ces insights et accompagnent les entreprises dans la mise en œuvre de plans de croissance solides et scalables, garantissant une augmentation du chiffre d’affaires récurrent mensuel (MRR).
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
                            Levée de fonds : IA et experts pour une stratégie gagnante
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Nos robo-advisors analysent les tendances des investissements et identifient les investisseurs les plus pertinents pour chaque entreprise. Nos consultants en levée de fonds optimisent les pitchs et négocient avec les investisseurs, assurant ainsi un accès fluide au financement nécessaire pour soutenir l’innovation et l’expansion.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Fusion, acquisition et sortie stratégique optimisée
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Nos robots-copilots évaluent les synergies potentielles, les risques financiers et les opportunités de marché pour toute opération de fusion-acquisition. Nos experts en stratégie interviennent pour affiner ces analyses, structurer les transactions et négocier les meilleures conditions, garantissant une transition fluide et rentable.
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
                            Une communauté connectée et un réseau d’experts
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Nos robots assurent un suivi en temps réel des tendances du marché et des évolutions sectorielles, permettant à notre communauté de bénéficier d’informations stratégiques à jour. Nos consultants animent des visioconférences hebdomadaires et des discussions sur Slack, offrant un cadre d’échange et de collaboration enrichissant.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Outils d’IA avancés et expertise humaine pour la performance
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Nos robots conseillers exploitent des modèles prédictifs et analytiques avancés pour identifier des axes d’optimisation dans la supply chain, les finances et la gestion des talents. Nos consultants interprètent ces données et assurent leur intégration dans la stratégie globale de l’entreprise pour maximiser la rentabilité et l’efficacité.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image22.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <section className='w-auto h-auto'>
                        <Image src="/images/image13.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        Une transformation durable et compétitive                        
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        L’association de nos robots-copilots et de nos consultants stratégiques permet aux entreprises de sécuriser leurs décisions, anticiper les tendances du marché et innover en continu. Cette approche hybride garantit une croissance pérenne et une compétitivité renforcée, faisant de Hardsoft Business un partenaire clé pour l’avenir des entreprises.
                        </p>
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