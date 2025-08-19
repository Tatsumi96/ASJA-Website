import { useEffect } from 'react';
import Header from './components/header';
import Home from './components/home';
import Home2 from './components/home2';
import Home3 from './components/home3';
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
        <Home2 />
        <Home3/>
      </div>
    </>
  );
}
export default App;

// test // TESTESTE