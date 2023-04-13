import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '@/../public/proexcelencia.png'
import { SIDEBAR_ACTIVITIES_ACTIONS } from '../data'
import DropdownButton from '../DropdownButton'
import SidebarSeparator from './SidebarSeparator'
// ${isOpen ? "" : "hidden"} 
const Sidebar = () => {
    return (
        <aside className={`flex flex-col gap-4 justify-start items-center w-72 bg-white py-8 px-2 bg-gradient-to-b dark:from-emerald-950 dark:to-slate-950 `}>
            <div className='flex items-center mb-2'>
                <Link href="/dashboard" >
                    <Image src={logo} width={180} alt="Logo Proexcelencia" />
                </Link>
            </div>
            <div className='w-full flex flex-col justify-between'>
                <DropdownButton buttonName="Panel general" icon='adfsads' itemList={[{ link: '', name: 'Estadisticas generales' }]} />
            </div>
            <SidebarSeparator text='Actividades' />
            <div className='w-full flex flex-col justify-between'>
                {SIDEBAR_ACTIVITIES_ACTIONS.map(({ buttonName, icon, itemList }) => {
                    return (
                        <DropdownButton key={buttonName} buttonName={buttonName} icon={icon} itemList={itemList} />
                    )
                })}
            </div>
            <SidebarSeparator text='Controles de administrador' />
            {/* 
                <ul className=" space-y-2 ">
                    {SIDEBAR_DATABSE_ELEMENTS.map(({ buttonName, icon, itemList }) => {
                        return (
                            <DropdownButton key={buttonName} buttonName={buttonName} icon={icon} itemList={itemList} />
                        )
                    })}
                </ul> */}
        </aside >
    )
}

export default Sidebar