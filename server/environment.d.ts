declare namespace NodeJS {
  interface ProcessEnv {
    DB_CONNECTION_STRING: string;
    USER_EMAIL: string;
    USER_PASS: string;
    FRONTEND_ENDPOINT: string;
  }
}
