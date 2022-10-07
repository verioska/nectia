import { useContext } from 'react'
import LoginForm from './LoginForm'
import { AuthCredentials } from '../../interfaces/AuthCredentials'
import UserContext from '../../context/User/UserContext'
import './Login.css'


const Login = (): JSX.Element => {
  const { getUser } = useContext(UserContext)

  const onSubmitLogin = (user: AuthCredentials ) =>{
    getUser(user)
  }

  return(
    <div className='container-login'>
      <div className='login-card'>
        <div className='login-card-container'>
          <div className='login-card-container--title' >Log In</div>
          <div className='login-card-container--form'>
            <LoginForm onSubmit={onSubmitLogin}/>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Login