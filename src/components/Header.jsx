import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link, NavLink } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react'


const Header = () => {

    const [isOpen,setOpen]=useState(false)

    const navlinks = [
        { path: '/', label: 'Home' },
        { path: '/all-art-craft-items', label: 'All Art & Craft Items' },
        { path: '/login', label: 'Login' },
        { path: '/register', label: 'Register' },
        { path: '/add-craft-item', label: 'Add Craft Item' },
    ]

    return (
        <div className='flex  container mx-auto justify-between items-center '>
            {/* Logo */}
            <div className="navbar-start flex-1/6">
                <NavLink to="/" className="">
                    <img className="w-full" src="https://i.ibb.co.com/twQcXqLY/Artistry-Haven-lanscape-logo.png" alt="Artistry Haven" />
                </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden justify-center items-center text-center lg:flex flex-4/6 ">
                <ul className="menu-horizontal px-4 space-x-10 transition-all">
                    {navlinks.map(link => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={`
                                    text-lg menuLink
                                    `}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>
            <div className='flex flex-nowrap justify-end items-center gap-4 flex-1/6'>
                {/* theme control */}
            <ThemeToggle></ThemeToggle>
                    <div className='block lg:hidden'>
                         <Hamburger toggled={isOpen} toggle={setOpen} />
                         
                            {/* Mobile Dropdown */}
                        <div className={`z-10  bg-white dark:bg-gray-700/70 border-2 border-white/90 dark:border-gray-600 rounded-lg top-16 right-0 w-full ${isOpen ? 'opacity-100 translate-y-0 flex' : 'hidden opacity-0 -translate-y-10 pointer-events-none'}  absolute h-auto transition-all duration-500 ease-in-out py-2 rounded-lg p-2`}>
                            <ul className="space-x-3 space-y-2 w-full">
                                {navlinks.map(link => (
                                    <li
                                        key={link.path}
                                        className={`
                                            transition-all duration-500 ease-in-out 
                                             rounded-md cursor-pointer w-full
                                        `}
                                    >
                                        <Link to={link.path} className="text-lg transition-colors duration-300 hover:bg-primary focus:bg-primary active:bg-primary  py-2.5 px-3 rounded-sm w-full block">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                    </div>

            </div>
        </div>
    );
};

export default Header;