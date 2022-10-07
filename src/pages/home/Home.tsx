import { useEffect, useContext } from "react"
import axiosInstance from "../../axiosInstance/CustomAxios"
import UserContext from '../../context/User/UserContext'


const Home = (): JSX.Element => {

  useEffect(() => {
   const a = axiosInstance.get('users')
  }, [])

  return(
    <div >
        homa
    </div>
  )
}

export default Home