import Image from 'next/image';
import React, { useState } from 'react'

const Service = ({ serv
}) => {
    const [open, setOpen] = useState(false);



    return (
        <div className=' w-max-w items-center gap-2 '>
            <div onClick={() => { setOpen(!open) }} className='flex gap-1 items-center'>
                <Image className={`w-6 h-6 ${open ? "rotate-0" : "-rotate-90"} transition duration-700`} width={10} height={10} src={"/arrow-drop-right.svg"} />

                <h3 className='font-Outfit p-1  text-Secondary-600  font-[300] text-[20px]'>
                    {serv.name}
                </h3>
            </div>
            <div className={`transition  duration-700 ${open ? "block" : "hidden"}  `}>

                <p className=' font-[300] text-[16px] text-neutral-700 px-10 py-2'>
                    {serv.description}
                </p>
            </div>
        </div>
    )
}

export default Service
