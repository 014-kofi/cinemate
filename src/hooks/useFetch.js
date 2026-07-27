import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
    const apiUrl = import.meta.env.VITE_APP_API_KEY;
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-UShttp://localhost:5173/movies/top&api_key=${apiUrl}&query=${queryTerm}`;
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        };

        if (url) {
            fetchMovies();
        }
    }, [url]);

    return { data };
};


//epi 11