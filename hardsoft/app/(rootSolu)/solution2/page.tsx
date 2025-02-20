import SliderSolu from '@/app/components/Solution2/slider'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div
                className="w-full m-auto max-w-[1300px] h-auto lg:h-[494px] bg-[#F8F8FC] rounded-[15px] mt-[26px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 p-4">
                {/* <!-- Texte --> */}
                <div className="w-full lg:w-[55%] lg:px-10 flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                    <span className="poppins-light text-[12px]">Solutions</span>
                    <span
                        className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        Grandes Entreprises et Multinationales
                    </span>
                    <span className="mt-[20px] lg:mt-[40px] text-[16px] text-justify lg:text-[18px] text-[#494949] font-medium">
                        Optimisez la Performance de Votre Entreprise à Grande Échelle Réinventez la gestion financière, les prévisions stratégiques et l&#39;alignement opérationnel à travers une solution intégrée conçue pour les grandes entreprises et multinationales.
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                        <button className="bg-[#0000FF] text-white p-3 px-4 rounded-3xl text-[15px] flex items-center font-light">
                            <span className="mr-2">&#8594;</span> Demander une démonstration
                        </button>
                        <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light">Regarder la vidéo</button>
                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[45%] h-[250px] md:h-[350px] lg:h-[494px] rounded-r-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroSolu2.jpg)` }}></div>
            </div>


            <div className='lg:w-[833px] lg:ml-[80px] lg:mt-[154px] w-full mt-[90]'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        Vos Défis, Nos Solutions
                    </span>
                </h1>
                <p className='text-[16px] text-center lg:text-left'>En tant que grande entreprise, vos défis sont multiples et complexes. Notre solution PEM est spécialement conçue pour répondre aux besoins spécifiques des multinationales.</p>
            </div>



            <div className="w-full flex justify-center">
                <div className="lg:w-[1201px] w-full mx-3 mt-[44px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color5.svg)` }}>
                            <Image src="/images/image16.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Complexité Financière</h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]"> Gérer les budgets, les prévisions, et la performance financière à l'échelle mondiale exige une visibilité complète et des outils robustes.</p>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]"><span className="font-black">Solution :</span> Notre module de gestion financière centralisée vous permet de consolider les données de multiples filiales et de diversifier les analyses, offrant une vue d'ensemble claire et unifiée.</p>
                        </div>
                    </div>

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(images/color6.svg)` }}>
                            <Image src="/images/image17.jpg"
                                width={400}
                                height={250}
                                className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-12">
                            <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Planification Stratégique Globale</h2>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">Aligner les objectifs stratégiques à travers différents marchés et unités commerciales est crucial pour maintenir la compétitivité.</p>
                            <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]"><span className="font-black">Solution :</span> Grâce à notre outil de planification stratégique, coordonnez et synchronisez les stratégies à l'échelle mondiale tout en tenant compte des particularités régionales.</p>
                        </div>
                    </div>

                </div>
            </div>



            <div className="w-full flex justify-center">
                <div className="mt-[52px] w-full lg:w-[1200px] md:w-[95%] lg:h-[403px] h-auto flex items-center">
                    <div
                        className="w-full lg:w-[545px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end border-t border-l border-b border-[#0000004D] rounded-l-2xl">
                    </div>
                    <div
                        className="w-full lg:w-[650px] px-2 lg:px-0 h-full lg:py-0 py-8 border-[#0000004D] border-r border-t border-b rounded-r-3xl flex justify-center items-center">
                        <section className="w-full lg:w-[487px] h-auto flex flex-col justify-center">
                            <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]">Gestion des Ressources Humaines à Grande Échelle                                </h1>
                            <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                L&#39;optimisation des performances et des compétences au sein de vastes équipes internationales est un défi de taille.
                            </p>
                            <p className="lg:w-[459px] text-[16px] poppins-light mt-[16px] leading-[19.2px]"><span className="font-black">Solution :</span> Notre solution vous aide à gérer efficacement les talents, à mesurer la performance des équipes, et à rationaliser les ressources humaines à l'échelle globale.</p>
                        </section>
                    </div>
                </div>
            </div>



            <div className="lg:w-[1188px] w-full mx-auto">
                <h1 className="mt-[129px] text-center lg:ml-[100px] lg:text-[40px] text-[28px] w-full lg:w-[1036px] font-black leading-[48.2px]">
                    Découvrez comment notre solution de Performance Enterprise Management s'intègre dans les processus de votre entreprise pour des résultats tangibles.</h1>
            </div>

            <div className="lg:h-[224px] h-auto w-full mt-[80px]">
                <section className="flex lg:flex-row flex-col justify-center items-center gap-16">
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Vector.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Amélioration de la Visibilité Financière</h2>
                                <p className="poppins-medium text-left mt-3">
                                    &#34;Grâce à la solution PEM, nous avons pu réduire nos coûts opérationnels de 20% tout en
                                    améliorant notre efficacité.&#34;
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/icon8.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Réduction des Risques et Prise de Décisions Éclairées</h2>
                                <p className="poppins-medium text-left mt-3">
                                    Utilisez des analyses prédictives et des simulations pour anticiper les défis, gérer les risques et prendre des décisions informées, soutenues par des données en temps réel.
                                </p>
                            </div>
                        </section>
                    </div>

                </section>
            </div>



            <div className="lg:h-[224px] h-auto w-full mt-[100px]">
                <section className="flex lg:flex-row flex-col justify-center items-center gap-16">
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/icon9.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Optimisation de la Performance Opérationnelle</h2>
                                <p className="poppins-medium text-left mt-3">
                                    Suivez et améliorez en continu la performance de vos opérations grâce à des KPI personnalisés, des tableaux de bord dynamiques et des rapports automatisés.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="w-[350px] h-[236px] relative flex justify-center">
                        <section className="w-full h-full absolute bottom-[32px] flex flex-col items-start py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image height={60} width={60} src="/images/Group1.svg" className="m-auto mt-2" alt="" />
                            </span>
                            <div className="flex flex-col">
                                <h2 className="font-black text-left text-[24px]">Alignement Stratégique Global</h2>
                                <p className="poppins-medium text-left mt-3">
                                    Harmonisez les initiatives locales avec la stratégie d'entreprise globale, en vous assurant que chaque division contribue efficacement aux objectifs généraux.
                                </p>
                            </div>
                        </section>
                    </div>

                </section>
            </div>



            <div className=' py-16 h-auto lg:mt-[154px] mt-[90] bg-[#F8F8FC]'>
                <div className='lg:w-[833px] lg:ml-[80px] w-full space-y-2'>
                    <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                        Fonctionnalités Clés pour les Grandes Entreprises
                        <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                        </span>
                    </h1>
                    <p className='text-[16px] text-center lg:text-left'>Des fonctionnalités robustes et évolutives conçues pour les besoins des multinationales.</p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[52px] w-full lg:w-[1200px] h-[403px] flex items-center">
                        <div
                            className="w-full lg:w-[545px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end border-t border-l border-b border-[#0000004D] rounded-l-2xl">
                        </div>
                        <div
                            className="w-full lg:w-[650px] px-2 lg:px-0 h-full border-[#0000004D] border-r border-t border-b rounded-r-3xl flex justify-center items-center">
                            <section className="w-full lg:w-[487px] flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]">Consolidation Multi-Entités</h1>
                                <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    Intégrez les données financières et opérationnelles de toutes vos filiales pour une vision globale et cohérente.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="lg:w-[1201px] w-full mx-3 mt-[44px] grid lg:grid-cols-2 grid-cols-1 gap-[35px]">

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{ backgroundImage: `url(images/color5.svg)` }}>
                                <Image src="/images/image12.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt="" />
                            </div>
                            <div
                                className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Planification Scénarios & Simulations</h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">Testez différents scénarios de marché et planifiez en conséquence pour minimiser les risques et maximiser les opportunités.</p>
                            </div>
                        </div>

                        <div>
                            <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                                style={{ backgroundImage: `url(images/color6.svg)` }}>
                                <Image src="/images/image13.jpg"
                                    width={400}
                                    height={250}
                                    className="md:w-[400px] w-[300px] md:h-[250px] h-[230px] bg-center bg-cover rounded-t-2xl absolute z-20 lg:top-[28px] bottom-[-1px] right-[0px]"
                                    alt="" />
                            </div>
                            <div
                                className="flex flex-col items-center h-auto w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px] pb-7">
                                <h2 className="lg:w-[459px] text-[20px] font-black lg:text-left text-center mt-[40px]">Gestion des Talents et Performance RH</h2>
                                <p className="lg:w-[459px] text-[16px] lg:text-left text-center poppins-light mt-[16px] leading-[19.2px]">Analysez les performances à l'échelle individuelle et collective pour une meilleure gestion des talents et des ressources humaines.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[52px] w-full lg:w-[1200px] h-[403px] flex items-center">
                        <div
                            className="w-full lg:w-[545px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end border-t border-l border-b border-[#0000004D] rounded-l-2xl">
                        </div>
                        <div
                            className="w-full lg:w-[650px] px-2 lg:px-0 h-full border-[#0000004D] border-r border-t border-b rounded-r-3xl flex justify-center items-center">
                            <section className="w-full lg:w-[487px] flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[20px] font-black lg:text-[32px]">Rapports Personnalisés et Tableaux de Bord Dynamiques</h1>
                                <p className="w-full lg:w-[551px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    Créez des rapports sur mesure pour chaque niveau de gestion, avec des tableaux de bord qui s&#39;adaptent à vos besoins spécifiques.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

            </div>


            <div className='lg:w-[833px] lg:ml-[80px] lg:mt-[154px] w-full mt-[90] space-y-3'>
                <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center lg:text-left leading-[48px] font-black">
                    Témoignages et Études de Cas
                    <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                    </span>
                </h1>
                <p className='text-[16px] text-center lg:text-left'>Comment les leaders de l'industrie utilisent notre solution PEM pour réussir.</p>
            </div>


            <div className="h-auto w-full pt-[40px]">

                <div className="w-full flex justify-center">
                    <div className="w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-r-2xl">
                        </div>
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Étude de Cas 1 : </h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    Optimisation des prévisions financières pour un leader du secteur manufacturier.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[41px] w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="lg:w-[620px] w-full h-full flex justify-center items-center">
                            <section className="lg:w-[466px] w-full lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Étude de Cas 2 :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    Amélioration de l'alignement stratégique global pour une multinationale du secteur technologique.
                                </p>
                            </section>
                        </div>
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-l-2xl">
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="mt-[41px] w-full lg:w-[1200px] h-[300px] flex items-center">
                        <div
                            className="w-64 md:w-[600px] lg:w-[580px] h-full bg-gradient-to-b from-[#0000FF] to-[#00FFFF] flex justify-end lg:rounded-2xl rounded-r-2xl">
                        </div>
                        <div
                            className="lg:w-[620px] w-full flex justify-center items-center">
                            <section className="lg:w-[466px] w-full lg:px-0 px-3 flex flex-col justify-center">
                                <h1 className="poppins-semibold text-[32px] font-black">Témoignage :</h1>
                                <p className="w-full text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                    "Grâce à [Nom de votre solution], nous avons transformé notre gestion financière à l'échelle mondiale, réduisant les risques et améliorant notre prise de décision." – Directeur Financier, [Nom de l'entreprise].
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

            </div>


            <div className="mt-[167px] w-full lg:block hidden">
                <div className="lg:w-[1200px] h-auto bg-[#0000FF] m-auto rounded-[20px]">
                    <div className="lg:w-[981px] flex flex-col lg:flex-row py-[70px] mx-auto gap-[159px]">
                        <div className="flex flex-col w-full text-white">
                            <h1 className="lg:w-[521px] text-[28px] px-3 lg:px-0 lg:text-[40px] font-black leading-[48px] lg:text-justify">
                            Démo et Contact
                            </h1>
                            <p className="lg:w-[506px] text-[20px] leading-[24px] poppins-light text-justify mt-[40px]">
                                Prêt à transformer votre gestion de la performance ?
                            </p>
                            <SliderSolu/>
                        </div>
                        <div className="flex">
                            <Image src="/images/funColor1.svg" height={400} width={400} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className=' py-16 h-auto flex justify-center lg:mt-[154px] px-3 mt-[90] bg-[#F8F8FC]'>
            <div className='lg:w-[950px] w-full space-y-8'>
                    <h1 className="poppins-semibold lg:text-[40px] text-[30px] text-center leading-[48px] font-black">
                       Libérez le Potentiel de Votre Multinationale avec
                        <span className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]"> [Nom de Notre Solution]
                        </span>
                    </h1>
                    <p className='text-[16px] lg:text-[20px] text-center'>Votre entreprise mérite une solution qui soit aussi puissante et évolutive que vos ambitions. Découvrez comment [Nom de votre solution] peut vous aider à exceller dans la gestion de la performance à l'échelle mondiale.</p>
             </div>
            </div>



              {/* <!-- Accordeon HTML TAILWIND CSS  --> */}
              <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen mt-[105px] my-20">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl mt-5 tracking-tight poppins-semibold mb-4">
                        FAQ
                    </h2>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
                    <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033]">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className="text-[20px] poppins-semibold"> &#34;Questions Fréquemment Posées&#34;</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
                                SAAS platform is a cloud-based software service that allows users to access
                                and use a variety of tools and functionality.
                            </p>
                        </details>
                    </div>
                    <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-[20px] poppins-semibold"> &#34;La solution PEM est-elle adaptée à toutes les PME, quel que soit le secteur ?&#34;</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
                                We offers a variety of billing options, including monthly and annual subscription plans,
                                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-[20px] poppins-semibold"> &#34;Combien de temps faut-il pour déployer la solution ?&#34;</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
                                We offers a variety of billing options, including monthly and annual subscription plans,
                                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span className="text-[20px] poppins-semibold"> &#34;Quels types de support et de formation sont proposés ?&#34;</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
                                We offers a variety of billing options, including monthly and annual subscription plans,
                                as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default page