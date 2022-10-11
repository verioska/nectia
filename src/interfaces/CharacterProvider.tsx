import { Charactert } from "./Charactert"


export interface CharacterProvider {
  characters: any[],
  getCharacters: () => void,
  deleteCharacters: (character: any) => void,
  createCharacters: (character: Charactert) => void,
  editCharacters: (character: Charactert, id: string) => void,
  getFilterRow:() => void
  arrRowFilter: any[],
  totalRow: (total: number) => void,
  rowFilter: number,
  message: string
}