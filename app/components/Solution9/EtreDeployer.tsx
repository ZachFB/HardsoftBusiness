import Image from "next/image";

const deploymentOptions = [
  {
    icon: "/images/icon1.svg",
    text: `Suivi des Projets R&D : "Gardez une trace de chaque étape de vos projets de recherche, des coûts engagés aux résultats obtenus."`,
  },
  {
    icon: "/images/icon2.svg",
    text: `Gestion des Subventions et Financements : "Automatisez la gestion de vos financements, y compris les subventions publiques et privées."`,
  },
  {
    icon: "/images/icon3.svg",
    text: `Planification Stratégique : "Développez des plans de croissance robustes avec des modèles financiers adaptés aux particularités de votre domaine technologique."`,
  },
];

const DeploymentSection = () => {
  return (
    <div className="">
      <h1 className="text-[28px] lg:text-[38px] font-semibold ml-[20px] md:ml-[68px]">
      </h1>

      <div className="mt-[79px] lg:h-auto">
        <section className="flex flex-col lg:flex-row">
          {/* <div className="hidden lg:block w-[49px] h-[220px] border border-[#00000026] border-b border-r border-t"></div> */}

          {deploymentOptions.slice(0, 3).map((option, index) => (
            <DeploymentCard key={index} icon={option.icon} text={option.text} />
          ))}

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