import { GoogleGenerativeAI } from '@google/generative-ai';

export abstract class ChatService {
  abstract send(message: string): Promise<string>;
}

export class ChatGeminiServiceImpl implements ChatService {
  constructor() {}

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
      // history: history,
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return text;
  }
}
