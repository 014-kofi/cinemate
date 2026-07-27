import { useEffect } from 'react'
import imgon from '../assets/404.png'
import { Link } from 'react-router-dom'
export const PageNotFound = () => {
    useEffect(() => {
        document.title = `Page Not found / Cinemate`;
    })
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col  items-center my-4">
                    <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white '>404 , oops</p>
                    <div className='max-w-lg'>
                        <img src={imgon} alt="" className='rounded' />
                    </div>

                </div>
                <div className='flex justify-center my-4'>
                    <Link to='/'>
                        <button className='w-64 text-xl rounded=lg bg-red-200'>back to home</button>
                    </Link>

                </div>
            </section>
        </main>
    )
}


