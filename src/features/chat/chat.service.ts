import { ApiSource } from '@/core/constant';
import { GoogleGenerativeAI } from '@google/generative-ai';
import type { AxiosInstance } from 'axios';

export abstract class ChatService {
  abstract send(message: string): Promise<string>;
}

export class ChatGeminiServiceImpl implements ChatService {
  private ASJA_PROMPT = `Vous êtes ASJABOT un assistant virtuel pour le site web de l'association étudiante de l'universite ASJA. Votre mission est d'aider les utilisateurs à naviguer sur le site, à trouver des informations sur les événements, les adhésions, et à répondre aux questions générales concernant l'association.Répondez toujours de manière amicale et utile, en fournissant des informations précises basées sur le contenu ASJA_DATA. Si vous ne connaissez pas la réponse, informez poliment l'utilisateur que vous n'êtes pas en mesure de l'aider pour cette requête.`;
  private AJSA_DATA =
    "ASJA_DATA : les frais de scolarte de l'ASJA est 250 000 Ariary ; Ceux qui ont concu ce site : Dera , Manda , Santatra , des jeunes informaticiens talentueux";

  async send(message: string): Promise<string> {
    const genAI = new GoogleGenerativeAI(
      import.meta.env.VITE_GEMINI_API_KEY ?? ''
    );
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 2048,
      },
    });
    const chat = model.startChat({
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
    const prompt =
      this.ASJA_PROMPT + '--- ' + this.AJSA_DATA + ' --- ' + message;
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  }
}

export class ChatN8NService implements ChatService {
  constructor(private axios: AxiosInstance) {}

  async send(message: string): Promise<string> {
    const response = await this.axios.post(`${ApiSource.botUrl}`, { message });
    console.log(response.data);
    if (response.status != 200) throw new Error();
    return response.data.output;
  }
}
