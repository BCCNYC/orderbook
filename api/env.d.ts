declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      REDIS_URL: string;
    }
  }
}

export {};
