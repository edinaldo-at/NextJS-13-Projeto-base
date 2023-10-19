import useAxiosAuth from "../../../lib/axios/useAxiosAuth";

export async function Authenticate(url, body) {
  const axiosAuth = useAxiosAuth()

  const request = await axiosAuth.post(url,body)
  .then((res) => {
    res?.headers?.authorization && (res.data.data.accessToken = res.headers.authorization)
    console.log(res)
    return res
  }).catch((err) => {
    return err;
  });
  return request
}

export const ValidateToken = async (url) => {
  const axiosAuth = useAxiosAuth()
  const request = await axiosAuth.get(url)
    .then((res) => {
      res.data.data.accessToken = res.headers.authorization
      return res;
    })
    .catch((err) => {
      return err;
    });
    return request
};