import { CalendarCheck, Clock, Dot, ListTodo } from "lucide-react";
import Image from "next/image";
import MultiCardSlider from "./components/MultiCardSlider";

export default function Home() {
  return (
    <div className="">
      <div
        className="w-full max-w-[1300px] h-auto lg:h-[600px] rounded-[15px] mt-[26px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-4 p-4">
        {/* <!-- Texte --> */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start lg:pl-8 text-center lg:text-left">
          <span className="poppins-light text-[12px]"></span>
          <div className="text-4xl font-semibold lg:text-6xl leading-[38px] lg:leading-[80px]">
            Integrez des LLM dans vos processus pour la planification <span
              className="lg:mt-8 mt-4 text-4xl font-semibold lg:text-6xl bg-gradient-to-r from-[#0000FF] to-[#00FFFF] bg-clip-text text-transparent">
              stratégique</span> de votre entreprise
          </div>
          <span className="mt-[20px] lg:mt-[18px] text-[20px] text-[#494949] font-medium">
            Raisonner en s&#39;adaptant à des besoins complexes, agir en exploitant des outils externes pour atteindre un objectif précis, apprendre en s&#39;améliorant avec le temps pour mieux vous servir.
          </span>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <button className="bg-[#0000FF] text-white p-3 px-4 rounded-3xl text-[15px] flex items-center font-light">
              <span className="mr-2">&#8594;</span> Demander une démonstration
            </button>
            <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light">Regarder la vidéo</button>
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="w-full md:w-[80%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[600px] rounded-[18px] lg:rounded-[18px] bg-cover bg-center"
          style={{ backgroundImage: `url(/images/heroService.jpg)` }}></div>
      </div>



      <div className="w-full flex justify-center lg:mt-24 mt-14" >
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 w-[86%]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[28px] lg:text-[30px] mb-3">Ce que votre agent ia peut faire pour vous</h1>
            <div className="flex gap-2 items-start"><Image src="/images/1ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]">Préparer vos voyages</h2>
                <p className="text-[16px]">Analyse des préférences personnelles Recherche des meilleures offres de billets Selection d&#39;hôtels et d&#39;activités sur mesure Gestion de toutes vos réservations</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/2ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]">Optimiser vos ventes </h2>
                <p className="text-[16px]">Analyse des fendances du marché ef des données clients Rédaction de messages personnalisés personn Evaluation des performances et recommandations stratégiques</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/3ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]">Améliorer l&#39;Interaction client </h2>
                <p className="text-[16px]">Communication fluide et cohérente Offres personnalisées adaptées aux besoins spécifiques</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-[28px] lg:text-[30px] text-center mb-3">Une démarche simple</h1>
            <div className="flex gap-2 items-start"><Image src="/images/1ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]"></h2>
                <p className="text-[16px]">Réalisez un premier état des lieux technique et opérationnel pour évaluer le potentiel d’intégration de l’IA dans votre entreprise.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/2ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]"></h2>
                <p className="text-[16px]">Identifiez des cas d’usage concrets et applicables au contexte et à l’ambition de votre entreprise.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/3ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]"></h2>
                <p className="text-[16px]">Priorisez les cas d&#39;usage identifiés selon leur valeur ajoutée pour votre entreprise via un plan d&#39;action sur-mesure.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[28px] lg:text-[30px]">Pourquoi choisir un Agent IA ?</h1>
            <div className="flex gap-2 items-start"><Image src="/images/1ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]">Gain de temps</h2>
                <p className="text-[16px]">Automatisez vos tâches et concentrez-vous sur ce qui compte vraiment</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/2ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]">Personnalisation:</h2>
                <p className="text-[16px]">Un assistant qui apprend et s&#39;adapte pour affre des solutions uniques.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/3ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]">Compétitivité accrue compet</h2>
                <p className="text-[16px]">Une meilleure gestion des ventes et des relations client pour garder une longueur d&#39;avance sur la concurrence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full h-auto lg:h-[760px] mt-[108px]">
        <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1">
          <div className="bg-[#0000FF] w-full lg:w-[480px] h-full lg:col-span-1 relative">
            <Image src="/images/ac1.svg" alt="alt" width={500} height={500} />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFFFFF] text-[80px] lg:text-[120px]">96%</h2>
            <p className="text-[16px] text-[#FFFFFF] w-[253px] absolute top-2/3 left-1/4 lg:m-auto">de taux de satisfaction sur l’ensemble des Diags Data IA lancés</p>
          </div>
          <div className="w-full lg:h-full h-auto lg:col-span-2 col-span-1 grid grid-row-2">
            <div className="grid grid-cols-2">
              <div className="bg-[#A3F8FF] flex flex-col justify-center items-center gap-2">
                <h2 className="lg:text-5xl text-3xl">Plus de 400</h2>
                <p className="text-[16px] px-5 lg:px-0">Diags Data IA lancés en 2024</p>
              </div>
              <div className="bg-[#0000FF] flex flex-col justify-center items-center gap-2 text-[#FFFFFF] px-5 py-3 lg:py-0 lg:px-[60px]">
                <h2 className="lg:text-5xl text-3xl">Le saviez-vous ?</h2>
                <p className="text-[16px]">35% des entreprises françaises utilisent déjà l’intelligence artificielle ou sont en train de la mettre en place</p>
              </div>
            </div>
            <div className="grid h-[900px] lg:h-full lg:grid-cols-3 grid-cols-1 lg:ml-8">
              <div className="bg-[#FFFFFF] relative flex flex-col items-center justify-end lg:py-[39px] py-5 px-8">
                <Image src="/images/ac2.svg" className="absolute" alt="alt" width={200} height={200} />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]">81%</h2>
                <p className="text-[16px]">des salariés considèrent l’IA comme un moyen d’améliorer ses compétences professionnelles 4</p>
              </div>
              <div className="bg-[#A3F8FF] relative flex flex-col items-center justify-end lg:py-[39px] py-5 px-8">
                <Image src="/images/ac3.svg" className="absolute" alt="alt" width={200} height={200} />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]">90%</h2>
                <p className="text-[16px]">des dirigeants estiment que l&#39;intelligence artificielle représente une opportunité business 5</p>
              </div>
              <div className="bg-[#FFFFFF] relative flex flex-col items-center justify-end lg:py-[39px] py-5 px-8">
                <Image src="/images/ac4.svg" className="absolute" alt="alt" width={200} height={200} />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]">40%</h2>
                <p className="text-[16px]">des dirigeants signalent une productivité accrue grâce à l’automatisation par l’IA 6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto py-5 border flex justify-center gap-6 lg:px-0 px-3 lg:gap-24 ">
        <section>
          <h2>1. Source : Bpifrance</h2>
          <h2>2. Source : Bpifrance</h2>
        </section>
        <section>
          <h2>1. Source : CCI Haute-Savoie</h2>
          <h2>2. Source : Snaplogic</h2>
        </section>
        <section>
          <h2>1. Source : BCG</h2>
          <h2>2. Source : Cabinet d’étude Lavoir</h2>
        </section>
      </div>



      <div className="w-full h-auto lg:py-28 py-11 lg:px-0 px-4 bg-[#F6F8FC] flex lg:flex-row flex-col-reverse justify-center items-center gap-5 lg:gap-40">
        <Image src="/images/agentIA.svg" alt="alt" width={532} height={281} />
        <h1 className="text-[#071A39] text-2xl lg:text-[46px] lg:w-[30%] lg:leading-[60px]">Un engagement stratégique pour l&#39;avenir de votre entreprise</h1>
      </div>



      <div className="w-full h-auto my-20 flex flex-col justify-center items-center gap-10">
        <section className="flex flex-col items-center lg:mx-0 mx-3 lg:w-[778px] gap-5">
          <h2 className="flex"><Image src="/images/ac5.svg" alt="alt" width={24} height={24} /> <p className="text-[12px]">Diag Data IA</p></h2>
          <h1 className="text-[32px] text-center">Exploitez la puissance de vos données</h1>
          <p className="text-center text-[16px] leading-[18.91px]">Bénéficiez d’un accompagnement sur-mesure pour identifier des axes de croissance par l’exploitation de vos données et mettez en œuvre des premières recommandations visant à optimiser votre activité (rapidité d'exécution des tâches à faible valeur ajoutée, amélioration de la performance commerciale...).</p>
          <div className="space-x-8 flex ">
            <span className="flex gap-2"><Clock /> <p>10 jours</p> </span>
            <span className="flex gap-2"><CalendarCheck /> <p>Répartis sur 3 mois</p> </span>
            <span className="flex gap-2"><ListTodo /> <p>3 étapes</p> </span>
          </div>
        </section>

        <section className="flex lg:flex-row flex-col justify-center lg:items-start items-center px-5 gap-4">
          <div className="">
            <h1 className="flex gap-4"> <Image src="/images/ac6.svg" alt="alt" width={31} height={36} /> <p className="text-[18px]">Pour qui ?</p></h1>
            <div className="mt-4 relative px-7">
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Les PE, PME et ETI françaises (de 10 à 2000 salariés maximum) de tous les secteurs d’activités</p></span>
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Ayant un chiffre d’affaire supérieur à 1 million d’euros sur une liasse fiscale de 12 mois</p></span>
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Sur le territoire français et/ou dans les DROM-COM</p></span>
            </div>
          </div>

          <div className="">
            <h1 className="flex gap-4"> <Image src="/images/ac7.svg" alt="alt" width={31} height={36} /> <p className="text-[18px]">Comment ?</p></h1>
            <div className="mt-4 relative px-7">
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Notre expert, agréé et sélectionné par Bpifrance, se déplace dans votre entreprise</p></span>
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Il s’entretient avec vos principales parties prenantes et évalue votre niveau de maturité pour identifier des opportunités liées à l’usage de l’intelligence artificielle</p></span>
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Il vous aide à définir une stratégie adaptée à votre entreprise pour exploiter pleinement vos données et celles de vos clients</p></span>
            </div>
          </div>

          <div className="">
            <h1 className="flex gap-4"> <Image src="/images/ac8.svg" alt="alt" width={31} height={36} /> <p className="text-[18px]">Pour quels résultats ?</p></h1>
            <div className="mt-4 relative px-7">
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Un plan d’action présentant des recommandations chiffrées, priorisées et adaptées au contexte de votre entreprise</p></span>
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Une première feuille de route pour la mise en oeuvre d’un projet IA</p></span>
            </div>
          </div>
        </section>
      </div>



      <div className="w-full h-auto flex justify-center text-[#FFFFFF]">
        <div className="bg-[#9B0069] py-20 w-[90%] h-full flex lg:flex-row flex-col justify-center items-center rounded-2xl gap-8">
          <section className="lg:w-[45%] w-[80%]">
            <h1 className="text-[32px]">Le Diag Data IA, une brique essentielle dans le programme France 2030</h1>
            <div className="flex flex-col gap-9 mt-4">
              <p>Découvrez le programme d’accompagnement IA Booster, composé de 4 phases :</p>
              <div className="flex gap-2 items-start"><Image src="/images/5ac.svg" alt="alt" width={40} height={40} />
                <div className="flex flex-col">
                  <h2 className="text-[20px]"></h2>
                  <p className="text-[16px]">Un autodiagnostic pour évaluer la capacité de votre entreprise à conduire des projets d'IA en 15 minutes.</p>
                </div>
              </div>
              <div className="flex gap-2 items-start"><Image src="/images/6ac.svg" alt="alt" width={40} height={40} />
                <div className="flex flex-col">
                  <h2 className="text-[20px]"></h2>
                  <p className="text-[16px]">Un cursus de formation gratuit de 10 heures pour vous former sur l'IA, ses concepts, ses techniques et technologies et faire le point sur les implications éthiques et réglementaires.</p>
                </div>
              </div>
              <div className="flex gap-2 items-start bg-[#7A0053] py-3 px-2 rounded-lg"><Image src="/images/7ac.svg" alt="alt" width={40} height={40} />
                <div className="flex flex-col">
                  <h2 className="text-[20px]"></h2>
                  <p className="text-[16px]">Le Diag Data IA, pour trouver de nouveaux axes de croissance et mettre l'intelligence artificielle au service des projets de transformation de votre entreprise.</p>
                </div>
              </div>
              <div className="flex gap-2 items-start"><Image src="/images/8ac.svg" alt="alt" width={40} height={40} />
                <div className="flex flex-col">
                  <h2 className="text-[20px]"></h2>
                  <p className="text-[16px]">La mission “Choix de l'approche IA” (dans la limite de l'enveloppe budgétaire disponible) pour vous aider à qualifier la meilleure approche pour mettre en oeuvre votre projet IA (acquisition d'une solution existante sur le marché, développement d'une solution maison...).</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-[80%] lg:w-[45%]">
            <Image src="/images/agentIA2.svg" alt="alt" width={500} height={500} />
          </section>
        </div>
      </div>


      <div className="w-full h-auto flex flex-col justify-center items-center mt-[149px]">
        <h1 className="text-[32px] font-light m-auto text-center">Explore Agentforce use cases.</h1>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Produits</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Services</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Solutions</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Strategies</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Partenaires</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Entreprise</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider />
          </div>
        </div>
      </div>


      <div className="w-full h-auto p-10 lg:px-32 flex flex-col gap-14 mt-[124px] bg-[#0000FF] text-white">
        <h1 className="text-[32px]">Our Cloud Partners</h1>
        <div className="w-full flex lg:flex-row flex-col gap-8">
          <section className="flex flex-col gap-2">
            <p className="text-12">AWS</p>
            <Image src="/images/aws.png" alt="alt" width={280} height={200} />
            <p className="text-12">Integrate Palantir Foundry and Amazon
              Sagemaker to overcome common data
              challenges at every stage of the AI lifecycle. </p>
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-12">GOOGLE CLOUD</p>
            <Image src="/images/google.png" alt="alt" width={280} height={200} />
            <p className="text-12">Access Palantir Foundry direct from the
              Google Cloud Marketplace, while
              harnessing products like Google BigQuery. </p>
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-12">MICROSOFT AZURE</p>
            <Image src="/images/microsoft.png" alt="alt" width={280} height={200} />
            <p className="text-12">Make your data actionable through Palantir Foundry via the Azure Marketplace, and integrate with products like Azure IoT Hub.</p>
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-12">ORACLE</p>
            <Image src="/images/oracle.png" alt="alt" width={280} height={200} />
            <p className="text-12">Leverage Palantir Foundry & AIP on Oracle Cloud Infrastructure to revolutionize data-driven operations, combining AI with sovereignty for businesses and governments around the world.</p>
          </section>
        </div>
      </div>


      <div className="mt-[122px] w-full h-auto px-10 md:px-32 flex flex-col gap-20">
        <h1 className="text-[30px]">How It Works</h1>
        <div className="flex lg:flex-row flex-col gap-6">
          <Image src="/images/heroProd.jpg" alt="alt" width={500} height={500} />
          <section className="w-full flex lg:justify-end items-center">
            <div className="w-[435px] flex flex-col justify-center gap-3 h-full border-t border-black">
              <h2 className="text-[34px]">Connect.</h2>
              <p className="text-[16px]">Rapidly integrate business process data into the Foundry Ontology with built-in connectors, unlocking connectivity and insights that span your entire organization.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row-reverse flex-col gap-6">
          <Image src="/images/heroProd.jpg" alt="alt" width={500} height={500} />
          <section className="w-full flex items-center">
            <div className="w-[435px] flex flex-col justify-center gap-3 h-full border-t border-black">
              <h2 className="text-[34px]">Understand.</h2>
              <p className="text-[16px]">Mine processes to produce a point-and-click visualization and model the ideal path. An easy-to-navigate view of expected behavior and associated deviations allows you to investigate at varying levels of granularity — from individual steps to high-level trends.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row flex-col gap-6">
          <Image src="/images/heroProd.jpg" alt="alt" width={500} height={500} />
          <section className="w-full flex lg:justify-end items-center">
            <div className="w-[435px] flex flex-col justify-center gap-3 h-full border-t border-black">
              <h2 className="text-[34px]">Analyze.</h2>
              <p className="text-[16px]">With the Foundry Ontology, query related objects from across your business to comprehend underlying drivers of unexpected process transitions. Rapidly analyze deviations, diagnose bottlenecks, and perform root cause analysis.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row-reverse flex-col gap-6">
          <Image src="/images/heroProd.jpg" alt="alt" width={500} height={500} />
          <section className="w-full flex items-center">
            <div className="w-[435px] flex flex-col justify-center gap-3 h-full border-t border-black">
              <h2 className="text-[34px]">Act.</h2>
              <p className="text-[16px]">Process orchestration means you can take action within Foundry to address inefficiencies, writing back to external systems to fix problems at their source — while keeping all your systems in sync.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row flex-col gap-6">
          <Image src="/images/heroProd.jpg" alt="alt" width={500} height={500} />
          <section className="w-full flex lg:justify-end items-center">
            <div className="w-[435px] flex flex-col justify-center gap-3 h-full border-t border-black">
              <h2 className="text-[34px]">Automate.</h2>
              <p className="text-[16px]">Continuously optimize your processes with the ability to implement custom triggers for automatic action when steps are completed, milestones are met, or thresholds are breached.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row-reverse flex-col gap-6">
          <Image src="/images/heroProd.jpg" alt="alt" width={500} height={500} />
          <section className="w-full flex items-center">
            <div className="w-[435px] flex flex-col justify-center gap-3 h-full border-t border-black">
              <h2 className="text-[34px]">Communicate.</h2>
              <p className="text-[16px]">Rapidly integrate business process data into the Foundry Ontology with built-in connectors, unlocking connectivity and insights that span your entire organization.</p>
            </div>
          </section>
        </div>
      </div>


      <div className="mt-[126px] w-full bg-[#0000FF] pt-20 px-10 md:px-28 md:rounded-t-[100px] text-white h-auto flex lg:flex-row flex-col gap-5">
        <div className="flex flex-col mt-[-50px] gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-[32px]">Une question, une demande ?</h1>
            <h3 className="text-[16px]">Contactez-nous ou appelez directement notre service client au 01 89 19 86 47, disponible du lundi au vendredi de 9h à 17h.</h3>
            <p className="text-[12px]">Vos données à caractère personnel sont collectées et traitées par Bpifrance en qualité de responsable de traitement dans le cadre du présent formulaire. En savoir plus sur la protection des données personnelles..</p>
          </div>
          <button className="p-4 w-[225px] rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Nous contactez
            </span>
            <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
          </button>
        </div>

        <div>
          <Image src="/images/contactAc.svg" alt="alt" width={950} height={950} />
        </div>

      </div>




    </div>


  );
}
