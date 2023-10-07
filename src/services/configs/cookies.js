import { destroyCookie, parseCookies, setCookie } from "nookies";

export const createCookies = (auth, expiry) => {
  setCookie(undefined, "trdAuth", auth, {
    maxAge: expiry, //60 * 60 * 1,
    sameSite: "Lax",
    path: "/",
  });
  return checkCookies();
};

export const checkCookies = () => {
  const { trdAuth } = parseCookies();
  return trdAuth ? true : false;
};

export const clearCookies = () => {
  destroyCookie(undefined, 'trdAuth');
};
