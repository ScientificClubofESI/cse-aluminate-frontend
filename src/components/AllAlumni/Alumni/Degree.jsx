import React from 'react'

const Degree = ({ degree }) => {
    const niveau = degree === "Student" ? 1 : 3;
    const degreeArray = [1, 2, 3, 4]
    const degreeArray2 = ["Student", "Professional", "Professional", "Academic"]
    return (
        <div className='my-10 flex  flex-col mx-auto w-[400px]'>
            <h1 className='text-Primary-700 w-full border-b-[1px] p-1 border-b-Primary-700 font-Outfit text-[20px] font-[500]'>Degree</h1>
            <div className='flex mt-3 mx-auto items-center'>
                {
                    degreeArray.map((e) => {
                        const isEqual = niveau === e
                        const isAbove = e > niveau;
                        return (
                            <div className='flex gap-0 items-center'>
                                <div className={`${isEqual ? "w-[22px] h-[22px]" : "w-[12px] h-[12px]"} ${isAbove ? "bg-neutral-200" : "bg-Secondary-500"} rounded-full bg-Secondary-500`}></div>
                                {e !== 4 && <div className={`${e === 4 ? "hidden" : ""} ${isAbove || isEqual ? "bg-neutral-200" : "bg-Secondary-500"} h-[3px] w-[80px] bg-Secondary-500`}></div>}
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex w-[90%] mx-auto justify-between'>
                {
                    degreeArray2.map((e) => {
                        return (<h3 className=' font-Outfit  text-center text-[13px] font-[300]'>{e}</h3>)
                    })
                }
            </div>
        </div>
    )
}

export default Degree
