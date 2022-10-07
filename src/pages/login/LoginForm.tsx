import { useState, MouseEvent } from 'react'
import { AuthCredentials } from '../../interfaces/AuthCredentials'
import { validateEmail } from '../../utils/validateEmail'
import { validatePassword } from '../../utils/validatePassword'
import './Login.css'

interface LoginProps {
  onSubmit: (form: AuthCredentials) => void
}


const LoginForm = ({ onSubmit }: LoginProps): JSX.Element => {
  const [credentials, setCredentials] = useState<AuthCredentials>({
    email: '',
    password : ''
  })
  const [isEmailValidate, setIsEmailValidate] = useState<boolean>(false)
  const [isPasswordValidate, setIsPasswordValidate] = useState<boolean>(false)
  const [onFocusInput, setOnFocusInput] = useState<string>('')


  const onFormSubmit = (e: MouseEvent) => {
    e.preventDefault();
    onSubmit(credentials)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
        ...credentials,
        [event.target.name] : event.target.value
    })

    if(event.target.name === 'email' ) isValidateEmail(event.target.value)
    if(event.target.name === 'password' ) isValidatePassword(event.target.value)
  }

  const isValidateEmail = (email: string) => {
   const validate = validateEmail(email)
   setIsEmailValidate(validate)
  }
  

  const isValidatePassword = (password: string) => {
    const validate =  validatePassword(password)
    setIsPasswordValidate(validate)
  }

  const onFocus = (value: string) => setOnFocusInput(value)
  

  return(
    <form>
      <div className='container-input'>
        <input 
          placeholder='email' 
          onChange={handleInputChange} 
          name='email' 
          onFocus={() =>onFocus('email')}
          />
        {!isEmailValidate && onFocusInput === 'email' && 
          <p  className='container-input--invalid'>E-mail invalido</p>
        }
      </div>
      <div className='container-input'>
        <input 
          placeholder='Password' 
          onChange={handleInputChange} 
          onFocus={() =>onFocus('password')}
          name='password' />
        {!isPasswordValidate && onFocusInput === 'password' &&
          <p className='container-input--invalid'>Ingresar clave mayor de 4 digitos</p>
        }
      </div>
      <div>
        <button 
          onClick={onFormSubmit}
          disabled={(!isEmailValidate) || (!isPasswordValidate) }
          className='login-button'>Log In</button>
      </div>
    </form>
  )
}

export default LoginForm