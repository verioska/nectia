import axios  from "axios";
import { AuthCredentials } from "../interfaces/AuthCredentials";


export const reqLogin = async ({ email, password }: AuthCredentials): Promise<any> => {

  try {
    const res = await axios.post<AuthCredentials | null>(`https://userapi.free.beeceptor.com/v1/login`,{
      "email": email, 
      "password": password
    })

    return res|| null;
  } catch (error) {
    console.error(error);
    return null;
  }
}