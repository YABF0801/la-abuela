import { ErrorMessage, Field } from 'formik';
import { IUsers } from '../../interface';
import './styles/newUser.scss'


type FormUsersProps = {
  values: IUsers;
};

const FormNewUser: React.FC<FormUsersProps> = ({ values }) => {
  return (
     
    <section className="container ">
      
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col">
          <div className="card-body user text-left gap-3">
            <div className="mb-md-5 mt-md-4">
              <div className="card-body text-black">
                <h3 className="text-dark d-flex justify-content-center align-items-center">Nuevo Usuario</h3>

                <div className="container align-items-center gap-3 ">
                <div className="row justify-content-center">
                  
                  <div className="col-sm-2">
                  <div className="form-outline">
                      <label className="form-label" htmlFor="nick_name">
                        Usuario
                      </label>
                      <Field
                        className="form-control"
                        type="text"
                        name="nick_name"
                        id="nick_name"
                        value={values.nick_name}
                      />
                    </div>
                    <ErrorMessage name="nick_name" component="p" className="text-danger" />
                    </div>

                  <div className="col-sm-3">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="fullNameUser">
                        Nombre
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="fullNameUser"
                        id="fullNameUser"
                        value={values.fullNameUser}
                      />
                    </div>
                    <ErrorMessage name="fullNameUser" component="p" className="text-danger" />
                    </div>

                    <div className="col-sm-3">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="position">
                        Cargo
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="position"
                        id="position"
                        value={values.position}
                      />
                    </div>
                    <ErrorMessage name="position" component="p" className="text-danger" />
                    </div>
                    </div>
                    </div>

{/* segunga linea */}

              <div className="container align-items-center gap-3 ">
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                  <div className="form-outline">
                      <label className="form-label" htmlFor="password">
                        Contraseña
                      </label>
                      <Field
                        className="form-control"
                        type="text"
                        name="password"
                        id="password"
                        value={values.password}
                      />
                    </div>
                    <ErrorMessage name="password" component="p" className="text-danger" />
                    </div>

                  <div className="col-sm-3">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="password">
                      Repetir Contraseña
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="password"
                        id="password"
                        value={values.password}
                      />
                    </div>
                    <ErrorMessage name="password" component="p" className="text-danger" />
                    </div>

                    <div className="col-sm-2">
                    <div className="form-outline">
                    <label className="form-label">
                      Tipo de usuario:
                      <Field as="select" className="form-select" name="role">
                        <option value="" selected>
                          ---Seleccione---
                        </option>
                        <option value="admin">Administrador</option>
                        <option value="user">Invitado</option>
                        </Field>
                      <ErrorMessage name="role" component="p" className="text-danger" />
                    </label>
                    </div>
                    <ErrorMessage name="role" component="p" className="text-danger" />
                    </div>
                    </div>
                    </div>

                 </div>

               </div>
             </div>
            </div>
          </div>
              

</section>   

    
);
};

export default FormNewUser;