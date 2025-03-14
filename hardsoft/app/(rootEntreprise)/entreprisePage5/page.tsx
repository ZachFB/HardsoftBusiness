import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div
                className="w-full m-auto max-w-[1300px] h-auto border-b  lg:h-[494px] rounded-[15px] mt-[26px] flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 lg:gap-4 p-4">
                {/* <!-- Texte --> */}
                <div className="w-full lg:w-[45%] lg:px-10 flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                    <span className="poppins-light text-[12px]">Entreprises</span>
                    <span
                        className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[60px] bg-gradient-to-r from-[#0000FF] via-[#00FFFF] to-[#0000FF] bg-clip-text text-transparent leading-[38px] lg:leading-[78px]">
                     Quel est notre processus de mise en œuvre ?
                     </span>
                    <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[24px] text-[#494949] font-medium">
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">

                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] lg:ml-20 h-[250px] md:h-[350px] lg:h-[494px] rounded-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroEntreprise5.png)` }}></div>
            </div>


            <div className='flex justify-center w-full mt-28'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-14 mt-20 mb-24 w-[90%] place-items-center'>
                <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                        Cette étape nous permet d’identifier les besoins précis et de proposer une approche sur-mesure.
                        </p>
                    <section className='flex flex-col p-3'>
                        <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                        1️⃣ Analyse Initiale & Prise de Contact 📞
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous débutons par un échange approfondi avec le client afin de comprendre :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Les enjeux stratégiques et opérationnels de l’entreprise.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Les objectifs de croissance, de performance ou d’innovation.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Les défis spécifiques liés à son secteur d’activité.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image14.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nos consultants valident et affinent ce diagnostic avec une expertise humaine.
                        </p>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image10.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    2️⃣ Diagnostic & Évaluation des Besoins 🔍
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nos robo-advisors analysent les données du client pour dresser un diagnostic initial :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Analyse des indicateurs de performance (KPI).
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Identification des points d’amélioration et des opportunités de croissance.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Proposition d’un plan d’optimisation stratégique.
                        </p>
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    L’objectif est de montrer comment notre solution peut transformer la prise de décision et optimiser les opérations.
                        </p>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    3️⃣ Présentation des Solutions & Démonstration 🎥
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous organisons une démonstration interactive de notre plateforme de robo-advisors et de conseil stratégique :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Explication du fonctionnement des robots-conseils.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Illustration des cas d’usage concrets adaptés à l’entreprise.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Simulation en temps réel des gains de performance envisageables.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image12.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Notre approche sur-mesure garantit une valeur ajoutée immédiate.
                        </p>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image8.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    4️⃣ Personnalisation de l’Offre & Proposition de Valeur 🛠️
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous adaptons nos solutions aux besoins et objectifs spécifiques du client :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Sélection des modules et fonctionnalités adaptés.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Intégration aux outils existants (CRM, ERP, plateformes cloud, etc.).
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Définition des KPIs à suivre pour mesurer les résultats.
                        </p>
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nous nous assurons que toutes les attentes soient alignées avant le lancement.
                        </p>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    5️⃣ Validation du Partenariat & Signature du Contrat ✍️
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Une fois la solution validée par le client, nous passons à la finalisation du contrat :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Clarification des engagements et des livrables.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Planification du déploiement et de la formation.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Définition du cadre de collaboration et des jalons de suivi.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image27.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Cette phase garantit une vision claire du déploiement.
                        </p>
                    <section className='w-auto h-auto'>
                        <Image src="/images/indu33.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    1️⃣ Validation des fonctionnalités à développer & Planification 📋
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Après validation du projet, nous établissons un plan détaillé de mise en œuvre :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Définition des objectifs et des attentes du client.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Cartographie des systèmes existants et des intégrations requises.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Création d’un planning précis avec jalons et livrables.
                        </p>
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nos robots-conseils opèrent dans un environnement ultra-sécurisé.
                        </p>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    2️⃣ Sécurisation & Préparation des Données 🔐
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous mettons en place des protocoles de sécurité avancés pour assurer une intégration sans risque :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Audit des systèmes existants pour identifier les points sensibles.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Mise en place des protocoles de chiffrement et de protection des données.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Vérification de la conformité avec les réglementations en vigueur (RGPD, ISO, SOC 2…).
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image26.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    L’objectif est une intégration transparente sans perturber les opérations.
                        </p>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image23.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    3️⃣ Intégration des Robo-Advisors & Connexion aux Systèmes ⚙️
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous connectons nos robots-conseils aux outils existants pour assurer une synchronisation fluide :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Connexion avec les ERP, CRM, BI et Data Warehouses.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Intégration avec les outils de gestion financière, supply chain et RH.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Tests de connectivité et validation de la transmission des données.
                        </p>
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nous nous assurons que la solution est parfaitement alignée avec les objectifs de l’entreprise.
                        </p>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    4️⃣ Déploiement Progressif & Configuration Personnalisée 🚀
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous lançons la plateforme de façon progressive pour un ajustement optimal :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Activation des premiers modules (analyse des données, reporting, recommandations).
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Paramétrage des règles métiers et des algorithmes d’optimisation.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Ajustement des tableaux de bord et KPI spécifiques au client.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image22.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nous garantissons une solution fiable et performante dès son activation.
                        </p>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image18.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    5️⃣ Tests, Ajustements & Validation ✅
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Avant le déploiement à grande échelle, nous effectuons une phase de tests approfondie :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Vérification de l’exactitude des recommandations stratégiques fournies par l’IA.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Ajustement des modèles d’analyse et d’apprentissage automatique.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Validation par les équipes métiers et direction.
                        </p>
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    L’objectif est d’assurer une adoption fluide et rapide au sein de l’entreprise.
                        </p>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    6️⃣ Accompagnement des Équipes & Adoption 📚
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous accompagnons les équipes pour assurer une prise en main efficace de la plateforme :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Sessions de formation personnalisées (en ligne et en présentiel).
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Guides, tutoriels et documentation complète.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Accompagnement par nos consultants et experts en IA.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image20.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nos experts analysent les retours et optimisent la plateforme en continu.
                        </p>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image28.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    7️⃣ Monitoring & Optimisation Continue 📊
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Dès la mise en service, nous assurons un suivi en temps réel :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Surveillance des performances des robots-conseils.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Ajustement des paramètres et des recommandations en fonction des résultats.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Identification de nouvelles opportunités d’amélioration.
                        </p>
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nous restons proches de nos clients pour garantir un fonctionnement optimal.
                        </p>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    8️⃣ Assistance & Support 24/7 🛠️
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous garantissons un support technique et stratégique à chaque étape :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Assistance technique 24/7 pour répondre aux questions et résoudre les incidents.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Mises à jour régulières pour intégrer les dernières avancées IA.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Réunions de suivi avec nos consultants en stratégie et data science.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image19.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nos robo-advisors évoluent en fonction des besoins et objectifs de l’entreprise.
                        </p>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image11.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
                    </section>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    9️⃣ Suivi des Résultats & Évolution 🔄
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Nous analysons les performances et mesurons l’impact sur l’entreprise :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Suivi des KPIs définis lors de la phase initiale.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Comparaison des résultats avant et après l’implémentation.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Recommandations d’amélioration et proposition de nouvelles fonctionnalités.
                        </p>
                    </section>

                    <p className='text-[20px] text-center mt-2 lg:text-[20px] lg:col-span-2 '>
                    Nous sommes un partenaire long terme qui accompagne la croissance et la transformation digitale.
                        </p>
                    <section className='flex flex-col p-3'>
                    <h1 className='font-semibold lg:text-[24px] text-[22px] text-[#0000FF]'>
                    🔟 Extension des Capacités & Déploiement Avancé 🌍
                        </h1>
                        <p className='text-[16px] text-justify mt-5 lg:text-[18px]'>
                        Une fois la solution bien adoptée, nous accompagnons l’expansion et l’innovation :
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Intégration de nouveaux modules et fonctionnalités avancées.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Déploiement dans d’autres départements ou filiales.
                        </p>
                        <p className='text-[16px] text-justify mt-2 lg:text-[18px]'>
                        ✅ Adaptation aux nouveaux défis stratégiques et opérationnels.
                        </p>
                    </section>
                    <section className='w-auto h-auto'>
                        <Image src="/images/image9.jpg" className='rounded-[15px]' alt="alt" width={600} height={400} />
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