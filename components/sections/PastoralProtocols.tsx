
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';
import { ShieldCheckIcon, HeartIcon, LifebuoyIcon, HandRaisedIcon, ArrowPathIcon } from '../Icons';

const iconMap: { [key: number]: React.FC<{ className?: string }> } = {
    0: ShieldCheckIcon,
    1: HeartIcon,
    2: LifebuoyIcon,
    3: HandRaisedIcon,
    4: ArrowPathIcon
};

const ProtocolCard: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-blue-600 font-semibold hover:underline">
            {content['en'].protocols.readMore} &rarr;
        </button>
    </div>
);

const PastoralProtocols: React.FC = () => {
    const { language } = useLanguage();
    const protoContent = content[language].protocols;

    return (
        <section id="protocols" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{protoContent.title}</h2>
                    <p className="mt-4 text-lg text-gray-600">A phased approach to responding wisely and safely.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {protoContent.phases.map((phase, index) => {
                        const IconComponent = iconMap[index];
                        return (
                          <ProtocolCard 
                              key={index}
                              title={phase.title}
                              description={phase.description}
                              icon={<IconComponent className="w-6 h-6" />}
                          />
                        );
                    })}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md">
                        {protoContent.download}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PastoralProtocols;
