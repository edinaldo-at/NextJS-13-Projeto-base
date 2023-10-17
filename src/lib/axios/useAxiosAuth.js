import axios from "axios";
const BASE_URL = process.env.API_URL;

const useAxiosAuth = (session) => {
  const api = axios.create({
    baseURL: BASE_URL,
  });
  
  api.interceptors.request.use(async (config) => {    
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";

    if (session?.accessToken) {
      config.headers["Authorization"] = session.accessToken;
    }

    return config;
  });
  return api;
};
export default useAxiosAuth;