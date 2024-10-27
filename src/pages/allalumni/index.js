import AllAlumniCards from '@/components/AllAlumni/AllAlumniCards'
import Filter from '@/components/AllAlumni/Filter'
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material';
import Link from 'next/link'
import React from 'react'
import SearchAlumni from '@/components/AllAlumni/searchAlumni';

const theme = createTheme({
    pallette: {
        hi: "#69E1CD"
    }
})

const AllALumni = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (

        <>
            <div >
                <div className='  justify-center items-center gap-2 text-2xl flex mt-[200px] my-10'>
                    <h1 className='font-[600] max-w-max mx-auto text-Primary-700 '>You Can Find All CSE Alumni Here !</h1>
                </div>
                <SearchAlumni />
                <AllAlumniCards page={page} />
                <div className='mx-auto max-w-max my-10'>
                    <ThemeProvider theme={theme}>
                        <Pagination page={page} className='custom-pagination' onChange={handleChange} count={10} />
                    </ThemeProvider>
                </div>
            </div>
        </>
    )
}

export default AllALumni
// "/" ==> home lending page 
// /allAlumni ==> all Alumni
// /allaALumni/alumn[]