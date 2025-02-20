import ProgressGradient from "@/app/components/progressGradient";
import SliderServ from "@/app/components/Service7/slider";
import Image from "next/image";


const Service = () => {

    return (
        // <!-- Section Hero -->
        <div className="w-full overflow-hidden">
            <div className="px-4">
                <div
                    className="w-full max-w-[1300px] h-auto lg:h-[600px] bg-[#F8F8FC] rounded-[15px] mt-[26px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 p-4">
                    {/* <!-- Texte --> */}
                    <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                        <span className="poppins-light text-[12px]">Services</span>
                        <div className="text-[30px] font-semibold lg:text-[40px]">
                          <span
                                className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                                Stratégie Énergétique et Ecologique </span> (pour la production d’énergies décarbonées et de décarbonation de l’industrie)
                        </div>
                        <span className="mt-[20px] lg:mt-[16px] text-[18px] text-[#494949] font-medium">
                        Vous êtes Représentant d’une entreprise industrielle cherchant à réduire votre empreinte carbone et à adopter des énergies décarbonées pour vos processus de production industrielle.
                        </span>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                            <button className="bg-[#0000FF] text-white p-3 px-4 rounded-3xl text-[15px] flex items-center font-light">
                                <span className="mr-2">&#8594;</span> Demander une démonstration
                            </button>
                            <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light">Regarder la vidéo</button>
                        </div>
                    </div>

                    {/* <!-- Image --> */}
                    <div className="w-full md:w-[80%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[600px] lg:rounded-none rounded-[15px] lg:rounded-r-[15px] bg-cover bg-center"
                        style={{ backgroundImage: `url(/images/heroService7.jpg)` }}></div>
                </div>
            </div>

            <div className="max-w-full lg:w-[1188px]">
                <h1 className="lg:mt-[129px] mt-[80px] lg:ml-[120px] lg:text-left text-center mx-3 text-[28px] lg:text-[40px] font-black">Nos consultants en management peuvent intégrer à notre suite logicielle, pour vous aider :</h1>
            </div>


            <div className="h-auto w-full mt-[94px]">
                <section className="flex flex-col lg:flex-row items-center lg:gap-0 gap-3">
                    <div className="w-[100px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block"></div>
                    <div className="w-[391px] h-[220px] border-[#00000026] border relative flex justify-center">
                        <section className="w-[314px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="/images/Vector.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                {/* <span className="poppins-semibold text-[16px]">France Relance : </span> */}
                                <p className="poppins-medium ">
                                A définir et à mettre en œuvre des plans d'action efficaces pour améliorer la performance globale de votre entreprise.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[391px] h-[220px] border-[#00000026] border relative flex justify-center">
                        <section className="w-[314px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="images/icon8.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                {/* <span className="poppins-semibold text-[16px]">Plan de Relance Numérique : </span> */}
                                <p className="poppins-medium ">
                                A communiquer des recommandations éclairées avec vos départements opérationnels, avec un focus sur la direction et la gestion des équipes.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[391px] h-[220px] border-[#00000026] border relative flex justify-center">
                        <section className="w-[314px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="images/icon9.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                {/* <span className="poppins-semibold text-[16px]">Chèque numérique : </span> */}
                                <p className="poppins-medium ">
                                A faire décoller votre entreprise dans un environnement en pleine mutation.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[100px] h-[220px] border-[#00000026] border-b border-l border-t hidden lg:block"></div>
                </section>

            </div>



            <div className="mt-[108px] max-w-full bg-[#F8F8FC] pb-24 flex flex-col items-center">
                <h1 className="mt-[114px] text-[28px] lg:text-[40px] lg:w-[900px] text-center font-black">Nous intervenons pour minimiser les risques associés à des phases critiques et garantir la compétitivité de votre entreprise: <span
                    className="bg-gradient-to-r from-[#00FFFF] to-[#0000FF] bg-clip-text text-transparent"></span> </h1>
                
                <div className="mt-[120px] w-full lg:w-[95%] lg:h-[350px] h-auto grid lg:grid-cols-3 grid-col-1 lg:pl-9 place-content-center gap-[29px]">
                    <div className="max-w-[380px] py-4 h-[450px] bg-white rounded-[20px] flex items-center pt-8">
                        <div className="w-full h-full flex flex-col gap-5 items-center justify-center ">
                            <span
                                className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-br from-[#0000FF] to-[#00FFFF]"></span>
                            <h2 className="w-[330px] text-[20px] poppins-semibold text-center font-black">Transition vers des pratiquesLors des phases critiques de croissance : </h2>
                            <p className="poppins-light text-center w-[330px] leading-[19.2px]"> Lorsque votre entreprise connaît une expansion rapide, nos consultants interviennent pour structurer et optimiser les processus managériaux afin de soutenir cette croissance. Ils aident à mettre en place des systèmes qui permettent de gérer efficacement l'augmentation des volumes de travail, des clients, ou des produits.</p>
                        </div>
                    </div>
                    <div className="max-w-[380px] py-4 h-[450px] bg-white rounded-[20px] flex items-center pt-6">
                        <div className="w-full h-full flex flex-col gap-7 items-center justify-center">
                            <span
                                className="w-[120px] h-[120px] rounded-[50%] bg-gradient-to-bl from-[#800080] to-[#FF0066]"></span>
                            <h2 className="w-[330px] text-[20px] poppins-semibold text-center font-black">Changement organisationnel : </h2>
                            <p className="poppins-light text-center w-[330px] leading-[19.2px]">Si votre entreprise traverse une réorganisation interne, une fusion, une acquisition, ou un changement de leadership, nos consultants fournissent des conseils pour assurer une transition en douceur. Ils aident à redéfinir les rôles, à réaligner les équipes et à garantir que la nouvelle structure soutient les objectifs stratégiques.</p>
                        </div>
                    </div>
                    <div className="w-[380px] py-4 h-[450px] bg-white rounded-[20px] flex items-center pt-8">
                        <div className="w-full h-full flex flex-col gap-6 items-center justify-center">
                            <span
                                className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-br from-[#0000FF] to-[#00FFFF]"></span>
                            <h2 className="w-[330px] text-[20px] poppins-semibold text-center font-black">Réorientation stratégique : </h2>
                            <p className="poppins-light text-center w-[330px] leading-[19.2px]">Lorsqu'une entreprise décide de changer de cap stratégique, que ce soit en réponse à des changements du marché, à des nouvelles opportunités, ou à des menaces externes, nos consultants sont là pour guider le processus. Ils assistent dans la révision des objectifs, la communication des nouvelles priorités aux équipes, et l'adaptation des opérations pour aligner l'entreprise sur la nouvelle stratégie.</p>
                        </div>
                    </div>
              
                </div>

            </div>



    <div className="w-full flex flex-col items-center">
        <h1 className="mt-[167px] text-[28px] lg:text-[40px] lg:w-[988.33px] leading-[50px] text-center font-black">
        Comment en temps réel nos consultants peuvent un cadre structuré pour améliorer <span
            className="bg-gradient-to-r from-[#00FFFF] to-[#0000FF] bg-clip-text text-transparent">la gestion et la performance de l'entreprise </span>
            tout en alignant les actions sur les objectifs stratégiques ?
        </h1>
    </div>


    <div className="w-full flex justify-center">
           <div className="mt-[84px] lg:w-[1200px] w-full h-auto lg:h-[403px] flex flex-col lg:flex-row items-center">
               <div
                   className="lg:w-[425px] w-full h-full bg-center bg-cover rounded-l-2xl" style={{backgroundImage: `url(images/baner7.jpg)`}}>
               </div>
               <div
                   className="lg:w-[775px] w-full h-full border border-[#0000004D] border-l-none rounded-r-3xl flex justify-center items-center">
                   <section className="lg:w-[587px] w-full py-9 lg:py-0 flex flex-col justify-center">
                       <h1 className="w-full text-[28px] text-center lg:text-left lg:text-[31px] font-black">Analyse des processus existants</h1>
                       <p className="lg:w-[551px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                           <span className="font-black">Étape :</span> Les consultants en stratégie commencent par
                           examiner les processus actuels de l'entreprise pour identifier les inefficacités, les
                           redondances, et les points d'amélioration.
                       </p>
                       <p className="lg:w-[551px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                           <span className="font-black">Impact :</span> Cela permet de comprendre les forces et les
                           faiblesses opérationnelles, et de poser les bases pour des améliorations ciblées.
                       </p>
                   </section>
               </div>
           </div>
       </div>
   
   
       <div className="w-full flex justify-center">
           <div className="lg:w-[1201px] mt-[44px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[35px] gap-[50px]">
   
               <div>
                   <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                       style={{backgroundImage: `url(/images/color5.svg)`}}>
                       <Image src="/images/image14.jpg" height={428} width={428} className="absolute z-20 top-[37px] rounded-t-2xl right-[0px]" alt=""/>
                   </div>
                   <div
                       className="flex flex-col items-center px-3 lg:px-0 h-auto pb-9 lg:pb-10 w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                       <h2 className="lg:w-[459px] lg:text-left text-center text-[28px] poppins-semibold lg:mt-[61px] mt-[40px] font-black">Définition de KPIs (Indicateurs Clés de Performance)</h2>
                        <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                           <span className="font-black">Étape :</span> Sur la base de l'analyse, les consultants définissent des KPIs spécifiques et pertinents pour suivre la performance et les progrès.
                       </p>
                       <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                           <span className="font-black">Impact :</span> Ces KPIs permettent aux dirigeants de mesurer les résultats, d'évaluer la réussite des stratégies mises en place, et d'ajuster les actions en conséquence.
                       </p>
                   </div>
               </div>
   
               <div>
                   <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                       style={{backgroundImage: `url(/images/color6.svg)`}}>
                       <Image src="/images/image15.jpg" height={300} width={378} className="absolute z-20 top-[26px] rounded-t-2xl right-[0px]" alt=""/>
                   </div>
                   <div
                       className="flex flex-col items-center px-3 lg:px-0 h-auto pb-9 lg:pb-20 w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                       <h2 className="lg:w-[459px] lg:text-left text-center text-[28px] poppins-semibold mt-[61px] font-black">Automatisation des workflows</h2>
                       <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                           <span className="font-black">Étape :</span> Les processus manuels sont automatisés à l'aide d'outils numériques, réduisant ainsi les erreurs humaines et les inefficacités.
                       </p>
                       <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                           <span className="font-black">Impact :</span> L'automatisation des workflows améliore l'efficacité, réduit les coûts et permet aux équipes de se concentrer sur des tâches à plus forte valeur ajoutée.
                       </p>
                   </div>
               </div>
   
           </div>
       </div>
   
   
       <div className="w-full flex justify-center">
           <div className="mt-[42px] w-full lg:w-[1200px] lg:h-[400px] lg:shadow-transparent shadow-lg h-auto flex flex-col lg:flex-row items-center ">
               <section className="lg:w-[425px] w-full lg:h-full h-[400px]" style={{backgroundImage: `url(/images/baner1.svg)`}}></section>
               <div
                   className="lg:w-[775px] h-[395px] w-full lg: border border-[#0000004D] border-l-none rounded-r-3xl flex justify-center items-center">
                   <section className="lg:w-[587px] h-auto px-6 lg:px-0">
                       <h1 className="poppins-semibold text-[28px] text-center lg:text-left lg:text-[31px] font-black">Conseils en temps réel par des consultants en stratégie</h1>
                       <p className="lg:w-[580px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                           <span className="font-black">Étape :</span> Les consultants fournissent des recommandations et des conseils continus basés sur les données en temps réel et les évolutions du marché.
                       </p>
                       <p className="lg:w-[580px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                           <span className="font-black">Impact :</span> Les dirigeants bénéficient d'un accompagnement stratégique réactif, ce qui leur permet de prendre des décisions éclairées et d'ajuster les stratégies de manière proactive pour maximiser les résultats.
                       </p>
                   </section>
               </div>
           </div>
       </div>

       <div className="mt-[167px] w-full">
        <div className="w-full  lg:h-[550px] py-8 lg:py-0 bg-[#0000FF] flex items-center">
          <div className="lg:w-[981px] w-full py-auto flex px-3 lg:px-0 ml-0 lg:ml-20 gap-[159px]">
            <div className="flex flex-col text-white">
              <h1 className="lg:w-[787px] w-full text-[28px] lg:text-[40px] font-black lg:leading-[48px] lg:text-justify">
                Pourquoi auriez-vous besoin des avis, des conseils et des
                recommandations de nos consultants ?{" "}
              </h1>
             <SliderServ/>
            </div>
          </div>
          <ProgressGradient />
        </div>
      </div>



            <div />
        </div>
    )
}
export default Service;