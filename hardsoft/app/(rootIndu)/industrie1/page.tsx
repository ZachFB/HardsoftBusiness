import DeploymentSection from '@/app/components/Industrie1/EtreDeployer'
import Slider2 from '@/app/components/Industrie1/Slider'
import ListeIndu from '@/app/components/listeIndu'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex lg:flex-row flex-col h-auto bg-[#0000FF] lg:py-0 py-4 lg:mt-[34px]'>

        <section className='flex  w-full lg:w-[52%] h-[575px] text-white'>
          <span className='w-[69px] h-full from-[#0000FF] to-[#00FFFF] bg-gradient-to-b'></span>
          <div className='w-full h-full flex flex-col gap-4 justify-center px-8'>
            <h3 className='text-[14px] uppercase'>Fabrication Industrielle</h3>
            <h1 className=' text-[38px] lg:text-[52px]'>L’IA au Cœur de la Révolution Industrielle </h1>
            <p>Nos agents intelligents analysent, optimisent et automatisent la fabrication industrielle. De l’optimisation des processus au contrôle qualité en temps réel, nos solutions boostent votre production, réduisent les défauts et améliorent la gestion des ressources.</p>
            <div className='flex gap-6'>
              <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
              <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
            </div>
          </div>
        </section>

        <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
        <Image src="/images/heroIndu1.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
        <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
        </section>

      </div>



      <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
        <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
          <span className='text-[16px] leading-[18.91px]'>L’industrie évolue avec l’intelligence artificielle. Nos agents IA avancés agissent comme de véritables cerveaux numériques, apportant des solutions aux défis industriels : contrôle qualité en temps réel, gestion intelligente des stocks et optimisation des performances. Grâce à l’analyse des données et à l’apprentissage automatique, ils améliorent l’efficacité, la précision et la productivité de vos opérations.</span>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[20px]'>Principales caractéristiques :</h1>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation intelligente des processus ⚙️ – Nos agents IA analysent et améliorent les flux de production pour plus d’efficacité et moins de gaspillage.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Surveillance et contrôle qualité en temps réel 🔍 – Détection immédiate des anomalies et ajustements dynamiques pour une qualité irréprochable.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Gestion automatisée des ressources 📊 – Anticipez les besoins et optimisez l’approvisionnement grâce à une analyse IA des stocks et de la production.</p>
            </div>

          </div>
        </section>

        <section className='flex flex-col gap-10 w-[80%] lg:w-[50%]'>
          <div className='flex lg:flex-row flex-col gap-12 w-full'>
            <span className='bg-[#0000FF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
            <div className='h-[160px] w-auto flex relative'>
              <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
              <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
              <Image src="/images/indu.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
              <Image src="/images/indu1.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <h2 className='text-[18px]'>Jeudi 13 février 2025</h2>
              <span className='text-[16px]'>Reggie Clairville</span>
              <button className='p-3 px-8 rounded-3xl bg-[#0000FF] text-white'><span className="mr-2">&#8594;</span>enregistrer</button>
            </div>
          </div>

        </section>

      </div>


    <DeploymentSection/>

   <Slider2/>

   <ListeIndu/>

    </div>
  )
}

export default page