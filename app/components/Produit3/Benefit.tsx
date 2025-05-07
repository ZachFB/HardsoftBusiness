import Image from "next/image";

const InvestmentBenefits = () => {
  return (
    <div className="w-full">
      <div className="mt-[80px] w-full lg:h-[1096px]">
        <h1 className="lg:w-[775px] w-full lg:text-[38px] text-[28px] lg:ml-[68px] ml-[20px] md:ml-[68px] font-black">
          Bénéfices de <span className="lg:text-[40px] text-[28px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[48px]">
            Financial Perfomance Management
          </span>
        </h1>

        <section className="lg:w-full w-[80%] lg:h-[924px] mt-[57px] grid lg:grid-cols-2 grid-cols-1 mx-auto gap-11 lg:gap-[47px]">
          <div className="relative">
            <Image src="/images/color7.svg" width={500} height={500} alt="Background" layout="responsive" />
            <Image src="/images/image31.svg" width={460} height={500} alt="Icon" className="absolute z-20 top-[-15px] md:top-[10px] lg:top-[30px] md:right-16" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
                Planification annuelle ou pluriannuelle pour établir des budgets et des prévisions réalistes alignés sur les objectifs stratégiques.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <Image src="/images/image30.gif" width={500} height={500} alt="GIF" layout="responsive" className="rounded-tl-[20px] rounded-tr-[12px]" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
                Suivi continu et ajustements en temps réel des prévisions financières et des budgets.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center overflow-y-hidden">
            <Image src="/images/color8.svg" width={500} height={500} alt="Background" layout="responsive" />
            <Image src="/images/image32.svg" width={540} height={500} alt="Icon" className="absolute z-20 top-[-15px] md:top-[0px] right-[0px]" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
                Analyse de la viabilité financière tant sur le court terme que le long terme.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <Image src="/images/color9.svg" width={500} height={500} alt="Background" layout="responsive" />
            <Image src="/images/image33.svg" width={500} height={500} alt="Icon" className="absolute z-20 top-[-15px] md:top-[1px] right-[0px]" />
            <div className="flex items-center lg:h-[182px] h-[150px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
              <p className="w-[475px] text-[16px] poppins-light md:ml-[49px] ml-[10px]">
                Adapter les projections financières au changement légal, économique, politique, environnemental, technologique du marché.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestmentBenefits;
