import Image from "next/image";

const deploymentOptions = [
  {
    icon: "/images/icon1.svg",
    text: "Dans les départements marketing et commercial pour planifier et exécuter des campagnes en fonction des ressources financières disponibles.",
  },
  {
    icon: "/images/icon2.svg",
    text: "Au sein du département financier pour intégrer les prévisions de revenus et de dépenses liées aux activités marketing et commerciales dans le processus budgétaire global.",
  },
  {
    icon: "/images/icon3.svg",
    text: "Lors des réunions de planification stratégique pour aligner les initiatives marketing et commerciales avec les objectifs stratégiques globaux de l'entreprise.",
  },
];

const DeploymentSection = () => {
  return (
    <div className="mt-[170px] lg:mt-[100px]">
      <h1 className="text-[28px] lg:text-[38px] font-semibold ml-[20px] md:ml-[68px]">
        Notre solution peut être déployée :
      </h1>

      <div className="mt-[79px]">
        <section className="flex flex-col lg:flex-row">
          <div className="hidden lg:block w-[49px] h-[220px] border border-[#00000026] border-b border-r border-t"></div>

          {deploymentOptions.slice(0, 3).map((option, index) => (
            <DeploymentCard key={index} icon={option.icon} text={option.text} />
          ))}

          <div className="hidden lg:block w-[49px] h-[220px] border border-[#00000026] border-b border-l border-t"></div>
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
        <p className="text-[16px] ml-[10px]">{text}</p>
      </section>
    </div>
  );
};

export default DeploymentSection;
