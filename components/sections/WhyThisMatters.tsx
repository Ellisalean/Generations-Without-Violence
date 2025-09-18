import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';
import { BookOpenIcon, UsersIcon } from '../Icons';

const WhyThisMatters: React.FC = () => {
    const { language } = useLanguage();
    const wtmContent = content[language].whyThisMatters;

    return (
        <section id="why-this-matters" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{wtmContent.title}</h2>
                    <p className="text-lg text-gray-600 mt-2 font-mono">{wtmContent.verses}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-gray-700 leading-relaxed text-lg">
                       <p>{wtmContent.text}</p>
                    </div>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl">
                       <img src="https://images.unsplash.com/photo-1528612943353-ca8a58b1a162?q=80&w=1200&auto=format&fit=crop" alt="Open bible with hands" className="w-full h-full object-cover"/>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                       <div className="absolute bottom-4 left-4 text-white flex items-center gap-4">
                            <BookOpenIcon className="w-10 h-10 opacity-80" />
                            <span className="text-2xl font-semibold">+</span>
                            <UsersIcon className="w-10 h-10 opacity-80" />
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyThisMatters;