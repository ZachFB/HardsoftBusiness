import Text3DAnimation from '@/app/components/3DTextMOve1'
import CustomizedAccordions from '@/app/components/Accordion1'

import React from 'react'

const page = () => {
    return (
        <div className='w-full bg-[#f6fdfc]'>
            <section className='flex  w-full justify-center items-center h-[475px] text-[#05100f]'>
                <div className='w-[90%] h-[430px] rounded-3xl border-[8px] border-b-[#0000FF] border-t-[#00FFFF] border-l-[#00FFFF] border-r-[#0000FF] flex flex-col gap-4 justify-center items-center text-center px-8'>
                <span className='w-[69px] absolute z-10 h-[430px] from-[#00FFFF] via-[#00FFFF] to-[#0000FF] bg-gradient-to-b'></span>
                    <h3 className='text-[14px] uppercase z-20'>Opportunités de Carrière</h3>
                    <Text3DAnimation/>
                    <p className='z-20'>Explorez des opportunités uniques dans l'administration, le recrutement, le droit et la finance. Que vous soyez expert en gestion, talent acquisition, droit des affaires ou analyse financière, trouvez un poste qui correspond à vos compétences et façonnez votre avenir professionnel avec nous.</p>
                </div>
            </section>

            <section className='w-[85%] mx-auto mt-[80px]'>
                <h1 className='text-[40px] font-bold text-center mb-8'>Les Jobs relatifs</h1>
                <CustomizedAccordions/>
            </section>
        </div>
    )
}

export default page