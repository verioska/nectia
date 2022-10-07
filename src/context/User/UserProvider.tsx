import { useReducer, ReactNode } from 'react'
import { AuthInfo } from '../../interfaces/AuthState'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import { reqLogin } from '../../services/AuthService';
import {  LOGOUT } from '../types';
import { AuthCredentials } from '../../interfaces/AuthCredentials';
import { AuthProviderValue } from '../../interfaces/AuthProviderValue';
import { useNavigate } from "react-router-dom";

interface Props {
  children?: ReactNode
}

const initializeState = (initialValue: AuthInfo): AuthInfo => {
  return initialValue
};

const UserProvider = ({children} : Props): JSX.Element => {
  const initialState: AuthInfo = initializeState({
    user: null,
  })

  const [state, dispatch] = useReducer(UserReducer, initialState)
  const navigate = useNavigate();

  const getUser = async (userLogin: AuthCredentials) =>{
    try {
      const user = await reqLogin(userLogin)
      if(user.status == 200){
        localStorage.setItem("authToken", JSON.stringify(user.data.access_token));
        navigate("/home")
      }
      dispatch({ type: LOGOUT, payload: { user: user }})
    } catch (error) {
      console.error(error)
    }
  }

  const { user } = state;
  const providerValue: AuthProviderValue = {
    user: user || null,
    getUser,
  }

  return(
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;