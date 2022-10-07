import { useReducer, ReactNode } from 'react'
import { AuthInfo } from '../../interfaces/AuthState'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import { reqLogin } from '../../services/AuthService';
import {  LOGOUT } from '../types';

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

  const getUser = async () =>{
      const user = await reqLogin({"email":'', "password":''})
      dispatch({ type: LOGOUT, payload: { user: user }})
  }

  return(
    <UserContext.Provider value={{
      user: {'email':'', 'password': 'a'},
      getUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;