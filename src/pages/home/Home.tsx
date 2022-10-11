import React, { useEffect, useState } from "react"
import HomeTable from './HomeTable'
import { useCharacters } from '../../hooks/useCharacters'
import Form from "../../components/form/Form"
import RowFilter from "../../components/rowFilter/RowFilter"
import { Charactert } from "../../interfaces/Charactert"
import HomeSkeleton from "../../components/HomeSkeleton/HomeSkeleton"
import Search from "../../components/search/Search"
import './Home.css'


const Home = (): JSX.Element => {
  const { getCharacters, deleteCharacters, editCharacters, getFilterRow, totalRow } = useCharacters();
  const { characters} = useCharacters();
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false)
  const [ selectedCharacters, setSelectedCharacters] = useState<any>({})
  const [ selectedTotalRow, setSelectedTotalRow] = useState<number>(10)
  const [ arrCharacters, setArrCharacters] = useState<any[]>([])

  useEffect(() =>  {
    getCharacters()
    getFilterRow()
  }, [])


  const deleteCharacter = (value:string)   =>  {
    deleteCharacters(value)
  }

  const editCharacter = (value:string)   =>  {
    const selected = characters.find((character:any) => character.id === value)
    setShowModalEdit(true)
    setSelectedCharacters(selected)
  }

  const onSubmitCreateCharacter = (user: Charactert ) =>{
    editCharacters(user, selectedCharacters.id)
  }

  const handleChange = (value: any) =>{
    setSelectedTotalRow(value.target.value)
    totalRow(value.target.value)
  }

  const onSearch = (search: any) => {
    const filterSearch = characters.filter((item:any) => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.lastName?.toLowerCase().includes(search.toLowerCase()) 
      )

    if(search.length && filterSearch.length){
      setArrCharacters(filterSearch)
    } else {
      setArrCharacters([])
    }
  }

  const closeForm = () =>{
    setShowModalEdit(false)
  }

  const filterCharacters = arrCharacters.length ? arrCharacters : characters

  return(
    <div>
      {!characters.length  && <HomeSkeleton/>}
      {characters.length > 0 && !showModalEdit &&
        <div className='container-select-page'>
          <div className='container-select-page__filter'>
            <div>Mostrar:</div>
            <div className="container-select-page__row-filter">
              <RowFilter
                handleChange={handleChange}
                valueState={selectedTotalRow}
              />
            </div>
          </div>
          <div>
            <Search
              onSearch={onSearch}
            />
          </div>
        </div>}
      <div className="container-home">
      {!showModalEdit && characters.length > 0 &&
      <div>
        <HomeTable 
          deleteCharacter={deleteCharacter}
          editCharacter={editCharacter}
          arrCharacters={filterCharacters}
          />
      </div>}
        
      </div>
      {showModalEdit && 
        <div className="container-form-home">
          <Form 
            onSubmit={onSubmitCreateCharacter}
            valueState={{
                  'name': selectedCharacters.name,
                  'lastName': selectedCharacters.lastName,
                  'gender': selectedCharacters.gender}
              }
            closeForm={closeForm}
          />
        </div>
       }
    </div>
  )
}

export default Home