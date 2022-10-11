import { useCharacters } from "../../hooks/useCharacters";


interface HomeTableProps {
  deleteCharacter: (val: string) => void
  editCharacter: (val: string) => void
  arrCharacters: any[]
}

const HomeTable = ({deleteCharacter, editCharacter, arrCharacters}: HomeTableProps): JSX.Element =>{
  const {  rowFilter} = useCharacters();

    return(
      <>
      <table className="content-table"> 
        <thead className="content-table__thead"> 
          <tr><th>Nombre</th> 
          <th>Apellido</th> 
          <th>Género</th> 
          <th>Acciones</th> 
          </tr> 
        </thead> 
        {arrCharacters?.length > 0 && 
          arrCharacters.slice(0,rowFilter).map((character: any) =>{
            return(
              <tbody key={character.name}> 
                <tr  key={character.name}>
                  <td>{character.name}</td>
                  <td>{character.lastName}</td>
                  <td>{character.gender}</td>
                  <td>
                    <div className="icn-edit" onClick={() => editCharacter(character.id)} ><i className="fa-solid fa-user-pen"></i></div>
                    <div onClick={() => deleteCharacter(character.id)}><i className="fa-solid fa-trash"></i></div>
                  </td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </>
  )
}

export default HomeTable