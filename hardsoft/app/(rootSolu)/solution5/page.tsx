import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div
                className="w-full m-auto max-w-[1300px] h-auto lg:h-[494px] bg-[#F8F8FC] rounded-[15px] mt-[26px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 p-4">
                {/* <!-- Texte --> */}
                <div className="w-full lg:w-[55%] lg:px-10 flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                    <span className="poppins-light text-[12px]">Solutions</span>

                    <h1 className="lg:mt-8 mt-4 lg:text-[40px] text-[30px] leading-[38px] lg:leading-[48px] font-black">
                        <span
                            className="text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                            Investisseurs immobiliers
                        </span>
                        , Agence Immobilières
                    </h1>

                    <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[18px] text-[#494949] font-medium">
                        Particuliers fortunés, fonds d'investissement, SCI, SCPI, SC Construction-vente, SC de gestion, de location ou investissement, Promoteurs immobiliers, Institutions financières, et les sociétés de gestion de portefeuilles immobiliers qui cherchent de puissants outils pour simuler le rendement de leurs investissements dans l'immobilier.
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                        <button className="bg-[#0000FF] text-white p-3 px-4 rounded-3xl text-[15px] flex items-center font-light">
                            <span className="mr-2">&#8594;</span> Demander une démonstration
                        </button>
                        <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light">Regarder la vidéo</button>
                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] h-[250px] md:h-[350px] lg:h-[494px] rounded-r-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroSolu5.jpg)` }}></div>
            </div>



            <div className='lg:w-[833px] lg:ml-[80px] lg:mt-[154px] w-full mt-[90]'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        Biens immobiliers
                    </span> résidentiels, commerciaux, ou industriels
                </h1>
                <p className='text-[16px] text-center lg:text-left'>Optimisez vos Investissements Immobiliers avec notre suite de Solutions de Performance d’Enterprise !
                </p>
            </div>



            <div className="w-full flex justify-center">
                <div className="lg:w-[1201px] w-full mx-3 mt-[44px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color5.svg)` }}>
                            <Image src="/images/image26.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-12">
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]"> "Maximisez la rentabilité de vos investissements immobiliers grâce à des solutions de gestion de la performance spécialement conçues pour les investisseurs immobiliers."
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color6.svg)` }}>
                            <Image src="/images/image27.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">"Nos solutions offrent des outils puissants pour surveiller et améliorer les performances de vos actifs immobiliers, optimiser vos portefeuilles, et prendre des décisions éclairées basées sur des données fiables et en temps réel."
                            </p>
                        </div>
                    </div>

                </div>
            </div>



            <div className='lg:w-[833px] lg:ml-[80px] lg:mt-[154px] w-full mt-[90]'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    Avantages pour les Fournisseurs de Financement
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    </span>
                </h1>
                <p className='text-[16px] text-center lg:text-left'></p>
            </div>

            <div className="h-auto w-full mt-[80px]">
                <section className="flex lg:flex-row lg:flex-wrap flex-col m-auto lg:w-[88%] items-center gap-16">
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Vector.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Plan de financement :
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    “Simplifiez la génération et la présentation du plan de financement de vos investissements aux parties prenantes du projet.”
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
                                <h2 className="font-black text-left text-[24px]">Visualisation et vérification en temps réel :
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    “N’ayez aucune contrainte géographique pour le suivi et le contrôle en temps réel de la gestion de vos investissement”
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/icon9.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Gestion Optimisée des Portefeuilles Immobiliers :
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    "Gardez un œil sur la performance de chaque actif de votre portefeuille, identifiez les opportunités de croissance et minimisez les risques."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Group1.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Prise de Décision Eclairée :
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    "Bénéficiez d'une analyse approfondie des tendances du marché et des performances historiques pour guider vos décisions d'investissement."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Group1.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Optimisation des Revenus Locatifs :
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    "Optimisez les revenus locatifs et la gestion des baux avec des outils automatisés qui simplifient la gestion quotidienne des biens."
                                </p>
                            </div>
                        </section>
                    </div>

                </section>
            </div>



            <div className=' py-16 h-auto lg:mt-[154px] mt-[90] bg-[#F8F8FC]'>
                <div className='lg:w-[833px] lg:ml-[80px] w-full space-y-2'>
                    <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                        Fonctionnalités Clés de la Solution PEM pour les
                        <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                            {" "} Investisseurs Immobiliers
                        </span>
                    </h1>
                    {/* <p className='text-[16px] text-center lg:text-left'>Des fonctionnalités robustes et évolutives conçues pour les besoins des multinationales.</p> */}
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[52px] w-full lg:w-[1200px] h-[403px] flex items-center">
                        <div
                            className="w-full lg:w-[545px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end border-t border-l border-b border-[#0000004D] rounded-l-2xl">
                        </div>
                        <div
                            className="w-full lg:w-[650px] px-2 lg:px-0 h-full border-[#0000004D] border-r border-t border-b rounded-r-3xl flex justify-center items-center">
                            <section className="w-full lg:w-[500px] flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]">Tableaux de Bord Personnalisés :</h1>
                                <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Surveillez en temps réel la performance de vos actifs immobiliers avec des tableaux de bord personnalisés qui vous fournissent des insights clairs et actionnables."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="lg:w-[1201px] w-full mx-3 mt-[44px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{ backgroundImage: `url(images/color5.svg)` }}>
                                <Image src="/images/image12.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt="" />
                            </div>
                            <div
                                className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Modélisation Financière Avancée :
                                </h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">"Utilisez des modèles prédictifs pour anticiper les flux de trésorerie futurs, les coûts d'entretien, et les besoins de financement."</p>
                            </div>
                        </div>

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{ backgroundImage: `url(images/color6.svg)` }}>
                                <Image src="/images/image13.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt="" />
                            </div>
                            <div
                                className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Gestion des Risques :
                                </h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">"Identifiez et gérez les risques potentiels liés à vos investissements immobiliers grâce à des analyses de scénarios et des outils de gestion des risques."</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[52px] w-full lg:w-[1200px] h-[403px] flex items-center">
                        <div
                            className="w-full lg:w-[545px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end border-t border-l border-b border-[#0000004D] rounded-l-2xl">
                        </div>
                        <div
                            className="w-full lg:w-[650px] px-2 lg:px-0 h-full border-[#0000004D] border-r border-t border-b rounded-r-3xl flex justify-center items-center">
                            <section className="w-full lg:w-[487px] flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]">Reporting Automatisé :
                                </h1>
                                <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Générez automatiquement des rapports détaillés sur la performance de vos actifs, la rentabilité des investissements,
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

            </div>



            <div className='lg:w-[833px] lg:ml-[80px] lg:mt-[154px] w-full mt-[90]'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    Avantages pour les
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        {" "} Investisseurs Immobiliers
                    </span>
                </h1>
                <p className='text-[16px] text-center lg:text-left'></p>
            </div>

            <div className="h-auto w-full mt-[80px]">
                <section className="flex lg:flex-row lg:flex-wrap flex-col m-auto lg:w-[88%] items-center gap-16">
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Vector.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    Maximisation du Retour sur Investissement (ROI) : "Améliorez la rentabilité de vos investissements en optimisant la gestion des actifs et en prenant des décisions fondées sur des données."
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
                                <h2 className="font-black text-left text-[24px]">
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    Efficacité Opérationnelle : "Réduisez le temps consacré à la gestion manuelle des propriétés grâce à l'automatisation des processus et à une vue centralisée de toutes vos données immobilières."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/icon9.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    Réduction des Coûts : "Identifiez les inefficacités et réduisez les coûts d'exploitation en optimisant les opérations de gestion immobilière."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Group1.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    Optimisation Fiscale : “Analysez la fiscalité la plus avantageuse en fonction des projets et des revenus des associés”.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Group1.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    Attractivité et Crédibilité renforcée pour les Partenaires Financiers : Une organisation sérieuse facilite l'obtention de financements bancaires ou d'autres partenariats financiers pour le projet immobilier.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Group1.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">
                                </h2>
                                <p className="poppins-medium text-left mt-3">
                                    Clarté des comptes comptes comptables et financiers : permet de garder une comptabilité claire et précise, et de faciliter la répartition des gains entre les parties prenantes
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
                    <div className="w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-r-2xl">
                        </div>
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Étude de Cas :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Découvrez comment [Nom d'un client ou exemple fictif] a utilisé notre solution PEM pour augmenter la rentabilité de son portefeuille immobilier tout en réduisant les risques."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[41px] w-full lg:w-[1200px] h-[300px] flex flex-row-reverse items-center">
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] w-full lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Résultats :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Grâce à notre solution, [Nom du client] a amélioré la rentabilité de ses investissements immobiliers de 25 % et a réduit les coûts d'exploitation de 15 %."
                                </p>
                            </section>
                        </div>
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-l-2xl">
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
                    <div className="w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-r-2xl">
                        </div>
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Citations de Clients :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Nos clients investisseurs parlent de nous. Découvrez comment nous avons aidé des investisseurs immobiliers à maximiser la performance de leurs portefeuilles."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[41px] w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] w-full lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Avis :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "L'utilisation de la solution PEM a transformé notre gestion immobilière, nous permettant de prendre des décisions plus rapides et plus rentables." – [Nom du Client, Investisseur Immobilier]
                                </p>
                            </section>
                        </div>
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-l-2xl">
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
                    <div className="w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-r-2xl">
                        </div>
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Demande de Démo :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Voyez par vous-même comment notre solution PEM peut transformer la gestion de vos investissements immobiliers. Réservez une démonstration personnalisée dès aujourd'hui."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-[1200px] h-[300px] flex flex-row-reverse items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-r-2xl">
                        </div>
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Contactez-Nous :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Parlez à l'un de nos experts pour en savoir plus sur la façon dont notre solution peut répondre aux besoins spécifiques de vos investissements immobiliers."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

            </div>



            <div className='lg:w-[833px] lg:ml-[80px] w-full mt-[90] space-y-3'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    Ressources Supplémentaires
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    </span>
                </h1>
            </div>


            <div className="h-auto w-full pt-[40px] space-y-10">

                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-r-2xl">
                        </div>
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Téléchargez notre Livre Blanc :
                                </h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Un guide complet sur l'optimisation des investissements immobiliers avec la gestion de la performance d'entreprise."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-r-2xl">
                        </div>
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Webinaires :
                                </h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Participez à nos prochains webinaires pour en savoir plus sur les meilleures pratiques en gestion d'investissements immobiliers."
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