import { useScrollLock } from '@/page/admin/hooks/useScrollLock';
import { Bot, Send } from 'lucide-react';
import React from 'react';
import { MdCancel } from 'react-icons/md';
import { useLandingContext } from '../bloc/useLandingContext';

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
  return (
    <div className="fixed bottom-4 right-4 z-[1000] font-sans">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full shadow-lg transition-all cursor-pointer duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
      >
        {!isOpen ? (
          <div className="flex items-center px-5 py-3">
            <Bot className="pb-2" size={35} />
            <p className="text-md">ASJABot</p>
          </div>
        ) : null}
      </button>

      {isOpen && (
        <div
          className="w-80 h-[400px] sm:w-96 sm:h-[500px] dark:bg-zinc-800 bg-white transition-all duration-500 rounded-xl shadow-2xl flex flex-col mb-4 overflow-hidden"
          style={{ transform: 'translateY(-10px)' }}
        >
          <div className="flex dark:text-white text-gray-800 w-full justify-between shadow-md items-center px-5 py-3">
            <section className="flex gap-1 items-center">
              {' '}
              <Bot className="pb-2" size={35} />
              <span className="text-md text font-semibold">ASJABot</span>
            </section>
            <MdCancel
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              className="text-2xl transition-all cursor-pointer hover:scale-110 duration-500 text-green-700 dark:text-white"
            />
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-3">
            {messagesList.length === 0 ? (
              <p className="text-center text-gray-500 pt-5 text-sm italic">
                Bienvenue ! Je suis l'assistant de l'université. Posez-moi vos
                questions sur les inscriptions, les programmes ou la vie sur le
                campus.
              </p>
            ) : (
              messagesList.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] p-3 rounded-xl text-sm break-words ${
                    msg.expediteur === 'User'
                      ? 'bg-green-700 text-white self-end rounded-br-md'
                      : 'bg-gray-100 text-gray-800 dark:text-gray-300 transition-all duration-500  dark:bg-zinc-700 self-start rounded-tl-md'
                  }`}
                >
                  {msg.message}
                </div>
              ))
            )}
            {loading && (
              <div className="bg-gray-100 dark:bg-zinc-700 text-gray-500 p-3 rounded-xl self-start text-sm animate-pulse">
                ... L'assistant est en train de consulter les archives de
                l'université...
              </div>
            )}
            <div ref={refFinMessages} />
          </div>
          <form
            onSubmit={sendMessage}
            className="flex p-3 border-t border-gray-200"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrire votre question..."
              disabled={loading}
              className="flex-1 p-2 border text-gray-800 border-gray-300 dark:text-white rounded-l-lg focus:outline-none disabled:bg-gray-50"
            />
            <button
              type="submit"
              disabled={loading || !message.trim()}
              className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 px-4 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Send />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
