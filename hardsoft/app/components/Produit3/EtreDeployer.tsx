import Image from 'next/image';

const DeploymentSection = () => {
  return (
    <div className="mt-[101px]">
       <h1 className="lg:w-[775px] w-full text-[28px] lg:text-[38px] poppins-semibold ml-[20px] md:ml-[68px] font-black">
        Notre solution peut être déployée :
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
                   {index === 0 && "Dans toute votre organisation pour une gestion financière centralisée qui couvre tous les départements et unités d'affaires."}
                   {index === 1 && "Au sein des projets spécifiques qu'il s'agisse de projets publiques ou privés d'innovation, d'investissement, ou de restructuration."}
                   {index === 2 && "Dans les comités de direction pour prendre des décisions éclairées basées sur des données financières fiables."}
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
           {["Group1.svg"].map((icon, index) => (
             <div key={index} className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
               <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
                 <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                   <Image src={`/images/${icon}`} className="m-auto mt-2 h-20 w-20" alt="" width={100} height={80} />
                 </span>
                 <p className="poppins-medium lg:m-0 ml-[10px]">
                   {index === 0 && "Auprès des investisseurs et des actionnaires pour communiquer la solidité financière et les perspectives de croissance."}
                   {index === 1 && ""}
                   {index === 2 && ""}
                 </p>
               </section>
             </div>
           ))}
           <div className='w-[900px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block'></div>
           <div className="w-[49px] h-[220px] border-[#00000026] border-b border-l border-t hidden lg:block"></div>
         </section>
       </div>
     </div>
  );
};

export default DeploymentSection;