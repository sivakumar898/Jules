"use client";

import { useState } from 'react';

const AIChatWindow = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col">
      <header className="bg-brand-blue text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-bold">AI Insurance Assistant</h3>
        <button onClick={onClose} className="font-bold text-xl">&times;</button>
      </header>
      <div className="flex-grow p-4 text-sm text-gray-600 dark:text-gray-300">
        <p>Hello! How can I help you today? Ask me about our services or contact information.</p>
        <p className="mt-4 text-xs text-gray-400">(This is a UI preview. Chat functionality is not enabled.)</p>
      </div>
      <div className="p-4 border-t dark:border-gray-700">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          disabled
        />
      </div>
    </div>
  );
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && <AIChatWindow onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-brand-blue text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Toggle AI Assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default AIAssistant;
