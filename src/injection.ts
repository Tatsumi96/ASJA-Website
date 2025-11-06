import axios from 'axios';

import { ChatRepositoryImpl } from './features/chat/chat.repository.impl';
import { ChatGeminiServiceImpl } from './features/chat/chat.service';

import { StrapiRepositoryImpl } from './features/strapi/strapi.repository.impl';
import { StrapiServiceImpl } from './features/strapi/strapi.service';

const api = axios.create();

export const strapiService = new StrapiServiceImpl(api);

export const strapiRepo = new StrapiRepositoryImpl(strapiService);

const chatGeminiService = new ChatGeminiServiceImpl();

export const chatGemini = new ChatRepositoryImpl(chatGeminiService);
