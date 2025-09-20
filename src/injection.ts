import axios from "axios";
import { AuthServiceImpl } from "./features/auth/auth_service";
import { AuthRepositoryImpl } from "./features/auth/auth_repo_impl";
import { DocServiceImpl } from "./features/doc/doc_service";
import { DocRepositoryImpl } from "./features/doc/doc.repositoryImpl";

const api = axios.create({
  timeout: 5000,
  withCredentials: true,
});

const authService = new AuthServiceImpl(api);

const docService = new DocServiceImpl(api);

export const authRepository = new AuthRepositoryImpl(authService);

export const docRepo = new DocRepositoryImpl(docService);
