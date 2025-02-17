import ProgressGradient from "@/app/components/progressGradient";
import SliderServ from "@/app/components/service6/slider";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="px-4">
        <div className="w-full max-w-[1300px] h-auto lg:h-[450px] bg-[#F8F8FC] rounded-[15px] mt-[26px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 p-4">
          {/* <!-- Texte --> */}
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
            <span className="poppins-light text-[12px]">Services</span>
            <div className="text-[30px] font-semibold lg:text-[40px]">
              <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
              Stratégie de Restructuration
              </span>
            </div>
            <span className="mt-[20px] lg:mt-[16px] text-[18px] text-[#494949] font-medium">
            Vous êtes représentant d’une entreprise confrontée à des défis financiers, opérationnels ou organisationnels nécessitant une restructuration.
            </span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <button className="bg-[#0000FF] text-white p-3 px-4 rounded-3xl text-[15px] flex items-center font-light">
                <span className="mr-2">&#8594;</span> Demander une démonstration
              </button>
              <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light">
                Regarder la vidéo
              </button>
            </div>
          </div>

          {/* <!-- Image --> */}
          <div
            className="w-full md:w-[80%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[450px] lg:rounded-none rounded-[15px] lg:rounded-r-[15px] bg-cover bg-center"
            style={{ backgroundImage: `url(/images/HeroService6.jpg)` }}
          ></div>
        </div>
      </div>

      <div className="max-w-full lg:w-full flex justify-center">
        <h1 className="lg:mt-[129px] mt-[80px] text-center lg:mx-20 mx-3 text-[28px] lg:text-[40px] font-black">
        Nos consultants en comptabilité carbone vous accompagneront pour élaborer et mettre en œuvre des{" "}
          <span className="text-[28px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
            stratégies de décarbonation
          </span>
          , incluant l’optimisation de la production d’énergies renouvelables et la réduction des émissions de carbone dans l’ensemble des processus industriels, y compris :
        </h1>
      </div>

      <div className="lg:h-auto h-auto w-full mt-[130px]">
        <section className="flex flex-col lg:flex-row items-center justify-center lg:gap-36 gap-3">
          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="/images/Vector.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">France Relance : </span> */}
                <p className="poppins-medium ">
                La production
                </p>
              </div>
            </section>
          </div>
          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="images/icon8.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                <p className="poppins-medium ">
                la logistique,
                </p>
              </div>
            </section>
          </div>

          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="images/icon9.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                <p className="poppins-medium ">
                les économies d’énergie
                </p>
              </div>
            </section>
          </div>

          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="images/icon9.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                <p className="poppins-medium ">
                et la gestion des déchets.
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>


      <div className="mt-[108px] max-w-full h-auto pb-28 bg-[#F8F8FC] flex flex-col items-center">
                <h1 className="mt-[114px] text-[28px] lg:text-[40px] lg:w-[912px] text-center font-black">
                Nos interventions lors de la transition vers des pratiques durables :
                </h1>
                <div className="mt-[69px] w-full lg:h-[350px] h-auto grid lg:grid-cols-3 grid-col-1 lg:pl-9 place-content-center gap-[29px]">
                    <div className="max-w-[380px] py-4 h-[450px] bg-white rounded-[20px] flex items-center pt-8">
                        <div className="w-full h-full flex flex-col gap-5 items-center justify-center ">
                            <span
                                className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-br from-[#0000FF] to-[#00FFFF]"></span>
                            <h2 className="w-[330px] text-[20px] poppins-semibold text-center font-black">Transition vers des pratiques durables : </h2>
                            <p className="poppins-light text-center w-[330px] leading-[19.2px]"> Lorsqu'une entreprise décide de passer à des processus plus écologiques, nos consultants interviennent pour évaluer les systèmes existants et identifier les zones où des améliorations peuvent être apportées. Ils recommandent des technologies vertes, optimisent l'utilisation des ressources, et mettent en place des stratégies d'efficacité énergétique pour réduire l'empreinte carbone.</p>
                        </div>
                    </div>
                    <div className="max-w-[380px] py-4 h-[450px] bg-white rounded-[20px] flex items-center pt-6">
                        <div className="w-full h-full flex flex-col gap-7 items-center justify-center">
                            <span
                                className="w-[120px] h-[120px] rounded-[50%] bg-gradient-to-bl from-[#800080] to-[#FF0066]"></span>
                            <h2 className="w-[330px] text-[20px] poppins-semibold text-center font-black">Réponse aux réglementations environnementales : </h2>
                            <p className="poppins-light text-center w-[330px] leading-[19.2px]">Face aux exigences croissantes en matière de réglementation environnementale, nos experts fournissent des conseils pour assurer la conformité, éviter les pénalités, et transformer les obligations légales en opportunités de croissance durable.</p>
                        </div>
                    </div>
                    <div className="w-[380px] py-4 h-[450px] bg-white rounded-[20px] flex items-center pt-8">
                        <div className="w-full h-full flex flex-col gap-6 items-center justify-center">
                            <span
                                className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-br from-[#0000FF] to-[#00FFFF]"></span>
                            <h2 className="w-[330px] text-[20px] poppins-semibold text-center font-black">Amélioration de la compétitivité : </h2>
                            <p className="poppins-light text-center w-[330px] leading-[19.2px]">En adoptant des pratiques durables, l'entreprise non seulement réduit ses coûts opérationnels grâce à une meilleure gestion des ressources, mais améliore également son image de marque, attirant ainsi des clients et des partenaires soucieux de l'environnement. Nos consultants aident à aligner les initiatives de décarbonation avec les objectifs stratégiques de l'entreprise pour renforcer sa position sur le marché.</p>
                        </div>
                    </div>
                </div>

            </div>


      <div className="flex justify-center mt-10">
        <h1 className="mt-[114px] text-[28px] lg:text-[40px] lg:w-[1030px] text-center font-black">
        Comment nos consultants pourront vous aider à mettre en place votre
          <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
            {" "}
            comptabilité carbone{" "}
          </span>
          ?
        </h1>
      </div>


      <div className="w-full flex justify-center">
        <div className="mt-[84px] lg:w-[1200px] border border-[#0000004D] rounded-3xl w-full h-auto lg:h-[403px] flex flex-col lg:flex-row items-center">
          <div className="lg:w-[425px] w-full h-full flex justify-end items-start">
            <section className="w-[130px] h-[130px] bg-[#D9D9D9]"></section>
          </div>
          <div className="lg:w-[775px] w-full h-full flex justify-center items-center">
            <section className="lg:w-[587px] w-full py-9 lg:py-0 flex flex-col justify-center">
              <h1 className="w-full text-[28px] lg:text-left text-center lg:text-[31px] font-black">
                Analyse des processus existants :{" "}
              </h1>
              <p className="lg:w-[551px] lg:ml-0 w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                {/* <span className="font-black">Étape :</span> */}
                Nos consultants commencent par examiner vos opérations pour identifier les sources d'émissions de carbone et évaluer l'empreinte actuelle de votre entreprise.
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
            <div
              className="relative h-[278px] bg-cover rounded-tr-2xl"
              style={{ backgroundImage: `url(/images/color5.svg)` }}
            >
              <Image
                src="/images/image12.jpg"
                height={400}
                width={390}
                className="absolute z-20 top-[18px] rounded-t-2xl right-[0px]"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center px-3 lg:px-0 h-auto pb-9 lg:pb-10 w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <h2 className="lg:w-[459px] lg:text-left text-center text-[28px] poppins-semibold lg:mt-[61px] mt-[40px] font-black">
              Identification des opportunités de décarbonation :
              </h2>
              <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                {/* <span className="font-black">Étape :</span>  */}
                Nous repérons les domaines où des réductions d'émissions sont possibles, en mettant en avant l'optimisation des processus et l'intégration d'énergies renouvelables.
              </p>
              {/* <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                                <span className="font-black">Impact :</span> Ces KPIs permettent aux dirigeants de mesurer les résultats, d'évaluer la réussite des stratégies mises en place, et d'ajuster les actions en conséquence.
                            </p> */}
            </div>
          </div>

          <div>
            <div
              className="relative h-[278px] bg-cover rounded-tr-2xl"
              style={{ backgroundImage: `url(/images/color6.svg)` }}
            >
              <Image
                src="/images/image13.jpg"
                height={400}
                width={380}
                className="absolute z-20 top-[25px] rounded-t-2xl right-[0px]"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center px-3 lg:px-0 h-auto pb-9 lg:pb-16 w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <h2 className="lg:w-[459px] lg:text-left text-center text-[28px] poppins-semibold mt-[61px] font-black">
              Réallocation des ressources :
              </h2>
              <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                {/* <span className="font-black">Étape :</span>  */}
                Sur la base de cette analyse, nous développons des stratégies ciblées pour réduire les émissions, incluant l'investissement dans des technologies propres et l'amélioration de l'efficacité énergétique.
              </p>
              {/* <p className="lg:w-[459px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                                <span className="font-black">Impact :</span> L'automatisation des workflows améliore l'efficacité, réduit les coûts et permet aux équipes de se concentrer sur des tâches à plus forte valeur ajoutée.
                            </p> */}
            </div>
          </div>
        </div>
      </div>


      <div className="w-full flex justify-center">
        <div className="mt-[84px] lg:w-[1200px] w-full h-auto lg:h-[403px] flex flex-col lg:flex-row items-center">
          <div className="lg:w-[425px] w-full h-full flex justify-center items-center bg-gradient-to-br from-[#0000FF] to-[#00FFFF] rounded-l-2xl">
            <section
              className="w-[350px] h-[250px] bg-center bg-cover rounded-2xl"
              style={{ backgroundImage: `url(images/baner6.jpg)` }}
            ></section>
          </div>
          <div className="lg:w-[775px] w-full h-full border border-[#0000004D] border-l-none rounded-r-3xl flex justify-center items-center">
            <section className="lg:w-[587px] w-full py-9 lg:py-0 flex flex-col justify-center">
              <h1 className="w-full text-[28px] lg:text-left text-center lg:text-[31px] font-black">
              Suivi des résultats via des KPIs spécifiques :{" "}
              </h1>
              <p className="lg:w-[551px] lg:ml-0 w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                {/* <span className="font-black">Étape :</span> */}
                Nous mettons en place des indicateurs de performance clé (KPIs) pour suivre et mesurer l'impact des actions mises en œuvre, assurant une gestion continue de la comptabilité carbone et une progression vers les objectifs de décarbonation.
              </p>
              {/* <p className="lg:w-[551px] w-full px-8 lg:px-0 text-[16px] poppins-light leading-[19.2px]">
                                <span className="font-black">Impact :</span> Cela permet de comprendre les forces et les
                                faiblesses opérationnelles, et de poser les bases pour des améliorations ciblées.
                            </p> */}
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


    </div>
  );
};

export default Service;
