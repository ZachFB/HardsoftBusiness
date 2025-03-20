import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="w-full overflow-hidden mb-20">
     
        <div className="w-full max-w-[1300px] h-auto lg:h-[450px] bg-[#F8F8FC] rounded-[15px] mt-[50px] lg:mt-[150px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 py-4">
          {/* <!-- Texte --> */}
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
            <span className="poppins-light text-[12px]">Services</span>
            <div className="text-[30px] font-semibold lg:text-[40px]">
              <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
              Stratégie d’intelligence économique
              </span>
            </div>
            <span className="mt-[20px] lg:mt-[16px] text-[18px] text-[#494949] font-medium">
            INTELLIGENCE ECONOMIQUE ARIES Investissements collecte et met à la disposition de ses clients afin qu’ils puissent investir en toute confiance, des informations économiques et stratégiques fiables et actualisées sur les marchés ciblés.
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
            style={{ backgroundImage: `url(/images/heroSer8.jpg)` }}
          ></div>
        </div>
      

      <div className="max-w-full flex justify-center">
        <h1 className="lg:mt-[129px] mt-[80px] text-center lg:mx-20 mx-3 text-[28px] lg:text-[40px] font-black">
        En s’appuyant sur les insights de la suite logicielle et leurs expertises, vous pouvez bénéficier de services de conseils par des consultants indépendants sur des avis,{" "}
          <span className="text-[28px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
          des recommandations stratégiques{" "}
          </span>
          en :
        </h1>
      </div>

      <div className="h-auto flex justify-center items-center w-full mt-[130px]">
        <section className="grid lg:w-[60%] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-3">
          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="/images/icon7.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">France Relance : </span> */}
                <p className="poppins-medium ">
                Management
                </p>
              </div>
            </section>
          </div>
          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="images/Group.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                <p className="poppins-medium ">
                Investissement
                </p>
              </div>
            </section>
          </div>

          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="images/Vector1.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                <p className="poppins-medium ">
                Réinvestissement
                </p>
              </div>
            </section>
          </div>

          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="images/Group1.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                <p className="poppins-medium ">
                Innovation
                </p>
              </div>
            </section>
          </div>

          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="images/icon5.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                <p className="poppins-medium ">
                Restructuration
                </p>
              </div>
            </section>
          </div>

          <div className="w-[150px] h-[220px] relative flex justify-center">
            <section className="w-[220px] h-[236px] absolute bottom-[32px] flex flex-col items-center py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image
                  src="images/icon5.svg"
                  height={63}
                  width={63}
                  className="m-auto mt-2"
                  alt=""
                />
              </span>
              <div>
                {/* <span className="font-black text-[16px]">Plan de Relance Numérique : </span> */}
                <p className="poppins-medium ">
                Restructuration
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>


    </div>
  );
};

export default Service;
