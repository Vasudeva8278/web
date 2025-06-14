import React from 'react';
import { FaBell, FaCaretDown, FaBars } from 'react-icons/fa'; // Using react-icons for the icons
import logo from '../Assets/logo-neo.png'
const Header = ({ toggleNavigation }) => {
    return (
        <header className="customBlue shadow-sm">
            <nav className="py-3  flex justify-between items-center w-full">
                <div className="flex items-center space-x-4 ml-6" >
                <button
        onClick={toggleNavigation}
        className="text-white"
      ><FaBars /></button> {/* Top icon to hide the side vertical menu bar */}
                    <div className="text-xl font-bold w-10" >
                        <a href="/" rel="noopener noreferrer">
                        <img src={logo} alt="Logo" className='logo' />
                         </a>
                   </div>
                </div>
                <div className="flex-1 flex justify-center space-x-4 hidden">
                    <div className="relative pr-4 pl-4 m-2">
                        <button className="text-white flex items-center space-x-1">
                            <span>Generate</span>
                            <FaCaretDown /> {/* Down arrow icon */}
                        </button>
                        {/* Dropdown menu could go here */}
                    </div>
                    <div className="relative pr-4 pl-4 m-2">
                        <button className="text-white flex items-center space-x-1">
                            <span>Business</span>
                            <FaCaretDown /> {/* Down arrow icon */}
                        </button>
                        {/* Dropdown menu could go here */}
                    </div>
                    <div className="relative pr-4 pl-4 m-2">
                        <button className="text-white flex items-center space-x-1">
                            <span>Plans and Pricing</span>
                            <FaCaretDown /> {/* Down arrow icon */}
                        </button>
                        {/* Dropdown menu could go here */}
                    </div>
                    <div className="relative pr-4 pl-4 m-2">
                        <button className="text-white flex items-center space-x-1">
                            <span>Learn</span>
                            <FaCaretDown /> {/* Down arrow icon */}
                        </button>
                        {/* Dropdown menu could go here */}
                    </div>
                </div>
                <div className="flex items-center space-x-6 pr-4">
                    <button className="bg-white text-customBlue px-4 py-2 rounded-lg">Create Design</button>
                    
                        <button className="text-white p-3 border rounded-lg"><FaBell /></button> 
                  
                </div>
            </nav>
        </header>
    );
}

export default Header;
