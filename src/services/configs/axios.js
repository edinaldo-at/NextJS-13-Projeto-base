import axios from "axios";
import { parseCookies } from "nookies";

export function getApiClient(context) {
  const api = axios.create({
    baseURL: process.env.API_URL,
  });

  api.interceptors.request.use(async (config) => {
    const { trdAuthorization: authorization } = parseCookies(context);

    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";

    if (authorization) {
      config.headers["authorization"] = authorization;
    }

    return config;
  });

  return api;
}
