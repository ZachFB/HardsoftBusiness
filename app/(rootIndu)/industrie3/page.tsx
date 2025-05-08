import Slider2 from '@/app/components/Industrie3/slider'
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
            <h3 className='text-[14px] uppercase'>Commerce & Retail</h3>
            <h1 className=' text-[38px] lg:text-[52px]'>🛍️ Commerce & Retail : L’IA au Service de la Performance</h1>
            <p>Nos agents IA intelligents révolutionnent le commerce en analysant les tendances, en optimisant les stocks et en personnalisant l’expérience client. Grâce à l’automatisation et aux prévisions avancées, améliorez vos performances et répondez aux attentes du marché avec précision.</p>
            <div className='flex justify-center gap-3 lg:gap-6'>
              <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
              <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
            </div>
          </div>
        </section>

        <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
        <Image src="/images/heroIndu3.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
        <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
        </section>

      </div>



      <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
        <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
          <span className='text-[16px] leading-[18.91px]'>L’intelligence artificielle transforme la manière dont les entreprises du commerce et du retail opèrent. Nos agents IA avancés analysent les données en temps réel pour détecter les tendances, anticiper les fluctuations de la demande et ajuster les stratégies de vente de manière proactive. Grâce à une compréhension approfondie des comportements d’achat et des préférences clients, ils permettent une expérience ultra-personnalisée tout en optimisant la gestion des stocks et des prix.
            En s’intégrant aux plateformes de vente physique et en ligne, nos solutions basées sur l’IA facilitent une approche omnicanale fluide et efficace, garantissant une meilleure gestion des ressources et une réactivité accrue face aux évolutions du marché. Avec des recommandations intelligentes, des ajustements de prix dynamiques et une gestion optimisée des inventaires, votre entreprise peut offrir des services plus performants et rentables.</span>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[20px]'>Principales caractéristiques :</h1>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Personnalisation avancée de l’expérience client 🎯 – Nos agents IA analysent les comportements d’achat pour proposer des recommandations ciblées et des promotions adaptées.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation intelligente des stocks et des prix 📦 – Grâce à des prévisions basées sur les tendances du marché, l’IA ajuste automatiquement l’approvisionnement et la tarification en temps réel.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Automatisation des décisions commerciales ⚡ – Nos solutions permettent d’adapter les stratégies de vente, d’optimiser les campagnes marketing et de maximiser les performances des boutiques en ligne et physiques.</p>
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
              <Image src="/images/indu44.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
              <Image src="/images/indu55.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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