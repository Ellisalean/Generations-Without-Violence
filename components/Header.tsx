
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/text';
import { Language } from '../types';
import { GlobeAltIcon, XMarkIcon, Bars3Icon, ChevronDownIcon } from './Icons';

const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();
    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 transition-colors bg-gray-700/50 rounded-md hover:bg-gray-700 hover:text-white"
        >
            <GlobeAltIcon className="w-5 h-5" />
            <span>{language === Language.EN ? 'Español' : 'English'}</span>
        </button>
    );
};


const Header: React.FC = () => {
    const { language } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileResourcesOpen, setMobileResourcesOpen] = useState(false);

    const navContent = content[language].nav;

    const navLinks = [
        { href: '#home', text: navContent.home },
        { href: '#why-this-matters', text: navContent.whyThisMatters },
    ];

    const dropdownLinks = [
        { href: '#protocols', text: navContent.resourcesDropdown.protocols },
        { href: '#training', text: navContent.resourcesDropdown.training },
        { href: '#emergency-guide', text: navContent.resourcesDropdown.emergencyGuide },
        { href: '#policies', text: navContent.resourcesDropdown.policies },
        { href: '#resources', text: navContent.resourcesDropdown.allResources },
    ];
    
    const tailNavLinks = [
        { href: '#about-us', text: navContent.aboutUs },
        { href: '#contact', text: navContent.contact },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setMobileResourcesOpen(false);
    };

    const handleMobileResourcesToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setMobileResourcesOpen(prev => !prev);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-xl font-bold tracking-tight">
                            {language === Language.EN ? 'Generations Without Violence' : 'Generaciones Sin Violencia'}
                        </a>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                                    {link.text}
                                </a>
                            ))}

                            <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                                <a href="#resources" className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                                    {navContent.resources}
                                    <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </a>
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 origin-top-right bg-gray-700 rounded-md shadow-lg py-1 z-20 transition-all duration-200 ease-out opacity-100 scale-100"
                                         onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                                        {dropdownLinks.map(link => (
                                            <a key={link.href} href={link.href} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white">
                                                {link.text}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            {tailNavLinks.map((link) => (
                                <a key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                                    {link.text}
                                </a>
                            ))}

                            <LanguageToggle />
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                         <div className="mr-2">
                             <LanguageToggle />
                         </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <XMarkIcon className="block w-6 h-6" /> : <Bars3Icon className="block w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                                {link.text}
                            </a>
                        ))}
                        <div>
                           <button onClick={handleMobileResourcesToggle} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                                <span>{navContent.resources}</span>
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
                           </button>
                           {isMobileResourcesOpen && (
                               <div className="pl-4 mt-1 space-y-1">
                                    {dropdownLinks.map((link) => (
                                        <a key={link.href} href={link.href} onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
                                            {link.text}
                                        </a>
                                    ))}
                               </div>
                           )}
                        </div>
                         {tailNavLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;