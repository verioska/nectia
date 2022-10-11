import { useCharacters } from '../../hooks/useCharacters';
import Form from '../../components/form/Form'
import { Charactert } from '../../interfaces/Charactert';
import './CreateCharacter.css'


const CreateCharacter = (): JSX.Element =>{
  const { createCharacters } = useCharacters();
 

  const onSubmitCreateCharacter = (user: Charactert ) =>{
    createCharacters(user)
  }

  return(
    <div className="container-create-character">
      <div className="container-create-character__title">Ingresar Personajes</div>
      <Form 
        onSubmit={onSubmitCreateCharacter}
        valueState={{
              'name': '',
              'lastName': '',
              'gender': ''}
        }
      />
    </div>
  )
}
export default CreateCharacter