import type { AxiosInstance } from 'axios';

export abstract class ChatService {
  abstract send(message: string): Promise<string>;
}

export class ChatServiceImpl implements ChatService {
  constructor(private axios: AxiosInstance) {}

  async send(message: string): Promise<string> {
    return 'Chat reussi';
  }
}
