"use client"
import { Check, X } from 'lucide-react';
import React from 'react'

const PlanTarifaire = () => {
    return (

        <div className="sm:flex sm:flex-col sm:align-center p-10 mt-[100px] w-full">
            <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
                <button type="button"
                    className="relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm">Monthly
                    billing
                </button>
                <button type="button"
                    className="ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-slate-900">Yearly
                    billing
                </button>
            </div>

            <div className="mt-12 space-y-12 sm:space-y-0 grid lg:hidden md:grid-cols-2 grid-cols-1 lg:gap-2 md:gap gap-8 w-full mx-auto">

            <div className="border border-slate-500 rounded-lg shadow-sm divide-slate-200 relative h-auto">
                    <div className="p-6 border-b border-slate-500">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">STARTER</h2>
                        <p>
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-base text-slate-500">/mo</span>
                        </p>
                        <a href="/sign-up" className="mt-4 block w-full bg-slate-900 text-white py-2 rounded-md text-center">
                            Join as a Starter
                        </a>
                    </div>
                    <div className="">
                        <h3 className="text-[#9B0069] py-4 px-6 flex -mx-4 text-lg font-bold uppercase">Communication as a Service (CaaS)</h3>
                        <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Forecasting</li>
                            <li className="py-4 px-6 -mx-4 ">+S&OP Pro-Meeting</li>
                        </ul>
                    </div>
                    <div className="">
                    <h3 className="text-[#9B0069] py-4 px-6 -mx-4 font-bold text-lg uppercase">Software as a Service (SaaS)</h3>
                    <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Enterprise AI-driven Commercial</li>
                        </ul>
                    </div>
                    <div className="">
                    <h3 className="text-[#9B0069] py-4 px-6 -mx-4 text-lg font-bold uppercase">Infrastructure as a Service (IaaS)</h3>
                    <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Stockage</li>
                            <li className="py-4 px-6 -mx-4 ">Calcul</li>
                            <li className="py-4 px-6 -mx-4 ">Sécurité</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-slate-500 rounded-lg shadow-sm divide-slate-200 relative h-auto">
                    <div className="p-6 border-b border-slate-500">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">BUILDER</h2>
                        <p>
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-base text-slate-500">/mo</span>
                        </p>
                        <a href="/sign-up" className="mt-4 block w-full bg-slate-900 text-white py-2 rounded-md text-center">
                            Join as a Starter
                        </a>
                    </div>
                    <div className="">
                        <h3 className="text-[#9B0069] py-4 px-6 flex -mx-4 text-lg font-bold uppercase">Communication as a Service (CaaS)</h3>
                        <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Forecasting</li>
                            <li className="py-4 px-6 -mx-4 ">+S&OP Pro-Meeting</li>
                            <li className="py-4 px-6 -mx-4 ">+Executive Pro-Meeting</li>
                            <li className="py-4 px-6 -mx-4 ">+FP&A Meeting</li>
                        </ul>
                    </div>
                    <div className="">
                    <h3 className="text-[#9B0069] py-4 px-6 -mx-4 font-bold text-lg uppercase">Software as a Service (SaaS)</h3>
                    <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Enterprise AI-driven Commercial</li>
                            <li className="py-4 px-6 -mx-4 ">Supply Chain AI-driven Management</li>
                            <li className="py-4 px-6 -mx-4 ">Financial AI-driven Management</li>
                        </ul>
                    </div>
                    <div className="">
                    <h3 className="text-[#9B0069] py-4 px-6 -mx-4 text-lg font-bold uppercase">Infrastructure as a Service (IaaS)</h3>
                    <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Stockage</li>
                            <li className="py-4 px-6 -mx-4 ">Calcul</li>
                            <li className="py-4 px-6 -mx-4 ">Sécurité</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-slate-500 rounded-lg shadow-sm divide-slate-200 relative h-auto">
                    <div className="p-6 border-b border-slate-500">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">SCALER</h2>
                        <p>
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-base text-slate-500">/mo</span>
                        </p>
                        <a href="/sign-up" className="mt-4 block w-full bg-slate-900 text-white py-2 rounded-md text-center">
                            Join as a Starter
                        </a>
                    </div>
                    <div className="">
                        <h3 className="text-[#9B0069] py-4 px-6 flex -mx-4 text-lg font-bold uppercase">Communication as a Service (CaaS)</h3>
                        <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Forecasting</li>
                            <li className="py-4 px-6 -mx-4 ">+S&OP Pro-Meeting</li>
                            <li className="py-4 px-6 -mx-4 ">+Executive Pro-Meeting</li>
                            <li className="py-4 px-6 -mx-4 ">+FP&A Meeting</li>
                        </ul>
                    </div>
                    <div className="">
                    <h3 className="text-[#9B0069] py-4 px-6 -mx-4 font-bold text-lg uppercase">Software as a Service (SaaS)</h3>
                    <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Enterprise AI-driven Commercial</li>
                            <li className="py-4 px-6 -mx-4 ">Supply Chain AI-driven Management</li>
                            <li className="py-4 px-6 -mx-4 ">Financial AI-driven Management</li>
                            <li className="py-4 px-6 -mx-4 ">Investment AI-driven Management</li>
                            <li className="py-4 px-6 -mx-4 ">Production AI-driven Management</li>
                        </ul>
                    </div>
                    <div className="">
                    <h3 className="text-[#9B0069] py-4 px-6 -mx-4 text-lg font-bold uppercase">Infrastructure as a Service (IaaS)</h3>
                    <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Stockage</li>
                            <li className="py-4 px-6 -mx-4 ">Calcul</li>
                            <li className="py-4 px-6 -mx-4 ">Sécurité</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-slate-500 rounded-lg shadow-sm divide-slate-200 relative h-auto">
                    <div className="p-6 border-b border-slate-500">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">Enterprise</h2>
                        <p>
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-base text-slate-500">/mo</span>
                        </p>
                        <a href="/sign-up" className="mt-4 block w-full bg-slate-900 text-white py-2 rounded-md text-center">
                            Join as a Starter
                        </a>
                    </div>
                    <div className="">
                        <h3 className="text-[#9B0069] py-4 px-6 flex -mx-4 text-lg font-bold uppercase">Communication as a Service (CaaS)</h3>
                        <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Forecasting</li>
                            <li className="py-4 px-6 -mx-4 ">+S&OP Pro-Meeting</li>
                            <li className="py-4 px-6 -mx-4 ">+Executive Pro-Meeting</li>
                            <li className="py-4 px-6 -mx-4 ">+FP&A Meeting</li>
                        </ul>
                    </div>
                    <div className="">
                    <h3 className="text-[#9B0069] py-4 px-6 -mx-4 font-bold text-lg uppercase">Software as a Service (SaaS)</h3>
                    <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Enterprise AI-driven Commercial</li>
                            <li className="py-4 px-6 -mx-4 ">Supply Chain AI-driven Management</li>
                            <li className="py-4 px-6 -mx-4 ">Financial AI-driven Management</li>
                            <li className="py-4 px-6 -mx-4 ">Investment AI-driven Management</li>
                            <li className="py-4 px-6 -mx-4 ">Production AI-driven Management</li>
                            <li className="py-4 px-6 -mx-4 ">Enterprise AI-driven Innovation</li>
                            <li className="py-4 px-6 -mx-4 ">Smart Building AI-driven</li>
                            <li className="py-4 px-6 -mx-4 ">Security Architecture AI-driven</li>
                        </ul>
                    </div>
                    <div className="">
                    <h3 className="text-[#9B0069] py-4 px-6 -mx-4 text-lg font-bold uppercase">Infrastructure as a Service (IaaS)</h3>
                    <ul className="">
                            <li className="py-4 px-6 -mx-4 ">Stockage</li>
                            <li className="py-4 px-6 -mx-4 ">Calcul</li>
                            <li className="py-4 px-6 -mx-4 ">Sécurité</li>
                            <li className="py-4 px-6 -mx-4 ">Internet des Objets (IoT)</li>
                        </ul>
                    </div>
                </div>
        
             </div>


            <div className="mt-12 space-y-12 sm:space-y-0 lg:grid hidden lg:grid-cols-5 xl:grid-cols-5 lg:gap-2 md:gap gap-8 w-full mx-auto">

                {/* Carte PRICING */}
                <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 relative h-auto">
                    <div className="pt-6 pb-[8px] px-4">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-4 -mt-6 mb-2">PRICING</h2>
                        <p className="text-base text-[#000000]">
                            Des tarifs compétitifs pour un service exceptionnel – obtenez un <strong>rapport qualité-prix inégalé</strong>
                        </p>
                    </div>
                    <div className="px-4 relative">
                        <h3 className="bg-[#9B0069] text-white py-[4px] px-4 w-[1133px] h-[50px] flex justify-center items-center -mx-4 text-sm font-bold uppercase absolute z-20">Communication as a Service (CaaS)</h3>
                        <ul className="mt-12">
                            <li className="py-4 px-4 -mx-4 ">Forecasting</li>
                            <li className="py-4 px-4 -mx-4  bg-[#A3F8FF]">+S&OP Pro-Meeting</li>
                            <li className="py-4 px-4 -mx-4 ">+Executive Pro-Meeting</li>
                            <li className="py-4 px-4 bg-[#A3F8FF] -mx-4 ">+FP&A Meeting</li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className="bg-[#9B0069] text-white py-[4px] px-4 w-[1133px] h-[50px] flex justify-center items-center -mx-4 text-sm font-bold uppercase absolute z-20">Software as a Service (SaaS)</h3>
                    <ul className="mt-12">
                            <li className="py-4 px-4 -mx-4 ">Enterprise AI-driven Commercial</li>
                            <li className="py-4 px-4 -mx-4  bg-[#A3F8FF]">Supply Chain AI-driven Management</li>
                            <li className="py-4 px-4 -mx-4 ">Financial AI-driven Management</li>
                            <li className="py-4 px-4 bg-[#A3F8FF] -mx-4 ">Investment AI-driven Management</li>
                            <li className="py-4 px-4 -mx-4 ">Production AI-driven Management</li>
                            <li className="py-4 px-4 -mx-4  bg-[#A3F8FF]">Enterprise AI-driven Innovation</li>
                            <li className="py-4 px-4 -mx-4 ">Smart Building AI-driven</li>
                            <li className="py-4 px-4 bg-[#A3F8FF] -mx-4 ">Security Architecture AI-driven</li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className="bg-[#9B0069] text-white py-[4px] px-4 w-[1133px] h-[50px] flex justify-center items-center -mx-4 text-sm font-bold uppercase absolute z-20"> Infrastructure as a Service (IaaS) </h3>
                    <ul className="mt-12">
                            <li className="py-4 px-4 -mx-4 ">Stockage</li>
                            <li className="py-4 px-4 -mx-4  bg-[#A3F8FF]">Calcul</li>
                            <li className="py-4 px-4 -mx-4 ">Sécurité</li>
                            <li className="py-4 px-4 bg-[#A3F8FF] -mx-4 ">Internet des Objets (IoT)</li>
                        </ul>
                    </div>
                </div>

                {/* Carte STARTER */}
                <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 relative h-auto">
                    <div className="p-6">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">STARTER</h2>
                        <p>
                            <span className="text-4xl font-bold">$0</span>
                            <span className="text-base text-slate-500">/mo</span>
                        </p>
                        <a href="/sign-up" className="mt-4 block w-full bg-slate-900 text-white py-2 rounded-md text-center">
                            Join as a Starter
                        </a>
                    </div>
                    <div className="px-4">
                        <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-3 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-6 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-3 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                </div>

                {/* Carte BUILDER */}
                <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 relative h-auto">
                    <div className="p-6">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">BUILDER</h2>
                        <p>
                            <span className="text-4xl font-bold">$8</span>
                            <span className="text-base text-slate-500">/mo</span>
                        </p>
                        <a href="/sign-up" className="mt-4 block w-full bg-slate-900 text-white py-2 rounded-md text-center">
                            Join as a Superior
                        </a>
                    </div>
                    <div className="px-4">
                        <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-3 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><Check className="text-[#000000]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-6 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-3 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                </div>

                {/* Carte SCALER */}
                <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 relative h-auto">
                    <div className="p-6">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">SCALER</h2>
                        <p>
                            <span className="text-4xl font-bold">$15</span>
                            <span className="text-base text-slate-500">/mo</span>
                        </p>
                        <a href="/sign-up" className="mt-4 block w-full bg-slate-900 text-white py-2 rounded-md text-center">
                            Join as a Shipper
                        </a>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-3 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><Check className="text-[#000000]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-6 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><X className="text-[#000000]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-3 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><X className="text-[#000000]" size={32} /></li>
                        </ul>
                    </div>
                </div>

                 {/*Enterprise */}
                 <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 relative h-auto">
                    <div className="p-6">
                        <h2 className="text-xl font-bold bg-[#0000FF] text-white py-4 px-4 rounded-t-lg -mx-6 -mt-6 mb-4">Enterprise</h2>
                        <p>
                            <span className="text-4xl font-bold">$15</span>
                            <span className="text-base text-slate-500">/mo</span>
                        </p>
                        <a href="/sign-up" className="mt-4 block w-full bg-slate-900 text-white py-2 rounded-md text-center">
                            Join as a Shipper
                        </a>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-3 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-6 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-6 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                        </ul>
                    </div>
                    <div className="px-4">
                    <h3 className=" text-white text-sm font-bold uppercase"></h3>
                        <ul className="mt-[48px]">
                            <li className="py-3 px-4 flex justify-center items-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center"><Check className="text-[#9B0069]" size={32} /></li>
                            <li className="py-3 px-4 -mx-4 flex justify-center bg-[#A3F8FF]"><Check className="text-[#9B0069]" size={32} /></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default PlanTarifaire;