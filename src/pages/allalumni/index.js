import AllAlumniCards from "@/components/AllAlumni/AllAlumniCards";
import Filter from "@/components/AllAlumni/Filter";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SearchAlumni from "@/components/AllAlumni/searchAlumni";
import { useAlumni } from "@/utils/fetchData";
import Loading from "@/components/LOADING/Loading";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: {
      main: "#69E1CD", // Corrected typo: "pallette" -> "palette"
    },
  },
});

const AllALumni = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get all alumni data without pagination
  const { data: allData, isError, isLoading, isSuccess, error } = useAlumni();

  // Filter all alumni data based on search query
  const filteredAlumni = allData?.content?.filter((alumni) => {
    if (!searchQuery) return true; // Show all if no search query
    
    const searchLower = searchQuery.toLowerCase();
    return (
      alumni.fullName.toLowerCase().includes(searchLower) ||
      alumni.currentPosition.toLowerCase().includes(searchLower) ||
      alumni.description.toLowerCase().includes(searchLower) ||
      alumni.degree.toLowerCase().includes(searchLower) ||
      alumni.services.some((service) =>
        service.name.toLowerCase().includes(searchLower)
      )
    );
  }) || [];

  // Paginate the filtered results
  const paginatedAlumni = filteredAlumni.slice((page - 1) * 3, page * 3);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1); // Reset to the first page when searching
  };

  // useEffect to update totalPages when data changes or when searching
  useEffect(() => {
    if (filteredAlumni) {
      // Calculate pages based on filtered results
      setTotalPages(Math.ceil(filteredAlumni.length / 3));
    }
  }, [filteredAlumni]);

  // console.log("page size", data);

  return (
    <>
      <Head>
        <title>All Alumni - CSE Aluminate | Browse ESI Computer Science Graduates</title>
        <meta 
          name="description" 
          content="Browse and connect with all ESI Computer Science Engineering alumni. Search by skills, services, degrees, and expertise to find the right professional for your needs." 
        />
        <meta 
          name="keywords" 
          content="ESI alumni directory, CSE graduates, computer science professionals, alumni search, engineering talent, tech experts\" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="All Alumni - CSE Aluminate | Browse ESI Computer Science Graduates" />
        <meta 
          property="og:description" 
          content="Browse and connect with all ESI Computer Science Engineering alumni. Search by skills, services, degrees, and expertise." 
        />
        <meta property="og:image" content="/SEOpage.png" />
        <meta property="og:url" content="https://cse-aluminate.cse.club/allalumni" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Alumni - CSE Aluminate" />
        <meta 
          name="twitter:description" 
          content="Browse and connect with all ESI Computer Science Engineering alumni." 
        />
        <meta name="twitter:image" content="/SEOpage.png" />
        
        <link rel="canonical" href="https://cse-aluminate.cse.club/allalumni" />
      </Head>
      
      <div>
        <div className="justify-center items-center gap-2 text-2xl flex mt-[200px] my-10">
          <h1 className="font-[600] max-w-max mx-auto text-Primary-700">
            You Can Find All CSE Alumni Here !
          </h1>
        </div>
        {/* Pass searchQuery and handleSearch to SearchAlumni */}
        <SearchAlumni searchQuery={searchQuery} onSearch={handleSearch} />
        {/* Pass searchQuery to AllAlumniCards */}
        {isLoading ? <div className="flex items-center justify-center text-center">Loading...</div> : 
        isError ? <div className="flex items-center justify-center text-center">{error.message}</div> :
        (
          <>
            <AllAlumniCards
              page={page}
              searchQuery={searchQuery}
              filteredAlumni={paginatedAlumni}
            />
            <div className="mx-auto max-w-max my-10">
              <ThemeProvider theme={theme}>
                <Pagination
                  page={page}
                  className="custom-pagination"
                  onChange={handleChange}
                  count={totalPages}
                />
              </ThemeProvider>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllALumni;
