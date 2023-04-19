'use client'
import Input from '@/components/forms/Inputs';
import { Workshop } from '@/types/Workshop';
import React from 'react'
import { useForm } from 'react-hook-form';
import WORKSHOP_INPUT_ELEMENTS from '@/components/forms/data/workshopInputs';

const page = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset, getValues, } = useForm();

    // const editEntry = (inputId: shortUUID.SUUID) => {
    //     //FIRST,GET THE VALUES FROM THE STATE BASED ON ITS ID
    //     const data = workshopData.filter((workshop: Workshop) => workshop.id === inputId)
    //     const { name, pensum, date, startHour, endHour, speaker, numberOfParticipants, kindOfWorkshop, platform, avaaYear, description } = data[0];
    //     //SECOND, PUT THE DATA IN THE FORM  
    //     reset({
    //         name,
    //         pensum,
    //         date,
    //         startHour,
    //         endHour,
    //         speaker,
    //         numberOfParticipants,
    //         kindOfWorkshop,
    //         platform,
    //         avaaYear,
    //         description
    //     })

    //     //THEN, DELETE THE old entry
    //     deleteEntry(inputId);
    // }


    const createWorkshop = () => {
        // console.log(data)

    }


    return (
        <div className="flex">
            <div className='w-1/2 m-4 flex flex-col border-r-0 border-emerald-700 opacity-75'>
                {/* {submited && <List workshopData={workshopData} deleteEntry={deleteEntry} editEntry={editEntry} />}
                {workshopData.length >= 1 && <button onClick={showModal} className='bg-green-600 text-white rounded-lg col-span-2 max-w-fit px-5 py-2 self-center mt-4' >
                    Enviar Talleres 
                </button>} */}
            </div>
            <div className='w-1/2 p-4 '>
                <form onSubmit={handleSubmit(createWorkshop)} className="grid gap-6 md:grid-cols-2 grid-rows-2 caret-green-500 text-slate-300">
                    {WORKSHOP_INPUT_ELEMENTS.map((field) => {
                        return (
                            <Input {...field} key={field.title} register={register} />
                        )
                    })}
                    <button type="submit" className='mx-auto text-white bg-gradient-to-br from-green-500 via-emerald-400 to-emerald-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' >
                        Crear Taller
                    </button>
                </form>
            </div>
            {/* 
            <div id="info-popup" tabIndex={-1} className={`${modalopen ? 'flex' : "hidden"}  items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}>
                <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
                  //aqui va el modal component
                </div>
            </div > */}

        </div >
    )
}

export default page