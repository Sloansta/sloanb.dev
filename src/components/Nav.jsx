import { useState, useEffect } from 'react';

export default function Nav() {
    // State to handle the visibility of the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const dropdownClasses = `absolute top-full left-0 w-full z-10 bg-gray-800/25 rounded-lg backdrop-filter backdrop-blur-[15px] md:bg-transparent md:static md:block ${isMenuOpen ? 'block' : 'hidden'} md:flex md:justify-end`;
    
    const menuClasses = "flex flex-col p-3 backdrop-filter backdrop-blur-[15px] md:flex-row md:space-x-8 md:mt-1 bg-gray-900/30 md:bg-transparent md:p-0";

    return (
        <nav className={`bg-gray-800/10 border-orange-300 rounded-lg dark:bg-gray-900/30 top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-[20px] fixed`}>
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <a href="#" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-400 drop-shadow-md">Sloan Boyce</span>
                </a>
                <button 
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="inline-flex items-center p-2 ml-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-200" 
                    aria-controls="navbar-default" 
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={dropdownClasses} id="navbar-default">
                    <ul className={`${menuClasses}`}>
                        <li>
                            <a href="#" className="block mt-2 py-2 pl-3 pr-4 text-orange-200 bg-gray-700/30 rounded md:p-2 md:mt-0">Skills</a>
                        </li>
                        <li>
                            <a href="#" className="block mt-2 py-2 pl-3 pr-4 text-orange-200 bg-gray-700/30 rounded md:p-2 md:mt-0">Work</a>
                        </li>
                        <li>
                            <a href="#" className="block mt-2 py-2 pl-3 pr-4 text-orange-200 bg-gray-700/30 rounded md:p-2 md:mt-0">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="block mt-2 py-2 pl-3 pr-4 text-orange-200 bg-gray-700/30 rounded md:p-2 md:mt-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
