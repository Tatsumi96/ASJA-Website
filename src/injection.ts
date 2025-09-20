import axios from "axios";
import { AuthServiceImpl } from "./features/auth/auth_service";
import { AuthRepositoryImpl } from "./features/auth/auth_repo_impl";
import { LogUseCase } from "./features/auth/usecases/logUseCase";
import { DocServiceImpl } from "./features/doc/doc_service";
import { DocRepositoryImpl } from "./features/doc/doc.repositoryImpl";

const api = axios.create({
  timeout: 5000,
  withCredentials: true,
});

const authService = new AuthServiceImpl(api);

const docService = new DocServiceImpl(api);

const authRepository = new AuthRepositoryImpl(authService);

export const docRepo = new DocRepositoryImpl(docService);

export const logUseCase = new LogUseCase(authRepository);
