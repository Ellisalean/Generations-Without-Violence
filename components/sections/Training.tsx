
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';

const Training: React.FC = () => {
    const { language } = useLanguage();
    const trainingContent = content[language].training;

    return (
        <section id="training" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-blue-600 text-white inline-block px-4 py-2 rounded-lg mb-4">
                            <h2 className="text-2xl md:text-3xl font-bold">{trainingContent.title}</h2>
                        </div>
                        <p className="text-lg text-gray-600 mb-6">Our program equips pastors and leaders in six powerful sessions:</p>
                        <ul className="space-y-4">
                            {trainingContent.sessions.map((session, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 font-bold rounded-full flex items-center justify-center mr-4">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-700 text-lg">{session}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                            {trainingContent.button}
                        </a>
                    </div>
                     <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                       <img src="https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/ec69de82-e27e-4257-bb65-4cd370fd83c5_rw_1920.jpg?h=76f8249ba8699cfb157c0de671bc4467" alt="Leaders meeting in a workshop" className="w-full h-full object-cover"/>
                       <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;