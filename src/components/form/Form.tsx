import { useState, MouseEvent } from 'react'
import { useCharacters } from '../../hooks/useCharacters'
import { Charactert } from '../../interfaces/Charactert'
import './Form.css'

interface FormProps {
  onSubmit: (form: any) => void
  valueState: Charactert
  closeForm: () => void
}

const Form = ({ onSubmit, valueState, closeForm }: FormProps): JSX.Element => {
  const [character, setCharacter] = useState<Charactert>(valueState)
  const { message } = useCharacters();

  
  const onFormSubmit = (e: MouseEvent) => {
    e.preventDefault();
    onSubmit(character)
    setCharacter({'name':'', 'lastName':'', 'gender':''})
    closeForm()
  }

  const handleInputChange = (event: any) => {
    setCharacter({
        ...character,
        [event.target.name] : event.target.value
    })
  }


  const disabledBtn = character.name === '' &&  character.lastName === '' &&  character.gender === ''

  return(
    <>
    <form className="container-form" >
      <div onClick={closeForm} className="container-form__close">X</div>
      <div className="container-create-character__title">Ingresar Personajes</div>
      <div className='container-input-form'>
        <label className="container-input__label">Ingresa el nombre</label>
        <input 
          placeholder='Nombre' 
          onChange={handleInputChange} 
          name='name' 
          value={character.name}
          className="div-input-form"
          />
      </div>
      <div className='container-input-form'>
        <label className="container-input__label">Ingresa el apellido</label>
        <input 
          placeholder='Apellido' 
          onChange={handleInputChange} 
          name='lastName' 
          value={character.lastName}
          className="div-input-form"
          />
      </div>
      <div>
        <label className="container-input__label">Seleccione el género</label>
        <select 
          name='gender' 
          className="select-form"
          value={character.gender} 
          onChange={handleInputChange}>
            <option></option>
            <option value="femenino" >Femenino</option>
            <option value="masculino" >Masculino</option>
        </select>
      </div>
      <div className="container-button-form">
        <button 
          onClick={onFormSubmit}
          disabled={disabledBtn}
          className='button-form__btn'>Crear</button>
      </div>
        <div className="container-form__send">{message}</div> 
    </form>
    </>
  )
}

export default Form