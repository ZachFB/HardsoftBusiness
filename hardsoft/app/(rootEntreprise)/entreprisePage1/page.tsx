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
                        className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] via-[#00FFFF] to-[#0000FF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        Qui sommes-nous ?
                    </span>
                    <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[18px] text-[#494949] font-medium">
                        HardSoft Business est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés et le conseil dans le pilotage stratégique de la performance. Nous développons our nos clients des plateformes logicielles sécurisées de robots-pilotes conversationnels, leur offrant un meilleur contrôle de la performance de leur entreprise !
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">

                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] lg:ml-20 h-[250px] md:h-[350px] lg:h-[494px] rounded-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroEntreprise1.jpg)` }}></div>
            </div>

            <div className='flex flex-col justify-center items-center mt-32'>
                <h1 className='text-[30px] font-semibold lg:text-[40px] text-[#0000FF]'>Notre objectif</h1>
                <p className='mt-4 text-[16px] text-justify md:text-center lg:text-[18px] lg:w-[70%] w-[80%]'>Aider les entreprises à résoudre des problématiques cruciales liés à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation, intégration d’intelligence d’affaires, transition énergétique, transition numérique et bien plus. Notre solution vous permet d’obtenir des solutions de transformation, adaptées à vos besoins.</p>
            </div>

            <div className='bg-[#f6f8fc] flex justify-center lg:p-20 py-20 mt-20'>
                <p className='text-[16px] text-center lg:text-[18px] lg:w-[70%] w-[90%]'>Hardsoft Business est conçus pour comprendre les enjeux stratégiques de votre entreprises, nos robo-pilotes réfléchissent à des stratégies, élaborent des plans d’action, vous orientent en fournissant des recommandations, automatisent vos taches et exécutent vos instructions, puis vous rendent compte des résultats en temps réel.</p>
            </div>
            <div className='flex justify-center items-center mt-32'>
                <h1 className='lg:w-[70%] text-[28px] font-semibold lg:text-[40px] leading-[38px] lg:leading-[48px] text-center'>Grâce à notre technologie, les entreprises s'assurent de gagner en <span className='bg-gradient-to-r from-[#0000FF] to-[#0000FF] bg-clip-text text-transparent'>efficacité, réactivité et agilité</span>.</h1>
            </div>

            <div className='flex justify-center w-full'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-14 mt-20 mb-24 w-[80%] place-items-center'>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Une prise de décision optimisée
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Chez Hardsoft Business, nous accompagnons les entreprises en leur offrant des solutions intelligentes qui facilitent la prise de décisions stratégiques. Grâce à notre plateforme avancée, nous permettons aux dirigeants d’accéder à des analyses en temps réel pour orienter leurs choix de manière éclairée et efficace.
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
                            Des décisions plus rapides et plus précises
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            La rapidité et la précision sont essentielles dans un environnement économique en constante évolution. Nos outils permettent d’analyser de grandes quantités de données instantanément, offrant ainsi des recommandations stratégiques fiables et adaptées aux besoins spécifiques de chaque entreprise.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Un accompagnement dans la gestion de la croissance
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            La croissance est un défi majeur pour toute entreprise. Nous aidons nos clients à identifier les meilleures opportunités de marché, à structurer leur développement et à maximiser leur potentiel grâce à des stratégies éprouvées et des recommandations personnalisées.
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
                            L'amélioration de la performance globale
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Une entreprise performante repose sur l’optimisation de ses processus internes. Nos solutions permettent d'améliorer la productivité, de réduire les coûts et d’augmenter la rentabilité en analysant et en ajustant les leviers de performance les plus pertinents.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Une expertise en fusion et acquisition
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Les opérations de fusion et acquisition sont complexes et nécessitent une analyse approfondie des risques et des opportunités. Hardsoft Business assiste ses clients dans l’évaluation des synergies potentielles, la valorisation des entreprises et l’optimisation des négociations pour garantir des transactions réussies.
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
                            Une ouverture vers l’international et l’exportation
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Développer son activité à l’international requiert une compréhension approfondie des marchés étrangers. Nos solutions analysent les tendances économiques, les réglementations locales et les opportunités stratégiques afin d’accompagner les entreprises dans leur expansion à l’international.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Un soutien au lancement de nouveaux produits
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            L’innovation est un levier clé de croissance. Nous aidons les entreprises à structurer le lancement de nouveaux produits en identifiant les segments de marché les plus porteurs, en optimisant les stratégies marketing et en évaluant les retours sur investissement potentiels.
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
                            Une technologie avancée pour des résultats concrets
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Notre plateforme s’appuie sur des algorithmes de pointe et de l’intelligence artificielle pour fournir des analyses précises et des recommandations pertinentes. Grâce à l’automatisation et à l’IA, nos clients bénéficient d’une réactivité accrue et d’une prise de décision optimisée.
                        </p>
                    </section>

                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                            Un accompagnement sur mesure pour chaque entreprise
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Chaque entreprise est unique, et nous adaptons nos solutions aux spécificités de chaque client. Nous proposons un suivi personnalisé afin d’assurer une mise en œuvre efficace des recommandations et de garantir des résultats mesurables.
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
                            Un partenaire stratégique pour un avenir prospère
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                            Hardsoft Business ne se contente pas de fournir des outils analytiques ; nous nous positionnons comme un véritable partenaire stratégique pour nos clients. En les aidant à surmonter leurs défis et à saisir les meilleures opportunités, nous contribuons activement à leur succès et à leur développement durable.
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