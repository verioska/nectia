import { useEffect } from "react"
import HomeTable from './HomeTable'
import { useCharacters } from '../../hooks/useCharacters'
import './Home.css'

const Home = (): JSX.Element => {
  const { getCharacters, deleteCharacters } = useCharacters();
  
  useEffect(() =>  {
    // getCharacters()
  }, [])

  const deleteCharacter = (value:string)   =>  {
    deleteCharacters(value)
  }

  return(
    <div className="container-home">
      <HomeTable 
        deleteCharacter={deleteCharacter}
      />
    </div>
  )
}

export default Home