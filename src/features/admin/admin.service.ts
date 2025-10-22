import { ApiSource } from '@/core/constant';
import type { AxiosInstance } from 'axios';
import type { AdminDto } from './admin.dto';

export abstract class AdminService {
  abstract get(): Promise<AdminDto>;
}

export class AdminServiceImpl implements AdminService {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<AdminDto> {
    const response = await this.api.get(`${ApiSource.url}/admin`);
    if (response.status != 200) throw new Error();
    return response.data;
  }
}
