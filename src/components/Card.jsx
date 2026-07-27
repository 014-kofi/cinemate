import { Link } from "react-router-dom";
import notfound from "../assets/noImagefound.jpg";

export const Card = ({ movie }) => {
    const {
        id,
        original_title,
        overview,
        release_date,
        poster_path,
        vote_average,
    } = movie;

    const image = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : notfound;

    const releaseYear = release_date
        ? new Date(release_date).getFullYear()
        : "N/A";

    return (
        <Link
            to={`/movie/${id}`}
            className="group m-3 flex h-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-500/20 dark:border-gray-700 dark:bg-slate-900"
        >
            {/* Poster */}
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={`${original_title} movie poster`}
                    loading="lazy"
                    className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Rating */}
                <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-yellow-400 backdrop-blur-md">
                    ⭐ {vote_average?.toFixed(1)}
                </div>

                {/* Release Year */}
                <div className="absolute bottom-3 left-3 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {releaseYear}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <h2 className="line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {original_title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {overview || "No description available."}
                </p>

                {/* Divider */}
                <div className="my-5 border-t border-gray-200 dark:border-gray-700" />

                {/* Button */}
                <div className="mt-auto flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-blue-700">
                    View Details

                    <svg
                        className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    );
};