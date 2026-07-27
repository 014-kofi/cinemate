import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"
import { Card } from "../components/Card"

export const Search = ({ apiPath, }) => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams);
    const queryTerm = searchParams.get("q")
    const { data } = useFetch(apiPath, queryTerm);

    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-700 dark:text-white">{data.length === 0 ? `No result founf ${queryTerm}` : `result for '${queryTerm}'`} </p>
            </section>
            <div >
                <section className="max-w-7xl mx-auto py-7">
                    <div className="flex justify-start flex-wrap ">
                        {data.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
