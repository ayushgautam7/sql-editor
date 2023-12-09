import React, { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToTop = () => {
        setShowMobileMenu(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <nav className='flex fixed w-full justify-between z-10 items-center py-3 px-6 border-b-2 bg-gray-900 border-gray-800'>
            <div className='flex gap-3 items-center'>
                <img className='h-10' src="./database-128.png" alt="logo" />
                <div className='text-xl font-semibold'>SQL Editor</div>
            </div>
        </nav>
    )
}

export default NavBar