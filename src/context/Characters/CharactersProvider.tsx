import { useReducer, ReactNode } from 'react'
import UserReducer from './CharactersReducer'
import CharactersContext from './CharactersContext'
import { 
  getCharactersService, 
  deleteCharactersService, 
  createCharactersService,
  editCharactersService,
  getRowFilter
} from '../../services/CharactersService'
import { 
  SET_CHARACTERS, 
  SET_CHARACTERS_DELETE, 
  SET_ROW_FILTER,
  SET_ROW_FILTER_TOTAL
} from '../types'
import { CharactertsInfo } from '../../interfaces/CharactertsState'
import { Charactert } from '../../interfaces/Charactert'


interface Props {
  children?: ReactNode
}

const initializeState = (initialValue: CharactertsInfo): CharactertsInfo => {
  return initialValue
};

const CharactersProvider = ({children} : Props): JSX.Element => {
  const initialState: CharactertsInfo = initializeState({
    characters: [],
    rowFilter: 10,
    arrRowFilter: []
  })

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getCharacters = async () =>{
    try {
      const characters = await getCharactersService()
      dispatch({ type: SET_CHARACTERS, payload: {characters : characters.data }})

    } catch (error) {
      console.error(error)
    }
  }

  const getFilterRow = async () =>{
    try {
      const filter = await getRowFilter()
      dispatch({ type: SET_ROW_FILTER, payload: {arrRowFilter : filter.data }})
    } catch (error) {
      console.error(error)
    }
  }

  const deleteCharacters = async (id: any) =>{
    try {
      const characters = await deleteCharactersService(id)
      dispatch({ type: SET_CHARACTERS_DELETE, payload: {characters : characters.data }})
    } catch (error) {
      console.error(error)
    }
  }

  const createCharacters = async (character: Charactert ) =>{
    try {
      const isCharacters ={
        "name": character.name,
        "lastName": character.lastName,
        "gender": character.gender
      }
      await createCharactersService(isCharacters)
    } catch (error) {
      console.error(error)
    }
  }
  
  const editCharacters = async (character: Charactert, id: string ) =>{
    try {
      const isCharacters ={
        "name": character.name,
        "lastName": character.lastName,
        "gender": character.gender
      }
      await editCharactersService(isCharacters, id)
      getCharacters()
    } catch (error) {
      console.error(error)
    }
  }

  const totalRow = (number : number) =>{
    dispatch({ type: SET_ROW_FILTER_TOTAL, payload: {rowFilter : number}})
  }



  const { characters, arrRowFilter, rowFilter } = state;
  const providerValue = {
    characters: characters || null,
    getCharacters,
    deleteCharacters,
    createCharacters,
    editCharacters,
    getFilterRow,
    arrRowFilter: arrRowFilter || null,
    totalRow,
    rowFilter: rowFilter || null,
  }

  return(
    <CharactersContext.Provider value={providerValue}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersProvider;