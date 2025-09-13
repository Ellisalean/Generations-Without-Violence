
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/text';
import { Language } from '../types';
import { GlobeAltIcon, XMarkIcon, Bars3Icon } from './Icons';

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
    const navContent = content[language].nav;

    const navLinks = [
        { href: '#home', text: navContent.home },
        { href: '#why-this-matters', text: navContent.whyThisMatters },
        { href: '#protocols', text: navContent.protocols },
        { href: '#training', text: navContent.training },
        { href: '#emergency-guide', text: navContent.emergencyGuide },
        { href: '#policies', text: navContent.policies },
        { href: '#resources', text: navContent.resources },
        { href: '#about-us', text: navContent.aboutUs },
        { href: '#contact', text: navContent.contact },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-xl font-bold tracking-tight">
                            {language === Language.EN ? 'Generations Without Violence' : 'Generaciones Sin Violencia'}
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            ))}
                            <LanguageToggle />
                        </div>
                    </div>
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

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
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
