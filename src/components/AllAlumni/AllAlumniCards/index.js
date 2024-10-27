import React from 'react'
import AlumniCard from './alumniCard'
import { useAlumni } from '@/utils/fetchData';
import Loading from '@/components/LOADING/Loading';



const AllAlumniCards = ({ page }) => {
    console.log(page)
    const { data, isError, isLoading, isSuccess, error } = useAlumni(page);
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <div>{...error.message}</div>
    }
    else {
        return (
            
            <section className='w-[95%] items-center justify-center mx-auto gap-7 flex flex-wrap'>
                {
                    data?.content?.map((alumni) => {
                        return <AlumniCard {...alumni} />
                    })
                }
            </section>
        )
    }

}

export default AllAlumniCards
