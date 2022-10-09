import { useContext } from "react";
import CharactertsContext from "../context/Characters/CharactersContext";

export const useCharacters= () => useContext(CharactertsContext);