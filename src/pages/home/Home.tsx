import React, { useEffect, useState } from "react"
import HomeTable from './HomeTable'
import { useCharacters } from '../../hooks/useCharacters'
import './Home.css'
import Form from "../../components/form/Form"

const Home = (): JSX.Element => {
  const { getCharacters, deleteCharacters, editCharacters } = useCharacters();
  const { characters} = useCharacters();
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false)
  const [ selectedCharacters, setSelectedCharacters] = useState<any>({})

  useEffect(() =>  {
    getCharacters()
  }, [])

  const deleteCharacter = (value:string)   =>  {
    deleteCharacters(value)
  }

  const editCharacter = (value:string)   =>  {
    const selected = characters.find((character:any) => character.id === value)
    setShowModalEdit(true)
    setSelectedCharacters(selected)
  }

  const onSubmitCreateCharacter = (user:any ) =>{
    editCharacters(user, selectedCharacters.id)
  }

  return(
    <div className="container-home">
      <HomeTable 
        deleteCharacter={deleteCharacter}
        editCharacter={editCharacter}
      />
      {showModalEdit && 
        <div className="container-create-character">
          <div className="container-create-character__title">Ingresar Personajes</div>
            <Form 
              onSubmit={onSubmitCreateCharacter}
              valueState={{
                    'name': selectedCharacters.name,
                    'lastName': selectedCharacters.lastName,
                    'gender': selectedCharacters.gender}
                }
            />
        </div>}
    </div>
  )
}

export default Home