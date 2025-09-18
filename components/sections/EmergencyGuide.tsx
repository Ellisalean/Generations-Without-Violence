
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
                         <img src="https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/c73e137e-edba-4c4e-9619-17dbd8a79a24_rw_1920.jpg?h=1ec828e9e28f76be454852dca0b256b7" alt="Flowchart" className="rounded-lg shadow-md object-cover h-full w-full"/>
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{guideContent.title}</h2>
                        <p className="text-lg text-gray-600 italic mt-4 mb-6">"{guideContent.text}"</p>
                        
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{guideContent.stepsTitle}</h3>
                        <div className="space-y-4 text-left">
                            {guideContent.steps.map((step: {title: string, description: string}, index: number) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mr-4 mt-1">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">{step.title}</h4>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyGuide;