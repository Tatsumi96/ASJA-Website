import type { Result } from '@/core/result';
import type { ChatDto } from './chat.dto';

export abstract class ChatRepository {
  abstract send(message: string): Promise<Result<ChatDto>>;
}
