import type { ChatDto } from '@/features/chat/chat.dto';
import type { EventDto } from '@/features/strapi/event.dto';
import { chatGemini, strapiRepo } from '@/injection';
import { useEffect, useRef, useState } from 'react';

export const useLanding = () => {
  const [event, setEvent] = useState<EventDto[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [messagesList, setMessagesList] = useState<ChatDto[]>([
    {
      message: `Bonjour! Je suis ASJABOT, votre assistant virtuel pour l'université ASJA. 😊 Comment puis-je vous aider aujourd'hui ? Que cherchez-vous à savoir sur nos événements, les adhésions, ou toute autre information concernant l'université ?`,
      expediteur: 'Bot',
    },
  ]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [isAnnonce, setIsAnnonce] = useState<boolean>(false);
  const [annonce, setAnnonce] = useState('');

  const refFinMessages = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    refFinMessages.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messagesList]);

  const sendMessage = async (messageText?: string) => {
    const messageToSend = messageText || message.trim();
    if (!messageToSend) return;

    setMessagesList((prev) => [
      ...prev,
      { message: messageToSend, expediteur: 'User' },
    ]);
    setLoading(true);
    if (!messageText) {
      setMessage('');
    }
    const result = await chatGemini.send(messageToSend);

    if (result.status == 'success') {
      setMessagesList((prev) => [
        ...prev,
        { message: result.data.message, expediteur: 'Bot' },
      ]);
    }

    if (result.status == 'failure') {
      setMessagesList((prev) => [
        ...prev,
        { message: 'Error occured on sending message', expediteur: 'Bot' },
      ]);
    }

    setLoading(false);
  };

  const fetchAnnonce = async () => {
    const result = await strapiRepo.getAnnonce();
    if (result.status == 'failure') return;

    setAnnonce(result.data);
    setIsAnnonce(true);
  };

  const fetchEvent = async () => {
    const result = await strapiRepo.getEvent();

    if (result.status == 'failure') return;

    setEvent(result.data);
  };

  useEffect(() => {
    const callFetchEvent = async () => {
      await fetchEvent();
      await fetchAnnonce();
    };

    callFetchEvent();
  }, []);

  return {
    event,
    loading,
    isOpen,
    messagesList,
    sendMessage,
    setIsOpen,
    message,
    setMessage,
    refFinMessages,
    isAnnonce,
    annonce,
  };
};
