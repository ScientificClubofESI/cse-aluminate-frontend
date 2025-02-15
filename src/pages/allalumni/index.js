import AllAlumniCards from '@/components/AllAlumni/AllAlumniCards';
import Filter from '@/components/AllAlumni/Filter';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import SearchAlumni from '@/components/AllAlumni/searchAlumni';

const theme = createTheme({
    palette: {
        primary: {
            main: "#69E1CD", // Corrected typo: "pallette" -> "palette"
        },
    },
});

const AllALumni = () => {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleSearch = (query) => {
        setSearchQuery(query); 
        setPage(1); // Reset to the first page when searching
    };

    return (
        <>
            <div>
                <div className='justify-center items-center gap-2 text-2xl flex mt-[200px] my-10'>
                    <h1 className='font-[600] max-w-max mx-auto text-Primary-700'>
                        You Can Find All CSE Alumni Here !
                    </h1>
                </div>
                {/* Pass searchQuery and handleSearch to SearchAlumni */}
                <SearchAlumni searchQuery={searchQuery} onSearch={handleSearch} />
                {/* Pass searchQuery to AllAlumniCards */}
                <AllAlumniCards page={page} searchQuery={searchQuery} />
                <div className='mx-auto max-w-max my-10'>
                    <ThemeProvider theme={theme}>
                        <Pagination
                            page={page}
                            className='custom-pagination'
                            onChange={handleChange}
                            count={10}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </>
    );
};

export default AllALumni;