import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content/text';
import { FacebookIcon, TwitterIcon, InstagramIcon, WhatsAppIcon, ClipboardDocumentListIcon, CheckIcon } from '../Icons';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const contactContent = content[language].contact;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        requestTraining: false,
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
    const [composedMessage, setComposedMessage] = useState('');
    const [copied, setCopied] = useState<'email' | 'message' | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
        const id = target.id;

        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleCopy = async (text: string, type: 'email' | 'message') => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(type);
            setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy. Please copy manually.');
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\n${formData.requestTraining ? '☑️ The user is interested in requesting training.' : ''}`.trim();

        setComposedMessage(body);
        setFormStatus('submitted');
    };
    
    const handleGoBack = () => {
        setFormStatus('idle');
        setComposedMessage('');
        setFormData({ name: '', email: '', message: '', requestTraining: false });
    };

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{contactContent.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{contactContent.text}</p>
                </div>
                <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    {formStatus === 'submitted' ? (
                        <div className="text-center">
                            <h3 className="font-bold text-xl mb-2">{contactContent.manualEmailTitle}</h3>
                            <p className="text-gray-600 mb-6">{contactContent.manualEmailInstruction}</p>
                            
                            <div className="space-y-4 text-left">
                                <div>
                                    <label className="font-bold text-gray-700">{contactContent.emailRecipient}:</label>
                                    <div className="flex gap-2 mt-1">
                                        <input type="text" readOnly value={contactContent.emailAddress} className="flex-grow p-2 border rounded bg-gray-100" />
                                        <button onClick={() => handleCopy(contactContent.emailAddress, 'email')} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-green-500" disabled={copied === 'email'}>
                                            {copied === 'email' ? <CheckIcon className="w-5 h-5"/> : <ClipboardDocumentListIcon className="w-5 h-5" />}
                                            {copied === 'email' ? contactContent.copied : contactContent.copyEmail}
                                        </button>
                                    </div>
                                </div>
                                 <div>
                                    <label className="font-bold text-gray-700">{contactContent.emailBody}:</label>
                                    <div className="flex gap-2 mt-1">
                                        <textarea readOnly rows={8} value={composedMessage} className="flex-grow p-2 border rounded bg-gray-100 font-mono text-sm"></textarea>
                                         <button onClick={() => handleCopy(composedMessage, 'message')} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-green-500" disabled={copied === 'message'}>
                                            {copied === 'message' ? <CheckIcon className="w-5 h-5"/> : <ClipboardDocumentListIcon className="w-5 h-5" />}
                                            {copied === 'message' ? contactContent.copied : contactContent.copyMessage}
                                        </button>
                                    </div>
                                </div>
                            </div>
                             <button onClick={handleGoBack} className="mt-6 text-blue-600 hover:underline">
                                {contactContent.goBack}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">{contactContent.name}</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">{contactContent.email}</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">{contactContent.message}</label>
                                <textarea 
                                    id="message" 
                                    rows={5} 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <div className="mb-6">
                                <label className="flex items-center text-gray-600">
                                    <input 
                                        type="checkbox" 
                                        id="requestTraining"
                                        checked={formData.requestTraining}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500" />
                                    <span className="ml-2">{contactContent.requestTraining}</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'submitting'}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 w-full disabled:bg-blue-300 disabled:cursor-not-allowed">
                                    {formStatus === 'submitting' ? contactContent.submitting : contactContent.submit}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
                 <div className="text-center mt-12">
                    <p className="text-gray-700 font-semibold">{contactContent.emailAddress} | {contactContent.phoneNumber}</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="relative group">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label={contactContent.socials.facebook} className="text-gray-500 hover:text-blue-600 transition-colors">
                                <FacebookIcon className="w-8 h-8" />
                            </a>
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{contactContent.socials.facebook}</span>
                        </div>
                        <div className="relative group">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label={contactContent.socials.twitter} className="text-gray-500 hover:text-sky-500 transition-colors">
                                <TwitterIcon className="w-8 h-8" />
                            </a>
                             <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{contactContent.socials.twitter}</span>
                        </div>
                        <div className="relative group">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label={contactContent.socials.instagram} className="text-gray-500 hover:text-pink-500 transition-colors">
                                <InstagramIcon className="w-8 h-8" />
                            </a>
                             <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{contactContent.socials.instagram}</span>
                        </div>
                        <div className="relative group">
                            <a 
                                href={`https://wa.me/${contactContent.phoneNumber.replace(/\D/g, '')}`} 
                                aria-label={contactContent.socials.whatsapp} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-500 hover:text-green-500 transition-colors"
                            >
                                <WhatsAppIcon className="w-8 h-8" />
                            </a>
                             <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{contactContent.socials.whatsapp}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;