export const APP_CONFIG = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "Boilerplate App",
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api/v1/",
  SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL ?? "http://localhost:5000",
};

/** Origin of the API without the /api/v1/ prefix. */
export const API_ORIGIN = APP_CONFIG.API_BASE_URL.replace(/\/api\/v\d+\/?$/, "");
