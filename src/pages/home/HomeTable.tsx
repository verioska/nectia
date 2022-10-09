import { useCharacters } from "../../hooks/useCharacters";


interface HomeTableProps {
  deleteCharacter: (val: string) => void
}

const HomeTable = ({deleteCharacter}: HomeTableProps): JSX.Element =>{
  const { characters} = useCharacters();
  
    return(
      <>
        <table className="content-table"> 
          <thead className="content-table__thead"> 
            <tr><th>Nombre</th> 
            <th>Apellido</th> 
            <th>Genero</th> 
            <th>Acciones</th> 
            </tr> 
          </thead> 
          {characters?.length > 0 && 
            characters.map((character:any) =>{
              return(
                <tbody key={character.name}> 
                  <tr>
                    <td>{character.name}</td>
                    <td>{character.lastName}</td>
                    <td>{character.gender}</td>
                    <td>
                      <div><i className="fa-solid fa-user-pen"></i></div>
                      <div onClick={() =>deleteCharacter(character.id)}><i className="fa-solid fa-trash"></i></div>
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