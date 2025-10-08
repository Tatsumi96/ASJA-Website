import { failure, success, type Result } from "@/core/result";
import { MentionRepository } from "./mention.repository";
import type { MentionDto } from "./mention.dto";
import type { UserEntity } from "./user.entity";
import type { MentionService } from "./mention.service";
import type { UserDto } from "./user.dto";
import { ApiSource } from "@/core/constant";

export class MentionRepositoryImpl implements MentionRepository {
  constructor(private service: MentionService) {}

  async getData(): Promise<Result<MentionDto>> {
    try {
      const result = await this.service.get();
      return success(result);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }

  async register(user: UserEntity): Promise<Result<void>> {
    try {
      await this.service.register(user);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }

  async getStudentData(
    page: number,
    limit: number
  ): Promise<Result<UserDto[]>> {
    try {
      const result = await this.service.getStudentData(page, limit);
      const data: UserDto[] = result.map((item) => ({
        imageUrl: item.imageUrl
          ? `${ApiSource.url}/mention/stream/${item.imageUrl}`
          : undefined,
        identifier: item.identifier,
        name: item.name,
        lastName: item.lastName,
        contact: item.contact,
        mention: item.mention,
        level: item.level,
        branche: item.branche,
        trancheId: item.trancheId,
        Premier: item.Premier,
        Deuxieme: item.Deuxieme,
        Troisieme: item.Troisieme,
        mentionId: item.mentionId,
      }));
      return success(data);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }

  async searchStudent(query: string): Promise<Result<UserDto[]>> {
    const result = await this.service.searchStudent(query);
    const data: UserDto[] = result.map((item) => ({
      imageUrl: item.imageUrl
        ? `${ApiSource.url}/mention/stream/${item.imageUrl}`
        : undefined,
      identifier: item.identifier,
      name: item.name,
      lastName: item.lastName,
      contact: item.contact,
      mention: item.mention,
      level: item.level,
      branche: item.branche,
      trancheId: item.trancheId,
      Premier: item.Premier,
      Deuxieme: item.Deuxieme,
      Troisieme: item.Troisieme,
      mentionId: item.mentionId,
    }));
    return success(data);
  }
  catch(error: unknown) {
    console.error(error);
    return failure(new Error());
  }

  async sendFiles(file: FormData): Promise<Result<void>> {
    try {
      await this.service.sendFiles(file);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async deleteStudent(id: string): Promise<Result<void>> {
    try {
      await this.service.deleteStudent(id);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
