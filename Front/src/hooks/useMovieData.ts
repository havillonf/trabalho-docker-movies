import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { MovieData } from '../interface/MovieData';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const API_URL = `${baseURL}/movie`;
//const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<MovieData[]> => {
    const response = axios.get(API_URL);
    return response;
}

export function useMovieData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['movie-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}