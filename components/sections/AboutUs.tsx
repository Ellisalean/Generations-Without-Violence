
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';

const AboutUs: React.FC = () => {
    const { language } = useLanguage();
    const aboutContent = content[language].aboutUs;

    return (
        <section id="about-us" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2">
                        <img src="https://picsum.photos/800/800?image=76" alt="Pastoral team" className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover" />
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{aboutContent.title}</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">{aboutContent.text}</p>
                        <blockquote className="mt-6 border-l-4 border-blue-500 pl-4 italic text-gray-600">
                            <p>{aboutContent.quote}</p>
                        </blockquote>
                        <a href="#" className="mt-8 inline-block bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                           {aboutContent.button}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
