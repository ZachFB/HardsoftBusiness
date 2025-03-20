import Image from "next/image";

const InvestmentBenefits = () => {
  return (
    <div className="w-full">
      <div className="mt-[80px] w-full lg:h-[1096px]">
        <h1 className="lg:w-[775px] w-full lg:text-[38px] text-[28px] ml-[20px] md:ml-[68px] lg:ml-[68px] font-black">
          Bénéfices de notre solution de <span className="lg:text-[40px] text-[28px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[48px]">
            Production Performance Management </span>:
        </h1>

        <section className="lg:w-full w-[80%] lg:h-[924px] mt-[57px] grid lg:grid-cols-2 grid-cols-1 mx-auto gap-11 lg:gap-[47px]">
          <div className="relative">
            <Image src="/images/color7.svg" width={500} height={500} alt="Background" layout="responsive" />
            <Image src="/images/image31.svg" width={460} height={500} alt="Icon" className="absolute z-20 top-[-15px] md:top-[10px] lg:top-[30px] md:right-16" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
                Suivi en temps réel de l’état des pièces de l’usine et des ajustements instantanés des périodes d’interventions de maintenance.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <Image src="/images/image30.gif" width={500} height={500} alt="GIF" layout="responsive" className="rounded-tl-[20px] rounded-tr-[12px]" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
                Planification budgétaire annuelle ou trimestrielle pour intégrer les données de production dans les prévisions financières.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center overflow-y-hidden">
            <Image src="/images/color8.svg" width={500} height={500} alt="Background" layout="responsive" />
            <Image src="/images/image32.svg" width={540} height={500} alt="Icon" className="absolute z-20 top-[-15px] md:top-[0px] right-[0px]" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
                Des données collectées pendant l’usage des composants ou des pièces de l’usine ou lors des intervention de maintenance bénéficient d’un traitement scientifique pour faire interventions préventives et minimiser les probabilités des temps d’arrêts.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <Image src="/images/color9.svg" width={500} height={500} alt="Background" layout="responsive" />
            <Image src="/images/image33.svg" width={500} height={500} alt="Icon" className="absolute z-20 top-[-15px] md:top-[1px] right-[0px]" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
                Audits énergétiques et environnementaux en temps réel pour fournir des informations précises d’optimisation des dépenses énergétiques et soutenir les efforts de réduction de l'empreinte écologique.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestmentBenefits;
