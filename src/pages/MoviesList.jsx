import { Link } from "react-router-dom";
import { Card } from '../components/Card';
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
useEffect
export const MoviesList = ({ apiPath, title }) => {

    const { data } = useFetch(apiPath);
    useEffect(() => {
        document.title = `${title} / Cinemate`;
    })
    return (
        <div >
            <section className="max-w-1xl   mx-auto">
                <div className="flex justify-start flex-wrap other:justify-evenly lg:justify-evenly">
                    {data.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </div>
    );
};