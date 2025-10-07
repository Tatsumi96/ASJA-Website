import axios from "axios";

import { AuthServiceImpl } from "./features/auth/auth_service";
import { AuthRepositoryImpl } from "./features/auth/auth_repo_impl";
import { DocServiceImpl } from "./features/doc/doc_service";
import { DocRepositoryImpl } from "./features/doc/doc.repositoryImpl";
import { UserServiceImpl } from "./features/user/user_service";
import { UserRepositoryImpl } from "./features/user/user.repositoryImpl";
import { MentionServiceImpl } from "./features/mention/mention.service";
import { MentionRepositoryImpl } from "./features/mention/mention.repositoryImpl";
import { ApiSource } from "./core/constant";
import { TrancheServiceImpl } from "./features/tranche/tranche.service.prisma";
import { TrancheRepositoryImpl } from "./features/tranche/tranche.repositoryImpl";

const api = axios.create({
  timeout: 5000,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await api.post(`${ApiSource.url}/auth/refresh`);
        return api(originalRequest);
      } catch (error) {
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const trancheService = new TrancheServiceImpl(api);

export const trancheRepo = new TrancheRepositoryImpl(trancheService);

const mentionService = new MentionServiceImpl(api);

export const mentionRepository = new MentionRepositoryImpl(mentionService);

const authService = new AuthServiceImpl(api);

const userService = new UserServiceImpl(api);

export const userRepository = new UserRepositoryImpl(userService);

const docService = new DocServiceImpl(api);

export const authRepository = new AuthRepositoryImpl(authService);

export const docRepo = new DocRepositoryImpl(docService);
