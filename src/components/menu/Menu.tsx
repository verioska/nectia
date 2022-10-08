import './Menu.css'

const Menu = (): JSX.Element => {

  return(
   <div>
    <header className="container__header">            
      <div className="barra">
        <ul>
          <li><a href="Index.html">Inicio</a></li>
          <li><a href="contacto.html">Agregar personajes</a></li>
        </ul>
      </div> 
    </header>
  </div>
  )
}

export default Menu