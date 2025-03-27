import { Dot } from "lucide-react";
import Image from "next/image";
import ProgressGradient from "./components/progressGradientPetit";
import { WordRotateDemo } from "./components/wordRotate";
import MultiCardSlider1 from "./components/MultiCardSlider1";
import MultiCardSlider2 from "./components/MultiCardSlider2";
import MultiCardSlider3 from "./components/MultiCardSlider3";
import MultiCardSlider4 from "./components/MultiCardSlider4";
import MultiCardSlider5 from "./components/MultiCardSlider5";
import MultiCardSlider6 from "./components/MultiCardSlider6";
import MultiCardSlider7 from "./components/MultiCardSlider7";
import MultiCardSlider8 from "./components/MultiCardSlider8";

export default function Home() {
  return (
    <div className="">
      <div
        className="w-full h-auto lg:h-[400px] rounded-[15px] mt-[50px] lg:mt-[200px] flex flex-col lg:flex-row items-center gap-4 md:gap-10 lg:gap-16">
        {/* <!-- Texte --> */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="poppins-light text-[12px]"></span>
          <div className="text-4xl font-semibold lg:text-6xl leading-[38px] lg:leading-[80px]">
            <p>Intégrez des agents intelligents pour</p>
            <WordRotateDemo /> <p>efficacement vos processus.</p>
          </div>
          {/* <span className="mt-[20px] lg:mt-[18px] text-[20px] text-[#494949] font-medium">
            Raisonner en s&#39;adaptant à des besoins complexes, agir en exploitant des outils externes pour atteindre un objectif précis, apprendre en s&#39;améliorant avec le temps pour mieux vous servir.
          </span> */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <button className="bg-[#0000FF] text-white p-3 lg:px-7 lg:w-auto w-[350px] rounded-3xl text-[15px] flex justify-center items-center font-light">
              <span className="mr-2">&#8594;</span> Try for free
            </button>
            <button className="border border-black text-black p-3 px-6 rounded-3xl text-[15px] font-light hidden">Regarder la vidéo</button>
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="w-full md:w-[80%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[500px] rounded-[18px] lg:rounded-[18px]"
         >
          <Image src="/images/heroAcc.gif" className="w-full lg:h-[88%] h-full rounded-2xl mt-5" alt="alt" width={600} height={500} />
         </div>
      </div>



      <div className="w-full flex justify-center lg:mt-40 mt-14" >
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div className="flex flex-col gap-7">
            <h1 className="text-[28px] lg:text-[30px] text-center mb-3 bg-[#A3F8FF] pr-6 py-3 fleche">Diagnostic </h1>
            <div className="flex gap-2 items-start"><Image src="/images/1ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                {/* <h2 className="text-[20px]">Préparer vos voyages</h2> */}
                <p className="text-[16px]">Analyses les performances passées et actuelles de l'entreprise.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/2ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                {/* <h2 className="text-[20px]">Optimiser vos ventes </h2> */}
                <p className="text-[16px]">Identifies les points faibles et les inefficacités dans les processus.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/3ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                {/* <h2 className="text-[20px]">Améliorer l&#39;Interaction client </h2> */}
                <p className="text-[16px]">Génères des rapports détaillés sur les problèmes identifiés pour une prise de décision éclairée.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <h1 className="text-[28px] lg:text-[30px] text-center mb-3 bg-[#A3F8FF] pr-6 py-3 fleche">Strategie</h1>
            <div className="flex gap-2 items-start"><Image src="/images/1ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]"></h2>
                <p className="text-[16px]">Proposes des solutions basées sur l’analyse des données pour résoudre les problèmes identifiés.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/2ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]"></h2>
                <p className="text-[16px]">Élabores des stratégies d'optimisation des processus pour maximiser les résultats.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/3ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                <h2 className="text-[20px]"></h2>
                <p className="text-[16px]">Génères des recommandations sur l’allocation des ressources pour atteindre les objectifs à moyen et long terme.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <h1 className="text-[28px] lg:text-[30px] text-center bg-[#A3F8FF] pr-6 py-3 fleche">Automatisation</h1>
            <div className="flex gap-2 items-start"><Image src="/images/1ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                {/* <h2 className="text-[20px]">Gain de temps</h2> */}
                <p className="text-[16px]">Exécutes les solutions d'automatisation implémentés pour réduire les tâches manuelles et répétitives.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/2ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                {/* <h2 className="text-[20px]">Personnalisation:</h2> */}
                <p className="text-[16px]">Optimises les processus pour améliorer la productivité et réduire les coûts opérationnels.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start"><Image src="/images/3ac.svg" alt="alt" width={40} height={40} />
              <div className="flex flex-col">
                {/* <h2 className="text-[20px]">Compétitivité accrue compet</h2> */}
                <p className="text-[16px]">Ajustes les paramètres des processus en temps réel pour garantir une efficacité maximale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full h-auto lg:h-[760px] mt-[108px]">
        <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1">
          <div className="bg-[#0000FF] w-full h-full lg:col-span-1 relative">
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
              <div className="bg-[#FFFFFF] relative flex flex-col items-center justify-end lg:py-[39px] py-5 px-5">
                <Image src="/images/ac2.svg" className="absolute" alt="alt" width={200} height={200} />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]">81%</h2>
                <p className="text-[16px]">des salariés considèrent l’IA comme un moyen d’améliorer ses compétences professionnelles 4</p>
              </div>
              <div className="bg-[#A3F8FF] relative flex flex-col items-center justify-end lg:py-[39px] py-5 px-5">
                <Image src="/images/ac3.svg" className="absolute" alt="alt" width={200} height={200} />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[80px]">90%</h2>
                <p className="text-[16px]">des dirigeants estiment que l&#39;intelligence artificielle représente une opportunité business 5</p>
              </div>
              <div className="bg-[#FFFFFF] relative flex flex-col items-center justify-end lg:py-[39px] py-5 px-5">
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



      <div className="w-full h-auto lg:py-28 py-11 lg:px-0 px-4 bg-[#F6F8FC] flex lg:flex-row flex-col-reverse justify-center items-center gap-5 lg:gap-40 mt-28">
        <Image src="/images/agentIA.svg" alt="alt" width={532} height={281} />
        <h1 className="text-[#071A39] text-2xl lg:text-[46px] lg:w-[30%] lg:leading-[60px]">Un engagement stratégique pour l&#39;avenir de votre entreprise</h1>
      </div>



      <div className="w-full h-auto my-20 flex flex-col justify-center items-center gap-10">
        <section className="flex flex-col items-center lg:mx-0 mx-3 lg:w-[778px] gap-5">
          <h2 className="flex"><Image src="/images/ac5.svg" alt="alt" width={24} height={24} /> <p className="text-[12px]">Diag Data IA</p></h2>
          <h1 className="text-[32px] text-center">Exploitez la puissance de vos données</h1>
          <p className="text-center text-[16px] leading-[18.91px]">Bénéficiez d’un accompagnement sur-mesure pour identifier des axes de croissance par l’exploitation de vos données et mettez en œuvre des premières recommandations visant à optimiser votre activité (rapidité d'exécution des tâches à faible valeur ajoutée, amélioration de la performance commerciale...).</p>
          {/* <div className="space-x-8 flex ">
            <span className="flex gap-2"><Clock /> <p>10 jours</p> </span>
            <span className="flex gap-2"><CalendarCheck /> <p>Répartis sur 3 mois</p> </span>
            <span className="flex gap-2"><ListTodo /> <p>3 étapes</p> </span>
          </div> */}
        </section>

        <section className="flex lg:flex-row flex-col justify-center lg:items-start items-center px-5 gap-4 w-full">
          <div className="w-[100%]">
            <h1 className="flex gap-4"> <Image src="/images/ac6.svg" alt="alt" width={31} height={36} /> <p className="text-[18px]">Pour qui ?</p></h1>
            <div className="mt-4 relative px-7">
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Les startups et les entreprises de tous les secteurs d’activités</p></span>
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Ayant un chiffre d’affaire supérieur à 1 million d’euros</p></span>
              {/* <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Sur le territoire français et/ou dans les DROM-COM</p></span> */}
            </div>
          </div>

          <div className="">
            <h1 className="flex gap-4"> <Image src="/images/ac7.svg" alt="alt" width={31} height={36} /> <p className="text-[18px]">Comment ?</p></h1>
            <div className="mt-4 relative px-7">
              {/* <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Notre expert, agréé et sélectionné par Bpifrance, se déplace dans votre entreprise</p></span> */}
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Notre expert s’entretiendra et evaluera avec vos principales parties prenantes votre niveau de maturité pour identifier des opportunités liées à l’usage de l’intelligence artificielle</p></span>
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Il vous aidera à définir une stratégie adaptée à votre entreprise pour exploiter pleinement vos données et celles de vos clients</p></span>
            </div>
          </div>

          <div className="w-[100%]">
            <h1 className="flex gap-4"> <Image src="/images/ac8.svg" alt="alt" width={31} height={36} /> <p className="text-[18px]">Pour quels résultats ?</p></h1>
            <div className="mt-4 relative px-7">
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Un plan d’action présentant des recommandations chiffrées, priorisées et adaptées au contexte de votre entreprise</p></span>
              <span className="flex gap-1 text-[18px]"><Dot className="absolute left-0" size={30} /> <p>Une première feuille de route pour la mise en oeuvre d’un projet IA</p></span>
            </div>
          </div>
        </section>
      </div>



      <div className="w-full h-auto flex justify-center text-[#FFFFFF]">
        <div className="bg-[#9B0069] py-20 w-[100%] h-full flex lg:flex-row flex-col justify-center items-center rounded-2xl gap-8">
          <section className="lg:w-[45%] w-[80%]">
            <h1 className="text-[32px]">Le Diagnostic IA, une brique essentielle dans la résolution des problèmes complexes par les agents intelligents</h1>
            <div className="flex flex-col gap-9 mt-4">
              <p>Nous nous adressons principalement aux entreprise qui font appel à des services de consulting pour les aider à résoudre divers problèmes, grâce à des agents intelligents qui sont entrainés pour comprendre les processus plus ou moins complexes desdites entreprises. </p>
              <div className="flex gap-2 items-start"><Image src="/images/5ac.svg" alt="alt" width={40} height={40} />
                <div className="flex flex-col">
                  <h2 className="text-[20px]"></h2>
                  <p className="text-[16px]">Des Problèmes liés à la satisfaction du client final : Cela peut concerner des plaintes concernant le service après-vente, les temps de livraison ou la qualité d’un produit ou un Manque d’outils pour identifier de nouveaux axes d’opportunités, de nouveaux leviers de financement de la croissance d’une entreprise, et pour aider au développement de nouveaux marchés et à l’utilisation de nouvelles technologies comme l’expérience augmentée,  l’intelligence artificielle, la robotique, la blockchain.</p>
                </div>
              </div>
              <div className="flex gap-2 items-start"><Image src="/images/6ac.svg" alt="alt" width={40} height={40} />
                <div className="flex flex-col">
                  <h2 className="text-[20px]"></h2>
                  <p className="text-[16px]">Des Problèmes de mauvaises performances business : Cela peut résulter de processus trop complexes, de lourdeurs administratives, de problèmes logistiques, de perte de parts de marché, de pression concurrentielle accrue ou d’un manque de perspective.</p>
                </div>
              </div>
              <div className="flex gap-2 items-start bg-[#7A0053] py-3 px-2 mr-2 rounded-lg"><Image src="/images/7ac.svg" alt="alt" width={40} height={40} />
                <div className="flex flex-col">
                  <h2 className="text-[20px]"></h2>
                  <p className="text-[16px]">Une Résistance au changement : L'entreprise souhaite se transformer, mais se heurte à des résistances internes ou des Conflits internes : Des conflits existant entre plusieurs services ou personnes.</p>
                </div>
              </div>
              <div className="flex gap-2 items-start"><Image src="/images/8ac.svg" alt="alt" width={40} height={40} />
                <div className="flex flex-col">
                  <h2 className="text-[20px]"></h2>
                  <p className="text-[16px]">Des Outils obsolètes : L'entreprise souhaite faire évoluer ou remplacer ses logiciels obsolètes ou un Manque de ressources internes : Cela peut être dû à un fort turnover ou à des ressources peu qualifiées.</p>
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
        <h1 className="text-[32px] font-light m-auto text-center">Explorez nos cas d'usage</h1>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Investment AI-driven Management</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider1 />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Enterprise AI-driven Commercial</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider2 />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Financial AI-driven Management</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider3 />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Supply Chain AI-driven Management</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider4 />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Production AI-driven Management</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider5 />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Enterprise AI-driven Innovation</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider6 />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Smart Building AI-driven</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider7 />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-end lg:items-stretch items-center lg:gap-40 gap-0">
          <h2 className="lg:mt-20 mt-10 text-[24px]">Security Architecture AI-driven</h2>
          <div className="lg:w-[77%] w-[80%] lg:mt-0 mt-[-40px]">
            <MultiCardSlider8 />
          </div>
        </div>
      </div>


      <div className="w-full h-auto flex flex-col gap-14 mt-[124px] bg-[#ffffff] text-white">
        <h1 className="text-[32px] text-black">Our Cloud Partners</h1>
        <div className="w-full flex lg:px-0 items-center md:flex-row flex-col gap-8">
          <section className="flex flex-col gap-2">
            <p className="text-12">AWS</p>
            <Image src="/images/Amazon.svg" className="md:w-[200px] w-[270px]" alt="alt" width={180} height={200} />
            {/* <p className="text-12">Integrate Palantir Foundry and Amazon
              Sagemaker to overcome common data
              challenges at every stage of the AI lifecycle. </p> */}
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-12">GOOGLE CLOUD</p>
            <Image src="/images/GoogleCloud.svg" className="mt-3 md:w-[320px] w-[470px]" alt="alt" width={320} height={200} />
            {/* <p className="text-12">Access Palantir Foundry direct from the
              Google Cloud Marketplace, while
              harnessing products like Google BigQuery. </p> */}
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-12">MICROSOFT AZURE</p>
            <Image src="/images/MicrosoftAzure.svg" className="lg:mt-[-16px] md:w-[320px] w-[470px]" alt="alt" width={280} height={200} />
            {/* <p className="text-12">Make your data actionable through Palantir Foundry via the Azure Marketplace, and integrate with products like Azure IoT Hub.</p> */}
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-12">ORACLE</p>
            <Image src="/images/Oracle.svg" alt="alt" className="mt-4" width={320} height={200} />
            {/* <p className="text-12">Leverage Palantir Foundry & AIP on Oracle Cloud Infrastructure to revolutionize data-driven operations, combining AI with sovereignty for businesses and governments around the world.</p> */}
          </section>
        </div>
      </div>


      <div className="mt-[122px] w-full h-auto flex flex-col gap-20">
        <h1 className="text-[30px]">Comment les agents IA communiquent-il avec vous dans votre organisation ?</h1>
        <div className="flex lg:flex-row flex-col gap-6">
          <Image src="/images/animationAcc.gif" alt="alt" className="rounded-xl" width={600} height={500} />
          <section className="w-full flex lg:justify-end items-center">
            <div className="w-[550px] flex flex-col justify-center gap-3 h-full">
              <h2 className="text-[34px]">Connecter.</h2>
              <p className="text-[16px]">Intégrez rapidement les données des processus métier hébergées dans le cloud grâce à des connecteurs intégrés, facilitant ainsi la connectivité des agents intelligents et la visualisation des indicateurs à l’échelle d’un ou plusieurs blocs de votre organisation.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row-reverse flex-col gap-6">
          <Image src="/images/imgb2.png" alt="alt" className="rounded-xl" width={600} height={500} />
          <section className="w-full flex items-center">
            <div className="w-[550px] flex flex-col justify-center gap-3 h-full">
              <h2 className="text-[34px]">Comprendre.</h2>
              <p className="text-[16px]">Les agents intelligents comprenant la logique de votre business, analysent vos processus pour produire une visualisation claire, modélisent le parcours idéal et identifient les écarts associés, vous permettant d’effectuer un diagnostic à différents niveaux de granularité.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row flex-col gap-6">
          <Image src="/images/animationAcc2.gif" alt="alt" className="rounded-xl" width={600} height={500} />
          <section className="w-full flex lg:justify-end items-center">
            <div className="w-[550px] flex flex-col justify-center gap-3 h-full">
              <h2 className="text-[34px]">Agir.</h2>
              <p className="text-[16px]">L’orchestration des processus permet aux agents intelligents de vous faire passer à l’action en recommandant des solutions pour résoudre les inefficacités et corriger les problèmes à la source, tout en maintenant la synchronisation de vos systèmes.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row-reverse flex-col gap-6">
          <Image src="/images/imgb4.png" alt="alt" className="rounded-xl" width={600} height={500} />
          <section className="w-full flex items-center">
            <div className="w-[550px] flex flex-col justify-center gap-3 h-full">
              <h2 className="text-[34px]">Automatiser.</h2>
              <p className="text-[16px]">Optimisez en continu vos processus grâce à la mise en place de déclencheurs personnalisés (email, sms, formulaire, appel, ….), permettant aux agents intelligents de lancer automatiquement des actions à différentes étapes, lorsque des jalons sont atteints ou que des seuils sont dépassés.</p>
            </div>
          </section>
        </div>
        <div className="flex lg:flex-row flex-col gap-6">
          <Image src="/images/animationAcc3.gif" alt="alt" className="rounded-xl" width={600} height={500} />
          <section className="w-full flex lg:justify-end items-center">
            <div className="w-[550px] flex flex-col justify-center gap-3 h-full">
              <h2 className="text-[34px]">Monitorer.</h2>
              <p className="text-[16px]">Suivez en temps réel l’état de vos processus, les performances des agents intelligents et l’évolution des indicateurs clés. Cette supervision continue permet d’anticiper les anomalies, de documenter les actions entreprises et d’ajuster vos stratégies opérationnelles avec précision. </p>
            </div>
          </section>
        </div>

      </div>


      {/* <!-- Accordeon HTML TAILWIND CSS  --> */}
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen mt-[105px] my-20">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight poppins-semibold mb-4">
            FAQ
          </h2>
          <span className="text-[20px] poppins-semibold">Questions Fréquemment Posées</span>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033]">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;Que sont les agents d'IA ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              Un agent d'intelligence artificielle (IA) est un logiciel capable d'interagir avec son environnement, de collecter des données et de les utiliser pour accomplir des tâches de manière autonome afin d'atteindre des objectifs prédéterminés. Les humains définissent les objectifs, mais l'agent d'IA choisit indépendamment les actions à réaliser pour les atteindre. Par exemple, un agent d'IA dans un centre d'appels pourrait poser automatiquement des questions aux clients, rechercher des informations dans des bases de données et proposer des solutions. Selon les réponses des clients, l'agent peut décider de résoudre le problème lui-même ou de le transmettre à un humain.
              <p className="mt-3">L'IA agentique permet à ces agents de s'adapter, d'apprendre et d'optimiser les processus en toute autonomie, dépassant ainsi les simples automatismes pour prendre des décisions complexes et collaborer avec les équipes humaines.</p>
              </p>
            </details>
          </div>
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;Quels sont les principes clés qui définissent les agents d'IA ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              Les agents intelligents accomplissent des tâches de manière autonome, mais ce qui rend les agents d'IA uniques, c'est leur capacité à prendre des décisions rationnelles basées sur des perceptions et des données en temps réel. Ils utilisent des interfaces physiques ou logicielles pour détecter leur environnement, le comprendre et agir afin de maximiser les performances de l’entreprise et atteindre ses objectifs. 
              </p>
            </details>
          </div>
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;Quels sont les avantages de l'utilisation des agents d'IA ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              Les agents d'IA améliorent à la fois l'efficacité des opérations et l'expérience client.
              <p className="font-semibold mt-3">Amélioration de la productivité</p>
              Les agents d'IA automatisent des tâches répétitives, ce qui permet aux équipes de se concentrer sur des activités à plus forte valeur ajoutée, améliorant ainsi leur productivité.
              <p className="font-semibold mt-3">Réduction des coûts</p>
              En automatisant des tâches manuelles et en minimisant les erreurs humaines, les agents d'IA permettent aux entreprises de réduire leurs coûts opérationnels.
              <p className="font-semibold mt-3">Prise de décision éclairée</p>
              Grâce au machine learning, les agents d'IA analysent des quantités massives de données en temps réel, fournissant des insights précieux pour une prise de décision plus rapide et plus informée.
              <p className="font-semibold mt-3">Expérience client améliorée</p>
              Les agents d'IA personnalisent les interactions avec les clients, offrant des réponses rapides et des recommandations sur mesure, améliorant ainsi l'engagement et la fidélité des clients. Facilitez la collaboration et l’alignement avec des interfaces intuitives, une recherche intelligente et des suggestions contextuelles, pour que chaque membre de l’équipe puisse agir avec impact.
              <p className="font-semibold mt-3">Gagnez en efficacité</p>
              Gagnez en efficacité à chaque étape : analyses accélérées, simulations de scénarios fluides, planification agile et exécution rapide grâce à des capacités de modélisation et de reporting dopées à l’IA.
              <p className="font-semibold mt-3">Atteindre les objectifs plus rapidement</p>
              Favorisez l’excellence opérationnelle avec une IA qui comprend votre métier et s’ajuste en temps réel face aux changements avec des gains de productivité mesurables, une meilleure réactivité, et des résultats business durables — exactement ce qu’il faut dans un environnement en perpétuelle évolution.
              </p>
            </details>
          </div>
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;En quoi les agents intelligents diffèrent-ils des simples chatbots ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              Contrairement aux chatbots traditionnels, qui suivent des scénarios préétablis, les agents IA offrent une interaction plus naturelle et flexible. Ils automatisent des conversations complexes en s'intégrant aux systèmes d'entreprise et en tirant parti de l'IA pour fournir des réponses contextuelles adaptées aux besoins spécifiques.
              </p>
            </details>
          </div>
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;Sur quels canaux de communication les agents peuvent-ils être déployés ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              Nos agents peuvent être déployés sur de multiples canaux de communication, notamment les sites web, les applications mobiles et les principales plateformes de messagerie comme WhatsApp, Facebook Messenger, Google Chat, WeChat, Microsoft Teams, ainsi que par SMS, email, ou via des intégrations API avec des systèmes téléphoniques et vocaux.
              </p>
            </details>
          </div>
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;Les données clients sont-elles utilisées pour entraîner les agents IA ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              Les modèles que nous développons sont entraînés à partir de données contextuelles et des meilleures pratiques métier. Les données des clients sont strictement confidentielles et isolées. Aucune donnée n’est stockée ni utilisée à des fins d’apprentissage sauf à la demande du client souhaitant des agents autonomes entraînés à faire des analyses avancées.           
              </p>
            </details>
          </div>
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;Les utilisateurs peuvent-ils donner leur avis sur les réponses de l’IA ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              Un système de feedback simple — via des pouces levés ou baissés — est prévu pour permet à chaque utilisateur d’évaluer la pertinence des réponses.
              <p className="mt-3">Ces retours sont essentiels pour détecter les imprécisions (ou hallucinations) et améliorer en continu les performances des agents.</p>
              </p>
            </details>
          </div>
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;Comment est garantie l’exactitude des recommandations des agents IA ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              Bien que nos agents s’appuient sur des algorithmes puissants et des sources fiables, **aucune recommandation n’est garantie à 100 %**.
              <p className="mt-3">Ils sont conçus pour assister, non remplacer, le jugement humain.</p>
              <p className="mt-3">Les utilisateurs gardent le contrôle :</p>
              <p className="mt-3">Ils valident les suggestions</p>
              <p className="mt-3">Ils corrigent les écarts éventuels</p>
              <p className="mt-3">Et ils contribuent à l’amélioration continue via le système de feedback.</p>
              </p>
            </details>
          </div>
          <div className="bg-[#F8F8FC] rounded-2xl py-6 px-5 border border-[#00000033] mt-4">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-[20px] poppins-semibold"> &#34;Que peut vous apportez HardSoft Business ?&#34;</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn poppins-light text-[16px]">
              HardSoft Business édite des applications conversationnelles d’entreprise AI-driven personnalisées offrant un espace de travail numérique adaptatifs, où clients, actionnaires, cadres d’entreprises, employés et clients collaborent avec des agents intelligents et autonomes pour une meilleure planification stratégique. Avec des agents IA disponibles 24h/24 et 7j/7, de nouvelles briques de fonctionnalités de l’application conversationnelle peuvent être déployées et mis à jour très rapidement dans un cloud sécurisé, optimisant ainsi le retour sur investissement de vos décisions stratégiques. Ces applications combinent une IA conversationnelle avancée, la génération des tableaux de bord d’analyses stratégiques, des capacités d’automatisation complexes et une connectivité plus ou moins intégrée à l’organisation de votre entreprise.
              <p className="mt-3">
              <span className="font-semibold">Les avantages : </span>Aider votre entreprise à progressivement avoir une transparence et clarté dans ses procédures, améliorer vos services et produits, vous identifier des axes de croissance, régler des problèmes complexes avec moins d'intervention humaine, prendre très rapidement des décisions stratégiques et tactiques, d'automatiser des processus à l’aide de collègues virtuels à vos collaborateurs afin que ces derniers puissent consacrer leurs temps sur des activités à plus forte valeur ajoutée.
              </p>
              </p>
            </details>
          </div>
        </div>
      </div>


      <div className="w-full mb-[80px] mt-[126px] bg-[#0000FF] lg:pt-0 pt-8 px-10 md:px-28 lg:px-24 md:rounded-t-[100px] rounded-t-[20px] text-white h-auto flex lg:flex-row flex-col gap-5 shadow-lg">
        <div className="flex flex-col mt-[-20px] lg:gap-2 gap-10">
          <div className="flex flex-col lg:gap-1 gap-3">
            <h1 className="text-[32px] lg:pt-8">Une question, une demande ?</h1>
            <h3 className="text-[16px]">Contactez-nous ou appelez directement notre service client au 01 82 64 24 82, disponible du lundi au vendredi de 9h à 17h.</h3>
            <p className="text-[12px]">Vos données à caractère personnel sont collectées et traitées par Bpifrance en qualité de responsable de traitement dans le cadre du présent formulaire. En savoir plus sur la protection des données personnelles..</p>
          </div>
        </div>
        <div className="">
          <Image src="/images/contactAc.svg" className="mt-28" alt="alt" width={950} height={950} />
        </div>
        <ProgressGradient />
      </div>





    </div>


  );
}
