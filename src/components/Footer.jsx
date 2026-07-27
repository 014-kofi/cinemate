import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-950">

            <div className="
                mx-auto
                flex
                max-w-screen-xl
                flex-col
                gap-6
                px-6
                py-8
                md:flex-row
                md:items-center
                md:justify-between
            ">

                {/* Brand */}
                <div>
                    <Link
                        to="/"
                        className="
                            text-xl
                            font-bold
                            text-gray-900
                            transition
                            hover:text-blue-600
                            dark:text-white
                            dark:hover:text-blue-400
                        "
                    >
                        🎬 Cinemate
                    </Link>

                    <p className="
                        mt-2
                        max-w-sm
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                    ">
                        Discover movies, explore details, and find your next
                        favorite film.
                    </p>

                    <p className="
                        mt-3
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                    ">
                        © {new Date().getFullYear()} Cinemate. All Rights Reserved.
                    </p>
                </div>


                {/* Links */}
                <ul className="
                    flex
                    flex-wrap
                    gap-5
                    text-sm
                    font-medium
                    text-gray-500
                    dark:text-gray-400
                ">

                    <li>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                transition
                                hover:text-pink-500
                            "
                        >
                            Instagram
                        </a>
                    </li>


                    <li>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                transition
                                hover:text-blue-600
                            "
                        >
                            Facebook
                        </a>
                    </li>


                    <li>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                transition
                                hover:text-sky-500
                            "
                        >
                            Twitter
                        </a>
                    </li>


                    <li>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                transition
                                hover:text-gray-900
                                dark:hover:text-white
                            "
                        >
                            Github
                        </a>
                    </li>

                </ul>

            </div>

        </footer>
    );
};