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
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full shadow-lg transition-all cursor-pointer duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
      >
        {!isOpen ? (
          <div className="flex items-center px-5 py-3">
            <Bot size={30} />
            <p className="text-md pl-1">ASJABot</p>
          </div>
        ) : null}
      </button>

      {isOpen && (
        <div
          className={`
          fixed inset-0 z-[1001] bg-white dark:bg-zinc-800 flex flex-col
          sm:absolute sm:inset-auto sm:bottom-0 sm:right-0 sm:w-96 sm:h-[500px]
          sm:rounded-xl sm:shadow-2xl sm:mb-4
          transition-all duration-300
          ${keyboardVisible ? 'pb-0' : ''}
        `}
        >
          {' '}
          <div className="flex-shrink-0 flex dark:text-white text-gray-800 w-full justify-between shadow-md items-center px-5 py-3 border-b border-gray-200">
            <section className="flex gap-1 items-center">
              <Bot className="pb-2" size={35} />
              <span className="text-md text font-semibold">ASJABot</span>
            </section>
            <MdCancel
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className="text-2xl transition-all cursor-pointer hover:scale-110 duration-500 text-green-700 dark:text-white"
            />
          </div>
          <div
            className={`
            flex-1 overflow-y-auto p-4 flex flex-col space-y-3
            ${keyboardVisible ? 'pb-2' : ''}
          `}
          >
            {messagesList.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-center text-gray-500 text-sm italic max-w-[80%]">
                  Bienvenue ! Je suis l'assistant de l'université. Posez-moi vos
                  questions sur les inscriptions, les programmes ou la vie sur
                  le campus.
                </p>
              </div>
            ) : (
              messagesList.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] p-3 rounded-xl text-sm break-words ${
                    msg.expediteur === 'User'
                      ? 'bg-green-700 text-white self-end rounded-br-md'
                      : 'bg-gray-100 text-gray-800 dark:text-gray-300 transition-all duration-500 dark:bg-zinc-700 self-start rounded-tl-md'
                  }`}
                >
                  {msg.message}
                </div>
              ))
            )}
            {loading && (
              <div className="bg-gray-100 dark:bg-zinc-700 text-gray-500 p-3 rounded-xl self-start text-sm animate-pulse">
                ... L'assistant est en train de répondre...
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
              flex-shrink-0 flex p-3 border-t border-gray-200 bg-white dark:bg-zinc-800
              transition-all duration-300
              ${keyboardVisible ? 'pb-4' : ''}
            `}
          >
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrire votre question..."
              disabled={loading}
              className="flex-1 p-2 border text-gray-800 border-gray-300 dark:text-white dark:bg-zinc-700 rounded-l-lg focus:outline-none disabled:bg-gray-50 dark:disabled:bg-zinc-600"
            />
            <button
              type="submit"
              disabled={loading || !message.trim()}
              className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 px-4 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
