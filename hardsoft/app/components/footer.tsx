import Image from 'next/image'
import React from 'react'
import logo from "../../public/HardSoftLogo.svg"

const Footer = () => {

    return (

        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-3 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-5">
                    <div>
                        <Image src={logo} height={30} width={120} alt="Logo"/>
                            <ul className="text-gray-500 font-medium">
                                <li className="mt-[28px] poppins-semibold text-[12px] text-[#2D353D]">
                                    <select className="w-[150px] h-[40px] border border-[#50505080] px-3 rounded-lg" name="pets" id="pet-select">
                                        <option value="dog">English</option>
                                        <option value="cat">French</option>
                                        <option value="hamster">Italian</option>
                                    </select>
                                </li>
                                <li className="mt-[23px] flex flex-col">
                                    <span className="poppins-semibold text-[14px] text-black">Contacter un expert</span>
                                    <span className="text-[12px]">+1 (888)-855-5328</span>
                                </li>
                                <li className="mt-[23px] flex flex-col">
                                    <span className="poppins-semibold text-[14px] text-black">Support</span>
                                    <span className="text-[12px]">Contact us</span>
                                </li>
                                <li className="mt-[23px] flex gap-2">
                                    <a href="#" className="hover:underline"><Image src="images/sociaux1.svg" height={20} width={20} alt=""/></a>
                                    <a href="#" className="hover:underline"><Image src="images/sociaux2.svg" height={20} width={20} alt=""/></a>
                                    <a href="#" className="hover:underline"><Image src="images/sociaux3.svg" height={20} width={20} alt=""/></a>
                                    <a href="#" className="hover:underline"><Image src="images/sociaux4.svg" height={20} width={20} alt=""/></a>
                                    <a href="#" className="hover:underline"><Image src="images/sociaux5.svg" height={20} width={20} alt=""/></a>
                                    <a href="#" className="hover:underline"><Image src="images/sociaux6.svg" height={20} width={20} alt=""/></a>
                                </li>
                            </ul>
                    </div>
                    <div>
                        <span className="text-[12px] poppins-light text-[#66717F]">Produits</span>
                        <ul className="text-[#000000] poppins-light text-[16px] ">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Investment Perfomance...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Enterprise Perfomance...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Financial Perfomance...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Supply Chain Perfomance</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Production Performance...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Enterprise Perfomance...</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-[12px] poppins-light text-[#66717F]">Services</span>
                        <ul className="text-[#000000] poppins-light text-[16px] ">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Strategie Manageriale</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Stratégie d&apos;Investisse...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Stratégie de Réinvestis...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Strategie d&apos;innovation</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Stratégie de Restructura...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Stratégie Énergétique et...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Stratégie de Développem...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Stratégie d’intelligence ...</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-[12px] poppins-light text-[#66717F]">Solutions</span>
                        <ul className="text-[#000000] poppins-light text-[16px] ">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Petites et Moyennes Entr...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Grandes Entreprises et ...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Fournisseurs de Finance...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Cabinets d’Experts Comp...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Investisseurs immobiliers ...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Entreprises de platefor ...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Startups Deeptech, Finte,...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Cabinets d’études, Indust...</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Etablissement Recevant ...</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <span className="text-[12px] poppins-light text-[#66717F]">Strategies</span>
                            <ul className="text-[#000000] poppins-light text-[16px] ">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Améliorez ce que vous ...</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Développez votre entre...</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Allez sur un marché de ...</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Transformez votre entre...</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Disruptez votre propre en...</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[12px] poppins-light text-[#66717F]">Partenaires</span>
                            <ul className="text-[#000000] poppins-light text-[16px] ">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Partenaires</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[12px] poppins-light text-[#66717F]">Entreprise</span>
                            <ul className="text-[#000000] poppins-light text-[16px] ">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Présentation de la Socié..</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Startup Studio</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Blog</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Data Lab Innovation</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Demander une demo</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Réjoignez-nous</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Tarification</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6 bg-white flex items-center justify-center">
                    <span className="text-sm text-gray-500 text-center">© 2025 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
                        Reserved.
                    </span>

                </div>
            </div>
        </footer>

    )
}

export default Footer