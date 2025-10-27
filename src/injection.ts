import axios from 'axios';

import { ApiSource } from './core/constant';
import { AdminRepositoryImpl } from './features/admin/admin.repository.impl';
import { AdminServiceImpl } from './features/admin/admin.service';
import { AuthRepositoryImpl } from './features/auth/auth.repository.impl';
import { AuthServiceImpl } from './features/auth/auth.service';
import { DocRepositoryImpl } from './features/doc/doc.repository.impl';
import { DocServiceImpl } from './features/doc/doc.service';
import { LogRepositoryImpl } from './features/log/log.repository.impl';
import { LogServiceImpl } from './features/log/log.service';
import { MentionRepositoryImpl } from './features/mention/mention.repository.impl';
import { MentionServiceImpl } from './features/mention/mention.service';
import { PostRepositoryImpl } from './features/post/post.repository.impl';
import { PostServiceImpl } from './features/post/post.service';
import { StrapiRepositoryImpl } from './features/strapi/strapi.repository.impl';
import { StrapiServiceImpl } from './features/strapi/strapi.service';
import { TrancheRepositoryImpl } from './features/tranche/tranche.repositoryImpl';
import { TrancheServiceImpl } from './features/tranche/tranche.service';
import { UserRepositoryImpl } from './features/user/user.repository.impl';
import { UserServiceImpl } from './features/user/user.service';

const api = axios.create({
  timeout: 5000,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 ||
      (error.response.status === 403 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;
      try {
        await api.post(`${ApiSource.url}/auth/refresh`);
        return api(originalRequest);
      } catch (error) {
        window.location.href = '/login';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const postService = new PostServiceImpl(api);

export const postRepo = new PostRepositoryImpl(postService);

const logService = new LogServiceImpl(api);

export const logRepo = new LogRepositoryImpl(logService);

const trancheService = new TrancheServiceImpl(api);

export const trancheRepo = new TrancheRepositoryImpl(trancheService);

const mentionService = new MentionServiceImpl(api);

export const mentionRepository = new MentionRepositoryImpl(mentionService);

const authService = new AuthServiceImpl(api);

const userService = new UserServiceImpl(api);

const adminService = new AdminServiceImpl(api);

export const adminRepository = new AdminRepositoryImpl(adminService);

export const userRepository = new UserRepositoryImpl(userService);

const docService = new DocServiceImpl(api);

export const authRepository = new AuthRepositoryImpl(authService);

export const docRepo = new DocRepositoryImpl(docService);

export const strapiService = new StrapiServiceImpl(api);

export const strapiRepo = new StrapiRepositoryImpl(strapiService);
