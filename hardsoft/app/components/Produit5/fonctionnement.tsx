import Image from 'next/image';

const InvestmentPerformance = () => {
  return (
    <div className="mt-[101px]">
    <h1 className="lg:w-[775px] w-full text-[28px] lg:text-[38px] poppins-semibold ml-[20px] md:ml-[68px] font-black">
      Comment fonctionne <span className="lg:text-[40px] text-[28px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[48px]">Production Performance Management</span> ?
    </h1>

    <div className="lg:h-[556px] mt-[105px]">
      <section className="flex flex-col lg:flex-row">
        <div className="w-[49px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block"></div>
        {["icon7.svg", "Group.svg", "Vector1.svg"].map((icon, index) => (
          <div key={index} className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
            <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image src={`/images/${icon}`} className="m-auto mt-2 h-20 w-20" alt="" width={100} height={80} />
              </span>
              <p className="poppins-medium lg:m-0 ml-[10px]">
                {index === 0 && "Collecte des données en temps réel depuis les machines et les processus de production, les consolidant dans un entrepôt de données centralisé.."}
                {index === 1 && "Utilisation des algorithmes d'analyse pour détecter les anomalies, identifier les tendances et proposer des améliorations."}
                {index === 2 && "Intégration des outils de planification budgétaire pour lier directement les performances de production aux coûts."}
              </p>
            </section>
          </div>
        ))}
        <div className="w-[49px] h-[220px] border-[#00000026] border-b border-l border-t hidden lg:block"></div>
      </section>

      <section className="flex justify-between">
        <div className="w-[46.4px] h-[54px] border-[#00000026] border-r hidden lg:block"></div>
        <div className="w-[46.4px] h-[54px] border-[#00000026] border-l hidden lg:block"></div>
      </section>

      <section className="flex lg:flex-row flex-col">
        <div className="w-[49px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block"></div>
        {["Group1.svg", "icon5.svg"].map((icon, index) => (
          <div key={index} className={icon === "Group1.svg" 
            ? "lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center" 
            : "lg:w-[900px] w-full h-[220px] border-[#00000026] border relative flex lg:justify-normal justify-center lg:px-6 px-0"}>
            <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image src={`/images/${icon}`} className="m-auto mt-2 h-20 w-20" alt="" width={100} height={80} />
              </span>
              <p className="poppins-medium lg:m-0 ml-[10px]">
                {index === 0 && "Optimisation des processus de maintenance grâce à des notifications automatiques et une planification proactive."}
                {index === 1 && "Suivi de la consommation énergétique pour identifier les sources de gaspillage et proposer des actions correctives."}
                {index === 2 && ""}
              </p>
            </section>
          </div>
       
        ))}
        <div className="w-[49px] h-[220px] border-[#00000026] border-b border-l border-t hidden lg:block"></div>
      </section>
    </div>
  </div>
  );
};

export default InvestmentPerformance;