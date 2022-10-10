import './Menu.css'

const Menu = (): JSX.Element => {

  return(
   <div>
    <header className="container__header"> 
      <i className="fa-solid fa-right-to-bracket close"></i>      
      <div className="barra">
        <div>
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