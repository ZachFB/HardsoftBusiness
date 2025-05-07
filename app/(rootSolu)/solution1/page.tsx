import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div
                className="w-full m-auto max-w-[1300px] h-auto lg:h-[494px] bg-[#F8F8FC] rounded-[15px] mt-[50px] lg:mt-[150px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 py-4 lg:px-0 px-2">
                {/* <!-- Texte --> */}
                <div className="w-full lg:w-[55%] lg:px-10 flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                    <span className="poppins-light text-[12px]">Solutions</span>
                    <span
                        className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        Petites et Moyennes Entreprises
                    </span>
                    <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[18px] text-[#494949] font-medium">
                        Des Outils de Gestion Puissants pour les Petites et Moyennes Entreprises &#34;Optimisez la Gestion de Votre Entreprise avec Notre Solution de Gestion de la Perfomance&#34; &#34;En tant que petite ou moyenne entreprise, vous êtes constamment confronté à des défis pour rester compétitif, optimiser vos opérations et maximiser vos profits. Notre Suite Logiciel de Performance Enterprise est spécialement conçue pour vous aider à relever ces défis avec des outils simples, efficaces et adaptés à vos besoins.&#34;
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                        <button className="bg-[#0000FF] text-white p-3 lg:px-7 lg:w-auto w-[350px] rounded-3xl text-[15px] flex justify-center items-center font-light">
                            <span className="mr-2">&#8594;</span> Try for free
                        </button>
                        <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light hidden">Regarder la vidéo</button>
                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] h-[250px] md:h-[350px] lg:h-[494px] rounded-r-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroSolu1.jpg)` }}></div>
            </div>




            <h1 className="poppins-semibold lg:text-[40px] text-[30px] text mt-[90] text-center lg:text-left lg:mt-[154px] w-full lg:w-[833px] lg:ml-[80px] leading-[48px] font-black">&#34;Pourquoi les PME Choisissent
                Notre Solution PEM&#34;</h1>

            <div className="w-full flex justify-center">
                <div className="lg:w-full mt-[44px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">

                    <div>
                        <div className="relative w-full h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color5.svg)` }}>
                            <Image src="/images/image16.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-[180px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Gestion Simplifiée des Budgets :</h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]"> &#34;Planifiez et gérez vos
                                budgets en toute simplicité, avec une visibilité totale sur vos dépenses.&#34;</p>
                        </div>
                    </div>

                    <div>
                        <div className="relative w-full h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color6.svg)` }}>
                            <Image src="/images/image17.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-[180px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Prévisions Financières Précises :</h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">
                                &#34;Anticipez vos besoins
                                financiers avec des prévisions basées sur des données en temps réel.&#34;
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="relative w-full h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color5.svg)` }}>
                            <Image src="/images/image18.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-[180px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] text-[20px] lg:text-left text-center font-black mt-[40px]">Planification Stratégique Adaptée :
                            </h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">&#34;Élaborez des plans
                                stratégiques clairs et atteignez vos objectifs de croissance.&#34;</p>
                        </div>
                    </div>

                    <div>
                        <div className="relative w-full h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(/images/color6.svg)` }}>
                            <Image src="/images/image19.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-[180px] px-2 w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center lg:mt-[40px] mt-[20px]">Suivi des Performances en Temps Réel :
                            </h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">
                                &#34;Suivez les performances de votre entreprise à tout moment et prenez des décisions informées.&#34;
                            </p>
                        </div>
                    </div>

                </div>
            </div>





            <div className="lg:mt-[154px] mt-[80px] lg:h-[1628px] h-auto w-full bg-[#F8F8FC] pt-[86px]">
                <h1 className="poppins-semibold text-[30px] text-center lg:text-left lg:text-[40px] lg:w-[833px] lg:ml-[80px] leading-[48px] font-black">Fonctionnalités Clés pour Booster
                    Votre PME</h1>

                <div className="w-full flex justify-center">
                    <div className="mt-[52px] w-full lg:w-full h-[403px] flex items-center">
                        <div
                            className="w-full lg:w-[545px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end border-t border-l border-b border-[#0000004D] rounded-l-2xl">
                        </div>
                        <div
                            className="w-full lg:w-[750px] px-2 lg:px-0 h-full border-[#0000004D] border-r border-t border-b rounded-r-3xl flex justify-center items-center">
                            <section className="w-full lg:w-[487px] flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]">Tableaux de Bord Personnalisés :</h1>
                                <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    &#34;Visualisez vos données clés sur des tableaux de bord personnalisés, accessibles depuis
                                    n&#39;importe quel appareil.&#34;
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="lg:w-full w-full mt-[41px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">
                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{backgroundImage: `url(images/color5.svg)`}}>
                                <Image src="/images/image12.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt=""/>
                            </div>
                            <div
                                className="flex flex-col items-center h-[180px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center lg:mt-[40px] mt-[20px]">Automatisation des
                                    Processus :
                                </h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">&#34;Automatisez vos
                                    tâches administratives et financières pour gagner du temps et réduire les erreurs.&#34;</p>
                            </div>
                        </div>

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{backgroundImage: `url(images/color6.svg)`}}>
                                <Image src="/images/image13.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt=""/>
                            </div>
                            <div
                                className="flex flex-col items-center h-[180px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center lg:mt-[40px] mt-[20px]">Analyse de
                                    Rentabilité :</h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">
                                    &#34;Évaluez la rentabilité de vos projets et optimisez vos investissements.&#34;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[41px] w-full lg:w-full h-[350px] flex items-center">
                        <div
                            className="lg:w-[545px] w-full h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end border-t border-l border-b border-[#0000004D] rounded-l-2xl">
                        </div>
                        <div
                            className="lg:w-[715px] w-full h-full px-2 lg:px-0 border-[#0000004D] border-r border-t border-b rounded-r-3xl flex justify-center items-center">
                            <section className="lg:w-[487px] w-full flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]">Collaboration Facilitée :</h1>
                                <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    &#34;Travaillez en équipe avec des outils de collaboration intégrés, pour une gestion plus
                                    efficace.&#34;
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
         







            <div className="lg:w-[1188px] w-full mx-auto">
                <h1 className="mt-[129px] text-center lg:ml-[100px] text-[40px] w-full lg:w-[1036px] font-black leading-[48.2px]">
                    Témoignages de Clients</h1>
            </div>

            <div className="lg:h-[224px] h-auto w-full mt-[80px]">
                <section className="flex lg:flex-row flex-col justify-center items-center gap-16">
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-center py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Vector.svg" className="m-auto mt-2" alt=""/>
                            </span>
                            <div className="flex flex-col items-center">
                                <h2 className="font-black">Client A :</h2>
                                <p className="poppins-medium text-center mt-3">
                                    "Grâce à la solution PEM, nous avons pu réduire nos coûts opérationnels de 20% tout en
                                    améliorant notre efficacité."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-center py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/icon8.svg" className="m-auto mt-2" alt=""/>
                            </span>
                            <div className="flex flex-col items-center">
                                <h2 className="font-black">Client B :</h2>
                                <p className="poppins-medium text-center mt-3">
                                    "Les tableaux de bord personnalisés nous ont permis de mieux comprendre nos finances et de prendre des décisions plus rapidement."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-center py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/icon9.svg" className="m-auto mt-2" alt=""/>
                            </span>
                            <div className="flex flex-col items-center">
                                <h2 className="font-black">Client C :</h2>
                                <p className="poppins-medium text-center mt-3">
                                    "L'automatisation de la gestion budgétaire a été un véritable gain de temps pour notre équipe."
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>




           <div className="w-full lg:w-[1188px] mx-auto">
                <h1 className="lg:mt-[200px] mt-[80px] text-center lg:ml-[100px] font-black text-[40px] w-full lg:w-[1036px] leading-[48.2px]">
                    Cas d'Utilisation Concret</h1>
            </div>

            <div className="lg:h-[224px] h-auto w-full mt-[80px]">
                <section className="flex lg:flex-row flex-col items-center justify-center gap-16">
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-center py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="images/Vector.svg" className="m-auto mt-2" alt=""/>
                            </span>
                            <div className="flex flex-col items-center">
                                <h2 className="font-black">Contexte :</h2>
                                <p className="poppins-medium text-center mt-3">
                                    "Une PME dans le secteur de la fabrication avait des difficultés à gérer ses coûts de production et à prévoir ses besoins en trésorerie."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-center py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="images/icon8.svg" className="m-auto mt-2" alt=""/>
                            </span>
                            <div className="flex flex-col items-center">
                                <h2 className="font-black">Solution :</h2>
                                <p className="poppins-medium text-center mt-3">
                                    "Grâce à la solution PEM, ils ont pu automatiser la gestion de leurs coûts, obtenir des prévisions financières précises, et améliorer leur rentabilité."
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-center py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="images/icon9.svg" className="m-auto mt-2" alt=""/>
                            </span>
                            <div className="flex flex-col items-center">
                                <h2 className="font-black">Résultats :</h2>
                                <p className="poppins-medium text-center mt-3">
                                    "En un an, cette PME a réduit ses coûts de 15% et a augmenté sa marge bénéficiaire de 10%."
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>

            <div className="mt-[154px] h-auto w-full pt-[86px]">
                <h1 className="poppins-semibold w-full text-[40px] px-3 lg:px-0 lg:w-[833px] lg:ml-[80px] leading-[48px] font-black">Témoignages Clients</h1>

                <div className="w-full flex justify-center mt-[20px]">
                    <div className="mt-[41px] w-full lg:w-full h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                        <div
                            className="lg:w-[720px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Contexte :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Une PME dans le secteur de la fabrication avait des difficultés à gérer ses coûts de production et à prévoir ses besoins en trésorerie."
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
                                <h1 className="poppins-semibold text-[32px] font-black">Solution :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Grâce à la solution PEM, ils ont pu automatiser la gestion de leurs coûts, obtenir des prévisions financières précises, et améliorer leur rentabilité."
                                </p>
                            </section>
                        </div>
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[41px] w-full lg:w-full h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end rounded-2xl">
                        </div>
                        <div
                            className="lg:w-[720px] w-full flex justify-center items-center">
                            <section className="lg:w-[466px] w-full lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Résultats :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "En un an, cette PME a réduit ses coûts de 15% et a augmenté sa marge bénéficiaire de 10%."
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