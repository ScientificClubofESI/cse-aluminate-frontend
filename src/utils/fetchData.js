import { useQuery } from "@tanstack/react-query"
import { getAllAlumni, getAlumniById , getPopularServices} from "./API"


export const useAlumni = (page) => {
    return useQuery({
        queryKey: ['allAlumni'],
        queryFn: () => getAllAlumni(page)
    })
}

export const useAlumniId = (id) => {
    return useQuery({
        queryKey: ['allAlumni', id],
        queryFn: () => getAlumniById(id)
    })
}

export const useServices = () => {
    return useQuery({
        queryKey: ['popularService'],
        queryFn: ()=> getPopularServices()
    })
}

