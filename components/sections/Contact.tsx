
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const contactContent = content[language].contact;

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{contactContent.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{contactContent.text}</p>
                </div>
                <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">{contactContent.name}</label>
                            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">{contactContent.email}</label>
                            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">{contactContent.message}</label>
                            <textarea id="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <div className="mb-6">
                            <label className="flex items-center text-gray-600">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                <span className="ml-2">{contactContent.requestTraining}</span>
                            </label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 w-full">
                                {contactContent.submit}
                            </button>
                        </div>
                    </form>
                </div>
                 <div className="text-center mt-12">
                    <p className="text-gray-700 font-semibold">info@generationswv.org | (555) 123-4567</p>
                    <div className="flex justify-center gap-6 mt-4">
                        {/* Social media icons would go here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
