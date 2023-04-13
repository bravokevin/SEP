import React from 'react'
import './card.css';
const Card = ({ data, text, bg, Icon, cardButtonBg }) => {
    return (
        <div className={`flex bg-gradient-to-br flex-col gap-4 h-full rounded-lg relative overflow-hidden w-full shadow-lg z-10 ${bg} p-4`}>
            <div className="flex flex-row justify-between z-10 min-w-fit items-start">
                <div className="text-white ">
                    <p className="leading-tight text-5xl font-medium">
                        {data}
                    </p>
                    <p className="leading-snug text-sm flex-grow">
                        {text}
                    </p>
                </div>
                <div className="inline-flex justify-between max-w-[190px] justify-self-end">
                    <button className={`${cardButtonbg} px-1 py-2 fonr-semibold rounded-sm text-sm w-16 h-8 capitalize pointer m-auto`}>
                        Mes
                    </button>
                    <button className={`${cardButtonbg} px-1 py-2 fonr-semibold rounded-sm text-sm w-16 h-8 capitalize pointer m-auto`}>
                        Año
                    </button>
                </div>
            </div>
            <div className='absolute opacity-70 text-[190px] -z-10 w-48'>
                <Icon />
            </div>
        </div>
    )
}

export default Card