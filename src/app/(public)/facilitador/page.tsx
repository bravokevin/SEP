import React from 'react'
import Image from 'next/image'

import { chatIcon, userIcon, volunterIcon, workshopIcon } from '@/assets/svgs'
import { Star, Point } from '@/assets/svgs'
import Card from '@/components/dashboard/Card'
import NormalCard from '@/components/card/NormalCard'

const CARD_CONTENT = [
    {
        icon: workshopIcon,
        text: "Talleres realizados",
        number: 15,
        bg: "bg-gradient-to-r from-blue-700  to-indigo-900",
        cardButtonBg: "bg-indigo-950 active:bg-blue-700 hover:bg-blue-700"
    },
    {
        icon: chatIcon,
        text: "Total de estudiantes",
        number: 20,
        bg: "bg-gradient-to-r from-red-500  to-red-900",
        cardButtonBg: "bg-indigo-950 active:bg-blue-700"

    },
    {
        icon: userIcon,
        text: "Clasificacio Promedio",
        number: 213,
        bg: "from-yellow-500  to-yellow-700",
        cardButtonBg: "bg-indigo-950 active:bg-blue-700 hover:bg-blue-700"
    },
]

const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <section className="w-full">
                <div className='bg-white flex flex-col items-center md:items-start'>
                    <div className="bg-gradient-to-br from-green-600  to-emerald-800  w-full p-28  rounded-lg shadow-2xl">
                    </div>
                    <div className='px-16'>
                        <div className='flex items-center justify-center md:justify-start rounded-full bg-slate-500 w-32 h-32 -mt-16 shadow-2xl p-4 border-4 '>
                            <Image
                                src="/avaa.png"
                                alt="Vercel Logo"
                                width={100}
                                height={24}
                                priority
                                className='rounded-full'
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center md:items-start">
                            <h1 className='text-4xl text-black font-semibold'>
                                Luis Lopez
                            </h1>
                            <p className='text-sm text-green-700 font-semibold'>
                                Facilitador ProExcelencia
                            </p>
                            <div className='flex gap-2'>
                                <span className='text-xs  text-green-600 font-semibold max-w-2xl border-r-2 border-green-500 pr-2'>
                                    Sociedad Bastiat
                                </span>
                                <span className='text-xs  text-slate-600 max-w-2xl'>
                                    Desde 2015
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center items-center m-4 ">
                        {CARD_CONTENT.map(({ icon, text, number, bg }) => {
                            return (
                                <NormalCard key={text} stat={number} Icon={icon} text={text} bg={bg} />
                            )
                        })}
                    </div>

                    <ul className='w-full flex justify-center '>
                        <li className='bg-emerald-800 py-2 px-4 rounded-xl w-1/2'>
                            <a href="/courses/wso2-fast-enterprise-application-development">
                                <div className="flex flex-col  justify-start items-start">
                                    <text className="text-sm font-semibold text-green-600">Taller</text>
                                    <div className="">Liderazgo Social</div>
                                    <div className=" flex gap-4 justify-start items-center w-full">
                                        <div className='flex gap-4 justify-start'>
                                            <text className='font-semibold text-green-600'>
                                                Competencia
                                            </text>
                                            <text>
                                                Liderazgo
                                            </text>
                                        </div>
                                        <Point />
                                        <div>14 de Febrero de 2023</div>
                                        <Point />

                                        <div className='flex h-5'>
                                            <Star color='#017F00' /> <Star color='#017F00' /><Star color='#017F00' /><Star color='#017F00' />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </main >

    )
}

export default page