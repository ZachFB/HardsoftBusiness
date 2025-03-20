"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem', color: '#ffff' }} />}
    {...props}
    sx={{
      backgroundColor: '#0000FF', // Couleur de fond
      color: '#ffff', // Couleur du texte
      flexDirection: 'row-reverse', // Direction du contenu

    }}
  />
))(({ theme }) => ({
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: 'none',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className='mb-32'>
      <Accordion expanded={expanded === 'panel1'} className='rounded-t-[35px]' onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Administrative Business Partner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: '16px' }}>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                Notre équipe de Assistants Administratifs et Partenaires d'Affaires ne se contente pas de soutenir nos dirigeants : nous sommes la colonne vertébrale des personnes les plus occupées chez Hardsoft Business. Nous tissons des relations positives avec les personnes que nous soutenons et anticipons leurs besoins sans qu'ils aient à le demander. Notre passion pour aider les autres fait de nous une ressource inestimable chez Hardsoft Business !
              </p>
              <p>
                En tant qu'Assistant Administratif et Partenaire d'Affaires, vous serez chargé de gérer une variété de responsabilités professionnelles, notamment la gestion des agendas, des voyages et des dépenses. Vous êtes très organisé et vous épanouissez en permettant aux personnes que vous soutenez d'être aussi productives et impactantes que possible. Vous démontrerez vos excellentes compétences en communication et ferez preuve de tact et de diplomatie pour gérer les relations avec les membres seniors de l'équipe, internes et externes, chez Hardsoft Business. Dans ce rôle, vous ferez également preuve de bon jugement et de pensée critique en comprenant les priorités concurrentes et en agissant en conséquence.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Fournir un soutien administratif à un portefeuille d'individus ou d'équipes à travers l'entreprise.
              </p>
              <p>
                Gérer des agendas complexes dans un environnement rapide et prioriser les engagements pour optimiser le temps et la productivité.
              </p>
              <p>
                Organiser les voyages (nationaux et internationaux).
              </p>
              <p>
                Suivre et traiter les rapports de dépenses.
              </p>
              <p>
                Aider à planifier, soutenir et réaliser des événements en bureau et des rassemblements externes.
              </p>
              <p>
                Travailler de manière autonome et en collaboration avec les coéquipiers, les collègues et les contacts externes.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Capacité à s'adapter rapidement, à anticiper les besoins et à mettre en œuvre de manière autonome, avec une grande attention aux détails.
              </p>
              <p>
                Capacité à prioriser et à avoir un fort sens de l'urgence.
              </p>
              <p>
                Excellentes compétences en communication et perspicacité.
              </p>
              <p>
                Capacité à interagir avec un large éventail d'équipes, internes et externes, avec réflexion et tact.
              </p>
              <p>
                Haut niveau d'intégrité, de confidentialité et de discrétion dans les interactions internes et externes.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                Au moins quatre ans d'expérience en soutien administratif ou personnel, de préférence dans un environnement rapide.
              </p>
              <p>
                Excellente maîtrise des outils numériques, y compris une bonne connaissance des produits Microsoft (Outlook, Excel, Word, PowerPoint, etc.).
              </p>
              <p>
                Expérience dans la planification d'itinéraires de voyage complexes, nationaux et internationaux.
              </p>
              <p>
                Familiarité avec les logiciels de réservation de voyages et de rapports de dépenses.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>La fourchette de salaire estimée pour ce poste est de 60 000
                à
                120000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.
              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.
              </p>

              <p>
                Avantages pour les trajets domicile-travail.
              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.
              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).
              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.
              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.
              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.
              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.
              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.
              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Executive Team Assistant</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                Notre Équipe des Opérations Administratives ne se contente pas de soutenir nos dirigeants : nous sommes la colonne vertébrale des personnes travailleuses chez Hardsoft Business. Nous tissons des relations solides avec les personnes que nous soutenons et anticipons leurs besoins sans qu'ils aient à le demander. Notre passion pour aider les autres fait de nous une ressource inestimable.
              </p>
              <p>
                En tant qu'Assistant Exécutif d'Équipe, vous serez responsable de la gestion et de l'organisation des engagements d'un dirigeant. Dans ce rôle, vous serez en charge d'une grande variété de tâches, notamment le soutien administratif de haut niveau, l'assistance pour les courses et la gestion du foyer. Vous faites preuve d'initiative, opérez avec discrétion et ingéniosité, et vous épanouissez en permettant aux personnes que vous soutenez d'être aussi productives et impactantes que possible. Plus important encore, vous avez une véritable envie d'être utile et vous allez au-delà des attentes pour relever les défis.
              </p>
              <p>
                Ce poste nécessite d'être disponible en dehors des heures de travail et les week-ends, et la personne qui relèvera ce défi appréciera un horaire flexible.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Gérer l'agenda, en priorisant les demandes de réunion conflictuelles.
              </p>
              <p>
                Organiser les voyages d'affaires et autres itinéraires.
              </p>
              <p>
                Tenir des registres des transactions professionnelles et personnelles et soumettre les rapports de dépenses.
              </p>
              <p>
                Apporter de l'ordre et de l'organisation dans des environnements désorganisés.
              </p>

              <p>
                Gérer diverses affaires avec discrétion et diplomatie (prendre des réservations, faire des courses, planifier des rendez-vous, remplir des documents, entretenir des propriétés, communiquer avec des fournisseurs, etc.).
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Capacité à anticiper les besoins de manière autonome, à gérer plusieurs tâches, à prioriser et à pivoter avec une grande attention aux détails et un sens de l'urgence.
              </p>
              <p>
                Capacité à communiquer et à collaborer efficacement.
              </p>
              <p>
                Expérience démontrée à faire preuve de professionnalisme et de tact.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                Au moins un an d'expérience en soutien administratif ou personnel, de préférence dans un environnement rapide.
                de la suite Microsoft Office, en particulier la gestion des calendriers Outlook.
              </p>
              <p>
                Maîtrise de la suite Microsoft Office, en particulier la gestion des calendriers Outlook.
              </p>
              <p>
                Expérience dans la planification d'itinéraires de voyage complexes, nationaux et internationaux, y compris la réservation et les rapports de dépenses (une expérience préalable avec Concur est un plus !).
              </p>
              <p>
                Un permis de conduire valide.

              </p>
              <p>
                Capacité à travailler selon un horaire variable (les nuits et les week-ends seront nécessaires) et volonté de voyager jusqu'à 30 % du temps, tant au niveau national qu'international.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>La fourchette de salaire estimée pour ce poste est de 60 000
                à
                97000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.
              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Financial Audit Manager</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                En tant que Responsable de l'Audit Financier, vous relèverez du Responsable des Audits Financiers et collaborerez avec lui pour construire et faire évoluer notre programme d'audit interne SOX (Sarbanes-Oxley) et de conformité financière. Vous serez responsable de la gestion des activités liées à la conformité financière avec les lois et réglementations applicables, en particulier les exigences définies par la loi Sarbanes-Oxley (SOX) et les Principes Comptables Généralement Reconnus (GAAP).

              </p>
              <p>
                Ce rôle implique une collaboration étroite avec les équipes de Hardsoft Business, notamment les départements Finances, IT et Juridique. En partenariat avec l'équipe d'audit des systèmes et technologies, vous contribuerez à faire évoluer le programme de conformité SOX et à le mettre en œuvre dans un environnement en forte croissance. Vous serez responsable de la supervision continue d'un cadre de test des contrôles internes efficace et efficient, de l'évaluation des déficiences de contrôle, des interactions avec les auditeurs externes et de l'identification d'approches pratiques et appropriées pour la remédiation des contrôles.

              </p>
              <p>
                Notre candidat idéal aura un état d'esprit axé sur les solutions et une approche basée sur les risques pour identifier, évaluer et traiter les risques critiques de conformité SOX 404, les risques opérationnels de l'entreprise et les processus de gouvernance pertinents.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Gérer les activités et les jalons de conformité SOX, y compris la planification annuelle du programme (évaluation des risques et détermination du périmètre), les revues de processus, la documentation et l'analyse des procédures et des contrôles, la préparation et la révision des dossiers de travail appropriés, et le travail continu pour améliorer l'efficacité et l'efficience du programme SOX.

              </p>
              <p>
                Coordonner avec les prestataires externalisés, les auditeurs externes, les dirigeants internes et les propriétaires de processus pour assurer l'engagement et l'exécution en temps opportun des travaux d'audit et du programme de conformité SOX, y compris l'alignement sur la planification SOX, les revues de processus/les tests, les demandes d'audit et l'évaluation des déficiences.

              </p>
              <p>
                Aider les parties prenantes dans la mise en œuvre de systèmes et la reconception des contrôles pour améliorer l'environnement de contrôle et remédier aux déficiences de contrôle.

              </p>
              <p>
                Promouvoir l'éducation et la formation des propriétaires de contrôles afin qu'ils comprennent mieux le cadre des contrôles internes et leurs responsabilités en matière de contrôles internes sur les rapports financiers.

              </p>

              <p>
                Gérer les audits de conformité financière et opérationnelle, y compris, mais sans s'y limiter, l'évaluation des risques d'audit - définition du périmètre, planification, travail sur le terrain, exécution et reporting.

              </p>
              <p>
                Participer à des revues de processus et identifier des opportunités d'amélioration de l'efficacité opérationnelle et de l'efficacité globale des processus et des contrôles.

              </p>
              <p>
                Rechercher et se tenir informé des nouvelles publications techniques applicables au processus de contrôle interne (par exemple, les directives du PCAOB, de la SEC, de COSO, etc.).

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Expérience dans l'industrie technologique.
              </p>
              <p>
                Capacité à auditer des systèmes personnalisés en mettant l'accent sur les zones à haut risque telles que les revenus, les allocations de coûts et les commissions.
              </p>
              <p>
                Expérience en audit intégré et connaissance de SOX IT.
              </p>
              <p>
                Capacité à naviguer dans l'ambiguïté et à coordonner plusieurs projets simultanément dans un environnement rapide.
              </p>
              <p>
                Solides compétences en gestion de projet, y compris la capacité à communiquer de manière indépendante avec les principales parties prenantes.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                Minimum de 6 ans d'expérience en audit, entre l'industrie et/ou un cabinet d'audit.
              </p>
              <p>
                Certification professionnelle telle que CPA, CA ou CIA.
              </p>
              <p>
                Capacité à travailler au moins deux fois par semaine depuis le bureau de Palo Alto.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette de salaire estimée pour ce poste est de 90 000
                à
                151000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Procurement Contracts Specialist</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                En tant que Spécialiste des Contrats d'Approvisionnement, vous serez intégré à plusieurs unités commerciales en tant que point de contact principal au sein de l'équipe des achats. Vous serez responsable du cycle de vie complet des achats de ces équipes, de la réception des demandes à la négociation des contrats et à la gestion opérationnelle. Vous travaillerez à établir des relations durables avec ces unités commerciales assignées afin de pouvoir conseiller de manière crédible sur la stratégie d'approvisionnement et de veiller à ce que tous les achats respectent les processus et procédures de l'entreprise. Vous ferez partie d'une fonction en évolution rapide et à rythme soutenu, et vous devrez faire preuve de souplesse, de polyvalence, de créativité, d'adaptabilité et d'un esprit orienté vers le service client.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Gérer le cycle de vie complet des contrats pour tous les contrats liés aux fournisseurs et autres documents pour les unités commerciales assignées.

              </p>
              <p>
                S'intégrer et établir des relations avec les unités commerciales pour pouvoir conseiller efficacement sur la stratégie d'approvisionnement grâce à l'analyse des données.

              </p>
              <p>
                Suivre, mesurer, rapporter et évaluer la performance des fournisseurs dans le contexte des obligations contractuelles existantes.

              </p>
              <p>
                Effectuer des évaluations des risques des fournisseurs pour orienter une approche de négociation basée sur les risques.

              </p>

              <p>
                Servir de pont entre les équipes transversales telles que la Planification et Analyse Financière (FP&A), la Comptabilité, le Juridique, la Sécurité de l'Information et les différents départements commerciaux pour résoudre de manière créative tout obstacle et faire aboutir les transactions.

              </p>
              <p>
                Identifier et soutenir les améliorations des processus d'achat de bout en bout, y compris l'intégration des fournisseurs, la contractualisation et la gestion des bons de commande.

              </p>
              <p>
                Maintenir un programme pour assurer la conformité à la politique d'approvisionnement à l'échelle de l'entreprise.

              </p>
              <p>
                Agir de manière autonome dans la gestion de projet, en poussant proactivement les projets vers leur achèvement réussi.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Solides compétences en communication, en particulier dans le contexte des négociations contractuelles.
              </p>
              <p>
                Expérience dans la négociation indépendante de contrats avec les fournisseurs.
              </p>
              <p>
                Capacité avérée à analyser et synthétiser des informations critiques, grâce à une communication claire et efficace.
              </p>
              <p>
                Jugement commercial démontré et capacité à prospérer dans des environnements incertains.
              </p>
              <p>
                Capacité à identifier les inefficacités des processus commerciaux et à conduire des améliorations de processus.
              </p>
              <p>
                Capacité à équilibrer les besoins commerciaux, à évaluer les risques et à faire des choix décisifs et calculés pour des avantages stratégiques.
              </p>
              <p>
                Autonome avec un esprit entrepreneurial, de solides compétences en négociation et un sens des affaires.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                3 à 5 ans d'expérience en approvisionnement ou en sourcing stratégique, de préférence dans un environnement en croissance rapide et/ou en évolution.
              </p>
              <p>
                Expérience de travail avec des systèmes d'achat comme Coupa.
              </p>
              <p>
                Solides compétences en analyse de données, avec une maîtrise d'Excel.
              </p>
              <p>
                Capacité à voyager au moins 25 % du temps.
              </p>
              <p>
                Volonté et capacité à être au bureau jusqu'à 3 à 5 jours par semaine.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette de salaire estimée pour ce poste est de 65 000
                à
                116000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Senior Accounts Payable Specialist</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                L'Équipe Financière soutient et habilite les employés de Hardsoft Business à travers des opérations quotidiennes et une résolution créative de problèmes. En tant que membre de l'équipe des comptes fournisseurs, vous fournirez l'apport clé dont nous avons besoin pour rester en avance sur nos paiements aux fournisseurs. En tant que Spécialiste Senior des Comptes Fournisseurs, vous serez responsable de l'intégration de nouveaux fournisseurs et du traitement des factures. De plus, vous jouerez un rôle crucial en collaborant avec divers partenaires commerciaux pour faire évoluer la fonction des comptes fournisseurs afin de soutenir la croissance de l'entreprise. Dans ce rôle, l'organisation et l'attention aux détails sont primordiales : l'entreprise compte sur vous pour construire l'infrastructure dont elle a besoin pour réussir, et l'équipe financière dépend de vous pour la fiabilité de nos rapprochements de comptes fournisseurs.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Gérer le processus des comptes fournisseurs pour nos entités aux États-Unis et à l'international.

              </p>
              <p>
                Diriger notre programme d'intégration des fournisseurs. Veiller à ce que toute la documentation requise soit obtenue pour une intégration précise et rapide des fournisseurs.

              </p>
              <p>
                Recevoir, traiter et assurer le paiement rapide des factures de nos fournisseurs.

              </p>
              <p>
                Travailler avec les fournisseurs pour déterminer les canaux de facturation les plus efficaces.

              </p>

              <p>
                Communiquer avec les partenaires internes à travers l'entreprise et les parties externes avec un haut niveau de service client.

              </p>
              <p>
                Fournir diverses analyses opérationnelles et analytiques ad hoc aux partenaires commerciaux et à la direction.

              </p>
              <p>
                Gérer toutes les déclarations fiscales de fin d'année requises aux États-Unis et à l'international.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Excellente attention aux détails et compétences organisationnelles.
              </p>
              <p>
                Excellentes compétences interpersonnelles et capacité à collaborer efficacement avec des personnes de divers horizons.
              </p>
              <p>
                Capacité à prioriser (et à reprioriser) efficacement les tâches avec différents niveaux d'urgence relative.
              </p>
              <p>
                Très compétent en Microsoft Excel et capacité à apprendre rapidement de nouveaux systèmes et programmes.
              </p>
              <p>
                La connaissance de Netsuite et Concur est un plus.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                Minimum de 3 ans d'expérience pertinente en comptes fournisseurs, de préférence dans l'industrie technologique, avec la capacité à opérer dans un environnement rapide et axé sur les résultats.
              </p>
              <p>
                Connaissance pratique de Coupa est requise.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette de salaire estimée pour ce poste est de 65 000
                à
                85000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Legal Operations Specialist</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                L'équipe juridique interne de Hardsoft Business travaille de manière proactive pour résoudre les problèmes juridiques et permettre la croissance de notre entreprise, afin que Hardsoft Business puisse continuer à avoir un impact positif dans le monde. Les Opérations Juridiques sont la colonne vertébrale de l'équipe juridique et sont essentielles pour remplir la mission de Hardsoft Business. Dans cette optique, nous nous efforçons de cultiver la philosophie de Hardsoft Business, de développer des relations à travers l'entreprise et d'opérer avec un état d'esprit de service. Nous développons une compréhension approfondie de la stratégie commerciale et avons une passion pour aider les autres, ce qui fait de nous une ressource inestimable. Nous sommes une équipe qui valorise à la fois la créativité et le travail d'équipe - que nous opérions seuls ou en collaboration, nous nous efforçons d'obtenir de grands résultats.
              </p>
              <p>
                En tant que Spécialiste des Opérations Juridiques, vous serez une force motrice en matière d'innovation, d'évolutivité, de technologie et d'automatisation. Vous serez responsable de la construction, de la rationalisation et de l'exécution des processus stratégiques et des fonctions opérationnelles de l'équipe juridique. Vous travaillerez avec d'autres membres de l'équipe des Opérations Juridiques pour aider à mettre en œuvre des systèmes clés, optimiser les processus, gérer les projets et créer des objectifs et des indicateurs de performance. Vous collaborerez également étroitement avec les avocats et les parajuristes de Hardsoft Business pour comprendre les besoins et développer et exécuter des solutions qui évoluent avec l'entreprise. Ce poste nécessite une combinaison de compétences en gestion de projet, en optimisation des processus et en exécution.
              </p>
              <p>
                Notre candidat idéal fera preuve d'initiative, opérera avec discrétion et ingéniosité, et s'épanouira en exécutant et en soutenant les processus, systèmes et plateformes de l'équipe juridique. Plus important encore, il aura une véritable envie d'être utile et ira au-delà des attentes pour résoudre les défis.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Exécuter les workflows et procédures opérationnelles juridiques, en cherchant des moyens de les améliorer continuellement et de renforcer l'efficacité.

              </p>
              <p>
                Mettre en œuvre des processus juridiques, des initiatives stratégiques et des projets à l'échelle de l'équipe, en veillant à l'alignement avec les objectifs organisationnels et les exigences réglementaires, y compris la création de rapports et de tableaux de bord.

              </p>
              <p>
                Faire évoluer les opérations, les systèmes et l'innovation continue de l'équipe juridique en partenariat avec les responsables et les membres existants des Opérations Juridiques.

              </p>
              <p>
                Concevoir et mettre en œuvre des processus pour réduire les frictions et permettre aux membres de l'équipe, aux dirigeants et aux homologues commerciaux de consacrer leur temps à ce qu'ils font de mieux.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Passion pour les opérations juridiques et l'apprentissage des technologies d'entreprise ; enthousiasme face aux défis de servir une équipe en croissance dans un environnement dynamique et rapide.
              </p>
              <p>
                Expérience démontrée dans l'identification et la mise en œuvre d'opportunités pour améliorer les processus et les outils afin d'accroître l'efficacité et d'obtenir des résultats.
              </p>
              <p>
                Preuve de compétences proactives, efficaces et ingénieuses en gestion de projet ou de programme.
              </p>
              <p>
                Expérience dans la construction de relations transversales avec des ressources clés et des partenaires commerciaux au sein d'une équipe juridique, en conseillant, en influençant les décisions, en gérant le changement et en équilibrant les priorités de plusieurs fonctions commerciales.
              </p>
              <p>
                Jugement exceptionnel et sang-froid dans les situations de haute pression.
              </p>
              <p>
                Une approche créative de la gestion de projet centrée sur des cadres légers permettant une itération rapide et des méthodes à faible surcharge.

              </p>


              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                3 ans ou plus d'expérience en gestion de projet/programme, de préférence dans un environnement d'équipe juridique dynamique ou à rythme rapide.
              </p>
              <p>
                Expérience avec des outils techniques et des logiciels de gestion de projet d'analyse de données.

              </p>
              <p>
                Attention méticuleuse aux détails, y compris la tenue de registres précis et le suivi diligent des indicateurs clés de projet.

              </p>
              <p>
                Mise en œuvre et mise à l'échelle de solutions technologiques juridiques (par exemple, gestion des contrats et des documents, automatisation des workflows, gestion des dépenses, processus de signature électronique, entre autres).

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette de salaire estimée pour ce poste est de 90 000
                à
                110000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Risk and Compliance Specialist</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                L'équipe juridique dynamique de Hardsoft Business travaille de manière proactive pour résoudre les problèmes juridiques et réglementaires, tout en permettant à Hardsoft Business de continuer à avoir un impact positif dans le monde. En tant que Spécialiste en Risque et Conformité - Commerce Mondial, vous contribuerez à développer et à faire évoluer un programme de conformité commerciale de classe mondiale, ainsi qu'à effectuer des vérifications de conformité à haut volume à des fins de diligence raisonnable. Notre équipe collabore avec la communauté mondiale de Hardsoft Business pour comprendre et catégoriser les solutions techniques que nous construisons et déployons à travers le monde. Que nous opérions seuls ou en collaboration, nous nous efforçons d'obtenir de grands résultats sur des projets complexes. </p>
              <p>
                En tant que Spécialiste en Risque et Conformité - Commerce Mondial, vous fournirez un soutien essentiel et collaborerez efficacement avec des équipes transversales pour gérer les classifications de nos produits, y compris les classifications des nouveaux produits. Vous jouerez un rôle clé dans la mise en œuvre et la maintenance de nos politiques et formations en matière de conformité commerciale, ainsi que dans la gestion de notre conformité aux exigences applicables en matière de licences d'exportation. Vous jouerez également un rôle important dans la réalisation de diligences raisonnables sur les clients, l'évaluation des fournisseurs et l'examen des partenaires pour identifier les risques potentiels liés aux relations commerciales avec des tiers.
              </p>
              <p>
                En tant que membre de l'équipe juridique de Hardsoft Business, vous devrez répondre à des priorités concurrentes dans un environnement rapide et équilibrer ces demandes avec cohérence. Vous utiliserez également vos excellentes compétences interpersonnelles, y compris la capacité à écouter, apprendre et influencer un réseau mondial de personnel de direction et de parties prenantes.

              </p>
              <p>
                Ce poste est idéal pour une personne désireuse de travailler de manière indépendante pour répondre aux besoins critiques de l'entreprise dans un environnement rapide et à haut volume, tout en collaborant pour participer à des décisions stratégiques qui touchent l'ensemble de notre entreprise et de nos parties prenantes. Par-dessus tout, ce poste est parfait pour une personne enthousiaste à l'idée de contribuer à une entreprise dynamique et en pleine croissance qui résout certains des problèmes les plus difficiles au monde.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Gérer les classifications de produits, en coordonnant avec les points de contact pertinents pour s'assurer que les classifications existantes restent à jour et que les nouveaux produits sont classifiés avant leur finalisation.

              </p>
              <p>
                Collaborer étroitement avec des groupes transversaux dès les premières étapes des nouveaux produits ou projets pour s'assurer qu'ils sont structurés en tenant compte des réglementations commerciales et des limitations futures sur les ventes internationales ou les besoins en licences d'exportation.

              </p>
              <p>
                S'assurer que les données techniques provenant de tiers sont marquées et traitées avec les classifications de manipulation appropriées.

              </p>
              <p>
                Évaluer la nécessité d'un TAA (Technical Assistance Agreement) ou d'autres licences d'exportation du gouvernement américain pour les transactions impliquant des clients gouvernementaux internationaux et gérer la conformité aux exigences des licences d'exportation.

              </p>
              <p>
                Rédiger, maintenir et mettre à jour les politiques, procédures et supports de formation internes en matière de conformité commerciale (ITAR/EAR/OFAC).

              </p>
              <p>
                Aider à la soumission des enregistrements et rapports de contrôles commerciaux et douaniers auprès du gouvernement américain.

              </p>
              <p>
                Soutenir la rédaction ou la négociation de clauses contractuelles relatives à la conformité commerciale.

              </p>
              <p>
                Effectuer des vérifications de conformité à haut volume, ainsi que des recherches approfondies de diligence raisonnable, sur un large éventail de tiers, y compris des clients, des individus et des fournisseurs.

              </p>
              <p>
                Rédiger des évaluations des risques concises et de haute qualité, coordonner avec d'autres parties prenantes et présenter régulièrement aux décideurs internes de haut niveau.

              </p>
              <p>
                Soutenir une variété de projets de gestion des risques de conformité juridique pour répondre aux besoins émergents de l'entreprise.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Une expérience préalable dans un rôle de conformité commerciale pour un entrepreneur de défense américain et/ou une entreprise SaaS travaillant avec le gouvernement américain est fortement préférée.
              </p>
              <p>
                Solides compétences en gestion de programme/projet, y compris des compétences organisationnelles et la capacité à gérer des projets avec des délais concurrents.
              </p>
              <p>
                Expérience préalable dans l'engagement avec des équipes produits d'ingénierie pour classer les produits de défense et à double usage (de préférence des produits SaaS ou autres produits cloud), les logiciels et les technologies selon les exigences des contrôles à l'importation et à l'exportation.
              </p>
              <p>
                Expérience préalable dans la réalisation de KYC (Know Your Customer) ou de diligences raisonnables sur des tiers, compétences avérées en recherche et analyse, souci du détail et appréciation du travail avec un degré élevé d'indépendance dans un environnement rapide.
              </p>
              <p>
                Compréhension des chevauchements et distinctions entre les contrôles commerciaux américains et les contrôles CUI (Controlled Unclassified Information) du département de la Défense américain, et capacité à aider à la conformité des conditions d'utilisation pour les CUI fournis par le gouvernement américain.
              </p>
              <p>
                Expérience démontrée dans le développement de processus innovants et la création de solutions simples pour atteindre les objectifs du programme de conformité de l'entreprise.

              </p>
              <p>
                Maîtrise de DECCS, SNAP-R, ACE et des logiciels de vérification de conformité tiers.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                3 ans ou plus d'expérience dans une équipe de gestion des risques ou de conformité.
              </p>
              <p>
                Ce poste nécessite l'éligibilité pour obtenir une autorisation en vertu des réglementations ITAR (International Traffic in Arms Regulations) et/ou EAR (Export Administration Regulations). Les personnes non américaines, telles que définies par l'ITAR et l'EAR, pourraient ne pas être éligibles pour obtenir une autorisation.

              </p>
              <p>
                Éligibilité pour accéder à tous les types de documents réglementés par l'ITAR, l'EAR, l'OFAC (Office of Foreign Assets Control) et les informations CUI (Controlled Unclassified Information).

              </p>
              <p>
                Connaissance experte et expérience dans la rédaction et la demande d'autorisations d'exportation et d'importation.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette de salaire estimée pour ce poste est de 100 000
                à
                150000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Global Mobility Specialist</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                L'équipe de Mobilité Mondiale de Hardsoft Business soutient le déplacement sûr et fluide des employés à travers le monde. Nous valorisons la création de liens profonds avec l'entreprise pour permettre aux employés d'aller là où ils sont le plus nécessaires, afin de se concentrer sur les problèmes qu'ils sont les mieux équipés pour résoudre.
              </p>
              <p>
                En tant que Spécialiste en Mobilité Mondiale, vous ferez partie d'une équipe de personnes tout aussi passionnées par le soutien à nos employés que par la mission de Hardsoft Business. Vous serez responsable de superviser tous les aspects de la mobilité des employés en étroite coordination avec nos partenaires internes et nos conseillers externes en immigration. Vous élaborerez et maintiendrez des workflows et des cadres de mobilité qui soutiennent nos pratiques d'immigration, en itérant et en créant des ressources alignées sur la mission de l'entreprise.
              </p>
              <p>
                Ce poste est basé dans notre bureau de DC et vous pourriez être amené à voyager occasionnellement vers les bureaux de Hardsoft Business aux États-Unis et en EMEA.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Gérer les processus de mobilité mondiale de bout en bout, y compris les affectations internationales, les transferts et les relocalisations permanentes.

              </p>
              <p>
                Gérer les relations et collaborer avec nos partenaires externes et nos équipes internes pour offrir une expérience client fluide.

              </p>
              <p>
                Établir et maintenir notre stratégie de mobilité à long terme pour garantir que Hardsoft Business est bien positionné pour réussir à l'échelle mondiale.

              </p>
              <p>
                Développer et maintenir des politiques et procédures de mobilité mondiale alignées sur la mission et la culture de notre entreprise.

              </p>
              <p>
                Utiliser des indicateurs de mobilité pour générer des insights clés et prendre des décisions concernant le mouvement des talents.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Solides compétences organisationnelles et capacité avérée à suivre et à livrer des résultats malgré des priorités concurrentes.
              </p>
              <p>
                Capacité à résoudre les problèmes et à s'ajuster avec les parties prenantes tout en naviguant dans des situations ambiguës.
              </p>
              <p>
                Excellentes compétences interpersonnelles et de communication, avec une passion pour fournir un service client exceptionnel et une capacité à interagir avec tous types de clients, fournisseurs externes et autorités.
              </p>
              <p>
                Collaborateur et joueur d'équipe solide qui prend possession des tâches et livre des résultats de haute qualité.
              </p>
              <p>
                Une expérience dans le secteur technologique est un plus.
              </p>
              <p>
                Capacité à voyager occasionnellement.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                4 ans ou plus d'expérience en relocalisation/immigration, avec une expérience démontrée dans une ou plusieurs juridictions (États-Unis, EMEA, APAC, etc.) ; 2 ans ou plus d'expérience en mobilité d'entreprise interne (à la fois internationale et nationale aux États-Unis) est fortement préférée.
              </p>
              <p>
                Compréhension générale des implications fiscales et de paie des déménagements inter-États/pays.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette de salaire estimée pour ce poste est de 82 000
                à
                118000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Learning Program Manager</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                Nous recherchons un Gestionnaire de Programmes d'Apprentissage pour rejoindre un groupe transversal d'opérateurs et de spécialistes responsables de la mise en œuvre d'initiatives RH qui soutiennent les employés talentueux, le travail et les valeurs de Hardsoft Business. Notre mandat est large, et vous travaillerez sur des projets qui couvrent les responsabilités opérationnelles de l'expérience employé, ainsi que les événements internes, l'intégration des nouveaux employés et le soutien logistique.
              </p>
              <p>
                En collaboration avec d'autres gestionnaires de programmes d'apprentissage, vous serez responsable de soutenir des projets et des programmes dans les domaines de l'expérience employé, des événements et de l'apprentissage. En tant que colonne vertébrale opérationnelle des initiatives clés liées à l'expérience employé, vous apprendrez, exécuterez et améliorerez les processus pour rationaliser les workflows et étendre la portée de votre équipe. Vous suivrez et stabiliserez les projets, éliminerez les obstacles et anticiperez les besoins des parties prenantes commerciales afin de permettre la mise en œuvre de programmes à l'échelle de l'entreprise. Vous êtes une personne qui aime résoudre des problèmes, créer de la structure et adopter la meilleure idée - même lorsqu'elle ne vient pas de vous. Le rôle de Gestionnaire de Programmes d'Apprentissage et son organisation environnante ne sont pas rigidement définis, il est donc important que vous puissiez naviguer dans un environnement non structuré avec aisance et acquérir de nouvelles compétences en cours de route.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Gérer les workflows opérationnels au sein de l'équipe Expérience Employé, couvrant l'intégration des nouveaux employés, les programmes d'apprentissage et les événements internes.

              </p>
              <p>
                Coordonner la logistique de l'intégration des nouveaux employés, y compris la gestion des calendriers, la communication avec les nouveaux employés et la facilitation légère, dans tous nos bureaux mondiaux.

              </p>
              <p>
                Organiser les voyages (nationaux et internationaux).

              </p>
              <p>
                Aider à planifier, soutenir et exécuter des événements internes et des rassemblements externes.

              </p>
              <p>
                Travailler directement avec les parties prenantes externes, ainsi qu'avec les équipes internes (par exemple, Finances, Recrutement, Juridique, Sécurité de l'Information, etc.) pour coordonner le cycle de vie complet de la logistique des événements, des contrats et des paiements.

              </p>
              <p>
                Rechercher et intégrer de nouvelles ressources pour étendre la portée de l'équipe.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Solides compétences organisationnelles et de résolution de problèmes. Vous devez être capable d'anticiper les défis et les complications, de gérer plusieurs tâches dans un environnement en évolution rapide et d'utiliser un bon jugement pour faire des compromis appropriés lors de l'exécution de priorités concurrentes.
              </p>
              <p>
                Une approche créative de la gestion de projet centrée sur des cadres légers permettant une itération rapide et des méthodes à faible surcharge pour tenir nos équipes partenaires informées.
              </p>
              <p>
                Excellentes compétences en communication et en relations interpersonnelles, avec la capacité de collaborer efficacement avec des équipes et des parties prenantes diversifiées et de construire des relations de travail positives.
              </p>
              <p>
                Une grande attention aux détails, y compris la tenue de registres précis et le suivi diligent des indicateurs clés de projet et des rapports.
              </p>
              <p>
                Expérience avec des logiciels de gestion de projet et d'événements ; la maîtrise de Jira et Splash est un plus.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                2 ans ou plus d'expérience dans un rôle opérationnel, de préférence dans un environnement rapide ou dynamique.
              </p>
              <p>
                Capacité et volonté d'être sur site (Londres, Royaume-Uni) 4 à 5 jours par semaine.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis la ville ou le pays dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous nous engageons à rendre le processus de candidature et d'embauche accessible à tous et fournirons un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>People Partner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                L'équipe des Partenaires RH est dédiée à la réalisation des objectifs commerciaux en cultivant une main-d'œuvre hautement efficace et engagée, en partenariat avec les principaux leaders de l'entreprise. Nous travaillons en étroite collaboration avec toutes les équipes et à tous les niveaux pour améliorer le développement des talents, gérer la performance et faciliter les retours d'information à travers l'organisation. Nous aidons à responsabiliser les employés de Hardsoft Business pour qu'ils soient aussi efficaces et impactants que possible.
              </p>
              <p>
                Les Partenaires RH travaillent à la fois au niveau stratégique et tactique. Un jour donné, nous concevons de nouveaux programmes et cadres évolutifs, conseillons les organisations sur la manière de développer une culture de feedback, et itérons pour améliorer notre efficacité en tant qu'équipe. Les Partenaires RH équilibrent régulièrement les initiatives de maximisation des opportunités (croissance et développement des employés) et de mitigation des risques (performance, relations employés, etc.). Nous sommes impliqués dans tous les moments clés du cycle de vie d'un employé, ce qui se traduit par une large gamme de responsabilités et d'opportunités.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Développer des relations profondes et établir la confiance avec les principaux responsables commerciaux, devenant un partenaire stratégique sur les stratégies et engagements liés aux ressources humaines.

              </p>
              <p>
                Concevoir, exécuter et évaluer régulièrement les processus et programmes RH – axés sur des sujets tels que le feedback, la croissance, la formation, le développement du leadership – qui favorisent une culture de haute performance.

              </p>
              <p>
                Intervenir sur les questions de conception organisationnelle, de processus et de workflows pour aider les équipes à fonctionner plus efficacement.

              </p>
              <p>
                Utiliser les indicateurs RH pour générer des insights clés et prendre des décisions concernant la croissance et la rétention des employés.

              </p>
              <p>
                Coacher les employés de Hardsoft Business (à la fois les contributeurs individuels et les leaders), en agissant comme un défenseur et une ressource pour résoudre les problèmes clés des employés, y compris la performance, les conflits interpersonnels, les griefs et les enquêtes complexes.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Proactif, capable de fonctionner de manière autonome et de prospérer dans l'ambiguïté.
              </p>
              <p>
                Excellentes compétences interpersonnelles et de communication, ainsi qu'un haut niveau d'intelligence émotionnelle.
              </p>
              <p>
                Excelle dans la résolution de problèmes ouverts et leur exécution jusqu'à leur achèvement.
              </p>
              <p>
                Orienté vers les données et soucieux du détail.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                3 ans ou plus d'expérience pertinente dans l'industrie.
              </p>
              <p>
                Capacité avérée à prospérer dans un environnement rapide, à haute pression et axé sur les résultats en démontrant une exécution rapide et réfléchie.

              </p>
              <p>
                Excelle dans la résolution de problèmes ouverts et leur exécution jusqu'à leur achèvement.

              </p>
              <p>
                Capacité à être présent au bureau 3 à 4 jours par semaine.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette de salaire estimée pour ce poste est de 90 000
                à
                151000 par an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations potentielles futures. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs de chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur de tout avantage offert et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business. Nous travaillons à améliorer continuellement nos offres et écoutons notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des privilèges dont peuvent profiter les employés de Hardsoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de Hardsoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en présentiel favorise des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent un travail "à distance" de manière exceptionnelle. Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. Hardsoft Business valorise l'excellence, quel que soit le parcours. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les vétérans et les personnes handicapées. Hardsoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira un aménagement raisonnable pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Talent Coordinator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                En tant que Coordinateur des Talents chez HardSoft Business, vous travaillerez en étroite collaboration avec nos responsables de recrutement et nos recruteurs pour garantir une expérience d'entretien positive à tous les candidats. Nous recherchons une personne positive, débrouillarde et qui excelle sous pression. Ce poste reposera fortement sur votre capacité exceptionnelle à gérer plusieurs priorités concurrentes dans un environnement en évolution rapide. Vous ferez partie d'une équipe responsable de l'élaboration, de la mise en œuvre et de l'exécution d'une stratégie de recrutement globale, en mettant l'accent sur l'efficacité et la génération de valeur globale (c'est-à-dire recruter des personnes exceptionnelles !).
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Planifier plusieurs entretiens avec les candidats avec rapidité et attention ; coordonner tous les détails des entretiens.

              </p>
              <p>
                Gérer la communication écrite et verbale professionnelle avec les candidats, les recruteurs, les intervieweurs et les responsables de recrutement tout au long du processus d'entretien.

              </p>
              <p>
                Accueillir les candidats lors de leurs entretiens sur site au bureau.

              </p>
              <p>
                Gérer les dossiers des candidats via notre système de suivi des candidats (ATS) avec une excellente attention aux détails.

              </p>
              <p>
                Créer et exécuter des rapports de suivi hebdomadaires si nécessaire en utilisant l'ATS.

              </p>
              <p>
                Prendre en charge une série de projets spéciaux qui font avancer la mission de notre équipe de recrutement.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Compétences organisationnelles impeccables et souci du détail.
              </p>
              <p>
                Capacité supérieure à gérer son temps et à effectuer plusieurs tâches simultanément.
              </p>
              <p>
                Excellent esprit d'équipe, professionnalisme et discrétion.
              </p>
              <p>
                Solides compétences en communication verbale et écrite.
              </p>
              <p>
                Forte capacité d'analyse et approche proactive de la résolution de problèmes.
              </p>
              <p>
                Volonté de prendre en charge des responsabilités variées et éthique de travail solide.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                Au moins un an d'expérience professionnelle dans un rôle administratif, opérationnel, de soutien ou similaire.
              </p>
              <p>
                Capacité à être présent au bureau 2 à 3 jours par semaine.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette salariale estimée pour ce poste est de 32 à 35 $/heure. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations futures potentielles. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs propres à chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur des avantages offerts et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de HardSoft Business. Nous travaillons à améliorer continuellement nos offres et à écouter notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des avantages dont peuvent profiter les employés de HardSoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de HardSoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en personne permet des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent exceptionnellement un travail "à distance". Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. HardSoft Business valorise l'excellence, quelles que soient les origines. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les anciens combattants et les personnes handicapées. HardSoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira des aménagements raisonnables pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} className='mt-3 rounded-t-[35px]' onChange={handleChange('panel12')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
          <Typography component="span" className='py-2' sx={{ fontSize: '2.3rem', fontWeight: 'bold', fontFamily: 'var(--font-polySans)', }}>Talent Strategist</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className='text-xl text-[#575757f9] font-black'>Hardsoft Business </span>
            est une entreprise technologique innovante spécialisée dans le développement de logiciels d’analyse de données avancés. Nous avons développé une plateforme sécurisée de robots-conseils conversationnels, vous offrant ainsi un contrôle total sur votre entreprise !

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre objectif :</h1>

            Aider les entreprise à résoudre des problématiques cruciales liées à divers aspects de leur développement : croissance, performance, fusions et acquisitions, lancement de nouveaux produits, exportation,, transition énergétique et bien plus. Notre solution vous permet d’obtenir des réponses en temps réel, adaptées à vos besoins.

            <h1 className='mt-2 text-xl text-[#575757f9] font-black'>Notre plateforme logicielle d'agents IA spécialisés dans l'analyse des données et le conseil :</h1>

            Conçus pour comprendre les enjeux stratégiques des entreprises, nos robots réfléchissent à leurs problèmes, élaborent des plans d’action, les orientent et fournissent des recommandations, automatisent et exécutent leurs instructions, puis rendent compte des résultats en temps réel .

            Grâce à notre technologie, les entreprises s'assurent de gagner en efficacité, réactivité et agilité.

            <section className='flex flex-col gap-3'>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Le Rôle</h1>
              <p>
                Les Stratèges en Talent travaillent directement pour l'une de nos équipes commerciales ou de développement de produits. Nous travaillons pour atteindre la même mission en utilisant un ensemble d'outils différent et complémentaire. Nous internalisons la gravité, l'urgence et la signification du travail de notre entreprise, ce qui nous inspire à trouver les individus exceptionnels dont nous savons que nos équipes ont besoin pour réussir.
              </p>
              <p>
                Nous innovons constamment pour atteindre ces objectifs. Nous concevons des opérations de recrutement créatives et efficaces en réponse aux défis auxquels nos équipes sont confrontées. Nous acceptons de remettre en question ces opérations et de les faire évoluer lorsque le terrain change. Nous surveillons constamment ce qui fonctionne et ce qui échoue, en nous appuyant sur les données et notre intuition aiguisée.
              </p>
              <p>
                Votre capacité à identifier des candidats exceptionnels et à évaluer leur adéquation avec l'équipe est essentielle dans ce rôle. Cela nécessite de s'intégrer, et pas seulement de s'engager, avec une variété d'interlocuteurs au sein de l'entreprise, de la direction générale aux ingénieurs déployés sur le terrain. Les exigences sont intenses, significatives et en constante évolution. Si cela vous semble aussi attrayant que stimulant, vous vous épanouirez ici.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Responsabilités Principales</h1>
              <p>
                Concevoir et gérer l'ensemble du cycle de recrutement, y compris la rédaction des descriptions de poste, l'engagement des recommandations, la recherche de talents, la conception du processus d'entretien, l'offre et la clôture, ainsi que l'évaluation du processus de bout en bout pour en identifier les forces et les risques.

              </p>
              <p>
                Identifier activement des talents en utilisant une variété de stratégies, des recommandations à la recherche de nouveaux prospects.

              </p>
              <p>
                Établir des relations profondes avec votre équipe commerciale ou produit, ainsi qu'avec les talents que vous guidez vers HardSoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Valorisons</h1>
              <p>
                Une capacité claire à naviguer entre des demandes concurrentes, en générant sans relâche de nouvelles solutions face aux contraintes, aux nouvelles informations et aux changements de terrain.
              </p>
              <p>
                Une approche critique et axée sur les données pour gérer les pipelines de candidats et les processus de recrutement globaux.
              </p>
              <p>
                Une motivation démontrée à travailler au sein d'une équipe intense et axée sur une mission, représentant une variété de compétences et de personnalités.
              </p>
              <p>
                De solides compétences en résolution de problèmes ; une histoire prouvée de construction et de reconstruction de processus à partir de zéro.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Ce Que Nous Exigeons</h1>
              <p>
                3 ans ou plus d'expérience dans l'identification, le recrutement et le travail avec des talents exceptionnels (l'expérience n'a pas besoin d'être traditionnellement dans le recrutement ; nous sommes ouverts à une variété de parcours).
              </p>
              <p>
                Des compétences extraordinaires en communication et en relations interpersonnelles.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Salaire</h1>
              <p>
                La fourchette salariale estimée pour ce poste est de 90 000
                à
                120000/an. La rémunération totale pour ce poste peut également inclure des actions restreintes, une prime de signature et d'autres incitations futures potentielles. Notez en outre que la rémunération totale pour ce poste sera déterminée en fonction des qualifications pertinentes, de l'expérience professionnelle, des compétences et d'autres facteurs propres à chaque individu. Cette estimation exclut la valeur de toute prime de signature potentielle, la valeur des avantages offerts et la valeur future potentielle de toute incitation à long terme.
              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Nos Avantages</h1>
              <p>
                Nos avantages visent à promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de HardSoft Business. Nous travaillons à améliorer continuellement nos offres et à écouter notre communauté lors de leur conception et de leur mise à jour. La liste ci-dessous détaille les avantages disponibles et certains des avantages dont peuvent profiter les employés de HardSoft Business.
              </p>
              <h1 className='text-xl text-[#575757f9] font-black mt-8'>Avantages</h1>
              <p>
                Les employés (et leurs personnes à charge éligibles) peuvent s'inscrire à une assurance médicale, dentaire et visuelle, ainsi qu'à une assurance-vie volontaire.

              </p>

              <p>
                Les employés sont automatiquement couverts par l'assurance-vie de base de Hardsoft Business, l'assurance AD&D (Accident, Décès et Dismembrement) et l'assurance invalidité.

              </p>

              <p>
                Avantages pour les trajets domicile-travail.

              </p>

              <p>
                Congés payés à la demande, non basés sur un système d'accumulation.

              </p>

              <p>
                2 semaines de congés payés intégrées à la fin de chaque année (sous réserve des besoins de l'équipe et de l'entreprise).

              </p>

              <p>
                10 jours fériés payés tout au long de l'année civile.

              </p>

              <p>
                Programme de congés de soutien, y compris les congés pour service militaire et événements médicaux.
              </p>

              <p>
                Congés payés pour les nouveaux parents et garde d'enfants de secours subventionnée pour tous les parents.
              </p>

              <p>
                Avantages pour la fertilité et la construction familiale, y compris mais sans s'y limiter, l'adoption, la gestation pour autrui et la préservation.
              </p>

              <p>
                Allocation pour aider aux dépenses liées à l'arrivée d'un nouvel enfant.

              </p>

              <p>
                Les employés peuvent s'inscrire au plan 401k de Hardsoft Business.

              </p>

              <h1 className='text-xl text-[#575757f9] font-black mt-8'>La Vie chez Hardsoft Business</h1>
              <p>
                Nous voulons que chaque employé de Hardsoft Business atteigne ses meilleurs résultats, c'est pourquoi nous célébrons les forces, les compétences et les intérêts individuels, dès votre premier entretien jusqu'à votre croissance à long terme, plutôt que de nous reposer sur des échelons de carrière traditionnels. Prêter attention aux besoins de notre communauté nous permet d'optimiser nos opportunités de croissance et garantit de nombreuses voies vers le succès chez Hardsoft Business. Promouvoir la santé et le bien-être dans tous les aspects de la vie des employés de Hardsoft Business est l'une des façons dont nous investissons dans notre communauté. Apprenez-en plus sur La Vie chez Hardsoft Business et notez que nos offres peuvent varier selon les régions.

              </p>
              <p>
                En accord avec les valeurs et la culture de HardSoft Business, nous croyons que les employés sont "meilleurs ensemble" et que le travail en personne permet des résultats plus créatifs. Par conséquent, nous encourageons les employés à travailler depuis nos bureaux pour favoriser la connectivité et l'innovation. De nombreuses équipes proposent des options hybrides (télétravail un jour ou deux par semaine), permettant à nos employés de trouver le bon équilibre pour leur productivité personnelle. Sur la base des besoins de l'entreprise, certains rôles permettent exceptionnellement un travail "à distance". Si vous postulez pour l'un de ces rôles, vous devez travailler depuis l'État dans lequel vous êtes employé. Si l'offre est spécifiée comme "Sur site", vous êtes tenu de travailler depuis un bureau.

              </p>
              <p>
                Si vous souhaitez donner du pouvoir aux institutions les plus importantes au monde, vous avez votre place ici. HardSoft Business valorise l'excellence, quelles que soient les origines. Nous sommes fiers d'être un employeur offrant l'égalité des chances à tous, y compris mais sans s'y limiter, les anciens combattants et les personnes handicapées. HardSoft Business s'engage à rendre le processus de candidature et d'embauche accessible à tous et fournira des aménagements raisonnables pour les personnes vivant avec un handicap. Si vous avez besoin d'un aménagement pour le processus de candidature ou d'embauche, n'hésitez pas à nous contacter et à nous faire savoir comment nous pouvons vous aider.

              </p>
              <div className='w-full flex justify-end mt-10'>
                <button className="p-6 px-16 rounded-[40px] hover:font-extrabold text-xl border hover:border-transparent border-black relative overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Postuler
                  </span>
                  <div className="absolute inset-0 w-0 bg-[#11EEFF] transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </section>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
