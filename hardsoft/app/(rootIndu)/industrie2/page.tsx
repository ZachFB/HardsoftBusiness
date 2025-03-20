import Slider2 from '@/app/components/Industrie2/slider'
import ListeIndu from '@/app/components/listeIndu'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
     <div className='w-full flex lg:flex-row flex-col h-auto bg-[#0000FF] md:py-0 py-36 mt-[150px] rounded-lg'>

<section className='flex  w-full lg:w-[52%] lg:h-[625px] h-[400px] text-white'>
  <span className='w-[69px] h-full from-[#0000FF] to-[#00FFFF] bg-gradient-to-b rounded-l-lg'></span>
          <div className='w-full h-full flex flex-col gap-4 justify-center px-8'>
            <h3 className='text-[14px] uppercase'>Logistique & Supply Chain</h3>
            <h1 className=' text-[38px] lg:text-[52px]'>Réinventer la Logistique avec l'Intelligence Artificielle</h1>
            <p>Nos agents IA optimisent chaque étape de votre chaîne d’approvisionnement, de la gestion des stocks à la prévision des demandes. En automatisant les décisions et en analysant les données en temps réel, nous vous aidons à réduire les coûts et à améliorer l'efficacité de vos opérations logistiques.</p>
            <div className='flex justify-center lg:gap-6 gap-3'>
              <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
              <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
            </div>
          </div>
        </section>

        <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
        <Image src="/images/heroIndu2.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
        <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
        </section>

      </div>



      <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
        <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
          <span className='text-[16px] leading-[18.91px]'>L’intelligence artificielle est en train de transformer en profondeur le secteur de la logistique et de la gestion de la supply chain. Nos agents IA avancés ne se contentent pas de suivre les flux de marchandises, ils les analysent et les optimisent en temps réel, en prenant en compte des facteurs tels que les conditions de marché, les variations de demande et les capacités de production. En exploitant des algorithmes prédictifs et des analyses en continu, ces agents ajustent les stratégies logistiques pour anticiper les besoins et éviter les inefficacités.
             Les agents IA assurent une gestion des stocks plus précise, avec une capacité à prédire les fluctuations de la demande avant qu’elles ne surviennent, évitant ainsi les ruptures ou le surstockage. Grâce à cette intelligence virtuelle, votre chaîne d’approvisionnement devient plus fluide, réactive et résiliente, réduisant les coûts opérationnels et les délais de livraison tout en maximisant l’efficacité globale des opérations. Ces systèmes évolutifs et flexibles peuvent s’intégrer harmonieusement dans vos infrastructures existantes, vous permettant de bénéficier d'une performance accrue sans perturber vos activités actuelles.</span>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[20px]'>Principales caractéristiques :</h1>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation des flux logistiques 🚛 – Nos agents IA analysent en temps réel les itinéraires, les stocks et les délais pour améliorer l’efficacité des transports et des entrepôts.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Prévision et gestion de la demande 📊 – Grâce aux algorithmes prédictifs, l’IA anticipe les tendances et ajuste l’approvisionnement pour éviter les ruptures et le surstockage.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Automatisation intelligente des décisions 🤖 – Nos solutions IA prennent en charge l’optimisation des commandes, la gestion des stocks et l’affectation des ressources pour une supply chain plus agile.</p>
            </div>

          </div>
        </section>

        <section className='flex flex-col gap-10 w-[80%] lg:w-[50%]'>
          <div className='flex lg:flex-row flex-col gap-12 w-full'>
            <span className='bg-[#0000FF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
            <div className='h-[160px] w-auto flex relative'>
              <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
              <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
              <Image src="/images/indu22.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <h2 className='text-[18px]'>Jeudi 13 février 2025</h2>
              <span className='text-[16px]'>Reggie Clairville</span>
              <button className='p-3 px-8 rounded-3xl bg-[#0000FF] text-white'><span className="mr-2">&#8594;</span>enregistrer</button>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col gap-12 w-full'>
            <span className='bg-[#00EDFF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
            <div className='h-[160px] w-auto flex relative'>
              <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
              <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
              <Image src="/images/indu33.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <h2 className='text-[18px]'>Jeudi 13 février 2025</h2>
              <span className='text-[16px]'>Reggie Clairville</span>
              <button className='p-3 px-8 rounded-3xl bg-[#0000FF] text-white'><span className="mr-2">&#8594;</span>enregistrer</button>
            </div>
          </div>

        </section>

      </div>

   <Slider2/>

   <ListeIndu/>

    </div>
  )
}

export default page