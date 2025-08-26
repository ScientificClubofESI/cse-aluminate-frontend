import AllAlumniCards from "@/components/AllAlumni/AllAlumniCards";
import Filter from "@/components/AllAlumni/Filter";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SearchAlumni from "@/components/AllAlumni/searchAlumni";
import { useAlumni } from "@/utils/fetchData";
import Loading from "@/components/LOADING/Loading";

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
  const { data, isError, isLoading, isSuccess, error } = useAlumni(page);

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return <div>{error.message}</div>;
  // }
  const filteredAlumni = data?.content?.page.filter((alumni) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      alumni.fullName.toLowerCase().includes(searchLower) ||
      alumni.currentPosition.toLowerCase().includes(searchLower) ||
      alumni.description.toLowerCase().includes(searchLower) ||
      alumni.degree.toLowerCase().includes(searchLower) ||
      alumni.services.some((service) =>
        service.name.toLowerCase().includes(searchLower)
      ) 
      // ||
      // alumni.services.some((service) =>
      //   service.description.toLowerCase().includes(searchLower)
      // )
    );
  });

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1); // Reset to the first page when searching
  };

  // useEffect to update totalPages when data changes or when searching
  useEffect(() => {
    if (searchQuery && filteredAlumni) {
      // When searching, calculate pages based on filtered results
      setTotalPages(Math.ceil(filteredAlumni.length / 3));
    } else if (data?.content?.total) {
      // When not searching, use total from API
      setTotalPages(Math.ceil(data.content.total / 3));
    }
  }, [data, searchQuery, filteredAlumni]);

  // console.log("page size", data);

  return (
    <>
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
              filteredAlumni={filteredAlumni}
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
