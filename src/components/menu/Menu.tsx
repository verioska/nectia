import { useNavigate } from 'react-router-dom';
import './Menu.css'

const Menu = (): JSX.Element => {
  const navigate = useNavigate();
  
  const closeSection = () =>{
    localStorage.removeItem('authToken');
    navigate("/")
  }

  return(
   <div>
    <header className="container__header"> 
      <div onClick={() => closeSection()}><i className="fa-solid fa-right-to-bracket close"></i></div>    
      <div className="barra">
        <div className="barra-img">
          <img src={require("../../assets/logo.png")}/>
        </div>
        <ul>
          <li>
            <div className="barra__li">
              <i className="fa-solid fa-house-chimney icn-menu"></i>
              <a href="/home">Inicio</a>
            </div>
          </li>
          <li>
            <div className="barra__li">
              <i className="fa-solid fa-user-plus icn-menu"></i>
              <a href="/createCharacter">Agregar personajes</a>
            </div>
          </li>
        </ul>
      </div> 
    </header>
  </div>
  )
}

export default Menu