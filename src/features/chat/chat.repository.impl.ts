import { failure, success, type Result } from '@/core/result';
import type { ChatDto } from './chat.dto';
import type { ChatRepository } from './chat.repository';
import type { ChatService } from './chat.service';

export class ChatRepositoryImpl implements ChatRepository {
  constructor(private service: ChatService) {}

  async send(message: string): Promise<Result<ChatDto>> {
    try {
      const result = await this.service.send(message);
      return success({ message: result, expediteur: 'Bot' });
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
