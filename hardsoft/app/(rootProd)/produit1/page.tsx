import InvestmentBenefits from "@/app/components/Produit1/Benefit";
import DeploymentSection from "@/app/components/Produit1/EtreDeployer";
import InvestmentPerformance from "@/app/components/Produit1/fonctionnement";
import Slider from "@/app/components/Produit1/slider1";
import Slider2 from "@/app/components/Produit1/slider2";
import Image from "next/image";


const Produit = () => {

    return (
        // <!-- Section Hero -->
        <div className="w-full">
         
                <div
                    className="w-full h-auto lg:h-[494px] bg-[#F8F8FC] rounded-[15px] mt-[50px] lg:mt-[150px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 py-4">
                    {/* <!-- Texte --> */}
                    <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                        <span className="poppins-light text-[12px]">Produits</span>
                        <span
                            className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                            Investment Performance Management
                        </span>
                        <span className="mt-[20px] lg:mt-[40px] text-[18px] lg:text-[23px] text-[#494949] font-medium">
                            Optez pour une planification stratégique de vos investissements !
                        </span>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                            <button className="bg-[#0000FF] text-white p-3 lg:px-7 lg:w-auto w-[350px] rounded-3xl text-[15px] flex justify-center items-center font-light">
                                <span className="mr-2">&#8594;</span> Try for free
                            </button>
                            <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light hidden">Regarder la vidéo</button>
                        </div>
                    </div>

                    {/* <!-- Image --> */}
                    <div className="w-full md:w-[80%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[494px] lg:rounded-none rounded-[15px] lg:rounded-r-[15px] bg-cover bg-center"
                        style={{ backgroundImage: `url(/images/heroPro.gif)` }}></div>
                </div>
            

            <h1 className="mt-[104px] mb-[41px] text-[28px] lg:text-[38px] ml-[68px] font-black">Vous êtes :</h1>

            <div className="w-full lg:h-[488px] border-b border-[#00000026]">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Vector.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Responsables financiers et vous souhaitez
                            accélérer le montage financier des dossiers
                            d&apos;investissement à présenter aux partenaires
                            financiers et aux investisseurs</p>
                    </div>
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Group.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Gestionnaires de projets pour le suivi en temps
                            réel des budgets et une gestion rigoureuse des
                            ressources.</p>
                    </div>
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Vector1.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Décideurs stratégiques ayant pour mission
                            de planifier et piloter des investissements
                            immobiliers ou d&apos;autres types d&apos;investisse
                            -ments à long terme.</p>
                    </div>
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Group1.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Analystes financiers chargé de proposer
                            différents scénarios et réduire les coûts
                            imprévus.</p>
                    </div>
                    <div className="flex flex-col gap-4 py-[20px]">
                        <span className="w-[100px] h-[80px]">
                            <Image src="images/Group03.svg" className="m-auto mt-2 h-20 w-20" height={100} width={100} alt="" />
                        </span>
                        <p className="poppins-medium">Gestionnaires de ressources humaines soucieux
                            des performance du personnel et rationaliser les
                            ressources affectées.</p>
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