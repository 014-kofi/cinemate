import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/cinema.png";
import { useEffect, useState, } from "react";

export const Header = () => {
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);


    const activeClass =
        "text-base block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-emerald-500";

    const inactiveClass =
        "text-base block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    const handleSubmit = (event) => {
        event.preventDefault();
        const queryTerm = event.target.search.value;
        event.target.reset();
        return navigate(`/search?q=${queryTerm}`)
    }

    return (
        <header>
            <nav className="bg-white  dark:bg-gray-900  border-gray-200 px-2 py-2  dark:border-b-1 dark:font-white ">

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3"
                    >
                        <img
                            src={logo}
                            className="h-8"
                            alt="Cinema Logo"
                        />

                        <span className="text-4xl font-semibold whitespace-nowrap dark:text-white">
                            Cinema
                        </span>
                    </Link>



                    <div className="flex items-center md:order-2">


                        {/* Desktop Search */}
                        <div className="relative hidden md:block mr-3">

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>

                            </div>

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search..."
                                    className="block w-64 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                                focus:ring-blue-500 focus:border-blue-500 
                                dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </form>


                        </div>



                        {/* Dark Mode Button */}
                        <button
                            type="button"
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        >

                            {darkMode ? (

                                // Sun
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-3.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    />
                                </svg>

                            ) : (

                                // Moon
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21.752 15.002A9.718 9.718 0 0112.75 21C7.365 21 3 16.635 3 11.25c0-3.86 2.238-7.198 5.48-8.78a9.75 9.75 0 0013.272 12.532z"
                                    />
                                </svg>

                            )}

                        </button>



                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setHidden(!hidden)}
                            className="md:hidden p-2 ml-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        >

                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                        </button>


                    </div>
                    {/* Navigation */}
                    <div
                        id="navbar-search"
                        className={`${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`}
                    >


                        {/* Mobile Search */}
                        <div className="relative mt-3 md:hidden">

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>

                            </div>

                            <form action="" onSubmit={handleSubmit}>
                                <input
                                    name="search"
                                    type="text"
                                    placeholder="Search..."
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                                focus:ring-blue-500 focus:border-blue-500 
                                dark:bg-gray-700 dark:border-gray-600 dark:text-white"

                                />
                            </form>


                        </div>



                        {/* Navigation Links */}
                        <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 
                        md:p-0 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white 
                        dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>



                            <li>
                                <NavLink
                                    to="/movies/popular"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    Popular
                                </NavLink>
                            </li>



                            <li>
                                <NavLink
                                    to="/movies/top"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    Top Rated
                                </NavLink>
                            </li>



                            <li>
                                <NavLink
                                    to="/movies/upcoming"
                                    className={({ isActive }) =>
                                        isActive ? activeClass : inactiveClass
                                    }
                                >
                                    Upcoming
                                </NavLink>
                            </li>


                        </ul>


                    </div>

                </div>

            </nav>

        </header>
    );
};