import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div
                className="w-full m-auto max-w-[1300px] h-auto lg:h-[580px] bg-[#F8F8FC] rounded-[15px] mt-[50px] lg:mt-[150px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 py-4 lg:px-0 px-4">
                {/* <!-- Texte --> */}
                <div className="w-full lg:w-[55%] lg:px-10 flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                    <span className="poppins-light text-[12px]">Solutions</span>
                    <span
                        className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        Cabinets d’Experts Comptables, Banques d’affaires
                    </span>
                    <span className="mt-[20px] lg:mt-[20px] text-[16px] text-justify lg:text-[18px] text-[#494949] font-medium">
                    Cabinets d’expert Comptables, Banques d’affaires : Optimisez la Gestion Financière et Améliorez la Performance de Vos Clients "Transformez votre cabinet d'expert-comptable avec des outils de Performance Enterprise Management (PEM) conçus pour améliorer la précision financière, rationaliser les opérations, et offrir une valeur ajoutée à vos clients." "En tant qu'expert-comptable, vous êtes le conseiller de confiance pour vos clients. Nos solutions PEM vous permettent de fournir des analyses financières avancées, d'optimiser la gestion des ressources, et de renforcer vos services avec des tableaux de bord et des rapports automatisés."
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                        <button className="bg-[#0000FF] text-white p-3 lg:px-7 lg:w-auto w-[350px] rounded-3xl text-[15px] flex justify-center items-center font-light">
                            <span className="mr-2">&#8594;</span> Try for free
                        </button>
                        <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light hidden">Regarder la vidéo</button>
                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] h-[250px] md:h-[350px] lg:h-[580px] rounded-r-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroSolu4.jpg)` }}></div>
            </div>



            <div className='lg:w-[833px] lg:ml-[80px] lg:mt-[154px] w-full mt-[90]'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                   Pourquoi les Cabinets d&#39;Expert-Comptables ont Besoin de PEM
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    </span>
                </h1>
                <p className='text-[16px] text-center lg:text-left'></p>
            </div>



            <div className="w-full flex justify-center">
                <div className="lg:w-full w-full mt-[44px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color5.svg)` }}>
                            <Image src="/images/image24.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-12">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]"></h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]"> Amélioration de la Précision Financière : "Assurez une précision inégalée dans la préparation des budgets, des prévisions et des rapports financiers pour vos clients."</p>                                    
                        </div>
                    </div>

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color6.svg)` }}>
                            <Image src="/images/image25.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]"></h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">Gain de Temps et d'Efficacité : "Automatisez les tâches répétitives, comme la collecte de données et la génération de rapports, pour vous concentrer sur des analyses à forte valeur ajoutée."</p>
                        </div>
                    </div>

                </div>
            </div>



            <div className="w-full flex justify-center">
                <div className="mt-[52px] w-full lg:w-full md:w-[95%] lg:h-[403px] h-auto flex items-center">
                    <div
                        className="w-full lg:w-[545px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end border-t border-l border-b border-[#0000004D] rounded-l-2xl">
                    </div>
                    <div
                        className="w-full lg:w-[750px] px-2 lg:px-0 h-full lg:py-0 py-8 border-[#0000004D] border-r border-t border-b rounded-r-3xl flex justify-center items-center">
                        <section className="w-full lg:w-[487px] h-auto flex flex-col justify-center">
                            <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]"></h1>
                            <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                            Service Client Renforcé : "Offrez à vos clients des insights financiers clairs et actionnables grâce à des tableaux de bord personnalisés et des rapports détaillés."
                            </p>
                        </section>
                    </div>
                </div>
            </div>


            <div className='w-full py-16 h-auto lg:mt-[154px] mt-[90] bg-[#F8F8FC]'>
                <div className='lg:w-[833px] lg:ml-[80px] w-full space-y-2'>
                    <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                       Fonctionnalités Clés de la Solution PEM pour les Cabinets d&#39;Expert-Comptables
                        <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        </span>
                    </h1>
                </div>



                <div className="w-full flex justify-center">
                    <div className="lg:w-full w-full mt-[44px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{ backgroundImage: `url(images/color5.svg)` }}>
                                <Image src="/images/image24.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt="" />
                            </div>
                            <div
                                className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]"></h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]"> Automatisation de la Collecte de Données : "Collectez automatiquement les données financières de vos clients à partir de plusieurs sources, réduisant ainsi les erreurs manuelles et les temps de traitement."</p>                                    
                            </div>
                        </div>

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{ backgroundImage: `url(images/color6.svg)` }}>
                                <Image src="/images/image25.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt="" />
                            </div>
                            <div
                                className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]"></h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">Tableaux de Bord Dynamiques : "Créez des tableaux de bord interactifs pour surveiller en temps réel la performance financière de vos clients et identifier rapidement les domaines nécessitant une attention particulière."</p>
                            </div>
                        </div>

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{ backgroundImage: `url(images/color6.svg)` }}>
                                <Image src="/images/image22.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt="" />
                            </div>
                            <div
                                className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]"></h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">Prévisions Financières Précises : "Utilisez des modèles de prévision avancés pour aider vos clients à planifier leur avenir financier et à prendre des décisions éclairées."</p>
                            </div>
                        </div>

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{ backgroundImage: `url(images/color6.svg)` }}>
                                <Image src="/images/image23.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt="" />
                            </div>
                            <div
                                className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]"></h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">Gestion de la Conformité : "Suivez les changements réglementaires et assurez la conformité de vos clients avec des outils intégrés de gestion des risques et de conformité."</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



            <div className='lg:w-[833px] lg:ml-[80px] lg:mt-[154px] w-full mt-[90]'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                   Avantages pour les Cabinets d'Expert-Comptables
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    </span>
                </h1>
                <p className='text-[16px] text-center lg:text-left'></p>
            </div>

            <div className="lg:h-[224px] h-auto w-full mt-[80px]">
                <section className="flex lg:flex-row flex-col justify-center items-center gap-16">
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Vector.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Optimisation des Processus :
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                "Simplifiez vos processus comptables et améliorez l'efficacité opérationnelle de votre cabinet grâce à des outils d'automatisation et de gestion des flux de travail."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/icon8.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Amélioration des Services Conseils :
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                "Passez du rôle de comptable traditionnel à celui de conseiller stratégique en fournissant des analyses financières approfondies et des recommandations basées sur des données précises."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/icon8.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Augmentation de la Satisfaction Client :
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                "Offrez à vos clients des services financiers plus rapides, plus précis, et plus personnalisés, renforçant ainsi votre relation client et fidélisant votre portefeuille."
                                </p>
                            </div>
                        </section>
                    </div>

                </section>
            </div>




            <div className='lg:w-[833px] lg:ml-[80px] lg:mt-[154px] w-full mt-[90] space-y-3'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    Étude de Cas
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    </span>
                </h1>
            </div>


            <div className="h-auto w-full pt-[40px]">

                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-full h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                        <div
                            className="lg:w-[720px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Étude de Cas :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                "Découvrez comment [Nom d'un client ou exemple fictif] a utilisé notre solution PEM pour doubler son retour sur investissement en finançant des startups innovantes."                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[41px] w-full lg:w-full h-[300px] flex items-center">
                        <div
                            className="lg:w-[720px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] w-full lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Résultats :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                "Grâce à notre solution, [Nom du cabinet] a réduit de 40 % le temps consacré à la préparation des rapports financiers et augmenté la précision de ses prévisions budgétaires de 30 %."
                                </p>
                            </section>
                        </div>
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                    </div>
                </div>

            </div>



            <div className='lg:w-[833px] lg:ml-[80px] w-full mt-[90] space-y-3'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    Témoignages Clients
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    </span>
                </h1>
            </div>


            <div className="h-auto w-full pt-[40px]">

                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-full h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                        <div
                            className="lg:w-[720px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Citations de Clients :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                "Nos clients parlent de nous. Découvrez comment nous avons aidé des cabinets d'expert-comptables à offrir des services financiers de pointe."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[41px] w-full lg:w-full h-[300px] flex items-center">
                        <div
                            className="lg:w-[720px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] w-full lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Avis :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                Depuis que nous utilisons la solution PEM, notre cabinet est passé à un niveau supérieur en termes de productivité et de satisfaction client." – [Nom du Client, Cabinet Comptable]
                                </p>
                            </section>
                        </div>
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                    </div>
                </div>

            </div>



            <div className='lg:w-[833px] lg:ml-[80px] w-full mt-[90] space-y-3'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    Appel à l&#39;Action
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    </span>
                </h1>
            </div>


            <div className="h-auto w-full pt-[40px] space-y-10">

                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-full h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                        <div
                            className="lg:w-[720px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Demande de Démo :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                "Découvrez par vous-même comment notre solution peut transformer votre cabinet d'expert-comptable. Réservez une démonstration personnalisée dès aujourd'hui."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-full h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                        <div
                            className="lg:w-[720px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Contactez-Nous :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Parlez à l'un de nos experts pour en savoir plus sur la façon dont notre solution peut répondre à vos besoins spécifiques."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

            </div>



            {/* <!-- Accordeon HTML TAILWIND CSS  --> */}
            <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen mt-[105px] my-20">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl mt-5 tracking-tight poppins-semibold mb-4">
                        FAQ
                    </h2>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
                    <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033]">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="text-[20px] poppins-semibold"> &#34;Questions Fréquemment Posées&#34;</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                    <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-[20px] poppins-semibold"> &#34;La solution PEM est-elle adaptée à toutes les PME, quel que soit le secteur ?&#34;</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
                                We offers a variety of billing options, including monthly and annual subscription plans,
                                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-[20px] poppins-semibold"> &#34;Combien de temps faut-il pour déployer la solution ?&#34;</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
                                We offers a variety of billing options, including monthly and annual subscription plans,
                                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-[20px] poppins-semibold"> &#34;Quels types de support et de formation sont proposés ?&#34;</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
                                We offers a variety of billing options, including monthly and annual subscription plans,
                                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default page