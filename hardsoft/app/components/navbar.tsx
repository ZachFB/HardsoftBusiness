"use client"
import React, { useState } from "react";
import logo from "../../public/HardSoftLogo.svg"
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  //State
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaprod, setMegaprod] = useState(false);
  const [megaserv, setMegaserv] = useState(false);
  const [megasolut, setMegasolut] = useState(false);
  const [megaIndu, setMegaIndu] = useState(false);

  //Comportement 
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);



  //Rendu
  return (
    <header className="w-full">
      {/* Barre d'annonce */}
      <div className="w-screen bg-[#3333FF] text-center text-white h-auto lg:h-[36px] py-2 text-[13px]">
        Introducing Gia™ - the world’s first AI-based HR compliance advisor. Get early access. Join the waitlist →
      </div>

      {/* Barre supérieure */}
      <div className="w-screen h-[40px] bg-[#F9F9F9] text-[12px] flex justify-end items-center gap-8 px-4 py-2 text-gray-600">
        <span>+1(888)-855-5328</span>
        <a href="#">Contact Us</a>
        <a href="#">Sign In</a>
        <select className="w-[70px] h-[40px]">
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="it">Italian</option>
        </select>
        <Image src="images/icon15.svg" width={2} height={2} alt="" />
      </div>

      {/* Menu principal */}
      <div className="h-[90px] w-full flex items-center justify-between px-4 lg:px-8 font-medium">
        <Link href={"/"}>
          <Image src={logo} className="lg:w-[240px] lg:h-[60px] h-[30px] w-[150px]" width={240} height={60} alt="Logo" />
        </Link>
        {/* Menu Desktop */}
        <nav className="hidden lg:flex w-full max-w-[900px] h-[47px] ml-auto items-center justify-between">
          <ul className="w-full max-w-[648px] h-[40px] flex items-center justify-between">
            {['Produits', 'Services', 'Solutions', 'Industries', 'Carrieres', 'Entreprise'].map((item) => (
              <li key={item} className="text-[#494949] text-[16px] hover:text-[#0000FF] cursor-pointer" onClick={
                () => {
                  if (item === "Produits") { setMegaprod(true); setMegaserv(false); setMegasolut(false); setMegaIndu(false) }
                  if (item === "Services") { setMegaserv(true); setMegaprod(false); setMegasolut(false); setMegaIndu(false) }
                  if (item === "Solutions") { setMegasolut(true); setMegaprod(false); setMegaserv(false); setMegaIndu(false) }
                  if (item === "Industries") { setMegaIndu(true); setMegaprod(false); setMegaserv(false); setMegasolut(false) }
                  console.log(megaprod, megaserv, megasolut, megaIndu)
                }}>
                {megaprod && item === "Produits" && megaIndu === false && megaserv === false && megasolut === false ? (
                  <div className="flex gap-1 text-[#0000FF] border-b border-l-0 border-r-0 border-t-0 border-[#0000FF] py-2" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation vers le parent
                    setMegaprod(false);
                  }}>
                    {item} <ChevronDown size={20} className="mt-1 rotate-180" />
                  </div>
                ) : megaserv && item === "Services" && megaIndu === false && megaprod === false && megasolut === false ? (
                  <div className="flex gap-1 text-[#0000FF] border-b border-l-0 border-r-0 border-t-0 border-[#0000FF] py-2" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation vers le parent
                    setMegaserv(false);
                  }}>
                    {item} <ChevronDown size={20} className="mt-1 rotate-180" />
                  </div>
                ) : megasolut && item === "Solutions" && megaIndu === false && megaprod === false && megaserv === false ? (
                  <div className="flex gap-1 text-[#0000FF] border-b border-l-0 border-r-0 border-t-0 border-[#0000FF] py-2" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation vers le parent
                    setMegasolut(false);
                  }}>
                    {item} <ChevronDown size={20} className="mt-1 rotate-180" />
                  </div>
                ) : megaIndu && item === "Industries" && megaserv === false && megaprod === false && megasolut === false ? (
                  <div className="flex gap-1 text-[#0000FF] border-b border-l-0 border-r-0 border-t-0 border-[#0000FF] py-2" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation vers le parent
                    setMegaIndu(false);
                  }}>
                    {item} <ChevronDown size={20} className="mt-1 rotate-180" />
                  </div>
                ) :
                  (
                    <div className="flex gap-1">
                      {item} <ChevronDown size={20} className="mt-1" />
                    </div>
                  )}

              </li>
            ))}
          </ul>
          <div className="flex items-center gap-[16px]">
            <button className="w-[112px] h-[47px] bg-[#494949] rounded-3xl text-white">Login</button>
            <button className="w-[112px] h-[47px] bg-[#0000FF] rounded-3xl text-white">Sign Up</button>
          </div>

        </nav>

        {/* Bouton Hamburger */}
        <button className="lg:hidden text-[#494949] text-2xl" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
      {megaprod && (
        <div className="absolute top-[160px] left-0 w-full h-auto lg:h-[442px] bg-white shadow-lg rounded-lg p-6 flex justify-center z-50">
          <div className="relative h-auto lg:h-full w-full lg:w-[1202px] grid lg:grid-cols-3 grid-cols-1 lg:justify-items-center md:justify-items-start justify-items-center items-center lg:px-0 md:px-24 gap-[32px]">

            {/* Bloc bleu */}
            <div className="lg:h-[362px] h-[200px] w-[260px] lg:w-[350px] bg-[#0000FF] rounded-3xl"></div>

            {/* Contenu central */}
            <div className="lg:col-span-2 flex ">
              <div className="lg:w-[717px] w-full lg:h-[172px] h-auto grid lg:grid-cols-3 grid-cols-2 lg:gap-1 gap-8">
                {/* Première ligne */}
                <a href="/produit2" className="flex items-center lg:pb-[49px] gap-3">
                  <Image src="/images/megaIcon1.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Enterprise Performance Commercial</span>
                </a>
                <a href="produit3" className="flex items-center lg:pb-[49px] gap-3">
                  <Image src="/images/megaIcon2.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Financial Performance Management</span>
                </a>
                <a href="/produit1" className="flex items-center lg:pb-[49px] gap-3">
                  <Image src="/images/megaIcon3.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Investment Performance Management</span>
                </a>

                {/* Ligne de séparation au centre */}
                <p className="border-t border-gray-300 hidden lg:block lg:col-span-3 h-0"></p>

                {/* Deuxième ligne */}
                <a href="produit4" className="flex items-center lg:pt-[49px] gap-3">
                  <Image src="/images/megaIcon4.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Supply Chain Performance</span>
                </a>
                <a href="produit5" className="flex items-center lg:pt-[49px] gap-3">
                  <Image src="/images/megaIcon5.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Production Performance Management</span>
                </a>
                <a href="produit6" className="flex items-center gap-3 lg:pt-[49px]">
                  <Image src="/images/megaIcon6.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Enterprise Performance Innovation</span>
                </a>
              </div>
            </div>

            {/* Bouton de fermeture */}
            <button
              className="absolute md:top-10 md:right-8 top-2 right-0 text-black cursor-pointer hover:text-gray-700 text-[24px]"
              onClick={() => setMegaprod(false)}
            >
              X
            </button>
          </div>
        </div>

      )}
      {megaserv && (
        <div className="absolute top-[160px] left-0 w-full h-auto lg:h-[442px] bg-white shadow-lg rounded-lg p-6 flex justify-center items-center z-50">
          <div className="relative h-auto lg:h-full w-full lg:w-[1202px] grid lg:grid-cols-3 grid-cols-1 lg:justify-items-center md:justify-items-start justify-items-center items-center lg:px-0 md:px-24 gap-[32px]">

            {/* Bloc bleu */}
            <div className="lg:h-[362px] h-[200px] w-[260px] lg:w-[350px] bg-[#0000FF] rounded-3xl"></div>

            {/* Liens à droite */}
            <div className="lg:col-span-2 flex ">
              <div className="lg:w-[717px] w-full lg:h-[330px] h-auto grid lg:grid-cols-3 grid-cols-2 lg:gap-1 gap-8">
                <a href="service2" className="flex items-center lg:pb-[49px] gap-3">
                  <Image src="images/servmen1.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Strategie Manageriale</span>
                </a>
                <a href="service3" className="flex items-center lg:pb-[49px] gap-3">
                  <Image src="images/servmen2.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Stratégie d'Investissement</span>
                </a>
                <a href="service4" className="flex items-center lg:pb-[49px] gap-3">
                  <Image src="images/servmen3.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Stratégie de Réinvestissement</span>
                </a>

                {/* Ligne de séparation au centre */}
                <p className="border-t border-gray-300 hidden lg:block lg:col-span-3 h-0"></p>

                <a href="service5" className="flex items-center lg:pt-[49px] gap-3">
                  <Image src="images/servmen4.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Strategie d’innovation</span>
                </a>
                <a href="service6" className="flex items-center lg:pt-[49px] gap-3">
                  <Image src="images/servmen5.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Stratégie de Restructuration</span>
                </a>
                <a href="service7" className="flex items-center gap-3 lg:pt-[49px]">
                  <Image src="images/servmen6.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Stratégie Énergétique et Ecologique</span>
                </a>

                {/* Ligne de séparation au centre */}
                <p className="border-t border-gray-300 hidden lg:block lg:col-span-3 mt-8 h-0"></p>

                <a href="service1" className="flex items-center lg:pt-[49px] gap-3">
                  <Image src="images/servmen7.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Stratégie de Développement</span>
                </a>
                <a href="service8" className="flex items-center lg:pt-[49px] gap-3">
                  <Image src="images/servmen8.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Stratégie d’intelligence économique</span>
                </a>
              </div>
            </div>
            {/* Bouton de fermeture */}
            <button
              className="absolute md:top-10 md:right-8 top-2 right-0 text-black cursor-pointer hover:text-gray-700 text-[24px]"
              onClick={() => setMegaserv(false)}
            >
              X
            </button>
          </div>
        </div>
      )}

      {megasolut && (
        <div
          id="megaProd"
          className="absolute top-[160px] w-full lg:h-[600px] h-auto flex justify-center items-center shadow-lg px-[30px] gap-[40px] transition-all bg-white z-50"
        >
          <div className="relative h-auto w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-items-center justify-items-center items-center lg:px-0 gap-[40px]">
            <button
              onClick={() => setMegasolut(false)}
              className="absolute top-[-10px] right-1 text-black cursor-pointer hover:text-gray-700 text-[24px]"
            >
              X
            </button>

            {/* Bloc 1 */}
            <div className="h-[440px] w-[410px] flex flex-col items-center gap-[40px]">
              <div
                className="h-[238px] w-[260px] md:w-[370px] bg-center bg-no-repeat pt-[53px] rounded-[20px]"
                style={{ backgroundImage: "url('images/color7.svg')" }}
              >
                <Image className="h-full w-full" height={100} width={100} src="images/image31.svg" alt="Image 1" />
              </div>
              <div className="w-[370px] flex flex-col justify-center gap-[10px]">
                <a href="solution1" className="flex items-center gap-3">
                  <Image src="images/megaIcon15.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Petites et Moyennes Entreprises</span>
                </a>
                <a href="solution2" className="flex items-center gap-3">
                  <Image src="images/megaIcon16.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Grandes Entreprises et Multinationales</span>
                </a>
                <a href="solution3" className="flex items-center gap-3">
                  <Image src="images/megaIcon17.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Fournisseurs de Financement Startups</span>
                </a>
              </div>
            </div>

            {/* Bloc 2 */}
            <div className="h-[440px] w-[410px] flex flex-col items-center gap-[40px]">
              <div
                className="h-[238px] w-[260px] md:w-[370px] bg-center bg-no-repeat pt-[53px] rounded-[20px]"
                style={{ backgroundImage: "url('images/color7.svg')" }}
              >
                <Image className="h-full w-full" height={100} width={100} src="images/image31.svg" alt="Image 2" />
              </div>
              <div className="w-[370px] flex flex-col justify-center gap-[10px]">
                <a href="solution4" className="flex items-center gap-3">
                  <Image src="images/megaIcon18.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Cabinets d’Experts Comptables, Banques d’affaires</span>
                </a>
                <a href="solution5" className="flex items-center gap-3">
                  <Image src="images/megaIcon19.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Investisseurs immobiliers, Agence Immobilières</span>
                </a>
                <a href="solution6" className="flex items-center gap-3">
                  <Image src="images/megaIcon20.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Entreprises de plateformes SaaS, Marketplace, E-commerce</span>
                </a>
              </div>
            </div>

            {/* Bloc 3 */}
            <div className="h-[440px] w-[410px] flex flex-col items-center gap-[40px]">
              <div
                className="h-[238px] w-[260px] md:w-[370px] bg-center bg-no-repeat pt-[53px] rounded-[20px]"
                style={{ backgroundImage: "url('images/color7.svg')" }}
              >
                <Image className="h-full w-full" height={100} width={100} src="images/image31.svg" alt="Image 3" />
              </div>
              <div className="w-[370px] flex flex-col justify-center gap-[10px]">
                <a href="solution9" className="flex items-center gap-3">
                  <Image src="images/megaIcon21.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Startups Deeptech, Fintech, Edtech, Cleantech</span>
                </a>
                <a href="solution7" className="flex items-center gap-3">
                  <Image src="images/megaIcon22.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Cabinets d’études, Industriels électriques</span>
                </a>
                <a href="solution8" className="flex items-center gap-3">
                  <Image src="images/megaIcon23.svg" width={36} height={36} alt="" />
                  <span className="poppins-light text-[15px]">Etablissement Recevant du Public</span>
                </a>
              </div>
            </div>


            {/* Bloc final */}
            <div className="bg-[#0000FF] flex md:gap-[20px] gap-2 items-center w-full lg:w-[1250px] lg:ml-[25px] ml-0 lg:h-[84.43px] h-auto text-white rounded-[10px] m-auto">
              <span className="ml-[30px] text-[16px] poppins-semibold">Our solutions</span>
              <p><i className="fa-solid fa-arrow-right"></i></p>
              <span className="text-[14px] poppins-light mr-auto">Explore our industry-leading hardsoft</span>
              <div className="md:w-[300px] w-[300px] flex h-full">
                <div className="md:w-[75px] w-[20px] bg-gradient-to-t from-[#00FFFF] to-[#D9D9D957] h-full"></div>
                <div className="md:w-[75px] w-[20px] bg-gradient-to-t from-[#E8E8E8] to-[#00FFFF] h-full"></div>
                <div className="md:w-[75px] w-[20px] bg-gradient-to-t from-[#05FC05] to-[#00FFFF] h-full"></div>
                <div className="md:w-[75px] w-[20px] bg-gradient-to-t from-[#FCE258] to-[#FF153E] h-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}


      {megaIndu && (
        <div
          id="megaProd"
          className="absolute overflow-x-hidden top-[160px] w-full h-auto flex justify-center items-center shadow-lg px-[30px] gap-[40px] transition-all bg-white z-50"
        >
          <div className="relative h-auto w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-items-center justify-items-center items-center lg:px-0 gap-[40px]">
            <button
              onClick={() => setMegaIndu(false)}
              className="absolute top-[-10px] right-1 text-black cursor-pointer hover:text-gray-700 text-[24px]"
            >
              X
            </button>

            {/* Bloc 1 */}
            <div className="lg:h-[200px] h-[140px] w-[410px] ml-32 flex flex-col items-center py-9">

              <div className="w-[370px] flex flex-col justify-center gap-[10px]">
                <a href="industrie1" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon15.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Fabrication Industrielle</span>
                </a>
                <a href="industrie2" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon16.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Logistique & Supply Chain</span>
                </a>
                <a href="industrie3" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon17.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Commerce & Retail</span>
                </a>
              </div>
            </div>

            {/* Bloc 2 */}
            <div className="lg:h-[200px] h-[140px] w-[410px] ml-32 flex flex-col items-center py-9">

              <div className="w-[370px] flex flex-col justify-center gap-[10px]">
                <a href="industrie4" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon18.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Santé & Pharmacie</span>
                </a>
                <a href="industrie5" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon19.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Finance & Comptabilité</span>
                </a>
                <a href="industrie6" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon20.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Agriculture</span>
                </a>
              </div>
            </div>

            {/* Bloc 3 */}
            <div className="lg:h-[200px] h-[150px] w-[410px] ml-32 flex flex-col items-center py-9">

              <div className="w-[370px] flex flex-col justify-center gap-[10px]">
                <a href="industrie7" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon21.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Hôtellerie & Restauration</span>
                </a>
                <a href="industrie8" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon22.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Énergie & Environnement</span>
                </a>
                <a href="industrie9" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon23.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Éducation & Formation</span>
                </a>
              </div>
            </div>

            {/* Bloc 4 */}
            <div className="lg:h-[200px] h-[150px] w-[410px] ml-32 flex flex-col items-center py-9">

              <div className="w-[370px] flex flex-col justify-center gap-[10px]">
                <a href="industrie10" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon21.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Sécurité & Surveillance</span>
                </a>
                <a href="industrie11" className="flex items-center gap-3">
                  {/* <Image src="images/megaIcon22.svg" width={36} height={36} alt="" /> */}
                  <span className="poppins-light text-[15px]">Politiques Publiques</span>
                </a>
              </div>
            </div>


            {/* Bloc final */}
            <div className="bg-[#00FFFF] flex md:gap-[20px] gap-2 items-center w-full lg:w-[1250px] lg:ml-[25px] ml-0 lg:h-[84.43px] h-auto rounded-[10px] m-auto">
              <span className="ml-[30px] text-[16px] poppins-semibold">Our solutions</span>
              <p><i className="fa-solid fa-arrow-right"></i></p>
              <span className="text-[14px] poppins-light mr-auto">Explore our industry-leading hardsoft</span>
              <div className="md:w-[300px] w-[300px] flex h-full">
                <div className="md:w-[75px] w-[20px] bg-gradient-to-t from-[#00FFFF] to-[#D9D9D957] h-full"></div>
                <div className="md:w-[75px] w-[20px] bg-gradient-to-t from-[#E8E8E8] to-[#00FFFF] h-full"></div>
                <div className="md:w-[75px] w-[20px] bg-gradient-to-t from-[#05FC05] to-[#00FFFF] h-full"></div>
                <div className="md:w-[75px] w-[20px] bg-gradient-to-t from-[#FCE258] to-[#FF153E] h-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed top-[90px] left-0 w-screen h-[280px] shadow-md bg-white z-50 flex flex-col items-center justify-center">
          <button className="absolute top-4 right-4 text-black text-3xl" onClick={toggleMobileMenu}>
            ✕
          </button>
          <ul className="flex flex-col items-center space-y-3 py-1">
            {['Produits', 'Services', 'Solutions', 'Industries', 'Carrieres', 'Entreprise'].map((item) => (
              <li key={item} className="text-[#494949] text-[16px] hover:text-[#0000FF] cursor-pointer" onClick={
                () => {
                  if (item === "Produits") { setMegaprod(true); setMegaserv(false); setMegasolut(false); setMegaIndu(false); setMobileMenuOpen(!isMobileMenuOpen) }
                  if (item === "Services") { setMegaserv(true); setMegaprod(false); setMegasolut(false); setMegaIndu(false); setMobileMenuOpen(!isMobileMenuOpen) }
                  if (item === "Solutions") { setMegasolut(true); setMegaprod(false); setMegaserv(false); setMegaIndu(false); setMobileMenuOpen(!isMobileMenuOpen) }
                  if (item === "Industries") { setMegaIndu(true); setMegaprod(false); setMegaserv(false); setMegasolut(false); setMobileMenuOpen(!isMobileMenuOpen) }
                  console.log(megaprod, megaserv, megasolut)
                }}>
                {megaprod && item === "Produits" && megaserv === false && megasolut === false ? (
                  <div className="flex gap-1 text-[#0000FF] border-b border-l-0 border-r-0 border-t-0 border-[#0000FF] py-2" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation vers le parent
                    setMegaprod(false);
                  }}>
                    {item} <ChevronDown size={20} className="mt-1 rotate-180" />
                  </div>
                ) : megaserv && item === "Services" && megaprod === false && megasolut === false ? (
                  <div className="flex gap-1 text-[#0000FF] border-b border-l-0 border-r-0 border-t-0 border-[#0000FF] py-2" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation vers le parent
                    setMegaserv(false);
                  }}>
                    {item} <ChevronDown size={20} className="mt-1 rotate-180" />
                  </div>
                ) : megasolut && item === "Solutions" && megaprod === false && megaserv === false ? (
                  <div className="flex gap-1 text-[#0000FF] border-b border-l-0 border-r-0 border-t-0 border-[#0000FF] py-2" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation vers le parent
                    setMegasolut(false);
                  }}>
                    {item} <ChevronDown size={20} className="mt-1 rotate-180" />
                  </div>
                ) : megaIndu && item === "Industries" && megaserv === false && megaprod === false && megasolut === false ? (
                  <div className="flex gap-1 text-[#0000FF] border-b border-l-0 border-r-0 border-t-0 border-[#0000FF] py-2" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation vers le parent
                    setMegaIndu(false);
                  }}>
                    {item} <ChevronDown size={20} className="mt-1 rotate-180" />
                  </div>
                ) :
                  (
                    <div className="flex gap-1">
                      {item} <ChevronDown size={20} className="mt-1" />
                    </div>
                  )}

              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;