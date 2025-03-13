import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListeIndu = () => {
  return (
    <div className='w-full h-auto flex flex-col lg:gap-16 gap-8 justify-center items-center lg:py-20  pb-20 pt-8'>
         <span className="lg:text-[40px] text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-[#0000FF] via-[#00FFFF] to-[#008000] font-bold text-4xl ml-2">
            Secteur d&#39;intervention
        </span>
       <div className='grid lg:grid-cols-3 grid-cols-1 w-[80%] gap-8 h-auto'>
        <Link href="/industrie1" className="flex flex-col gap-4">
        <Image src="/images/heroIndu1.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Fabrication Industrielle</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>L’IA au Cœur de la Révolution Industrielle </h1>
        </Link>

        <Link href="/industrie2" className="flex flex-col gap-4">
        <Image src="/images/heroIndu2.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Logistique & Supply Chain</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>Réinventer la Logistique avec l&#39;Intelligence Artificielle </h1>
        </Link>

        <Link href="/industrie3" className="flex flex-col gap-4">
        <Image src="/images/heroIndu3.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Commerce & Retail</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>🛍️ Commerce & Retail : L’IA au Service de la Performance </h1>
        </Link>

        <Link href="/industrie4" className="flex flex-col gap-4">
        <Image src="/images/heroIndu4.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Santé & Pharmacie</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>L’IA au Cœur de l’Innovation en Santé et Pharmacie </h1>
        </Link>

        <Link href="/industrie5" className="flex flex-col gap-4">
        <Image src="/images/heroIndu5.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Finance & Comptabilité</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>💰 Révolutionner la Finance et la Comptabilité avec l’IA </h1>
        </Link>

        <Link href="/industrie6" className="flex flex-col gap-4">
        <Image src="/images/heroIndu6.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Agriculture</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>🌱 L’IA au Service d’une Agriculture Plus Intelligente et Performante </h1>
        </Link>

        <Link href="/industrie7" className="flex flex-col gap-4">
        <Image src="/images/heroIndu7.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Hôtellerie & Restauration</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>🍽️ L’IA au Service d’une Expérience Client Unique et d’une Gestion Optimisée </h1>
        </Link>

        <Link href="/industrie8" className="flex flex-col gap-4">
        <Image src="/images/heroIndu8.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Énergie & Environnement</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>⚡ Optimisation Énergétique et Gestion Durable grâce à l’IA </h1>
        </Link>

        <Link href="/industrie9" className="flex flex-col gap-4">
        <Image src="/images/heroIndu9.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Éducation & Formation</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>🎓 L’IA au Service de l’Éducation et de la Formation </h1>
        </Link>

        <Link href="/industrie10" className="flex flex-col gap-4">
        <Image src="/images/heroIndu10.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Sécurité & Surveillance</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>🛡️ L’IA pour une Sécurité et une Surveillance Intelligentes </h1>
        </Link>

        <Link href="/industrie11" className="flex flex-col gap-4">
        <Image src="/images/heroIndu11.jpg" className='rounded-2xl h-[200px]' alt="alt" width={340} height={100} />
        <h3 className='text-[14px] uppercase'>Politiques Publiques</h3>
        <h1 className=' text-[20px] lg:text-[20px]'>🏛️ L’IA au Service des Politiques Publiques </h1>
        </Link>

       </div>
    </div>
  )
}

export default ListeIndu