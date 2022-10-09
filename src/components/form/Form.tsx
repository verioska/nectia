import { useState, MouseEvent } from 'react'

interface FormProps {
  onSubmit: (form: any) => void
  valueState: any
}

const Form = ({ onSubmit, valueState }: FormProps): JSX.Element => {
  const [character, setCharacter] = useState<any>(valueState)

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

  return(
    <form >
      <div className='container-input'>
        <input 
          placeholder='Nombre' 
          onChange={handleInputChange} 
          name='name' 
          value={character.name}
          />
      </div>
      <div className='container-input'>
        <input 
          placeholder='Apellido' 
          onChange={handleInputChange} 
          name='lastName' 
          value={character.lastName}
          />
      </div>
      <select name='gender' value={character.gender} onChange={handleInputChange}>
        <option value="femenino" >Femenino</option>
        <option value="masculino" >Masculino</option>
      </select>
      <div>
        <button 
          onClick={onFormSubmit}
          // disabled={}
          className='login-button'>Crear</button>
      </div>
    </form>
  )
}

export default Form