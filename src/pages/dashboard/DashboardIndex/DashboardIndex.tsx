import { Link } from 'react-router-dom';
import './styles/Dashboard.scss';
export interface DashboardIndexInterface {}

const DashboardIndex: React.FC<DashboardIndexInterface> = () => {
  return (
<section>
  <br/><p>COSAS EN HTML</p>

{/*   NUEVO USUARIO FORM */}

<div className="container justify-content-center align-items-center">

  <div className="card ">
	<div className="card-header"><h3>Nuevo Usuario</h3></div>
	<div className="card-body ">

		<form>

    
    <div className="form-group">
<div className="row align-items-center">
	<div className="col-md-3 mb-3">

	<label>Usuario</label>
	<input type="text" className="form-control" name="nick_name" id="nick_name" placeholder="Usuario" required/>
		</div>

	<div className="col-md-5 mb-3">

	<label >Nombre y apellidos</label>
	<input type="text" className="form-control" name="fullNameUser" id="fullNameUser" placeholder="Nombre y Apellidos" required/>
		</div>
    </div>
</div>



<div className="form-group">
	<div className="col-md-8 mb-3">
	<label >Cargo</label>
	<input type="text" className="form-control" name="cargo" id="cargo" placeholder="Cargo que ocupa en la empresa" required/>
</div>
</div>

<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-4 mb-3">

	<label >Contraseña</label>
	<input type="password" className="form-control" name="password" id="password" placeholder="Contraseña" required/>
		</div>

	<div className="col-md-4 mb-3">

	<label >Repetir contraseña</label>
	<input type="password" className="form-control" name="password2" id="password2" placeholder="Repetir contraseña" required/>
		</div>

</div>

</div>

<div className="form-group">
	<div className="col-md-6 mb-3 ">
		<div className="custom-control custom-radio custom-control-inline">
			<input className="custom-control-input" type="radio" name="type" id="admin" value="1"/>
			<label className="custom-control-label" >Administrador</label>
		</div>
		<div className="custom-control custom-radio custom-control-inline">
			<input className="custom-control-input" type="radio" name="type" id="user" value="2" checked/>
			<label className="custom-control-label">Invitado</label>
		</div>
	</div>
</div>

		</form>


	</div>
</div>
</div>

<br></br>
{/* NUEVO ORGANISMO FORM */}
<div className="container justify-content-center align-items-center"> 
<div className="card">
	<div className="card-header"><h3>Nuevo Organismo</h3></div>
	<div className="card-body">

		<form>

<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-3 mb-3">
    

	<label>Nombre</label>
	<input type="text" className="form-control" name="name" id="name" placeholder="Nombre" required/>
		</div>

	<div className="col-md-7 mb-3">

	<label >Descripcion</label>
	<textarea className="form-control" rows={1} name="description" id="description" placeholder="Escriba una breve descripcion"></textarea>
		</div>

	<div className="col-md-2 mb-3">

  <input className="form-check form-switch" type="checkbox" role="switch" name="priorizado" id="priorizado"/>
			<label className="custom-control-label">Priorizado</label>
		</div>

</div>

</div>

		</form>


	</div>
</div>
</div>

<br></br>
{/* NUEVO CIRCULO */}

<div className="container justify-content-center align-items-center">
<div className="card">
	<div className="card-header"><h3>Nuevo Circulo</h3></div>
	<div className="card-body">

		<form>

<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-2 mb-3">

	<label>No.</label>
	<input type="number" className="form-control" name="no" id="no"/>
		</div>

	<div className="col-md-8 mb-3">

	<label>Nombre</label>
	<input type="text" className="form-control" name="name" id="name" placeholder="Nombre del círculo"/>
		</div>

</div>

</div>


<div className="form-group">
<div className="row align-items-center">
  <div className="col-md-8 mb-3">
  <label >Ubicación</label>
	<textarea className="form-control" rows={12} name="mapbox" id="mapbox" placeholder="aqui va un mapbox"></textarea>
  </div>

	<div className="col-md-2 mb-3">

	<label>Capacidad 2</label>
	<input type="number" className="form-control" name="normedCapacity2" id="normedCapacity2"/>

	<label >Capacidad 3</label>
	<input type="number" className="form-control" name="normedCapacity3" id="normedCapacity3"/>
	
	<label>Capacidad 4</label>
	<input type="number" className="form-control" name="normedCapacity4" id="normedCapacity4"/>

	<label >Capacidad 5</label>
	<input type="number" className="form-control" name="normedCapacity5" id="normedCapacity5"/>


	<label>Capacidad 6</label>
	<input type="number" className="form-control" name="normedCapacity6" id="normedCapacity6"/>

</div>

</div>
</div>



		</form>


	</div>
</div>
</div>


<br></br>
{/* NIÑO FORM */}

<div className="container justify-content-center align-items-center">
<div className="card">
	<div className="card-header"><h3>Datos del nino</h3></div>
	<div className="card-body">

		<form>

<div className="form-group ">
<div className="row align-items-center">
	<div className="col-md-3 mb-3">

	<input type="text" className="form-control" name="os_om" id="os_om" placeholder="BOTON OS/OM"/>
		</div>

	<div className="col-md-4 mb-3">

	<div>
		<div className="form-check form-check-inline">
			<input className="form-check-input" type="radio" name="new" id="new" value="1" />
			<label className="form-check-label">Nueva Solicitud</label>
		</div>
		<div className="form-check form-check-inline">
			<input className="form-check-input" type="radio" name="traslado" id="traslado" value="2"/>
			<label className="form-check-label">Traslado</label>
		</div>
	</div>
		</div>

	<div className="col-md-3 mb-3">

	<div>
		<div className="custom-control custom-switch custom-control-inline">
			<input className="custom-control-input" type="checkbox" name="socialCase" id="socialCase" value="1"/>
			<label className="custom-control-label">Caso Social</label>
		</div>
	</div>
  </div>

  <div className="col-md-2 mb-3">
  <label>No. Entrada</label>
	<input type="number" className="form-control" name="entry" id="entry"/>
		</div>

</div>
</div>


<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-7 mb-3">

	<label>Nombre y Apellidos</label>
	<input type="text" className="form-control" name="fullNameChild" id="fullNameChild"/>
		</div>

	<div className="col-md-3 mb-3">

	<label>CI</label>
	<input type="text" className="form-control" name="ci" id="ci"/>
		</div>

	<div className="col-md-2 mb-3">

	<label >Año de vida</label>
	<select className="select" name="year_of_life" id="year_of_life">
		<option value="1">2</option>
		<option value="2">3</option>
		<option value="3">4</option>
		<option value="4">5</option>
		<option value="5">6</option>
	</select>
		</div>

</div>

</div>


<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-8 mb-3">

	<label>Dirección</label>
	<input type="text" className="form-control" name="childAdress" id="childAdress"/>
		</div>

	<div className="col-md-4 mb-3">

	<label>Localidad</label>
	<input type="text" className="form-control" name="locality" id="locality"/>
		</div>

</div>

</div>


<div className="form-group">
<div className="row align-items-center">
  <div className="col-md-4 mb-3">

	<label >Consejo Popular</label>
	<select className="custom-select" name="cPopular" id="cPopular">
		<option value="1">Micro 70</option>
		<option value="2">Abel Santamaría</option>
		<option value="3">Centro Histórico Nueva Gerona</option>
		<option value="4">Pueblo Nuevo</option>
		<option value="5">26 de Julio</option>
		<option value="6">Sierra Caballos</option>
		<option value="7">Delio Chacón</option>
		<option value="8">Patria</option>
		<option value="9">Centro Histórico Santa Fé</option>
		<option value="10">Los Paneles (Santa Fe)</option>
		<option value="11">Julio Antonio Mella (Santa Fe)</option>
		<option value="12">Consejo Popular La Demajagua</option>
		<option value="13">La Reforma</option>
		<option value="14">Argelia-Victoria</option>
	</select>

	<label >Municipio</label>
	<select className="custom-select" name="Municipality" id="Municipality">
		<option value="1">Isla de la Juventud</option>
	</select>

	<label >Provincia</label>
	<select className="custom-select" name="Province" id="Province">
		<option value="1">Isla de la Juventud</option>
	</select>

</div>

<div className="col-md-8 mb-3">

<label >Ubicación</label>
<textarea className="form-control" rows={12} name="latlon" id="latlon" placeholder="aqui va el mapbox">  </textarea>
</div>

</div>
</div>


<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-9 mb-3">

	<p >Seleccione el circulo en el que sera matriculado</p>
		</div>

	<div className="col-md-3 mb-3">

	<select className="custom-select" name="circulo" id="circulo">
		<option value="1">seleccione</option>
	</select>
		</div>

</div>

</div>

		</form>


	</div>
</div>
</div>

<br></br>
{/* MADRE FORM */}

<div className="container justify-content-center align-items-center">
<div className="card">
	<div className="card-header"><h3>Datos de la madre</h3></div>
	<div className="card-body">

		<form>

<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-7 mb-3">

	<label>Nombre y Apellidos</label>
	<input type="text" className="form-control" name="fullNameChild" id="fullNameChild"/>
		</div>

	<div className="col-md-3 mb-3">

	<label>Prentesco</label>
	<select className="custom-select">
		<option value="1">Madre</option>
    <option value="1">Padre</option>
    <option value="1">Tutor</option>
	</select>
		</div>

    <div className="col-md-2 mb-3">
    <div>
		<div className="custom-control custom-switch custom-control-inline">
			<input className="custom-control-input" type="checkbox" name="unicParent" id="unicParent" value="1"/>
			<label className="custom-control-label">Monoparental</label>
		</div>
	</div>
  </div>
  </div>
</div>

<div className="form-group">
<div className="row align-items-center">

<div className="col-md-2 mb-3">
    <div>
		<div className="custom-control custom-switch custom-control-inline">
			<input className="custom-control-input" type="checkbox" value="1"/>
			<label className="custom-control-label">Convive</label>
		</div>
	</div>
  </div>

	<div className="col-md-7 mb-3">
	<label>Dirección</label>
	<input type="text" className="form-control" name="adress" id="adress"/>
		</div>

	<div className="col-md-3 mb-3">
	<label>Telefono</label>
	<input type="text" className="form-control" name="phoneNumber" id="phoneNumber"/>
	</div>
		</div>

</div>

<div className="form-group">
<div className="row align-items-center">
  <div className="col-md-4 mb-3">

	<div>
		<div className="form-check form-check-inline">
			<input className="form-check-input" type="radio" value="1" />
			<label className="form-check-label">Trabajador</label>
		</div>
		<div className="form-check form-check-inline">
			<input className="form-check-input" type="radio" value="2"/>
			<label className="form-check-label">Jubilado</label>
		</div>
    		<div className="form-check form-check-inline">
			<input className="form-check-input" type="radio" value="3"/>
			<label className="form-check-label">Asistenciado</label>
		</div>
	</div>

</div>

<div className="col-md-8 mb-3">

<label >Nombre del centro de trabajo</label>
<input type="text" className="form-control" name="work" id="work"/>
	</div>
</div>

</div>


<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-8 mb-3">

	<label>Dirección del centro de trabajo</label>
	<input type="text" className="form-control" />
		</div>

    <div className="col-md-3 mb-3">

<label>Organismo</label>
<select className="custom-select" name="organismo" id="organismo">
  <option value="1">Seleccione</option>
</select>
  </div>

  <div className="form-group">
<div className="row align-items-center">
	<div className="col-md-8 mb-3">

	<label >Cargo</label>
	<input type="text" className="form-control" name="cargo" id="cargo"/>
		</div>

	<div className="col-md-2 mb-3">

	<label >Horario</label>
	<input type="text" className="form-control" name="horario" id="horario"/>
		</div>

	<div className="col-md-2 mb-3">

	<label >Salario</label>
	<input type="number" className="form-control" name="salary" id="salary"/>
		</div>

</div>

</div>

<div className="form-group">
<div className="row align-items-center">

	<div className="col-md-7 mb-3">
  <div className="form-check form-check-inline">
			<input className="form-check-input" type="checkbox" value="1" />
			<label className="form-check-label">Tiene otros niños en circulo infantil</label>
		</div>
  </div>

	<div className="col-md-2 mb-3">

	<label >Cantidad</label>
	<input type="text" className="form-control"/>
		</div>

  <div className="col-md-3 mb-3">
<select className="custom-select" >
  <option value="1">Seleccione</option>
</select>
  </div>

</div>
</div>

<div className="form-group">
<div className="row align-items-center">
  <div className="col-md-6 mb-3">

	<div>
		<div className="form-check form-check-inline">
			<input className="form-check-input" type="checkbox" value="1" />
			<label className="form-check-label">Embarazada</label>
		</div>
		<div className="form-check form-check-inline">
			<input className="form-check-input" type="checkbox" value="2"/>
			<label className="form-check-label">Estudiante</label>
		</div>
    		<div className="form-check form-check-inline">
			<input className="form-check-input" type="checkbox" value="3"/>
			<label className="form-check-label">Hipoacusica</label>
		</div>
	</div>

</div>
</div>
</div>

<div className="col-md-12 mb-3">

<label >Motivo de solicitud</label>
<textarea className="form-control" rows={2}>  </textarea>
</div>

</div>

</div>



		</form>


	</div>
</div>
</div>


<br></br>
{/* PADRE FORM */}

<div className="container justify-content-center align-items-center">
<div className="card">
	<div className="card-header"><h3>Datos del padre</h3></div>
	<div className="card-body">

		<form>

<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-7 mb-3">

	<label>Nombre y Apellidos</label>
	<input type="text" className="form-control" name="fullNameChild" id="fullNameChild"/>
		</div>

	<div className="col-md-3 mb-3">

	<label>Prentesco</label>
	<select className="custom-select" >
    <option value="1">Padre</option>
    <option value="1">Madre</option>
    <option value="1">Tutor</option>
	</select>
		</div>

  </div>
</div>

<div className="form-group">
<div className="row align-items-center">

<div className="col-md-2 mb-3">
    <div>
		<div className="custom-control custom-switch custom-control-inline">
			<input className="custom-control-input" type="checkbox" value="1"/>
			<label className="custom-control-label">Convive</label>
		</div>
	</div>
  </div>

	<div className="col-md-7 mb-3">
	<label>Dirección</label>
	<input type="text" className="form-control" name="adress" id="adress"/>
		</div>

	<div className="col-md-3 mb-3">
	<label>Telefono</label>
	<input type="text" className="form-control" name="phoneNumber" id="phoneNumber"/>
	</div>
		</div>

</div>

<div className="form-group">
<div className="row align-items-center">
  <div className="col-md-4 mb-3">

	<div>
		<div className="form-check form-check-inline">
			<input className="form-check-input" type="radio" value="1" />
			<label className="form-check-label">Trabajador</label>
		</div>
		<div className="form-check form-check-inline">
			<input className="form-check-input" type="radio" value="2"/>
			<label className="form-check-label">Jubilado</label>
		</div>
    		<div className="form-check form-check-inline">
			<input className="form-check-input" type="radio" value="3"/>
			<label className="form-check-label">Asistenciado</label>
		</div>
	</div>

</div>

<div className="col-md-8 mb-3">

<label >Nombre del centro de trabajo</label>
<input type="text" className="form-control" name="work" id="work"/>
	</div>
</div>

</div>


<div className="form-group">
<div className="row align-items-center">
	<div className="col-md-8 mb-3">

	<label>Dirección del centro de trabajo</label>
	<input type="text" className="form-control" />
		</div>

    <div className="col-md-3 mb-3">

<label>Organismo</label>
<select className="custom-select" name="organismo" id="organismo">
  <option value="1">Seleccione</option>
</select>
  </div>

  <div className="form-group">
<div className="row align-items-center">
	<div className="col-md-8 mb-3">

	<label >Cargo</label>
	<input type="text" className="form-control" name="cargo" id="cargo"/>
		</div>

	<div className="col-md-2 mb-3">

	<label >Horario</label>
	<input type="text" className="form-control" name="horario" id="horario"/>
		</div>

	<div className="col-md-2 mb-3">

	<label >Salario</label>
	<input type="number" className="form-control" name="salary" id="salary"/>
		</div>

</div>

</div>

<div className="form-group">
<div className="row align-items-center">

	<div className="col-md-7 mb-3">
  <div className="form-check form-check-inline">
			<input className="form-check-input" type="checkbox" value="1" />
			<label className="form-check-label">Tiene otros niños en circulo infantil</label>
		</div>
  </div>

	<div className="col-md-2 mb-3">

	<label >Cantidad</label>
	<input type="text" className="form-control"/>
		</div>

  <div className="col-md-3 mb-3">
<select className="custom-select" >
  <option value="1">Seleccione</option>
</select>
  </div>

</div>
</div>


<div className="col-md-12 mb-3">

<label >Motivo de solicitud</label>
<textarea className="form-control" rows={2}>  </textarea>
</div>

</div>

</div>



		</form>


	</div>
</div>
</div>

{/* ---------LISTADO DE USUARIOS---------  */}<p></p>
    <div>
        <div className="d-flex justify-content-end pt-2">
            <button type="button" className="btn btn-primary btn-sm ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </button>
          </div>
          
          <table className="table align-middle mb-0 bg-white">
        <thead className="bg-primary text-white">
          <tr>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Estado</th>
            <th>Rol</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                  <div className="ms-3">
                  <p className="fw-bold mb-1">Nombre y apellidos</p>
                  <p className="text-muted mb-0">nombre de usuario</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Cargo que ocupa</p>
              </td>
            <td>
              <span className="badge badge-success rounded-pill d-inline">Activo</span>
            </td>
            <td>Admin</td>
            <td>
              <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
           
              </button>
              <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>
              </button>
            </td>
          </tr>

            <tr>
            <td>
              <div className="d-flex align-items-center">
                  <div className="ms-3">
                  <p className="fw-bold mb-1">Nombre y apellidos</p>
                  <p className="text-muted mb-0">nombre de usuario</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Cargo que ocupa</p>
              </td>
            <td>
              <span className="badge badge-success rounded-pill d-inline">Activo</span>
            </td>
            <td>Admin</td>
            <td>
              <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
           
              </button>
              <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>
              </button>
            </td>
          </tr>
          
          <tr>
            <td>
              <div className="d-flex align-items-center">
                  <div className="ms-3">
                  <p className="fw-bold mb-1">Nombre y apellidos</p>
                  <p className="text-muted mb-0">nombre de usuario</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Cargo que ocupa</p>
              </td>
            <td>
              <span className="badge badge-success rounded-pill d-inline">Activo</span>
            </td>
            <td>Admin</td>
            <td>
              <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
              </button>

            <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
            </button>
              
            </td>
          </tr>

        </tbody>
        
      </table>
      
    </div>

{/* ---------CREAR USUARIO--------- */}<p></p>
    <div className="h-100 bg-light">         
                <div className="container py-5 h-100 justify-content-center align-items-center h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col d-flex justify-content-center align-items-center">
                      <div className="card card-registration my-4">
                        <div className="row g-0">                       
                          <div className="col-xl-12">
                            <div className="card-body p-md-5 text-black">
                              <h3 className="mb-5 text-primary d-flex justify-content-center align-items-center">Nuevo usuario</h3>
              

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <label className="form-label">Usuario</label>
                                    <input type="text" id="user" className="form-control form-control-sm" />
                                 <div className="form-outline">
                                     </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                  <div className="form-outline">
                                    <label className="form-label">Tipo de usuario</label>
                                    <select className="select" >
                                      <option value="admin">Administrador</option>
                                      <option value="user">Invitado</option>
                                         </select>                                               
                                     </div>
                                </div>
                              </div>

                              <div className="row">
                                 <div className="form-outline col-md-6 mb-4">
                                <label className="form-label">Nombre</label>
                               <input type="text" id="username" className="form-control form-control-sm" />
                            </div>
                            <div className="form-outline col-md-6 mb-4">
                                <label className="form-label">Apellido</label>
                                 <input type="text" id="lastname" className="form-control form-control-sm"/>
                             </div>
                              </div>
                                           
                              <div className="form-outline mb-4">
                                <label className="form-label" >Cargo que ocupa</label>
                                <input type="text" id="cargo" className="form-control form-control-sm" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" > Contrasena</label>
                                    <input type="password" id="password" className="form-control form-control-sm" />
                                 <div className="form-outline">
                                     </div>
                                </div>
                                
                                <div className="row ">
                                             
                                    <div className="d-flex d-flex justify-content-center pt-3">
                                        <button type="button" className="btn btn-secondary btn-sm "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                          </svg></button>
            
                                        <button type="button" className="btn btn-primary btn-sm ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                          </svg></button>
                              </div>
              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
    </div>
{/* 
---------LISTADO DE ORGANISMOS--------- */} <p></p>
    <div>
       <div className="d-flex justify-content-end pt-2">
           <button type="button" className="btn btn-primary btn-sm ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
             </svg></button>
         </div>
       
         <table className="table align-middle mb-0 bg-white ">
        <thead className="bg-primary text-white ">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Priorizado</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex ">
                  <div className="ms-3">
                  <p className="fw-bold mb-1">MINSAP</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Ministerio de Salud Publica</p>
              </td>
            <td>
               <input className="form-check-input" type="checkbox" id="priorizado" value=""/>
           </td>
            <td>
              <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
           
              </button>
              <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>
              </button>
            </td>
          </tr>
   
          <tr>
           <td>
             <div className="d-flex ">
                 <div className="ms-3">
                 <p className="fw-bold mb-1">MINED</p>
               </div>
             </div>
           </td>
           <td>
             <p className="fw-normal mb-1">Ministerio de Educacion</p>
             </td>
           <td>
              <input className="form-check-input" type="checkbox" id="priorizado" value=""/>
          </td>
           <td>
             <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                   <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                   <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                 </svg>
          
             </button>
             <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                 </svg>
             </button>
           </td>
         </tr>
   
         <tr>
           <td>
             <div className="d-flex ">
                 <div className="ms-3">
                 <p className="fw-bold mb-1">MINAG</p>
               </div>
             </div>
           </td>
           <td>
             <p className="fw-normal mb-1">Ministerio de la Agricultura</p>
             </td>
           <td>
              <input className="form-check-input" type="checkbox" id="priorizado" value=""/>
          </td>
           <td>
             <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                   <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                   <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                 </svg>
          
             </button>
             <button type="button" className="btn btn-link btn-sm btn-rounded btn-primary-outline">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                 </svg>
             </button>
           </td>
         </tr>
   
        </tbody>
        
      </table>
      <div className="d-flex justify-content-end pt-2">
        <button type="button" className="btn btn-success btn-sm ms-2" >Actualizar</button>
      </div>
    </div>

{/* ---------CREAR ORGANISMO--------- */}<p></p>
<div className="h-100 bg-light">         
            <div className="container py-5 h-100 justify-content-center align-items-center h-100 ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col d-flex justify-content-center align-items-center">
                  <div className="card card-registration my-4 shadow p-1 mb-5">
                    <div className="row g-0">                       
                      <div className="col-xl-12">
                        <div className="card-body p-md-5 text-black">
                           
                          <div className="row">

                            <div className="col-4">
                              <div className="form-outline">
                                <label className="form-label" >Nombre</label>
                           <input type="text" id="organismo" className="form-control form-control-sm" />
                              </div>
                            </div>

                            <div className="col-6">
                              <div className="form-outline">
                                <label className="form-label" >Descripcion</label>
                            <input type="text" id="description" className="form-control form-control-sm" />
                            </div>
                            </div>

                            <div className="col-2">
                              <div className="form-outline">
                                <label className="form-label" >Priorizado</label>
                                <input className="form-check-input" type="checkbox" id="priorizado" value="" />
                             </div>
                            </div>
                          </div>
                          
                            <div className="row">
                                         
                            <div className="d-flex d-flex justify-content-end pt-3">
                            <button type="button" className="btn btn-secondary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                              </svg></button>

                            <button type="button" className="btn btn-primary btn-sm ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                              </svg></button>
                          </div>
          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
</div>


{/* ---------LISTADO DE PLANILLAS--------- */} <p></p>

    <div> 
                
    <div className="d-flex justify-content-end pt-2">
    <button type="button" className="btn btn-primary btn-sm ms-2">Exportar</button>
  <div className="table-responsive">
 <table id="dt-select" className="table text-center table table-hover table-sm border-secondary">
            <thead className="bg-light text-primary">
              <tr>  
                <th className="th-sm " > 
                    <input className="form-check-input" type="checkbox" value="" id="noEntry" />    
                    <label className="form-check-label" >No</label>
                </th>
                <th className="th-sm " >
                    <input className="form-check-input" type="checkbox" value="" id="Date" />    
                    <label className="form-check-label" >Fecha</label>
                </th>
                <th className="th-sm ">
                    <input className="form-check-input" type="checkbox" value="" id="nameChildren" />    
                    <label className="form-check-label" >Nombre</label>
                </th>
                <th className="th-sm ">
                    <input className="form-check-input" type="checkbox" value="" id="lastNameChildren" />    
                    <label className="form-check-label" >Apellido </label>
                </th>
                <th className="th-sm ">
                    <input className="form-check-input" type="checkbox" value="" id="noIdentity" />    
                    <label className="form-check-label" >Carnet </label>
                </th>
                <th className="th-sm">
                    <input className="form-check-input" type="checkbox" value="" id="sex" />    
                    <label className="form-check-label" >Sexo </label>
                </th>
                <th className="th-sm">
                    <input className="form-check-input" type="checkbox" value="" id="year_of_life" />    
                    <label className="form-check-label" >Año </label>
                </th>
                <th className="th-sm">
                    <input className="form-check-input" type="checkbox" value="" id="fullNameParent" />    
                    <label className="form-check-label" >Nombre de Tutor</label>
                </th>
                <th className="th-sm">
                    <input className="form-check-input" type="checkbox" value="" id="cPopular" />    
                    <label className="form-check-label" >Consejo Popular  </label>
                </th>
                <th className="th-sm">
                    Tipo de Solicitud 
                </th>
                <th className="th-sm">
                    Estado  
                </th>
                <th className="th-sm">
                    <input className="form-check-input" type="checkbox" value="" id="childcirculo" />    
                    <label className="form-check-label" >Matrticula </label>
                </th>
                <th className="icons"> </th></tr>
              
            </thead>
            <tbody >
              <tr>
                <td>232</td>
                <td>02/08/22</td>
                <td>Juan</td>
                <td>Ruiz</td>
                <td>20020824985</td>
                <td>M</td>
                <td>2</td>
                <td>Pedro Ruiz</td>
                <td>26 de Julio</td>
                <td>Nueva</td>
                <td>Pendiente</td>
                <td>...</td>
                <td>
                    <button type="button" className="btn-sm btn-primary-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                          </svg>
                      </button>
                      

                        
                </td>
              </tr>
              <tr>
                <td>233</td>
                <td>05/10/22</td>
                <td>Carol</td>
                <td>Rodriguez</td>
                <td>20020824985</td>
                <td>F</td>
                <td>2</td>
                <td>Ana Maria Foil</td>
                <td>26 de Julio</td>
                <td>Traslado</td>
                <td>Aprobado</td>
                <td>Menique</td>
                <td>
                    <button type="button" className="btn-sm btn-primary-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                          </svg>
                      </button>
                      

                        
                </td>
              </tr>
              <tr>
                <td>234</td>
                <td>25/01/22</td>
                <td>Fred</td>
                <td>Diaz</td>
                <td>21050124985</td>
                <td>M</td>
                <td>3</td>
                <td>Georgina Gonzalez</td>
                <td>Abel Santamaria</td>
                <td>Nueva</td>
                <td>Aprobado</td>
                <td>Abel Santamaria</td>
                <td>
                    <button type="button" className="btn-sm btn-primary-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                          </svg>
                      </button>
                      

                        
                </td>
              </tr>
              <tr>
                <td>235</td>
                <td>05/10/22</td>
                <td>Venus</td>
                <td>Bouza</td>
                <td>20020824985</td>
                <td>F</td>
                <td>2</td>
                <td>Ernesto Bouza</td>
                <td>Sierra Caballo</td>
                <td>Nueva</td>
                <td>Aprobado</td>
                <td>Ismaelillo</td>
                <td>
                    <button type="button" className="btn-sm btn-primary-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="btn-primary-outline bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                          </svg>
                      </button>
                      

                        
                </td>
              </tr>                
            </tbody>

          </table>
</div>
</div>


    </div>

 </section>
  );
};

export default DashboardIndex;
