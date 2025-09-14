import axios from "axios";
import { AuthServiceImpl } from "./features/auth/auth_service";
import { AuthRepositoryImpl } from "./features/auth/auth_repo_impl";
import { LogUseCase } from "./features/auth/usecases/logUseCase";

const api = axios.create({
  timeout: 5000,
  withCredentials: true,
});

const authService = new AuthServiceImpl(api);

const authRepository = new AuthRepositoryImpl(authService);

export const logUseCase = new LogUseCase(authRepository);
