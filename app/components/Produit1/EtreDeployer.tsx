import Image from "next/image";

const deploymentOptions = [
  {
    icon: "/images/icon1.svg",
    text: "Dans le cadre de tout projet d'investissement : immobilier, industriel, technologique où le suivi rigoureux des finances et des ressources est crucial.",
  },
  {
    icon: "/images/icon2.svg",
    text: "Dans les services financiers pour élaborer et gérer des dossiers d'investissement complexes.",
  },
  {
    icon: "/images/icon3.svg",
    text: "Dans les bureaux de gestion de projets pour planifier et exécuter efficacement les projets d'investissement.",
  },
  {
    icon: "/images/icon4.svg",
    text: "Dans les départements de ressources humaines pour surveiller et optimiser la performance des équipes.",
  },
  {
    icon: "/images/icon5.svg",
    text: "Dans les entreprises partenaires comme les architectes, les bureaux d’études, les partenaires financiers, les investisseurs, les fournisseurs de produits et services extérieurs de la chaîne logistique, …",
  },
];

const DeploymentSection = () => {
  return (
    <div className="mt-[170px] lg:mt-[100px]">
      <h1 className="text-[28px] lg:text-[38px] font-semibold ml-[20px] md:ml-[68px]">
        Notre solution peut être déployée :
      </h1>

      <div className="mt-[79px] lg:h-[556px]">
        <section className="flex flex-col lg:flex-row">
          {/* <div className="hidden lg:block w-[49px] h-[220px] border border-[#00000026] border-b border-r border-t"></div> */}

          {deploymentOptions.slice(0, 3).map((option, index) => (
            <DeploymentCard key={index} icon={option.icon} text={option.text} />
          ))}

          {/* <div className="hidden lg:block w-[49px] h-[220px] border border-[#00000026] border-b border-l border-t"></div> */}
        </section>

        {/* <section className="hidden lg:flex justify-between">
          <div className="w-[46.4px] h-[54px] border-r border-[#00000026]"></div>
          <div className="w-[46.4px] h-[54px] border-l border-[#00000026]"></div>
        </section> */}

        <section className="flex flex-col lg:flex-row">
          {/* <div className="hidden lg:block w-[49px] h-[220px] border border-[#00000026] border-b border-r border-t"></div> */}

          <DeploymentCard icon={deploymentOptions[3].icon} text={deploymentOptions[3].text} />

          <div className="lg:w-[900px] w-full h-[220px] border border-[#00000026] relative flex justify-center lg:justify-start">
            <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px] lg:ml-10">
              <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                <Image src={deploymentOptions[4].icon} width={100} height={80} alt="Icon" className="m-auto mt-2 h-20 w-20" />
              </span>
              <p className="text-[16px] lg:w-[399px] px-6 md:px-0">{deploymentOptions[4].text}</p>
            </section>
          </div>

          {/* <div className="hidden lg:block w-[49px] h-[220px] border border-[#00000026] border-b border-l border-t"></div> */}
        </section>
      </div>
    </div>
  );
};

const DeploymentCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="lg:w-[450px] w-full h-[220px] border border-[#00000026] relative flex justify-center">
      <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
        <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
          <Image src={icon} width={100} height={80} alt="Icon" className="m-auto mt-2 h-20 w-20" />
        </span>
        <p className="text-[16px] px-6 md:px-0">{text}</p>
      </section>
    </div>
  );
};

export default DeploymentSection;
