import DeploymentSection from '@/app/components/Solution7/EtreDeployer'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>

<div
                className="w-full m-auto relative h-auto lg:h-[800px] bg-[#F4DDFF] rounded-[15px] mt-[50px] lg:mt-[150px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 py-4 lg:px-0 px-2">
                {/* <!-- Texte --> */}
                <div className="w-full lg:px-60 px-5 py-6 flex flex-col items-center lg:items-center text-center lg:text-center">
                    <span className="poppins-light text-[12px]">Solutions</span>

                    {/* Conteneur du slider avec une hauteur définie */}
                    <div className="w-full h-auto "> {/* Ajuste la hauteur selon tes besoins */}
                    <div className="flex flex-col gap-2">
                                <h1 className="lg:text-[35px] text-[29px] leading-[38px] lg:leading-[48px] font-black">
                                   Cabinets d’études, Industriels électriques
                                    <span
                                        className="text-[29px] font-semibold lg:text-[35px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                                    </span>
                                </h1>
                                <span className="mt-[20px] lg:mt-[40px] text-[16px] text-center lg:text-[18px] text-[#494949] font-medium pb-10">
                                Pour un industriel électrique Outil de modélisation de la consommation et de la production électrique dans un contexte d’émergence « smart » (grid / city ) Conception d’un outil à destination d’experts (du PoC à l’industrialisation), développement d’algorithmes (text, web mining, data cleaning), intégration du simulateur ARMINES, modélisation des courbes de charges.
                                </span>
                            </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                        <button className="bg-[#0000FF] text-white p-3 lg:px-7 lg:w-auto w-[350px] rounded-3xl text-[15px] flex justify-center items-center font-light">
                            <span className="mr-2">&#8594;</span> Try for free
                        </button>
                        <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light hidden">Regarder la vidéo</button>
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
               Avantages pour Ces Secteurs
               </h1>

               <div className='mb-40'>
                <DeploymentSection/>
               </div>


    </div>
  )
}

export default page