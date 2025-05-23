import Image from 'next/image';

const InvestmentPerformance = () => {
  return (
    <div className="mt-[101px]">
    <h1 className="lg:w-[775px] w-full text-[28px] lg:text-[38px] poppins-semibold ml-[20px] md:ml-[68px] font-black">
      Comment notre solution <span className="lg:text-[40px] text-[28px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[48px]">Supply Chain Performance</span> fonctionne ?
    </h1>

    <div className="lg:h-[556px] mt-[105px]">
      <section className="flex flex-col lg:flex-row">
        {/* <div className="w-[49px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block"></div> */}
        {["icon7.svg", "Group.svg", "Vector1.svg"].map((icon, index) => (
          <div key={index} className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
            <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image src={`/images/${icon}`} className="m-auto mt-2 h-20 w-20" alt="" width={100} height={80} />
              </span>
              <p className="poppins-medium md:px-0 px-6">
                {index === 0 && "Collecte et analyse des données de la chaîne d'approvisionnement y compris les coûts de transport, les niveaux de stock, les délais de livraison, et les performances des fournisseurs."}
                {index === 1 && "Intégration des données dans les processus de budgétisation pour s'assurer que les budgets reflètent fidèlement les coûts opérationnels réels."}
                {index === 2 && "Utilisation des modèles de prévisions avancés pour projeter les besoins financiers futurs en fonction des tendances actuelles de la chaîne d'approvisionnement."}
              </p>
            </section>
          </div>
        ))}
        {/* <div className="w-[49px] h-[220px] border-[#00000026] border-b border-l border-t hidden lg:block"></div> */}
      </section>

      {/* <section className="flex justify-between">
        <div className="w-[46.4px] h-[54px] border-[#00000026] border-r hidden lg:block"></div>
        <div className="w-[46.4px] h-[54px] border-[#00000026] border-l hidden lg:block"></div>
      </section> */}

      <section className="flex lg:flex-row flex-col">
        {/* <div className="w-[49px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block"></div> */}
        {["Group1.svg"].map((icon, index) => (
          <div key={index} className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
            <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image src={`/images/${icon}`} className="m-auto mt-2 h-20 w-20" alt="" width={100} height={80} />
              </span>
              <p className="poppins-medium md:px-0 px-6">
                {index === 0 && "Planification stratégique en fournissant des simulations et des analyses pour évaluer l'impact des décisions stratégiques sur la chaîne d'approvisionnement."}
                {index === 1 && ""}
                {index === 2 && ""}
              </p>
            </section>
          </div>
        ))}
        <div className='w-[900px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block'></div>
        {/* <div className="w-[49px] h-[220px] border-[#00000026] border-b border-l border-t hidden lg:block"></div> */}
      </section>
    </div>
  </div>
  );
};

export default InvestmentPerformance;