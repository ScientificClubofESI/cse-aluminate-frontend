import AllAlumniCards from '@/components/AllAlumni/AllAlumniCards'
import Filter from '@/components/AllAlumni/Filter'
import Pagination from '@/components/AllAlumni/pagination/Pagination'
import SearchAlumni from '@/components/AllAlumni/searchAlumni'
import Link from 'next/link'
import React from 'react'

const AllALumni = () => {
    return (
        <>
            <SearchAlumni />
            <Filter />
            <AllAlumniCards />
            <Pagination />
        </>
    )
}

export default AllALumni
// "/" ==> home lending page 
// /allAlumni ==> all Alumni
// /allaALumni/alumn[]