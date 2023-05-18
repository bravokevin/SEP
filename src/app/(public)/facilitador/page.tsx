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
                <div className='bg-white flex items-center justify-start '>
                    <div className="bg-gradient-to-br from-green-600  to-emerald-800 w-1/3 p-8 min-h-screen shadow-2xl flex flex-col justify-start items-center">
                        <div className='flex items-center justify-center md:justify-start rounded-full bg-slate-500 w-32 h-32  shadow-2xl p-4 border-4 '>
                            <Image
                                src="/avaa.png"
                                alt="Vercel Logo"
                                width={100}
                                height={24}
                                priority
                                className='rounded-full'
                            />
                        </div>
                        <div className="">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className='text-3xl text-black font-semibold my-2'>
                                    Luis Lopez
                                </h1>
                                <div className='flex gap-2'>
                                    <span className='text-base  font-semibold max-w-2xl border-r-2 border-green-500 pr-2'>
                                        Sociedad Bastiat
                                    </span>
                                    <span className='text-base max-w-2xl'>
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
                    </div>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg w-3/4">
                        <div className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full py-2 px-4'>
                            talleres realizados
                        </div>
                        <div className="flex flex-col">
                            <ul className='w-full '>
                                <li className='py-2 px-4  w-full h-auto'>
                                    <a href="/courses/wso2-fast-enterprise-application-development">
                                        <div className="flex gap-8 justify-start items-center">
                                            <div className="justify-center items-center">
                                                <div className="text-xl text-black">Liderazgo Social</div>
                                                <div className='flex gap-1 text-xs text-black'>
                                                    <text className='font-semibold text-green-600'>
                                                        Taller
                                                    </text>
                                                    <text>
                                                        Virtual
                                                    </text>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="text-black text-2xl">
                                                    30
                                                </div>
                                                <div className='text-black'>Becarios</div>
                                            </div>
                                            <div className='flex gap-1 text-xs text-black flex-col'>
                                                <text className='font-semibold text-green-600'>
                                                    Taller asociado al
                                                </text>
                                                <text>
                                                    Liderazgo
                                                </text>
                                            </div>
                                            <div>
                                                <div className=" flex gap-4 justify-start items-center w-full">
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='text-black'>Realizado el</div>
                                                        <div className="text-black text-lg">
                                                            14/02/2023
                                                        </div>
                                                    </div>
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='flex h-5'>
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                        </div>
                                                        <div className='text-black'>Clasificación</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className='py-2 px-4  w-full h-auto'>
                                    <a href="/courses/wso2-fast-enterprise-application-development">
                                        <div className="flex gap-8 justify-start items-center">
                                            <div className="justify-center items-center">
                                                <div className="text-xl text-black">Liderazgo Social</div>
                                                <div className='flex gap-1 text-xs text-black'>
                                                    <text className='font-semibold text-green-600'>
                                                        Taller
                                                    </text>
                                                    <text>
                                                        Virtual
                                                    </text>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="text-black text-2xl">
                                                    30
                                                </div>
                                                <div className='text-black'>Becarios</div>
                                            </div>
                                            <div className='flex gap-1 text-xs text-black flex-col'>
                                                <text className='font-semibold text-green-600'>
                                                    Taller asociado al
                                                </text>
                                                <text>
                                                    Liderazgo
                                                </text>
                                            </div>
                                            <div>
                                                <div className=" flex gap-4 justify-start items-center w-full">
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='text-black'>Realizado el</div>
                                                        <div className="text-black text-lg">
                                                            14/02/2023
                                                        </div>
                                                    </div>
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='flex h-5'>
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                        </div>
                                                        <div className='text-black'>Clasificación</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className='py-2 px-4  w-full h-auto'>
                                    <a href="/courses/wso2-fast-enterprise-application-development">
                                        <div className="flex gap-8 justify-start items-center">
                                            <div className="justify-center items-center">
                                                <div className="text-xl text-black">Liderazgo Social</div>
                                                <div className='flex gap-1 text-xs text-black'>
                                                    <text className='font-semibold text-green-600'>
                                                        Taller
                                                    </text>
                                                    <text>
                                                        Virtual
                                                    </text>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="text-black text-2xl">
                                                    30
                                                </div>
                                                <div className='text-black'>Becarios</div>
                                            </div>
                                            <div className='flex gap-1 text-xs text-black flex-col'>
                                                <text className='font-semibold text-green-600'>
                                                    Taller asociado al
                                                </text>
                                                <text>
                                                    Liderazgo
                                                </text>
                                            </div>
                                            <div>
                                                <div className=" flex gap-4 justify-start items-center w-full">
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='text-black'>Realizado el</div>
                                                        <div className="text-black text-lg">
                                                            14/02/2023
                                                        </div>
                                                    </div>
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='flex h-5'>
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                        </div>
                                                        <div className='text-black'>Clasificación</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className='py-2 px-4  w-full h-auto '>
                                    <a href="/courses/wso2-fast-enterprise-application-development">
                                        <div className="flex gap-8 justify-start items-center">
                                            <div className="justify-center items-center">
                                                <div className="text-xl text-black">Liderazgo Social</div>
                                                <div className='flex gap-1 text-xs text-black'>
                                                    <text className='font-semibold text-green-600'>
                                                        Taller
                                                    </text>
                                                    <text>
                                                        Virtual
                                                    </text>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="text-black text-2xl">
                                                    30
                                                </div>
                                                <div className='text-black'>Becarios</div>
                                            </div>
                                            <div className='flex gap-1 text-xs text-black flex-col'>
                                                <text className='font-semibold text-green-600'>
                                                    Taller asociado al
                                                </text>
                                                <text>
                                                    Liderazgo
                                                </text>
                                            </div>
                                            <div>
                                                <div className=" flex gap-4 justify-start items-center w-full">
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='text-black'>Realizado el</div>
                                                        <div className="text-black text-lg">
                                                            14/02/2023
                                                        </div>
                                                    </div>
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='flex h-5'>
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                        </div>
                                                        <div className='text-black'>Clasificación</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className='py-2 px-4  w-full h-auto'>
                                    <a href="/courses/wso2-fast-enterprise-application-development">
                                        <div className="flex gap-8 justify-start items-center">
                                            <div className="justify-center items-center">
                                                <div className="text-xl text-black">Liderazgo Social</div>
                                                <div className='flex gap-1 text-xs text-black'>
                                                    <text className='font-semibold text-green-600'>
                                                        Taller
                                                    </text>
                                                    <text>
                                                        Virtual
                                                    </text>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="text-black text-2xl">
                                                    30
                                                </div>
                                                <div className='text-black'>Becarios</div>
                                            </div>
                                            <div className='flex gap-1 text-xs text-black flex-col'>
                                                <text className='font-semibold text-green-600'>
                                                    Taller asociado al
                                                </text>
                                                <text>
                                                    Liderazgo
                                                </text>
                                            </div>
                                            <div>
                                                <div className=" flex gap-4 justify-start items-center w-full">
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='text-black'>Realizado el</div>
                                                        <div className="text-black text-lg">
                                                            14/02/2023
                                                        </div>
                                                    </div>
                                                    <Point />
                                                    <div className="flex flex-col justify-center items-center ">
                                                        <div className='flex h-5'>
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                            <Star color='#017F00' />
                                                        </div>
                                                        <div className='text-black'>Clasificación</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main >

    )
}

export default page