import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <nav className='flex justify-between items-center max-w-[1366px] mx-auto p-3'>

            <Link to="/">
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>The</span>
                    <span className='text-slate-700'>State</span>
                </h1>
            </Link>

            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="search" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-[500px]' />
                <FaSearch className="text-slate-500 flex"/>
            </form>

            <ul className="flex gap-4">
                <Link to="/">
                    <li className="hidden sm:inline text-slate-700 hover:underline">
                        Home
                    </li>
                </Link>
                <Link to="/about">
                    <li className="hidden sm:inline text-slate-700 hover:underline">
                        About
                    </li>
                </Link>
                <Link to="/">
                    <li className="hidden sm:inline text-slate-700 hover:underline">
                        Sign in
                    </li>
                </Link>
            </ul>
            
        </nav>
    </header>
  )
}

export default Header