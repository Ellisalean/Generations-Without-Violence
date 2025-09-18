
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';
import { ShieldCheckIcon } from '../Icons';

const PolicyTemplates: React.FC = () => {
    const { language } = useLanguage();
    const policyContent = content[language].policyTemplates;

    return (
        <section id="policies" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <ShieldCheckIcon className="w-16 h-16 mx-auto text-blue-500 mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{policyContent.title}</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{policyContent.text}</p>
                 <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {policyContent.commitments.map((item, index) => (
                         <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PolicyTemplates;