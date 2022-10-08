

const HomeTable = (): JSX.Element =>{
    return(
      <table className="content-table"> 
        <thead className="content-table__thead"> 
          <tr><th>Nombre</th> 
          <th>Apellido</th> 
          <th>Genero</th> 
          <th>Acciones</th> 
          </tr> 
        </thead> 
        <tbody> 
          <tr><td>Emmanuel</td> 
          <td>Enchiladas</td> 
          <td>Pasas</td> </tr> 
          <tr>  <td>Lina</td> 
          <td>Salteñas</td> 
          <td>Aderezos</td> 
          </tr> 
          <tr> 
            <td>Adrián</td> 
            <td>Berenjenas horneadas</td> 
            <td>Queso</td> </tr> 
            <tr> <td>Yaz</td> 
            <td>Sopa de cebolla</td> 
            <td>Carnes rojas</td> </tr> 
            </tbody> 
          </table>
    )
}

export default HomeTable