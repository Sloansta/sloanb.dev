import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

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

    const dropdownClasses = `absolute top-full left-0 w-full z-50 rounded-lg md:static md:block ${isMenuOpen ? 'block' : 'hidden'} md:flex md:justify-end`;
    const menuClasses = "flex flex-col p-3 z-50 z-50 md:flex-row md:space-x-8 md:mt-1 md:p-0 text-center";
    return (
        <nav className={` border-orange-300 rounded-lg top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-[20px] fixed`}>
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <a href="#home" className="flex items-center">
                    <Link to="home" smooth={true} duration={500} className="self-center text-2xl font-semibold whitespace-nowrap text-orange-400 drop-shadow-md">
                        Sloan Boyce
                    </Link>
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
                <div className={`${dropdownClasses} bg-gray-700/70`} id="navbar-default">
                    <ul className={`${menuClasses}`}>
                        <li className="hover:cursor-pointer">
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="skills" smooth={true} duration={500} offset={-45} className="block mt-2 py-2 pl-3 pr-4 text-orange-200 bg-gray-700/70 rounded md:p-2 md:mt-0">
                                Skills
                            </Link>
                        </li>
                        <li className="hover:cursor-pointer">
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="work" smooth={true} duration={500} offset={-45} className="block mt-2 py-2 pl-3 pr-4 text-orange-200 bg-gray-700/70 rounded md:p-2 md:mt-0">
                                Work
                            </Link>
                        </li>
                        <li className="hover:cursor-pointer">
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} to="about" smooth={true} duration={500} offset={-45} className="block mt-2 py-2 pl-3 pr-4 text-orange-200 bg-gray-700/70 rounded md:p-2 md:mt-0">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
