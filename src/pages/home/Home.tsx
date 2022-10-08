import { useEffect } from "react"
import axiosInstance from "../../axiosInstance/CustomAxios"
import HomeTable from './HomeTable'
import './Home.css'

const Home = (): JSX.Element => {

  useEffect(() => {
   const a = axiosInstance.get('characters')
  
  }, [])


  
  return(
    <div className="container-home">
      <HomeTable/>
    </div>
  )
}

export default Home