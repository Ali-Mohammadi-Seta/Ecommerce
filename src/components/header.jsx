import React, { useContext, useEffect, useState } from 'react';
import { SideBarContext } from "../contexts/sideBarContext.jsx";
import { CartContext } from "../contexts/cartContext.jsx";
import { BsBag } from "react-icons/bs";
import { switchTheme } from "./themeToggle.jsx";
import { Link } from 'react-router-dom';
import Logo from '/src/assets/Logo.png';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SideBarContext);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { itemAmount } = useContext(CartContext);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            setIsDarkMode(savedTheme === 'coffee');
        } else {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            setIsDarkMode(currentTheme === 'coffee');
        }
    }, []);

    const handleThemeChange = () => {
        switchTheme();
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <header className='bg-current text-right flex items-center h-10 fixed top-0 left-0 w-screen z-40 p-4 shadow-md'>
            <div>
                <Link to={'/'}>
                    <div className='w-[50px]'>
                        <img className='hidden md:flex' src={Logo} alt='/' />
                    </div>
                </Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className='pl-4 cursor-pointer flex items-center'>
                <BsBag className="text-black hover:text-cyan-500" size={30} />
                <span className='text-[11px] bg-purple-200 w-4 items-center text-center mx-2 border rounded-box absolute left-[90px] bottom-1 '>{itemAmount}</span>
            </div>
            <div className='absolute right-1 pr-16 items-center'>
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={handleThemeChange}
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                    />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </header>
    );
};

export default Header;
