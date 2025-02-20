import DeploymentSection from '@/app/components/Solution6/EtreDeployer'
import DeploymentSection2 from '@/app/components/Solution6/EtreDeployer2'
import CardSlider from '@/app/components/Solution6/slider'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div
                className="w-full m-auto relative h-auto lg:h-[800px] bg-[#F4DDFF] rounded-[15px] mt-[26px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 p-4">
                {/* <!-- Texte --> */}
                <div className="w-full lg:px-80 py-6 flex flex-col items-center lg:items-center text-center lg:text-center">
                    <span className="poppins-light text-[12px]">Solutions</span>

                    {/* Conteneur du slider avec une hauteur définie */}
                    <div className="w-full h-auto "> {/* Ajuste la hauteur selon tes besoins */}
                        <CardSlider />
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <button className="bg-[#0000FF] text-white p-3 px-4 rounded-3xl text-[15px] flex items-center font-light">
                            <span className="mr-2">&#8594;</span> Demander une démonstration
                        </button>
                        <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light">Regarder la vidéo</button>
                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="absolute lg:flex hidden right-0 w-[12%] h-full lg:h-[800px]">
                <section className="w-[45%] h-full"
                    style={{backgroundImage: `linear-gradient(to bottom, #B98FFE, #FE3AC2)`}}></section>
                <section className="w-[55%] h-full"
                    style={{backgroundImage: `linear-gradient(to bottom, #1313FC, #FFC0CB)`}}></section>
                </div>
            </div>




            <h1 className="poppins-semibold lg:text-[40px] text-[30px] text mt-[90] text-center lg:text-left lg:mt-[154px] w-full lg:w-[833px] lg:ml-[80px] leading-[48px] font-black">
            Pourquoi Ces Entreprises ont Besoin de PEM
            </h1>

            <div className="w-full flex justify-center">
                <div className="lg:w-[1201px] w-full mx-3 mt-[44px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color5.svg)` }}>
                            <Image src="/images/image28.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-[180px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Scalabilité et Croissance :</h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]"> "Gérez la croissance rapide et évolutive de votre entreprise avec des outils flexibles qui s'adaptent à vos besoins."</p>
                        </div>
                    </div>

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color6.svg)` }}>
                            <Image src="/images/image29.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-[180px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Optimisation des Revenus :
                            </h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">
                            "Augmentez vos revenus grâce à des analyses approfondies de la performance commerciale et à l'optimisation des prix et des marges."
                            </p>
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
                                <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]">Gestion Financière Avancée :
                                </h1>
                                <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                "Assurez une gestion financière fluide avec des prévisions précises, une budgétisation automatisée, et des rapports en temps réel."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>



                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text mt-[90] text-center lg:text-left lg:mt-[154px] w-full lg:w-[833px] lg:ml-[80px] leading-[48px] font-black">
                Fonctionnalités Clés pour les Entreprises SaaS, Marketplace, E-commerce, et Services Financiers Intégrés
               </h1>

               <div>
                <DeploymentSection/>
               </div>




               <h1 className="poppins-semibold lg:text-[40px] text-[30px] text mt-[90] text-center lg:text-left lg:mt-[154px] w-full lg:w-[833px] lg:ml-[80px] leading-[48px] font-black">
               Avantages pour Ces Secteurs
               </h1>

               <div>
                <DeploymentSection2/>
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
                                "Découvrez comment [Nom d'une entreprise ou exemple fictif] a utilisé notre solution PEM pour optimiser sa gestion financière et accélérer sa croissance."                                </p>
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
                                "Grâce à notre solution, [Nom du client] a augmenté son chiffre d'affaires de 20 % tout en réduisant ses coûts opérationnels de 15 %."
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
                                "Nos clients SaaS, Marketplace, E-commerce et Services Financiers parlent de nous. Découvrez comment nous avons transformé leur gestion d'entreprise."
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
                                "La solution PEM nous a permis d'automatiser nos processus et de concentrer nos efforts sur l'innovation et la croissance." – [Nom du Client, Entreprise SaaS/E-commerce/Marketplace]
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
                                "Découvrez par vous-même comment notre solution PEM peut transformer la gestion de votre entreprise. Réservez une démonstration personnalisée dès aujourd'hui."
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
                                "Parlez à l'un de nos experts pour en savoir plus sur la façon dont notre solution peut répondre aux besoins spécifiques de votre entreprise."
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
                                "Un guide complet sur l'optimisation des performances pour les entreprises SaaS, Marketplace, E-commerce, et Services Financiers Intégrés."
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
                                "Participez à nos prochains webinaires pour en savoir plus sur les meilleures pratiques en gestion d'entreprise pour ces secteurs."
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default page