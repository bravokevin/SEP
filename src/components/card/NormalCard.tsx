import React from 'react'

type CardProps = {
    stat: number
    text: string
    bg: string
    Icon: React.FC
}


const NormalCard = ({ stat, text, bg, Icon }: CardProps) => {
    return (
        <div className={`flex flex-col bg-gradient-to-br gap-4 h-full rounded-lg relative overflow-hidden w-full shadow-lg z-10 ${bg} p-4`}>
            <div className="flex flex-row justify-between z-10 min-w-fit items-start">
                <div className="text-white ">
                    <p className="leading-tight text-5xl font-medium">
                        {stat}
                    </p>
                    <p className="leading-snug text-sm flex-grow">
                        {text}
                    </p>
                </div>
            </div>
            <div className='absolute opacity-20 text-[190px] -z-10 w-32 -ml-9 -mt-1'>
                <Icon />
            </div>
        </div>
    )
}

export default NormalCard;