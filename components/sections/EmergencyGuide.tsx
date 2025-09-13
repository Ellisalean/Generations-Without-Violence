
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';

const EmergencyGuide: React.FC = () => {
    const { language } = useLanguage();
    const guideContent = content[language].emergencyGuide;

    return (
        <section id="emergency-guide" className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                         <img src="https://picsum.photos/400/500?image=119" alt="Flowchart" className="rounded-lg shadow-md object-cover h-full w-full"/>
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{guideContent.title}</h2>
                        <p className="text-lg text-gray-600 italic mt-4 mb-6">"{guideContent.text}"</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md">
                                {guideContent.downloadEN}
                            </a>
                             <a href="#" className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md">
                                {guideContent.downloadES}
                            </a>
                        </div>
                        <a href="#" className="text-blue-600 font-semibold hover:underline">
                            {guideContent.link}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyGuide;
