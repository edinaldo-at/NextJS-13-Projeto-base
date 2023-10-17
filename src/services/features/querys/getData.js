import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../../../app/api/auth/[...nextauth]/route";
import useAxiosAuth from "../../../lib/axios/useAxiosAuth";

export const getData = async (url) => {
  
  const { data: session } = await getServerSession(nextAuthOptions);
  const axiosAuth = useAxiosAuth(session)

  const fatch = await axiosAuth.get(url,{cash: 'no-store'})
    .then((res) => {
      res.headers?.authorization && (session.accessToken = res.headers.authorization)
      return res;
    })
    .catch((error) => {
      if(error){
          console.log(error.response?.status);
      }
      
      return error;
    });
  const result = fatch

  return {
    success: result?.success || false,
    data: result.data
  };
};