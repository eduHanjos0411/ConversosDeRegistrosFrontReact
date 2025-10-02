import axios, { type AxiosPromise } from "axios"
import type { Registro } from "../interfaces/Registro"
import { useQuery } from "@tanstack/react-query"

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<Registro[]> => {
    const response = axios.get(API_URL + '/registros')
    
    return response
}

export function useRegistroData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['registro-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}