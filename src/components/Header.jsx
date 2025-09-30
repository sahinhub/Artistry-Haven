import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {

    const navlinks = [
        { path: '/', label: 'Home' },
        { path: '/about-me', label: 'About Me' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact-me', label: 'Contact Me' },
    ]

    return (
        <div>
            {/* Logo */}
            <div className="navbar-start flex-1/6">
                <NavLink to="/" className="text-xl">
                    <img className="w-10" src="https://i.postimg.cc/DymWhPxY/logo.png" alt="Artistry Haven" />
                </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden justify-center items-center text-center lg:flex flex-3/6 ">
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
            {/* theme control */}
            <ThemeToggle></ThemeToggle>
        </div>
    );
};

export default Header;