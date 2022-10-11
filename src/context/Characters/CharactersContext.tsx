import { createContext } from "react";
import { CharacterProvider } from "../../interfaces/CharacterProvider";


const CharactersContext = createContext<CharacterProvider>({} as CharacterProvider);

export default CharactersContext
