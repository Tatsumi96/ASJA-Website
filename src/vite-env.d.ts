/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string;
  // autres variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
