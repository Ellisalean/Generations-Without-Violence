
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';

const Home: React.FC = () => {
    const { language } = useLanguage();
    const homeContent = content[language].hero;

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white pt-16">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=29')" }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                    {homeContent.title}
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light">
                    {homeContent.subtitle}
                </p>
                <div className="space-y-4">
                    <a href="#why-this-matters" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                        {homeContent.button} &rarr;
                    </a>
                    <p className="text-md md:text-xl italic text-gray-200 pt-4">
                        {homeContent.pastoralPhrase}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
