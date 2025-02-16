import React from 'react';
import AlumniCard from './alumniCard';
// import { useAlumni } from '@/utils/fetchData';
// import Loading from '@/components/LOADING/Loading';

const AllAlumniCards = ({ page, searchQuery , filteredAlumni}) => {
    // const { data, isError, isLoading, isSuccess, error } = useAlumni(page);

    // if (isLoading) {
    //     return <Loading />;
    // }

    // if (isError) {
    //     return <div>{error.message}</div>;
    // }

    // Filter alumni data based on searchQuery
    // const filteredAlumni = data?.content?.filter((alumni) => {
    //     const searchLower = searchQuery.toLowerCase();
    //     return (
    //         alumni.fullName.toLowerCase().includes(searchLower) ||
    //         alumni.currentPosition.toLowerCase().includes(searchLower) ||
    //         alumni.description.toLowerCase().includes(searchLower)
    //     );
    // });

    return (
        <section className='w-[95%] items-center justify-center mx-auto gap-7 flex flex-wrap'>
            {filteredAlumni?.length > 0 ? (
                filteredAlumni.map((alumni) => (
                    <AlumniCard key={alumni.id} {...alumni} />
                ))
            ) : (
                <div className="text-center w-full text-neutral-600 text-xl">
                    No alumni found matching your search.
                </div>
            )}
        </section>
    );
};

export default AllAlumniCards;