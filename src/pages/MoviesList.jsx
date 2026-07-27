import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const MoviesList = ({ apiPath, title }) => {

    const { data, loading } = useFetch(apiPath);

    useEffect(() => {
        document.title = `${title} / Cinemate`;
    }, [title]);


    if (loading) {
        return (
            <section className="flex min-h-[400px] items-center justify-center">
                <div className="text-xl font-semibold text-gray-700 dark:text-white">
                    Loading movies...
                </div>
            </section>
        );
    }


    return (
        <section className="mx-auto max-w-7xl px-4">

            <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                {title}
            </h1>


            <div className="
                flex
                flex-wrap
                justify-center
                gap-5
                lg:justify-evenly
            ">

                {data?.map((movie) => (
                    <Card
                        key={movie.id}
                        movie={movie}
                    />
                ))}

            </div>

        </section>
    );
};