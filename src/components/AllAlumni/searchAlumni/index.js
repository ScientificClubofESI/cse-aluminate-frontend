import Image from 'next/image';
import React from 'react';

const SearchAlumni = ({ searchQuery, onSearch }) => {
    const handleInputChange = (e) => {
        onSearch(e.target.value); // Call onSearch with the new query
    };

    return (
        <div className='my-10 shadow-2 border-1 border-neutral-100 py-1 bg-white flex items-center max-w-[450px] mx-auto rounded-full px-2'>
            <input
                placeholder='Search...'
                className='flex-1 placeholder:font-Outfit text-[18px] font-Outfit font-[400] text-neutral-700 placeholder:text-neutral-400 placeholder:font-[400] placeholder:text-[18px] px-2 py-2 outline-none'
                value={searchQuery} // Controlled input
                onChange={handleInputChange} // Handle input change
            />
            <div className='px-3 py-2 rounded-full bg-Secondary-300'>
                <Image className='' src="/search-normal.svg" width={25} height={30} alt="Search" />
            </div>
        </div>
    );
};

export default SearchAlumni;