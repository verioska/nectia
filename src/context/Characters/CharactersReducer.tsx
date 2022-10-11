import { CharactertsInfo } from "../../interfaces/CharactertsState";
import { SET_CHARACTERS, SET_CHARACTERS_DELETE, SET_ROW_FILTER, SET_ROW_FILTER_TOTAL } from "../types";


interface Action {
  type: string,
  payload: any,
}

const ChractersReducer = (state: CharactertsInfo, action: Action): any => {
  const { type, payload } = action;

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
      case SET_ROW_FILTER:
        return {
          ...state,
          arrRowFilter: payload?.arrRowFilter,
        }
        case SET_ROW_FILTER_TOTAL:
          return {
            ...state,
            rowFilter: payload?.rowFilter,
          }
      default:
       return state;
   }
}

export default ChractersReducer