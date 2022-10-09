// import { AuthInfo } from "../../interfaces/AuthState"
import { SET_CHARACTERS, SET_CHARACTERS_DELETE } from "../types";


interface Action {
  type: string,
  payload: any,
}

const ChractersReducer = (state: any, action: Action): any => {
  const { type, payload } = action;
console.log(state, "state")
console.log(payload, "payload")
   switch (type) {
     case SET_CHARACTERS:
       return {
         ...state,
         characters: payload?.characters,
       }
     case SET_CHARACTERS_DELETE:
        return {
          ...state,
          characters: state.characters
                        .filter((character:any) => character.id != payload?.characters.id) 
        }
      default:
       return state;
   }
}

export default ChractersReducer