import axios from "axios";

import { AuthServiceImpl } from "./features/auth/auth_service";
import { AuthRepositoryImpl } from "./features/auth/auth_repo_impl";
import { DocServiceImpl } from "./features/doc/doc_service";
import { DocRepositoryImpl } from "./features/doc/doc.repositoryImpl";
import { UserServiceImpl } from "./features/user/user_service";
import { UserRepositoryImpl } from "./features/user/user.repositoryImpl";

const api = axios.create({
  timeout: 5000,
  withCredentials: true,
});

const authService = new AuthServiceImpl(api);

const userService = new UserServiceImpl(api);

export const userRepository = new UserRepositoryImpl(userService);

const docService = new DocServiceImpl(api);

export const authRepository = new AuthRepositoryImpl(authService);

export const docRepo = new DocRepositoryImpl(docService);
