'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'
import ChatCard from '@/components/card/ChatCard'
import { Chat } from '@/types/Chat'

interface ChatQuery extends Chat {
  inscriptionLink: string
}

const page = () => {
  const router = useRouter()
  const { chats } = router.query
  const chatsToRender = chats as unknown as ChatQuery[]

  return (
    <main className='bg-purple-300 flex flex-col'>
      <div className='w-full border-b-8 border-purple-800 '>
        <img src="https://i.imgur.com/GK80zy9.png" alt="" className=' w-full h-[300px]' />
      </div>
      <div className="bg-white w-10/12 m-auto p-4 rounded-md mt-4 text-black text-center">
        <h2 className=' text-3xl font-bold'>
          Planed Schedule for the month
        </h2>
        <text>
          Click under the name to go to the Google Form to sign up!
        </text>
      </div>
      <div className="container p-8 lg:space-y-0 lg:pt-12 min-h-screen ">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 justify-center items-center ">
            <h2 className='font-bold text-5xl mb-4 text-black bg-white w-full p-4 text-center rounded-md'>Chats Virtuales</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {chatsToRender.map((chat, index: number) => {
                if (chat.kindOfChat === 'presencial') {
                  return <ChatCard key={index} chatName={chat.name} speaker={chat.speaker} level={chat.level} date={chat.date} hour={chat.startHour} inscriptionLink={chat.inscriptionLink} />
                }
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center ">
            <h2 className='font-bold text-5xl mb-4 text-black bg-white w-full p-4 text-center rounded-md'>Chats Presenciales</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {chatsToRender.map((chat, index: number) => {
                if (chat.kindOfChat === 'presencial') {
                  return <ChatCard key={index} chatName={chat.name} speaker={chat.speaker} level={chat.level} date={chat.date} hour={chat.startHour} inscriptionLink={chat.inscriptionLink} />
                }
              })}
            </div>
          </div>
          <div className="text-black text-lg font-semibold">
            ¡Inscribirse es un compromiso, no faltes al chat!
          </div>
        </div>
      </div>
    </main>
  )
}

export default page