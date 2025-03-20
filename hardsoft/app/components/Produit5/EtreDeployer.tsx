import Image from "next/image";

const DeploymentSection = () => {
  return (
    <div className="mt-[101px]">
        <h1 className="lg:w-[775px] w-full text-[28px] lg:text-[38px] poppins-semibold ml-[20px] md:ml-[68px] font-black">
        Notre solution peut être déployée :
            <span className="lg:text-[40px] text-[28px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[48px]"></span>
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
                    {index === 0 && "Dans l'ensemble de vos sites de production :qu'ils soient locaux ou répartis sur plusieurs zones géographiques."}
                    {index === 1 && "Dans les services financiers  pour relier directement les performances de production aux indicateurs budgétaires."}
                    {index === 2 && "Dans les service de maintenances pour centraliser la gestion et la planification des interventions."}
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
                    {index === 0 && "Dans les départements de gestion de l'énergie pour une vue d'ensemble de la consommation énergétique au sein de vos installations."}
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


export default DeploymentSection;
