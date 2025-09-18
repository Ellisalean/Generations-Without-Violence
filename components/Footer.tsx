import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/text';
import { Language } from '../types';
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsAppIcon } from './Icons';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const footerContent = content[language].footer;
    const navContent = content[language].nav;
    const contactContent = content[language].contact;

    const socialLinks = [
        { href: "https://facebook.com", label: contactContent.socials.facebook, Icon: FacebookIcon, hoverClass: "hover:text-blue-600" },
        { href: "https://twitter.com", label: contactContent.socials.twitter, Icon: TwitterIcon, hoverClass: "hover:text-sky-500" },
        { href: "https://instagram.com", label: contactContent.socials.instagram, Icon: InstagramIcon, hoverClass: "hover:text-pink-500" },
        { href: `https://wa.me/${contactContent.phoneNumber.replace(/\D/g, '')}`, label: contactContent.socials.whatsapp, Icon: WhatsAppIcon, hoverClass: "hover:text-green-500" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-2">{language === Language.EN ? 'Generations Without Violence' : 'Generaciones Sin Violencia'}</h3>
                        <p className="text-sm">{footerContent.phrase}</p>
                    </div>

                    {/* Column 2: Navigate */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{footerContent.navigate}</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-white transition-colors">{navContent.home}</a></li>
                            <li><a href="#why-this-matters" className="hover:text-white transition-colors">{navContent.whyThisMatters}</a></li>
                            <li><a href="#about-us" className="hover:text-white transition-colors">{navContent.aboutUs}</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">{navContent.contact}</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Key Resources */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{footerContent.keyResources}</h4>
                        <ul className="space-y-2">
                            <li><a href="#protocols" className="hover:text-white transition-colors">{navContent.resourcesDropdown.protocols}</a></li>
                            <li><a href="#training" className="hover:text-white transition-colors">{navContent.resourcesDropdown.training}</a></li>
                            <li><a href="#emergency-guide" className="hover:text-white transition-colors">{navContent.resourcesDropdown.emergencyGuide}</a></li>
                            <li><a href="#policies" className="hover:text-white transition-colors">{navContent.resourcesDropdown.policies}</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{footerContent.connect}</h4>
                        <a href={`mailto:${contactContent.emailAddress}`} className="block hover:text-white transition-colors">{contactContent.emailAddress}</a>
                        <a href={`tel:${contactContent.phoneNumber}`} className="block hover:text-white transition-colors">{contactContent.phoneNumber}</a>
                        <div className="flex gap-4 mt-4">
                            {socialLinks.map(social => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className={`transition-colors ${social.hoverClass}`}>
                                    <social.Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 py-6 border-t border-gray-700 text-center text-sm">
                    <p>{footerContent.credits}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
