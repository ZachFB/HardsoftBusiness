import Slider2 from '@/app/components/Industrie4/slider'
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
            <h3 className='text-[14px] uppercase'>Santé & Pharmacie</h3>
            <h1 className='text-[38px] lg:text-[52px]'>L’IA au Cœur de l’Innovation en Santé et Pharmacie</h1>
            <p>Grâce à l’intelligence artificielle, les diagnostics gagnent en précision, la gestion des stocks médicaux devient plus efficace et les décisions critiques s’appuient sur des analyses en temps réel. Nos agents IA repensent les processus pour une santé plus fluide, réactive et performante.</p>
            <div className='flex justify-center gap-3 lg:gap-6'>
              <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
              <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
            </div>
          </div>
        </section>

        <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
          <Image src="/images/heroIndu4.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
          <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
        </section>

      </div>



      <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
        <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
          <span className='text-[16px] leading-[18.91px]'>L’intelligence artificielle transforme le secteur de la santé et de la pharmacie en apportant des solutions innovantes pour améliorer la prise en charge des patients, optimiser la gestion des ressources et renforcer l’efficacité des traitements. Nos agents IA avancés analysent en temps réel des volumes massifs de données médicales et pharmaceutiques, facilitant ainsi les diagnostics, la recherche clinique et l’approvisionnement en médicaments.
            Grâce à des algorithmes de machine learning et une capacité d’adaptation continue, ces agents optimisent les processus médicaux, réduisent les erreurs et garantissent une gestion plus fluide des stocks et des prescriptions. En intégrant des modèles prédictifs, ils permettent d’anticiper les besoins en soins, d’améliorer la coordination entre les professionnels de santé et de proposer des recommandations personnalisées pour chaque patient.
            Avec l’IA, la santé devient plus proactive, précise et efficiente, garantissant de meilleurs résultats tout en réduisant les coûts et les délais de traitement.
          </span>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[20px]'>Principales caractéristiques :</h1>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Optimisation des diagnostics et de la prise en charge 🩺 – Nos agents IA analysent les données médicales pour détecter plus rapidement les pathologies et suggérer des traitements adaptés.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Gestion intelligente des stocks et des médicaments 💊 – L’IA prédit la demande en médicaments, évite les ruptures et optimise les commandes pour minimiser les pertes.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Automatisation des processus administratifs et médicaux 📋 – Nos solutions allègent la charge des professionnels de santé en traitant les dossiers médicaux et en facilitant la gestion des rendez-vous.</p>
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
              <Image src="/images/indu66.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
              <Image src="/images/indu77.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <h2 className='text-[18px]'>Jeudi 13 février 2025</h2>
              <span className='text-[16px]'>Reggie Clairville</span>
              <button className='p-3 px-8 rounded-3xl bg-[#0000FF] text-white'><span className="mr-2">&#8594;</span>enregistrer</button>
            </div>
          </div>

        </section>

      </div>

      <Slider2 />

      <ListeIndu />

    </div>
  )
}

export default page