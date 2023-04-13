import Card from '@/components/dashboard/Card'
import React from 'react'
import { workshopIcon } from '@/assets/svgs'
const CARD_CONTENT = [
    {
        icon: workshopIcon,
        text: "Talleres realizados",
        number: "15",
        bg: "bg-gradient-to-r from-blue-700  to-indigo-900",
        cardButtonBg: "bg-indigo-950 active:bg-blue-700"
    },
    {
        icon: workshopIcon,
        text: "Chats Realizados",
        number: "20",
        bg: "bg-gradient-to-r from-red-500  to-red-900",
        cardButtonBg: "bg-indigo-950 active:bg-blue-700"

    },
    {
        icon: workshopIcon,
        text: "Horas de voluntariado realizadas",
        number: "70",
        bg: " from-green-600  to-emerald-800",
        cardButtonBg: "bg-indigo-950 active:bg-blue-700"

    },
    {
        icon: workshopIcon,
        text: "Becarios activos",
        number: "213",
        bg: "from-yellow-500  to-yellow-700",
        cardButtonBg: "bg-indigo-950 active:bg-blue-700 hover:bg-blue-700"
    },
]
const page = () => {
    return (
        <div className='flex flex-row md:flex-col gap-4 h-full w-full'>
            <div className="flex gap-4 items-center h-1/4">
                {CARD_CONTENT.map(({ icon, text, number, bg, cardButtonBg }) => {
                    return (
                        <Card key={text} data={number} Icon={icon} text={text} bg={bg} cardButtonBg={cardButtonBg} />
                    )
                })}
            </div>
        </div>
        /* 
                 <div className="flex gap-4 pb-2 items-center h-48">
                <div className="w-[56rem] flex gap-4 justify-start">
                    {CARD_CONTENT.map(({ icon, text, number, bg }) => {
                        return (
                            <Card data={number} icon={icon} text={text} bg={bg} />
                        )
                    })}
                </div>
            </div>

            <div className="grid grid-cols-[minmax(45rem,auto)_28rem] gap-4">
                <div className="rounded-lg shadow-lg p-4 bg-white">
                    <Calendar />
                </div>
                <div className="rounded-lg shadow-lg p-4 bg-white">
                    <div className="flex items-center justify-center mb-4 mt-4 text-center ">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Proximas actividades✌️</h5>
                    </div>
                    <div className="flow-root max-w-[24rem]">
                        <DashboardList data={exampleData} />
                    </div>
                </div>
            </div> */
    )
}

export default page