import Image from 'next/image';

const DeploymentSection = () => {
    return (
        <div className="mt-[101px]">
            {/* <h1 className="lg:w-[775px] w-full text-[28px] lg:text-[38px] poppins-semibold ml-[20px] md:ml-[68px] font-black">
        Notre solution peut être déployée :
       </h1> */}
          <div className='w-full flex justify-center'>
            <span className="block lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#0000FF] via-[#00FFFF] to-[#008000] font-bold text-4xl">
                Implémentation
            </span>
            </div>  

            <div className="lg:h-[556px] lg:mt-0 mt-[100px]">
                <section className="flex lg:flex-row flex-col">
                    <div className="w-[49px] h-[280px] border-[#00000026] border-b border-r border-t hidden lg:block"></div>
                    {/* {["Group1.svg"].map((icon, index) => (
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
           ))} */}
                    <div className='w-[1350px] h-[280px] lg:flex justify-center items-center border-[#00000026] border-b border-r border-t hidden'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0000FF] via-[#00FFFF] to-[#008000] font-bold text-4xl">
                            Implémentation
                        </span>
                    </div>
                    <div className="w-[49px] h-[280px] border-[#00000026] border-b border-l border-t hidden lg:block"></div>
                </section>


                <section className="flex justify-between">
                    <div className="w-[46.4px] h-[54px] border-[#00000026] border-r hidden lg:block"></div>
                    <div className="w-[46.4px] h-[54px] border-[#00000026] border-l hidden lg:block"></div>
                </section>


                <section className="flex flex-col lg:flex-row">
                    <div className="w-[49px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block"></div>
                    {["icon7.svg", "Group.svg", "Vector1.svg"].map((icon, index) => (
                        <div key={index} className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
                            <section className="w-[373px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
                                <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                    <Image src={`/images/${icon}`} className="m-auto mt-2 h-20 w-20" alt="" width={100} height={80} />
                                </span>
                                <p className="poppins-medium lg:m-0 ml-[10px]">
                                    {index === 0 && "Intégration fluide et rapide 🔧 – Nos agents IA s’adaptent à vos infrastructures existantes sans perturber vos opérations."}
                                    {index === 1 && "Interopérabilité et évolutivité 🔗 – Compatibles avec divers systèmes industriels, nos solutions évoluent en fonction de vos besoins."}
                                    {index === 2 && "Amélioration continue 📈 – Nos agents apprennent en permanence, optimisant vos processus pour des performances toujours plus élevées."}
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

export default DeploymentSection;