import { useState, MouseEvent } from 'react'
import { Charactert } from '../../interfaces/Charactert'

import './Form.css'

interface FormProps {
  onSubmit: (form: any) => void
  valueState: Charactert
}

const Form = ({ onSubmit, valueState }: FormProps): JSX.Element => {
  const [character, setCharacter] = useState<Charactert>(valueState)

  const onFormSubmit = (e: MouseEvent) => {
    e.preventDefault();
    onSubmit(character)
  }

  const handleInputChange = (event: any) => {
    setCharacter({
        ...character,
        [event.target.name] : event.target.value
    })
  }

  const disabledBtn = character.name === '' &&  character.lastName === '' &&  character.gender === ''

  return(
    <form className="container-form" >
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
        <label className="container-input__label">Seleccione el genero</label>
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
    </form>
  )
}

export default Form