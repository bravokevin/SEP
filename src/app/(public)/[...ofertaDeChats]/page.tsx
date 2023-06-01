import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='bg-purple-300 flex flex-col'>
      <div className='w-full border-b-8 border-purple-800 '>
        <img src="https://i.imgur.com/GK80zy9.png" alt=""  className=' w-full h-[300px]'/>
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

              <div className='flex gap-4 bg-white p-4 rounded-md w-[420px] items-center justify-center overflow-hidden text-black '>
                <div className="flex flex-col gap-2 items-center">
                  < text className='font-bold text-2xl' >
                    Let's learn English
                  </text >
                  <span className=' flex gap-1'>
                    <text className=''>
                      Dicatado por:
                    </text>
                    <text className='font-bold'>
                      Jennipher Dolinski
                    </text>
                  </span>
                  <span className=' flex gap-1'>
                    <text className=''>
                      Nivel:
                    </text>
                    <text className='font-bold'>
                      Intermedio
                    </text>
                  </span>
                  <span className=' flex gap-1 font-bold'>
                    <text className=''>
                      Sabado 12 de Junio
                    </text>
                    <text className=''>
                      a las 7:00 pm
                    </text>
                  </span>
                  <div className='absolute -ml-40'>
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
                    </svg>
                  </div>
                  <div className='h-6'>
                    <button type="button" className="absolute w-[420px] -ml-[210px]  text-white bg-purple-800  font-medium rounded-b-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Inscribirse</button>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 bg-white p-4 rounded-md w-[420px] items-center justify-center overflow-hidden text-black '>
                <div className="flex flex-col gap-2 items-center">
                  < text className='font-bold text-2xl' >
                    Let's learn English
                  </text >
                  <span className=' flex gap-1'>
                    <text className=''>
                      Dicatado por:
                    </text>
                    <text className='font-bold'>
                      Jennipher Dolinski
                    </text>
                  </span>
                  <span className=' flex gap-1'>
                    <text className=''>
                      Nivel:
                    </text>
                    <text className='font-bold'>
                      Intermedio
                    </text>
                  </span>
                  <span className=' flex gap-1 font-bold'>
                    <text className=''>
                      Sabado 12 de Junio
                    </text>
                    <text className=''>
                      a las 7:00 pm
                    </text>
                  </span>
                  <div className='absolute -ml-40'>
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
                    </svg>
                  </div>
                  <div className='h-6'>
                    <button type="button" className="absolute w-[420px] -ml-[210px]  text-white bg-purple-800  font-medium rounded-b-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Inscribirse</button>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 bg-white p-4 rounded-md w-[420px] items-center justify-center overflow-hidden text-black '>
                <div className="flex flex-col gap-2 items-center">
                  < text className='font-bold text-2xl' >
                    Let's learn English
                  </text >
                  <span className=' flex gap-1'>
                    <text className=''>
                      Dicatado por:
                    </text>
                    <text className='font-bold'>
                      Jennipher Dolinski
                    </text>
                  </span>
                  <span className=' flex gap-1'>
                    <text className=''>
                      Nivel:
                    </text>
                    <text className='font-bold'>
                      Intermedio
                    </text>
                  </span>
                  <span className=' flex gap-1 font-bold'>
                    <text className=''>
                      Sabado 12 de Junio
                    </text>
                    <text className=''>
                      a las 7:00 pm
                    </text>
                  </span>
                  <div className='absolute -ml-40'>
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
                    </svg>
                  </div>
                  <div className='h-6'>
                    <button type="button" className="absolute w-[420px] -ml-[210px]  text-white bg-purple-800  font-medium rounded-b-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Inscribirse</button>
                  </div>
                </div>
              </div>


            </div>


          </div>
          <div className="flex flex-col gap-4 justify-center items-center ">
            <h2 className='font-bold text-5xl mb-4 text-black bg-white w-full p-4 text-center rounded-md'>Chats Presenciales</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className='flex gap-4 bg-white p-4 rounded-md w-[420px] items-center justify-center overflow-hidden text-black '>
                <div className="flex flex-col gap-2 items-center ">
                  < text className='font-bold text-2xl' >
                    Let's learn English
                  </text >
                  <span className=' flex gap-1'>
                    <text className=''>
                      Dicatado por:
                    </text>
                    <text className='font-bold'>
                      Jennipher Dolinski
                    </text>
                  </span>
                  <span className=' flex gap-1'>
                    <text className=''>
                      Nivel:
                    </text>
                    <text className='font-bold'>
                      Intermedio
                    </text>
                  </span>
                  <span className=' flex gap-1 font-bold'>
                    <text className=''>
                      Sabado 12 de Junio
                    </text>
                    <text className=''>
                      a las 7:00 pm
                    </text>
                  </span>
                  <div className='absolute -ml-40'>
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
                    </svg>
                  </div>
                  <div className='h-6'>
                    <button type="button" className="absolute w-[420px] -ml-[210px]  text-white bg-purple-800  font-medium rounded-b-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Inscribirse</button>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 bg-white p-4 rounded-md w-[420px] items-center justify-center overflow-hidden text-black '>
                <div className="flex flex-col gap-2 items-center">
                  < text className='font-bold text-2xl' >
                    Let's learn English
                  </text >
                  <span className=' flex gap-1'>
                    <text className=''>
                      Dicatado por:
                    </text>
                    <text className='font-bold'>
                      Jennipher Dolinski
                    </text>
                  </span>
                  <span className=' flex gap-1'>
                    <text className=''>
                      Nivel:
                    </text>
                    <text className='font-bold'>
                      Intermedio
                    </text>
                  </span>
                  <span className=' flex gap-1 font-bold'>
                    <text className=''>
                      Sabado 12 de Junio
                    </text>
                    <text className=''>
                      a las 7:00 pm
                    </text>
                  </span>
                  <div className='absolute -ml-40'>
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
                    </svg>
                  </div>
                  <div className='h-6'>
                    <button type="button" className="absolute w-[420px] -ml-[210px]  text-white bg-purple-800  font-medium rounded-b-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Inscribirse</button>
                  </div>
                </div>
              </div>
              <div className='flex gap-4 bg-white p-4 rounded-md w-[420px] items-center justify-center overflow-hidden text-black '>
                <div className="flex flex-col gap-2 items-center">
                  < text className='font-bold text-2xl' >
                    Let's learn English
                  </text >
                  <span className=' flex gap-1'>
                    <text className=''>
                      Dicatado por:
                    </text>
                    <text className='font-bold'>
                      Jennipher Dolinski
                    </text>
                  </span>
                  <span className=' flex gap-1'>
                    <text className=''>
                      Nivel:
                    </text>
                    <text className='font-bold'>
                      Intermedio
                    </text>
                  </span>
                  <span className=' flex gap-1 font-bold'>
                    <text className=''>
                      Sabado 12 de Junio
                    </text>
                    <text className=''>
                      a las 7:00 pm
                    </text>
                  </span>
                  <div className='absolute -ml-40'>
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
                    </svg>
                  </div>
                  <div className='h-6'>
                    <button type="button" className="absolute w-[420px] -ml-[210px]  text-white bg-purple-800  font-medium rounded-b-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Inscribirse</button>
                  </div>
                </div>
              </div>
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