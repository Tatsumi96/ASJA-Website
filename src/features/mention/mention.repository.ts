import type { Result } from "@/core/result";
import type { MentionDto } from "./mention.dto";
import type { UserEntity } from "./user.entity";
import type { UserDto } from "./user.dto";

export abstract class MentionRepository {
  abstract getData(): Promise<Result<MentionDto>>;
  abstract register(user: UserEntity): Promise<Result<void>>;
  abstract getStudentData(
    page: number,
    limit: number
  ): Promise<Result<UserDto[]>>;
  abstract sendFiles(file: FormData): Promise<Result<void>>;
  abstract deleteStudent(id: string): Promise<Result<void>>;

  abstract searchStudent(query: string): Promise<Result<UserDto[]>>;
}
