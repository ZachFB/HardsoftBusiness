import Image from "next/image";

const InvestmentBenefits = () => {
  return (
    <div className="w-full">
      <div className="mt-[80px] lg:w-[1276.37px] w-full lg:h-[1096px] lg:ml-[68px]">
        <h1 className="lg:w-[775px] w-full lg:text-[38px] text-[28px] ml-[20px] md:ml-[68px] lg:ml-[0px] font-black">
          Bénéfices de la solution de <span className="lg:text-[40px] text-[28px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[48px]">
          Supply Chain Performance </span> :
        </h1>

        <section className="lg:w-[1247.37px] w-[80%] lg:h-[924px] mt-[57px] grid lg:grid-cols-2 grid-cols-1 mx-auto gap-11 lg:gap-[47px]">
          <div className="relative">
            <Image src="/images/color7.svg" width={500} height={500} alt="Background" layout="responsive" />
            <Image src="/images/image31.svg" width={460} height={500} alt="Icon" className="absolute z-20 top-[30px] right-16" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
              Elaboration du budget annuel ou trimestriel pour intégrer les coûts réels de la chaîne d'approvisionnement.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <Image src="/images/image30.gif" width={500} height={500} alt="GIF" layout="responsive" className="rounded-tl-[20px] rounded-tr-[12px]" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
              Ajustement des prévisions pendant les cycles de prévisions financières en fonction des variations dans la chaîne d'approvisionnement (comme les fluctuations des coûts des matières premières ou des délais de livraison.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <Image src="/images/color8.svg" width={500} height={500} alt="Background" layout="responsive" />
            <Image src="/images/image32.svg" width={540} height={500} alt="Icon" className="absolute z-20 top-[0px] right-[0px]" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
              Suivi en continu tout au long de l'année de la performance de la chaîne d'approvisionnement et ajustement des stratégies en conséquence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestmentBenefits;
