import { useReducer, ReactNode } from 'react'
import UserReducer from './CharactersReducer'
import CharactersContext from './CharactersContext';
import { 
  getCharactersService, 
  deleteCharactersService, 
  createCharactersService,
  editCharactersService
} from '../../services/CharactersService'
import { SET_CHARACTERS, SET_CHARACTERS_DELETE } from '../types';

interface Props {
  children?: ReactNode
}

const initializeState = (initialValue: any): any => {
  return initialValue
};

const CharactersProvider = ({children} : Props): JSX.Element => {
  const initialState = initializeState({
    characters: [],
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

  const deleteCharacters = async (id: string) =>{
    try {
      const characters = await deleteCharactersService(id)
      dispatch({ type: SET_CHARACTERS_DELETE, payload: {characters : characters.data }})
    } catch (error) {
      console.error(error)
    }
  }

  const createCharacters = async (character:any ) =>{
    try {
      const isCharacters ={
        "name": character.name,
        "lastName": character.lastName,
        "gender": character.gender
      }
      const characters = await createCharactersService(isCharacters)
    } catch (error) {
      console.error(error)
    }
  }
  
  const editCharacters = async (character:any, id: string ) =>{
    try {
      const isCharacters ={
        "name": character.name,
        "lastName": character.lastName,
        "gender": character.gender
      }
      const characters = await editCharactersService(isCharacters, id)
      getCharacters()
    } catch (error) {
      console.error(error)
    }
  }



  const { characters } = state;
  const providerValue = {
    characters: characters || null,
    getCharacters,
    deleteCharacters,
    createCharacters,
    editCharacters
  }

  return(
    <CharactersContext.Provider value={providerValue}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersProvider;