import ProgressGradient from "@/app/components/progressGradient";
import SliderServ from "@/app/components/Service1/slider";
import Image from "next/image";


const Service = () => {

    return (
        // <!-- Section Hero -->
        <div className="w-full overflow-hidden mb-20">

            <div
                className="w-full max-w-[1300px] h-auto lg:h-[600px] bg-[#F8F8FC] rounded-[15px] mt-[50px] lg:mt-[150px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 py-4">
                {/* <!-- Texte --> */}
                <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
                    <span className="poppins-light text-[12px]">Services</span>
                    <div className="text-[30px] font-semibold lg:text-[40px]">
                        Stratégie de <span
                            className="lg:mt-8 mt-4 text-[30px] font-semibold lg:text-[40px] bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent leading-[38px] lg:leading-[48px]">
                            Développement des Compétences</span> en transition numérique et ecologique
                    </div>
                    <span className="mt-[20px] lg:mt-[16px] text-[18px] text-[#494949] font-medium">
                        En tant qu'entreprise spécialisée dans la transition numérique, vous pouvez jouer un rôle clé non seulement en fournissant des formations, mais aussi en aidant vos clients à trouver des financements pour leurs projets de transformation digitale. Voici plusieurs approches que vous pouvez adopter pour aider les entreprises à obtenir des financements pour la transition numérique.
                    </span>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                        <button className="bg-[#0000FF] text-white p-3 lg:px-7 lg:w-auto w-[350px] rounded-3xl text-[15px] flex justify-center items-center font-light">
                            <span className="mr-2">&#8594;</span> Try for free
                        </button>
                        <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light hidden">Regarder la vidéo</button>
                    </div>
                </div>

                {/* <!-- Image --> */}
                <div className="w-full md:w-[80%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[600px] lg:rounded-none rounded-[15px] lg:rounded-r-[15px] bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/heroSer1.png)` }}></div>
            </div>


            <div className="max-w-full">
                <h1 className="lg:mt-[129px] mt-[80px] lg:ml-[120px] lg:text-left text-center mx-3 text-[28px] lg:text-[40px] font-black">Identifier les dispositifs publics d’aide et de
                    subventions</h1>
                <div className="lg:ml-[100px]">
                    <p className="text-[16px] mx-3 lg:mt-[44px] mt-[20px] lg:text-left text-center">
                        De nombreux gouvernements, notamment en France et dans l'Union européenne, proposent des aides et
                        subventions pour soutenir la transformation numérique des entreprises.
                        Vous pouvez aider vos clients à repérer et à accéder à ces aides en leur fournissant des informations
                        sur les dispositifs disponibles.
                    </p>

                    <h2 className="text-[20px] mt-[28px] lg:text-left text-center underline underline-offset-2 decoration-1 font-black">Exemples de
                        dispositifs :</h2>
                </div>
            </div>


            <div className="lg:h-[525px] h-auto w-full mt-[94px]">
                <section className="flex flex-col lg:flex-row items-center lg:gap-0 gap-3">
                    {/* <div className="w-[100px] h-[220px] border-[#00000026] border-b border-r border-t hidden lg:block"></div> */}
                    <div className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
                        <section className="w-[314px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="/images/Vector.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                <span className="font-black text-[16px]">France Relance : </span>
                                <p className="poppins-medium ">
                                    Ce programme met à disposition des fonds pour accompagner les PME et TPE dans leur
                                    transition numérique.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
                        <section className="w-[314px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="images/icon8.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                <span className="font-black text-[16px]">Plan de Relance Numérique : </span>
                                <p className="poppins-medium ">
                                    Un volet dédié du plan de relance économique post-COVID qui offre des financements pour la
                                    transformation digitale des entreprises.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="lg:w-[450px] w-full h-[220px] border-[#00000026] border relative flex justify-center">
                        <section className="w-[314px] h-[236px] absolute bottom-[32px] flex flex-col py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="images/icon9.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                <span className="font-black text-[16px]">Chèque numérique : </span>
                                <p className="poppins-medium ">
                                    Certaines régions et villes proposent des chèques numériques pour aider les petites
                                    entreprises à adopter des outils digitaux.
                                </p>
                            </div>
                        </section>
                    </div>
                    {/* <div className="w-[100px] h-[220px] border-[#00000026] border-b border-l border-t hidden lg:block"></div> */}
                </section>

                {/* <section className="flex justify-between">
                    <div className="w-[97.8px] h-[54px] border-[#00000026] border-r hidden lg:block"></div>
                    <div className="w-[97.8px] h-[54px] border-[#00000026] border-l hidden lg:block"></div>
                </section> */}

                <section className="flex lg:mt-0 mt-3">
                    {/* <div className="w-[100px] h-[180px] border-[#00000026] border-b border-r border-t hidden lg:block"></div> */}
                    <div className="w-[1273px] h-[220px] border-[#00000026] border flex justify-center lg:justify-start relative lg:px-10">
                        <section className="w-[314px] h-[236px] absolute bottom-[30px] flex flex-col py-[18px]">
                            <span className="w-[100px] h-[80px] mb-[20px] bg-white z-30">
                                <Image src="images/Group1.svg" height={63} width={63} className="m-auto mt-2" alt="" />
                            </span>
                            <div>
                                <span className="font-black text-[16px]">Aides BPI France : </span>
                                <p className="poppins-medium">
                                    BPI France propose des financements pour l’innovation, dont la transformation digitale. Ils
                                    offrent des prêts, des garanties ou des subventions pour les projets numériques.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* <div className="w-[100px] h-[180px] border-[#00000026] border-b border-l border-t hidden lg:block"></div> */}
                </section>
            </div>


            <div className="mt-[108px] max-w-full bg-[#F8F8FC] flex flex-col items-center">
                <h1 className="mt-[114px] text-[28px] lg:text-[40px] lg:w-[800px} text-center poppins-semibold font-black">Accompagner dans les <span
                    className="bg-gradient-to-r from-[#00FFFF] to-[#0000FF] bg-clip-text text-transparent">démarches de
                    financement</span> par la formation</h1>
                <p className="lg:w-[793px] lg:mx-0 mx-3 poppins-light mt-[47px] text-[16px] text-justify">En plus de la transformation numérique,
                    vous pouvez former les équipes à la recherche de financements
                    et aux démarches administratives associées. Vous pouvez, par exemple, organiser des sessions
                    sur la rédaction de dossiers de demande de subventions ou des formations sur les critères d’éligibilité
                    pour les aides à la transition numérique.</p>
                <h2 className="mt-[48px] text-[25px] font-black">
                    Comment ?
                </h2>
                <div className="mt-[69px] w-full lg:h-[350px] h-auto grid lg:grid-cols-3 grid-col-1 lg:pl-1 place-content-center gap-[29px]">
                    <div className="max-w-[380px] h-[350px] bg-white rounded-[20px] flex items-center">
                        <div className="w-full h-full flex flex-col gap-7 items-center justify-center">
                            <span
                                className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-br from-[#0000FF] to-[#00FFFF]"></span>
                            <p className="poppins-light text-center w-[336px]">Proposez des formations sur le montage de dossiers de
                                financement ou d’appels à projets.</p>
                        </div>
                    </div>
                    <div className="max-w-[380px] h-[350px] bg-white rounded-[20px] flex items-center">
                        <div className="w-full h-full flex flex-col gap-7 items-center justify-center">
                            <span
                                className="w-[120px] h-[120px] rounded-[50%] bg-gradient-to-bl from-[#800080] to-[#FF0066]"></span>
                            <p className="poppins-light text-center w-[336px]">Assurez un accompagnement personnalisé pour aider à
                                identifier les bons leviers financiers en fonction des spécificités de chaque entreprise.</p>
                        </div>
                    </div>
                    <div className="max-w-[380px] h-[350px] bg-white rounded-[20px] flex items-center">
                        <div className="w-full h-full flex flex-col gap-7 items-center justify-center">
                            <span
                                className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-br from-[#0000FF] to-[#00FFFF]"></span>
                            <p className="poppins-light text-center w-[336px]">Participez à la rédaction des demandes d'aides, en
                                mettant en avant l'importance stratégique et économique de la transition numérique.</p>
                        </div>
                    </div>
                </div>

                <h1 className="mt-[156px] lg:w-[990px] text-center text-[28px] lg:text-[40px] font-black">Mettre en relation avec des <span
                    className="bg-gradient-to-r from-[#00FFFF] to-[#0000FF] bg-clip-text text-transparent">acteurs
                    financiers</span></h1>
                <p className="lg:w-[888px] mx-3 poppins-light mt-[47px] text-[16px] text-justify">Certaines banques, fonds d'investissement
                    ou organismes privés proposent des financements spécifiquement destinés
                    à la transition numérique. Vous pouvez établir des partenariats avec des institutions financières
                    spécialisées ou des plateformes de financement participatif, puis orienter vos clients vers ces acteurs.</p>
                <h2 className="mt-[48px] text-[27px] font-black">
                    Exemples :
                </h2>

                <div className="mt-[69px] max-w-[795px] lg:h-[350px] grid lg:grid-cols-2 grid-cols-1 gap-[29px] place-content-center mb-36">
                    <div className="max-w-[380px] h-[400px] bg-white rounded-[20px] flex items-center">
                        <div className="w-full h-full flex flex-col gap-4 items-center justify-center mb-16">
                            <span
                                className="w-[100px] h-[100px] rounded-[50%] bg-gradient-to-br from-[#0000FF] to-[#00FFFF]"></span>
                            <span className="poppins-semibold text-center text-[16px]">Prêts bancaires dédiés à la digitalisation :
                            </span>
                            <p className="poppins-light text-center w-[336px]">De nombreuses banques, telles que BPI France,
                                proposent des prêts à taux avantageux pour des projets de transition numérique.</p>
                        </div>
                    </div>
                    <div className="max-w-[380px] h-[400px] bg-white rounded-[20px] flex items-center">
                        <div className="w-full h-full flex flex-col gap-4 items-center justify-center mb-16">
                            <span
                                className="w-[120px] h-[120px] rounded-[50%] bg-gradient-to-bl from-[#800080] to-[#FF0066]"></span>
                            <span className="poppins-semibold text-center text-[16px]">Fonds d’investissement en capital-risque :
                            </span>
                            <p className="poppins-light text-center w-[336px]">Certaines entreprises peuvent lever des fonds via des
                                investisseurs spécialisés dans l’innovation technologique.</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="w-full flex flex-col items-center">
                <h1 className="mt-[167px] text-[28px] lg:text-[40px] lg:w-[988.33px] text-center font-black">
                    Optimiser l’utilisation des dispositifs de formation (CPF, OPCO)
                </h1>
                <p className="lg:w-[833px] mx-3 poppins-light mt-[47px] text-[16px] text-center">
                    Les entreprises peuvent également utiliser les dispositifs de financement de la formation professionnelle
                    pour couvrir une partie des coûts liés à la formation à la transition numérique de leurs employés. Vous
                    pouvez guider vos clients dans l’utilisation de ces dispositifs.
                </p>
                <h2 className="mt-[29px] text-[20px] poppins-semibold underline-offset-2 underline decoration-1 font-black">Principaux
                    dispositifs :</h2>
            </div>

            <div className="w-full flex justify-center">
                <div className="mt-[84px] w-full lg:w-[1200px] lg:h-[400px] lg:shadow-transparent shadow-lg h-auto flex flex-col lg:flex-row items-center">
                    <section className="lg:w-[425px] w-full lg:h-full h-[400px]" style={{ backgroundImage: `url(/images/baner1.svg)` }}></section>
                    <div
                        className="lg:w-[775px] h-[395px] w-full border border-[#0000004D] border-l-none rounded-r-3xl flex justify-center items-center">
                        <section className="lg:w-[587px] h-[106px] px-6 lg:px-0">
                            <h1 className="poppins-semibold text-[31px] font-black">Compte Personnel de Formation (CPF) :</h1>
                            <p className="lg:w-[415px] text-[16px] poppins-light leading-[19.2px] mt-[20px]">
                                Les salariés peuvent utiliser leur CPF
                                pour financer des formations en compétences numériques.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="lg:w-[1201px] mt-[44px] grid grid-cols-1 lg:grid-cols-2 gap-[35px]">

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(/images/color5.svg)` }}>
                            <Image src="/images/image5.png" height={428} width={428} className="absolute z-20 top-[30px] right-[0px]" alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center px-3 lg:px-0 h-[316px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] text-[28px] poppins-semibold mt-[61px] font-black">OPCO (Opérateurs de compétences) :</h2>
                            <p className="lg:w-[459px] text-[16px] poppins-light mt-[16px] leading-[19.2px]">Les entreprises peuvent
                                obtenir des financements de la part des OPCO pour former leurs employés à la transition
                                numérique.</p>
                        </div>
                    </div>

                    <div>
                        <div className="relative h-[278px] bg-cover rounded-tr-2xl"
                            style={{ backgroundImage: `url(/images/color6.svg)` }}>
                            <Image src="/images/image6.png" height={400} width={408} className="absolute z-20 top-[75px] right-[0px]" alt="" />
                        </div>
                        <div
                            className="flex flex-col items-center px-3 lg:px-0 h-[316px] w-full border-[#0000004D] border-b border-l border-r rounded-b-[25px]">
                            <h2 className="lg:w-[459px] text-[28px] poppins-semibold mt-[61px] font-black">FNE-Formation :</h2>
                            <p className="lg:w-[459px] text-[16px] poppins-light mt-[16px] leading-[19.2px]">
                                Ce dispositif de financement de la formation permet aux entreprises impactées par la crise
                                d'accéder à des fonds pour
                                former leurs salariés à de nouvelles compétences, y compris numériques.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full mt-[155px] lg:h-[564px] flex justify-center items-center bg-[#F8F8FC]">

                <div className="lg:w-[1140px] lg:h-[400px] flex items-center bg-white border-[#0000004D] border rounded-[25px] z-10">
                    <section
                        className="lg:w-[1061px] h-[264px] px-10 lg:px-0 flex items-center justify-end bg-contain bg-left bg-no-repeat ml-[-1px] z-20"
                        style={{ backgroundImage: `url(/images/baner2.svg)` }}>
                        <div className="lg:w-[532px] lg:bg-transparent bg-[#a3f7ffd3] p-6 rounded-xl">
                            <span className="text-[28px] lg:text-[30px] font-black">Compte Personnel de Formation (CPF) :</span>
                            <p className="text-[16px] poppins-light mt-[20px] leading-[19.2px]">
                                Les salariés peuvent utiliser leur CPF pour financer des formations en compétences numériques.
                            </p>
                        </div>
                    </section>
                </div>

            </div>

            <div className="w-full flex flex-col">
                <div className="mt-[179px]">
                    <h1 className="lg:text-[40px] text-[28px] lg:w-[1053px] text-center mx-auto font-black">
                        Monter des dossiers de co-financement européens
                    </h1>
                    <p className="lg:w-[881px] poppins-light mt-[47px] text-[16px] mx-auto px-3 lg:px-0 text-center">
                        En Europe, plusieurs fonds sont disponibles pour la transition numérique, en particulier pour les
                        projets collaboratifs ou innovants. Vous pouvez aider vos clients à monter des projets en consortium
                        pour répondre aux critères des financements européens tels que :
                    </p>
                </div>
                <div className="mt-[99px] w-[673px] grid grid-cols-1 lg:grid-cols-2 pag-[38px] m-auto">

                    <section className="h-[235px] px-9 lg:px-0">
                        <Image src="/images/icon10.svg" height={40} width={40} className="mt-4" alt="" />
                        <h2 className="w-[303px] text-[16px] poppins-semibold mt-[22px] leading-[19.2px]">Fonds européen de
                            développement
                            régional (FEDER) :</h2>
                        <p className="w-[303px] text-[16px] poppins-light leading-[19.2px]">Il propose des fonds pour des projets de
                            transformation numérique en lien avec le développement régional.</p>
                    </section>

                    <section className="h-[235px] px-9 lg:px-0">
                        <Image src="/images/icon11.svg" height={40} width={40} className="mt-4" alt="" />
                        <h2 className="w-[303px] text-[16px] poppins-semibold mt-[22px] leading-[19.2px]">Horizon Europe :</h2>
                        <p className="w-[303px] text-[16px] poppins-light leading-[19.2px]">Ce programme finance des projets
                            innovants, y compris ceux qui incluent des solutions numériques.</p>
                    </section>

                </div>
            </div>

            <div className="mt-[167px] w-full lg:block hidden">
                <div className="lg:w-[1200px] h-[670px] bg-[#0000FF] m-auto rounded-[20px]">
                    <div className="lg:w-[981px] flex flex-col lg:flex-row pt-[100px] mx-auto gap-[159px]">
                        <div className="flex flex-col w-full text-white">
                            <h1 className="lg:w-[521px] text-[28px] px-3 lg:px-0 lg:text-[40px] font-black leading-[48px] lg:text-justify">
                                Sensibiliser à l’impact fiscal de la transition numérique
                            </h1>
                            <p className="lg:w-[506px] text-[20px] leading-[24px] poppins-light text-justify mt-[40px]">
                                Certaines dépenses liées à la transition numérique peuvent être déduites fiscalement.
                                Vous pouvez accompagner les entreprises pour maximiser les avantages fiscaux liés à
                                l’investissement dans le numérique, comme :
                            </p>
                            <SliderServ />
                        </div>
                        <div className="flex">
                            <Image src="/images/funColor1.svg" height={400} width={400} alt="" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-full h-[400px] bg-[#F8F8FC] lg:mt-[102px] mt-[80px] flex justify-center items-center">

                <section className="lg:w-[831px]">
                    <h1 className="lg:w-[814px] text-center leading-[48px] lg:text-[40px] text-[28px] mt-[23px] font-black">Créer un <span
                        className="bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent">service de
                        conseil</span> en financement</h1>
                    <p className="lg:w-[831px] px-3 lg:px-0 mt-[47px] text-[16px] mx-auto text-center">
                        Vous pouvez également proposer un service de conseil en financement en parallèle de vos formations, où
                        vous aidez les entreprises à trouver et à mobiliser les fonds nécessaires à leurs projets numériques.
                        Vous pouvez les conseiller sur les meilleures sources de financement et même les aider à optimiser leur
                        plan de financement.
                    </p>
                </section>

            </div>

            <div className="w-full lg:flex justify-center hidden">
                <div className="mt-[94px] flex w-full h-[399px] border border-[#0000004D] rounded-r-[25px] rounded-l-[50px]">
                    <section className="bg-left bg-no-repeat h-[400px] mt-[-2px] ml-[-1px] w-[466px]"
                        style={{ backgroundImage: `url(/images/baner3.svg)` }}>
                    </section>
                    <div className="w-[680px] h-[399px] flex justify-center items-center">
                        <section className="w-[532px] h-[206px] flex flex-col gap-[40px] mt-[-40px]">
                            <span className="text-[32px] leading-[38.4px] font-black">Encourager les collaborations
                                inter-entreprises</span>
                            <p className="text-[16px] poppins-light leading-[19.2px]">Certaines entreprises peuvent ne pas avoir
                                accès à des fonds en agissant seules, mais peuvent participer
                                à des projets collaboratifs. Vous pouvez encourager la mutualisation
                                des ressources entre entreprises du même secteur ou géographiquement proches pour accéder
                                à des financements groupés ou monter des projets d'envergure.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <div className="w-full lg:flex hidden flex-col items-center mt-[97px] h-[400px] bg-[#F8F8FC]">
                <h1 className="w-[1051px] text-center leading-[48px] text-[40px] mt-[82px] font-black">Informer en continu
                    sur<span className="bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent"> les nouvelles
                        opportunités</span> de financement
                </h1>
                <p className="w-[831px] poppins-light mt-[47px] text-[16px] mx-auto text-center">
                    Il est essentiel d’être informé en permanence sur les nouvelles subventions, prêts et aides disponibles.
                    Vous pouvez offrir un service de veille sur les financements, envoyant des notifications à vos clients
                    chaque fois qu’un nouveau dispositif de financement pour la transition numérique est mis en place.
                </p>
            </div>


            <div className="mt-[100px] w-full h-[550px] bg-[#0000FF] flex items-center">
                <section className="lg:w-[861px]  lg:h-[203px] lg:text-[24px] px-3 lg:px-0 text-[20px] lg:text-justify font-black lg:mt-[-85px] lg:ml-[90px] text-white">
                    En résumé, pour aider les entreprises à financer leur transition numérique, vous devez les accompagner à
                    chaque étape, depuis l’identification des dispositifs d’aides publiques ou privées, jusqu’à la constitution
                    des dossiers de demande. De plus, l’optimisation des financements via des dispositifs de formation et la
                    mise en relation avec des acteurs financiers sont des stratégies qui peuvent considérablement faciliter leur
                    transformation digitale.
                </section>
                <ProgressGradient />
            </div>



            <div />
        </div>
    )
}
export default Service;