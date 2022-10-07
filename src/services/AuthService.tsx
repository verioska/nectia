import { AuthCredentials } from "../interfaces/AuthCredentials";


export const reqLogin = async ({ email, password }: AuthCredentials): Promise<AuthCredentials | null> => {
  try {
    // Change to real axios call when connecting with an API
    const res = 
      { 
        "email": "rverioska@gmail.com", 
        "password": "1234"
      }
    ;
    return res || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}