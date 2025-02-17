import InvestmentBenefits from "@/app/components/Produit5/Benefit";
import DeploymentSection from "@/app/components/Produit5/EtreDeployer";
import InvestmentPerformance from "@/app/components/Produit5/fonctionnement";
import Slider from "@/app/components/Produit5/slider1";
import Slider2 from "@/app/components/Produit5/slider2";
import Image from "next/image";


const Produit = () => {

    return (
        // <!-- Section Hero -->
        <div className="w-full">
            <div className="px-4">
                <div
                    className="w-full max-w-[1300px] h-auto lg:h-[494px] bg-[#F8F8FC] rounded-[15px] mt-[26px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 p-4">
                    {/* <!-- Texte --> */}
                    <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                        <span className="poppins-light text-[12px]">Produits</span>
                        <span
                            className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                            Production Performance Management
                        </span>
                        <span className="mt-[20px] lg:mt-[40px] text-[18px] lg:text-[23px] text-[#494949] font-medium">
                          Optez pour une planification stratégique de vos productions !
                        </span>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                            <button className="bg-[#0000FF] text-white p-3 px-4 rounded-3xl text-[15px] flex items-center font-light">
                                <span className="mr-2">&#8594;</span> Demander une démonstration
                            </button>
                            <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light">Regarder la vidéo</button>
                        </div>
                    </div>

                    {/* <!-- Image --> */}
                    <div className="w-full md:w-[80%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[494px] rounded-r-[15px] bg-cover bg-center"
                        style={{ backgroundImage: `url(/images/heroProd5.png)` }}></div>
                </div>
            </div>

            <h1 className="mt-[104px] mb-[41px] text-[28px] lg:text-[38px] ml-[68px] font-black">Vous êtes :</h1>

            <div className="w-full lg:h-[488px] px-[87px] border-b border-[#00000026]">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Vector.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Responsables de la production et souhaitez pour optimiser les processus de fabrication et améliorer la qualité des produits.</p>
                    </div>
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Group.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Aux gestionnaires financiers et voulez un meilleur contrôle des coûts et une gestion budgétaire rigoureuse.</p>
                    </div>
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Vector1.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Aux responsables de la maintenance et voulez planifier et exécuter efficacement les tâches de maintenance préventive et curative.</p>
                    </div>
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Group1.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Aux gestionnaires de l'énergie et de l'environnement et cherchant les moyens de réduire la consommation d'énergie et minimiser l'empreinte environnementale.</p>
                    </div>
                   
                </div>
            </div>


            <Slider />
            <DeploymentSection />
            <InvestmentBenefits />
            <InvestmentPerformance />
            <Slider2 />

            <div />
        </div>
    )
}
export default Produit;