import { Bot, Send } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useLandingContext } from '../bloc/useLandingContext';
import { useScrollLock } from '../hooks/useScrollLock';
import PromptSuggestions from './suggestion-bot';

const Chatbot: React.FC = () => {
  const {
    setIsOpen,
    isOpen,
    messagesList,
    loading,
    message,
    sendMessage,
    setMessage,
    refFinMessages,
  } = useLandingContext();

  useScrollLock(isOpen);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      const visualViewport = window.visualViewport;
      if (!visualViewport) return;

      const isKeyboardOpen = visualViewport.height < window.innerHeight * 0.8;
      setKeyboardVisible(isKeyboardOpen);

      if (isKeyboardOpen && formRef.current) {
        setTimeout(() => {
          refFinMessages.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    const handleFocusIn = () => {
      setTimeout(() => {
        handleResize();
      }, 150);
    };

    const handleFocusOut = () => {
      setTimeout(() => {
        setKeyboardVisible(false);
      }, 150);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    }

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener('focusin', handleFocusIn);
      inputElement.addEventListener('focusout', handleFocusOut);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
      if (inputElement) {
        inputElement.removeEventListener('focusin', handleFocusIn);
        inputElement.removeEventListener('focusout', handleFocusOut);
      }
    };
  }, [isOpen, refFinMessages]);

  useEffect(() => {
    if (messagesList.length > 0 || loading) {
      setTimeout(() => {
        refFinMessages.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 100);
    }
  }, [messagesList, loading, refFinMessages]);

  return (
    <div className="fixed bottom-4 right-4 z-[1000] font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
        >
          <Bot size={32} />
        </button>
      )}

      {isOpen && (
        <div
          className={`
          fixed inset-0 z-[1001] bg-slate-50 dark:bg-gray-900/95 backdrop-blur-sm flex flex-col
          sm:absolute sm:inset-auto sm:bottom-0 sm:right-0 sm:w-96 sm:h-[500px]
          sm:rounded-2xl sm:shadow-2xl sm:border border-slate-200 dark:border-gray-700
          transition-all duration-300
          ${keyboardVisible ? 'pb-0' : ''}
        `}
        >
          <div className="flex-shrink-0 flex dark:text-white text-gray-100 w-full justify-between items-center px-4 py-3 bg-gradient-to-r from-green-600 to-teal-500 rounded-t-2xl">
            <section className="flex gap-2 items-center">
              <div className="relative">
                <Bot className="p-1 bg-white/20 rounded-full" size={35} />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white dark:border-gray-800"></span>
              </div>
              <span className="text-lg font-semibold">ASJABot</span>
            </section>
            <MdCancel
              onClick={() => setIsOpen(false)}
              className="text-2xl transition-all cursor-pointer hover:scale-125 hover:rotate-90 duration-300"
            />
          </div>
          <div
            className={`
            flex-1 overflow-y-auto p-4 flex flex-col space-y-3
            ${keyboardVisible ? 'pb-2' : ''}
          `}
          >
            {messagesList.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                <div className="p-4 bg-green-100 dark:bg-green-900/50 rounded-full">
                  <Bot
                    size={40}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  ASJABot à votre service
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 max-w-[80%]">
                  Posez-moi des questions sur l'université, les admissions, ou
                  la vie étudiante.
                </p>
              </div>
            ) : (
              messagesList.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] py-2 px-4 rounded-lg text-sm break-words shadow-sm transition-all duration-300 ${
                    msg.expediteur === 'User'
                      ? 'bg-green-600 text-white self-end rounded-br-none'
                      : 'bg-white text-gray-800 dark:text-gray-200 dark:bg-gray-700 self-start rounded-bl-none'
                  }`}
                >
                  {msg.message}
                </div>
              ))
            )}
            {loading && (
              <div className="self-start flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              </div>
            )}
            <div ref={refFinMessages} />
          </div>
          {messagesList.length === 1 ? (
            <PromptSuggestions
              onSelect={async (text) => {
                await sendMessage(text);
              }}
            />
          ) : null}
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className={`
              flex-shrink-0 flex items-center p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800
              transition-all duration-300 rounded-b-2xl
              ${keyboardVisible ? 'pb-4' : ''}
            `}
          >
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Posez votre question..."
              disabled={loading}
              className="flex-1 w-full bg-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-none focus:ring-0 focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !message.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-600/50 text-white rounded-full p-2.5 shadow-md hover:scale-110 transition-all duration-200 disabled:cursor-not-allowed disabled:scale-100"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
