import ProgressGradient from '@/app/components/progressGradient'
import Image from 'next/image'
import React from 'react'

const Service = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className="px-4">
                <div
                    className="w-full max-w-[1300px] h-auto lg:h-[450px] bg-[#F8F8FC] rounded-[15px] mt-[26px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 p-4">
                    {/* <!-- Texte --> */}
                    <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                        <span className="poppins-light text-[12px]">Services</span>
                        <div className="text-[30px] font-semibold lg:text-[40px]">
                            <span
                                className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                                Stratégie d'Investissement
                            </span>
                        </div>
                        <span className="mt-[20px] lg:mt-[16px] text-[18px] text-[#494949] font-medium">
                            Vous êtes Responsables financiers, investisseurs, et dirigeants cherchant à maximiser le retour sur investissement.
                        </span>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                            <button className="bg-[#0000FF] text-white p-3 px-4 rounded-3xl text-[15px] flex items-center font-light">
                                <span className="mr-2">&#8594;</span> Demander une démonstration
                            </button>
                            <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light">Regarder la vidéo</button>
                        </div>
                    </div>

                    {/* <!-- Image --> */}
                    <div className="w-full md:w-[80%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[450px] lg:rounded-none rounded-[15px] lg:rounded-r-[15px] bg-cover bg-center"
                        style={{ backgroundImage: `url(/images/heroService3.jpg)` }}></div>
                </div>
            </div>


            <div className="max-w-full lg:w-full flex justify-center">
                <h1 className="lg:mt-[129px] mt-[80px] text-center lg:mx-20 mx-3 text-[28px] lg:text-[40px] font-black">Nos consultants spécialistes des <span
                    className="text-[28px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    Investissements</span> pourront vous accompagner :</h1>
            </div>


            <div className="lg:h-auto h-auto w-full mt-[94px]">
                <section className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-3">
                    <div className="w-[391px] h-[220px] relative flex justify-center">
                        <section className="w-[380px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="/images/Vector.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                {/* <span className="font-black text-[16px]">France Relance : </span> */}
                                <p className="poppins-medium ">
                                    En fournissant des recommandations basées sur des données précises et des analyses de marché.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[391px] h-[220px] relative flex justify-center">
                        <section className="w-[380px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="images/icon8.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                                <p className="poppins-medium ">
                                    En communiquant avec votre département financier dans les décisions d'acquisition d'actifs, d'allocation de capital, et de diversification des portefeuilles d'investissement.
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>


            <div className="mt-[108px] max-w-full h-auto pb-28 bg-[#F8F8FC] flex flex-col items-center">
                <h1 className="mt-[114px] text-[28px] lg:text-[40px] lg:w-[912px] text-center font-black">
                    Nous intervenons pour la planification stratégique de vos investissements :
                </h1>
                <div className='w-full flex justify-center'>
                    <div className="mt-[69px] w-[800px] lg:h-[480px] h-auto grid lg:grid-cols-2 grid-col-1 lg:pl-9 place-content-center gap-[29px]">
                        <div className="max-w-[400px] py-4 h-[480px] bg-white rounded-[20px] flex items-center pt-8">
                            <div className="w-full h-full flex flex-col gap-5 items-center justify-center ">
                                <span
                                    className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-br from-[#0000FF] to-[#00FFFF]"></span>
                                <h2 className="w-[330px] text-[20px] poppins-semibold text-center font-black">Planification des cycles d'investissement annuels :</h2>
                                <p className="poppins-light text-center w-[330px] leading-[19.2px]"> Nos consultants interviendront au moment où votre entreprise planifie ses investissements pour l'année à venir. Ils analysent les performances passées, les prévisions de marché, et les objectifs stratégiques pour vous aider à allouer les ressources financières de manière optimale. Cela inclut la priorisation des projets d'investissement, l'évaluation des risques, et la définition des retours attendus.</p>
                            </div>
                        </div>
                        <div className="max-w-[400px] py-4 h-[480px] bg-white rounded-[20px] flex items-center pt-6">
                            <div className="w-full h-full flex flex-col gap-7 items-center justify-center">
                                <span
                                    className="w-[120px] h-[120px] rounded-[50%] bg-gradient-to-bl from-[#800080] to-[#FF0066]"></span>
                                <h2 className="w-[330px] text-[20px] poppins-semibold text-center font-black">Recherche de nouvelles opportunités d'investissement :</h2>
                                <p className="poppins-light text-center w-[330px] leading-[19.2px]">Lorsqu'il s'agira de trouver de nouvelles opportunités d'investissement, nos consultants fourniront des analyses approfondies du marché, identifient les secteurs à forte croissance, et évaluent les opportunités en fonction de votre profil de risque et de vos objectifs stratégiques. Ils vous accompagnent dans la sélection des investissements les plus prometteurs et alignés avec votre stratégie globale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center mt-10">
                <h1 className="mt-[114px] text-[28px] lg:text-[40px] lg:w-[1030px] text-center font-black">
                    Comment nos consultants pourront vous assurer des
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]"> décisions d'investissement éclairées, stratégiques, et alignées </span>
                    avec les objectifs de votre entreprise?
                </h1>
            </div>


            <div className="w-full flex justify-center">
                <div className="mt-[84px] lg:w-[1200px] w-full h-auto lg:h-[403px] flex flex-col lg:flex-row items-center">
                    <div
                        className="lg:w-[425px] w-full h-full flex justify-center items-center bg-gradient-to-br from-[#0000FF] to-[#00FFFF] rounded-l-2xl">
                        <section className="w-[350px] h-[250px] bg-center bg-cover rounded-2xl"
                            style={{ backgroundImage: `url(images/baner5.jpg)` }}></section>
                    </div>
                    <div
                        className="lg:w-[775px] w-full h-full border border-[#0000004D] border-l-none rounded-r-3xl flex justify-center items-center">
                        <section className="lg:w-[587px] w-full py-9 lg:py-0 flex flex-col justify-center items-center">
                            <h1 className="w-full text-[28px] lg:text-left text-center lg:text-[31px] font-black">Analyse des tendances du marché :</h1>
                            <p className="lg:w-[551px] lg:mr-9 w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                {/* <span className="font-black">Étape :</span> */}
                                Nos consultants commencent par étudier les tendances actuelles et émergentes du marché, en analysant les données économiques, les comportements des consommateurs, et les évolutions sectorielles. Cette analyse permet de comprendre les dynamiques du marché et d'identifier les secteurs porteurs.
                            </p>
                            {/* <p className="lg:w-[551px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                                <span className="font-black">Impact :</span> Cela permet de comprendre les forces et les
                                faiblesses opérationnelles, et de poser les bases pour des améliorations ciblées.
                            </p> */}
                        </section>
                    </div>
                </div>
            </div>


            <div className="w-full flex justify-center">
                <div className="lg:w-[1201px] mt-[44px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[35px] gap-[50px]">

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(/images/color5.svg)` }}>
                            <Image src="/images/image10.jpg" height={428} width={428} className="absolute z-20 top-[37px] rounded-t-2xl right-[0px]" alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center px-3 lg:px-0 h-auto pb-9 lg:pb-10 w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] lg:text-left text-center text-[28px] poppins-semibold lg:mt-[61px] mt-[40px] font-black">Simulation de scénarios d'investissement :</h2>
                            <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                {/* <span className="font-black">Étape :</span>  */}
                                Ensuite, nous utilisons des modèles financiers pour simuler différents scénarios d'investissement. Ces simulations prennent en compte diverses variables telles que les fluctuations du marché, les risques économiques, et les opportunités de croissance, permettant d'évaluer les impacts potentiels sur vos investissements.
                            </p>
                            {/* <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                                <span className="font-black">Impact :</span> Ces KPIs permettent aux dirigeants de mesurer les résultats, d'évaluer la réussite des stratégies mises en place, et d'ajuster les actions en conséquence.
                            </p> */}
                        </div>
                    </div>

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(/images/color6.svg)` }}>
                            <Image src="/images/image11.jpg" height={400} width={380} className="absolute z-20 top-[25px] rounded-t-2xl right-[0px]" alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center px-3 lg:px-0 h-auto pb-9 lg:pb-16 w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] lg:text-left text-center text-[28px] poppins-semibold mt-[61px] font-black">Conseils personnalisés : </h2>
                            <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                {/* <span className="font-black">Étape :</span>  */}
                                Enfin, nos consultants fournissent des recommandations stratégiques adaptées à votre situation spécifique. Ils vous conseillent sur les investissements à privilégier, les secteurs à éviter, et les stratégies à adopter pour maximiser les rendements tout en minimisant les risques. Ces conseils sont basés sur une compréhension approfondie de vos objectifs financiers et de votre tolérance au risque.
                            </p>
                            {/* <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                                <span className="font-black">Impact :</span> L'automatisation des workflows améliore l'efficacité, réduit les coûts et permet aux équipes de se concentrer sur des tâches à plus forte valeur ajoutée.
                            </p> */}
                        </div>
                    </div>

                </div>
            </div>



            <div className="mt-[167px] w-full">
                <div className="w-full  lg:h-[550px] py-8 lg:py-0 bg-[#0000FF] flex items-center">
                    <div className="lg:w-[981px] w-full py-auto flex px-3 lg:px-0 ml-0 lg:ml-20 gap-[159px]">
                        <div className="flex flex-col text-white">
                            <h1 className="lg:w-[787px] w-full text-[28px] lg:text-[40px] font-black lg:leading-[48px] lg:text-justify">Pourquoi auriez vous besoin des avis, des conseils et des recommandations de nos consultants ?</h1>
                         <div 
                    className={`flex flex-col gap-10 mt-6`}
                >
                    <h2 className="text-[24px] mt-[22px] leading-[19.2px]">
                    Maximiser les rendements tout en minimisant les risques :
                    </h2>
                    <p className="text-[16px] poppins-light leading-[24.2px]">
                    Leurs conseils s’appuyant sur les outils de performance pourront optimiser vos investissements en assurant un équilibre entre opportunités de gains et gestion des risques. En s'appuyant sur des données fiables issues d'analyses de marché approfondies, et en recevant des conseils d'experts, vous êtes en mesure de prendre des décisions éclairées et stratégiques. Cela vous permet non seulement de saisir les meilleures opportunités d'investissement, mais aussi de protéger vos actifs contre les incertitudes économiques et les fluctuations du marché.
                    </p>
                </div>
                        </div>
                    </div>
                    <ProgressGradient />
                </div>
            </div>

        </div>
    )
}

export default Service