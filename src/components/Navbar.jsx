import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='flex w-full gap-6 items-center z-10 py-3 px-6 border-b-2 bg-gray-900 border-gray-800'>
            <Link to="/">
                <div className='flex gap-3 items-center'>
                    <img className='h-9' src="./database-128.png" alt="logo" />
                    <div className='text-xl font-semibold'>SQL Editor</div>
                </div>
            </Link>

            <Link to='/about' className='text-gray-400 font-medium hover:text-white focus:text-green-500'>About</Link>
        </nav>
    )
}

export default NavBar;