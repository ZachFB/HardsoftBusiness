import Image from 'next/image';

const InvestmentPerformance = () => {
  return (
    <div className="mt-[101px]">
    <h1 className="lg:w-[775px] w-full text-[28px] lg:text-[38px] poppins-semibold ml-[20px] md:ml-[68px] font-black">
      Comment fonctionne <span className="lg:text-[40px] text-[28px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[48px]">Enterprise Performance Innovation</span> ?
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
                {index === 0 && "Structuration du montage financier en intégrant les données techniques, économiques, juridiques, et fiscales pour optimiser le dossier d'investissement."}
                {index === 1 && "Création des outils budgétaires pour suivre en temps réel les budgets grâce à des tableaux de bord interactifs qui permettent de visualiser l'état des finances à tout moment."}
                {index === 2 && "Analyse des performances budgétaires en fournissant des rapports et des alertes sur les écarts budgétaires et les risques associés."}
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
        {["Group1.svg", "icon5.svg", "icon6.svg"].map((icon, index) => (
          <div key={index} className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
            <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image src={`/images/${icon}`} className="m-auto mt-2 h-20 w-20" alt="" width={100} height={80} />
              </span>
              <p className="poppins-medium md:px-0 px-6">
                {index === 0 && "Planification des investissements en tenant compte des contraintes financières, des délais et des ressources disponibles."}
                {index === 1 && "Simulation de différents scénarios pour tester l'impact des décisions stratégiques pour optimiser les coûts et minimiser les imprévus."}
                {index === 2 && "Évaluation en temps réel de la performance des équipes de la chaine logistique et de production pour ajuster les ressources humaines en fonction des besoins du projet et améliorer l'efficacité opérationnelle."}
              </p>
            </section>
          </div>
        ))}
        {/* <div className="w-[49px] h-[220px] border-[#00000026] border-b border-l border-t hidden lg:block"></div> */}
      </section>
    </div>
  </div>
  );
};

export default InvestmentPerformance;