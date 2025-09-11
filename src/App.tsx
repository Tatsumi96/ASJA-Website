import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/home.tsx';
import LoginPage from './components/login.tsx';
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

        const response = await fetch('https://example.api/log', {
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;

// test