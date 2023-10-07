import { createCookies } from "../configs/cookies";

export const setCookies = (headers) => {
  if (headers?.authorization){
    const create = createCookies(headers?.authorization, headers?.expiry);
    return create;
  }
};
