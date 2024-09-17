import AllAlumniCards from '@/components/AllAlumni/AllAlumniCards'
import Filter from '@/components/AllAlumni/Filter'
import Pagination from '@/components/AllAlumni/pagination/Pagination'
import SearchAlumni from '@/components/AllAlumni/searchAlumni'
import Link from 'next/link'
import React from 'react'

const AllALumni = () => {
    return (
        <>
            <div className='  justify-center items-center gap-2 flex mt-[300px]'>
                <div >
                    <SearchAlumni />
                </div>
                <div className=''>
                    <Filter />
                </div>
            </div>
            <AllAlumniCards />
            <Pagination />
        </>
    )
}

export default AllALumni
// "/" ==> home lending page 
// /allAlumni ==> all Alumni
// /allaALumni/alumn[]