import type { ChatDto } from '@/features/chat/chat.dto';
import type { EventDto } from '@/features/strapi/event.dto';
import { chatGemini, chatN8NRepository, strapiRepo } from '@/injection';
import { useEffect, useRef, useState } from 'react';

export const useLanding = () => {
  const [event, setEvent] = useState<EventDto[]>([]);

  const [isOpen, setIsOpen] = useState(false);
  const [messagesList, setMessagesList] = useState<ChatDto[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [isAnnonce, setIsAnnonce] = useState<boolean>(false);
  const [annonce, setAnnonce] = useState('');

  const refFinMessages = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    refFinMessages.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messagesList]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const messageFiltred = message.trim();
    if (!messageFiltred) return;

    setMessagesList((prev) => [
      ...prev,
      { message: messageFiltred, expediteur: 'User' },
    ]);
    setLoading(true);
    setMessage('');
    const result = await chatN8NRepository.send(message);
    if (result.status == 'success') {
      setMessagesList((prev) => [
        ...prev,
        { message: result.data.message, expediteur: 'Bot' },
      ]);
    }
    if (result.status == 'failure') {
      const result = await chatGemini.send(message);
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
