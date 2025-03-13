import Slider2 from '@/app/components/Industrie5/slider'
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
            <h3 className='text-[14px] uppercase'>Finance & Comptabilité</h3>
            <h1 className='text-[38px] lg:text-[52px]'>💰 Révolutionner la Finance et la Comptabilité avec l’IA</h1>
            <p>Nos agents IA intelligents automatisent les analyses financières, détectent les anomalies comptables et optimisent la gestion des risques. Grâce au traitement de données en temps réel, prenez des décisions plus éclairées, gagnez en précision et améliorez la performance financière de votre entreprise.</p>
            <div className='flex gap-6'>
              <button className='p-3 px-8 rounded-3xl bg-[#11EEFF] text-black'><span className="mr-2">&#8594;</span>Demander une démonstration</button>
              <button className='p-3 px-8 rounded-3xl border border-white'>Regarder la vidéo</button>
            </div>
          </div>
        </section>

        <section className='lg:flex relative lg:w-[48%] w-full h-[575px] pl-8 hidden'>
        <Image src="/images/heroIndu5.jpg" className='absolute z-20 top-[76px] rounded-2xl' alt="alt" width={340} height={300} />
        <Image src="/images/image31.svg" className='absolute z-10 top-[248px] left-16' alt="alt" width={650} height={700} />
        </section>

      </div>



      <div className='flex lg:flex-row flex-col w-full h-auto gap-10 lg:gap-6 lg:px-28 mt-32 justify-center lg:items-start items-center'>
        <section className='flex flex-col w-[80%] lg:w-[45%] gap-4'>
          <span className='text-[16px] leading-[18.91px]'>L’intelligence artificielle transforme le domaine de la finance et de la comptabilité en apportant des solutions innovantes pour l’analyse des données, la détection des fraudes et l’automatisation des tâches complexes. Nos agents IA avancés traitent de vastes ensembles de données en un temps record, identifiant des tendances, prévoyant les fluctuations du marché et optimisant la gestion des ressources financières.
        Grâce à des modèles prédictifs et des algorithmes d’apprentissage automatique, nos solutions améliorent la fiabilité des rapports financiers, réduisent les erreurs et facilitent la conformité aux réglementations. Elles permettent également de rationaliser les processus comptables en automatisant la facturation, le rapprochement bancaire et la gestion des flux de trésorerie.
        Avec l’IA, les entreprises bénéficient d’une prise de décision plus rapide, d’une gestion des finances plus précise et d’une réduction des risques, garantissant ainsi une croissance durable et une meilleure rentabilité.
          </span>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[20px]'>Principales caractéristiques :</h1>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Automatisation des processus comptables et financiers 📊 – Nos agents IA prennent en charge la saisie des données, les rapprochements bancaires et la génération de rapports pour une comptabilité fluide et sans erreur.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Analyse prédictive et gestion des risques 🔍 – Grâce à l’IA, anticipez les fluctuations du marché, identifiez les opportunités financières et minimisez les risques liés aux investissements.</p>
            </div>
            <div className='flex gap-2'>
              <Image src="/images/check.svg" className='' alt="alt" width={30} height={20} />
              <p className='text-[16px] leading-[18.91px] mt-2'>Détection avancée des fraudes et conformité réglementaire ⚖️ – Nos solutions surveillent les transactions en temps réel pour identifier les anomalies et garantir le respect des normes comptables et financières.</p>
            </div>

          </div>
        </section>

        <section className='flex flex-col gap-10 w-[80%] lg:w-[50%]'>
          <div className='flex lg:flex-row flex-col gap-12 w-full'>
            <span className='bg-[#0000FF] p-2.5 rounded-[50%] self-start mt-[70px]'></span>
            <div className='h-[160px] w-auto flex relative'>
              <span className='w-[50px] h-full absolute from-[#C8FDC8] to-[#008000] bg-gradient-to-b left-10'></span>
              <span className='w-[60px] h-full absolute from-[#74F5FA] to-[#D1FEC3] bg-gradient-to-b rounded-l-2xl'></span>
              <Image src="/images/indu88.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
              <Image src="/images/image14.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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
              <Image src="/images/image17.jpg" className='rounded-2xl' alt="alt" width={900} height={550} />
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