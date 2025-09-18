
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
                        <img src="https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/76078200-6e8f-4e77-adba-8bcdcdc69415_rw_1920.jpg?h=b149129c68923480a6efa0fb19121986" alt="Pastoral team" className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover" />
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{aboutContent.title}</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">{aboutContent.text}</p>
                        <blockquote className="mt-6 border-l-4 border-blue-500 pl-4 italic text-gray-600">
                            <p>{aboutContent.quote}</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;