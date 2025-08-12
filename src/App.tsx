import { useEffect } from 'react';
import Header from './components/header';
import Home from './components/home';
import './index.css'


interface LogPayload {
  message: string;
  timestamp: string;
}
const App: React.FC = () => {
  useEffect(() => {
    const sendLog = async () => {
      try {
        const payload: LogPayload = {
          message: 'Application démarrée',
          timestamp: new Date().toISOString(),
        };

        const response = await fetch('https://votre-api.com/log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Erreur réseau');
        }

        const data: unknown = await response.json();
        console.log('Log envoyé au serveur:', data);
      } catch (error) {
        console.error('Erreur lors de l\'envoi du log:', error);
      }
    };

    sendLog();
  }, []);
  return (
    <>
      <div className='flex-col items-center justify-center'>
        <Header />
        <Home />
        <div className='flex justify-center items-center w-full h-screen bg-teal-800 text-white z-10'>
          <h2 className='text-2xl font-bold'>Bienvenue sur le site de l'ASJA University</h2>
        </div>
      </div>
    </>
  );
}
export default App;