import { AuthInfo } from "../../interfaces/AuthState"
import { LOGOUT } from "../types";

interface Action {
  type: string,
  payload: AuthInfo,
}

const UserReducer = (state: AuthInfo, action: Action): any => {
  const { type, payload } = action;

   switch (type) {
     case LOGOUT:
       return {
         ...state,
         user: payload?.user,
       }
     default:
       return state;
   }
}

export default UserReducer