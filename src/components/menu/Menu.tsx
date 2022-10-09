import './Menu.css'

const Menu = (): JSX.Element => {

  return(
   <div>
    <header className="container__header">            
      <div className="barra">
        <ul>
          <li><a href="/home">Inicio</a></li>
          <li><a href="/createCharacter">Agregar personajes</a></li>
        </ul>
      </div> 
    </header>
  </div>
  )
}

export default Menu