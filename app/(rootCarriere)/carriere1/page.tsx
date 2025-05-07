import Text3DAnimation from '@/app/components/3DTextMOve1'
import CustomizedAccordions from '@/app/components/Accordion1'
import React from 'react'

const Page = () => {
    return (
        <div className='w-full mt-32'>
            <section className='flex w-full justify-center items-center lg:h-[475px] text-[#06060c]'>
                <div className='lg:w-[90%] lg:h-[430px] from-[#00FFFF] via-[#00FFFF] to-[#0000FF] bg-gradient-to-b rounded-3xl border-[8px] border-b-[#0000FF] border-t-[#00FFFF] border-l-[#00FFFF] border-r-[#0000FF] flex flex-col gap-4 justify-center items-center text-center px-8 lg:py-0 py-8'>
                    <span className='w-[69px] absolute z-10 h-[430px]'></span>
                    <h3 className='text-[16px] uppercase z-20'>Opportunités de Carrière</h3>
                    <Text3DAnimation/>
                    <p className='z-20 text-[18px]'>Explorez des opportunités uniques dans l'administration, le recrutement, le droit et la finance. Que vous soyez expert en gestion, talent acquisition, droit des affaires ou analyse financière, trouvez un poste qui correspond à vos compétences et façonnez votre avenir professionnel avec nous.</p>
                </div>
            </section>

            <section className='w-[85%] mx-auto mt-[80px]'>
                <h1 className='lg:text-[40px] text-[30px] font-bold text-center mb-8'>Les Jobs relatifs</h1>
                <CustomizedAccordions/>
            </section>
        </div>
    )
}

export default Page