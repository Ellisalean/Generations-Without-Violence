
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/text';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const footerContent = content[language].footer;
    const navContent = content[language].nav;

    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-semibold text-white">{footerContent.phrase}</h2>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#resources" className="hover:text-white transition-colors">{navContent.resources}</a></li>
                            <li><a href="#protocols" className="hover:text-white transition-colors">{navContent.protocols}</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">{navContent.contact}</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-600" />
                <div className="text-center text-sm text-gray-400">
                    <p>{footerContent.credits}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
