
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';
import { LifebuoyIcon, BookOpenIcon, UserGroupIcon, ShieldCheckIcon } from '../Icons';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
    "Hotlines": LifebuoyIcon,
    "Líneas de ayuda": LifebuoyIcon,
    "Books & Guides": BookOpenIcon,
    "Libros y Guías": BookOpenIcon,
    "Organizations": UserGroupIcon,
    "Organizaciones": UserGroupIcon,
    "Custom Downloads": ShieldCheckIcon,
    "Descargas personalizadas": ShieldCheckIcon,
};


const ResourceCard: React.FC<{ title: string, text: string }> = ({ title, text }) => {
    const IconComponent = iconMap[title];
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center transform hover:-translate-y-2 transition-transform duration-300">
            {IconComponent && <IconComponent className="w-12 h-12 text-blue-500 mx-auto mb-4" />}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{text}</p>
        </div>
    );
};

const Resources: React.FC = () => {
    const { language } = useLanguage();
    const resContent = content[language].resources;

    return (
        <section id="resources" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{resContent.title}</h2>
                    <p className="mt-4 text-lg text-gray-600">Find help, guidance, and support materials.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {resContent.cards.map(card => (
                        <ResourceCard key={card.title} title={card.title} text={card.text} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;