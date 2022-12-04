import { ErrorMessage, Field } from 'formik';
import { IOrganismos } from '../../interface';
import './styles/FormOrganismos.scss'


type FormOrganismosProps = {
  values: IOrganismos;
};

const FormOrganismos: React.FC<FormOrganismosProps> = ({ values }) => {
  return (
     
    <section className="container">
      <div className="container">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col">
          <div className="card-body organismo text-left gap-3">
            <div className="mb-md-5 mt-md-4">
              <div className="card-body text-black">
                <h3 className="text-dark d-flex justify-content-center align-items-center">Nuevo Organismo</h3>

                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-sm-4">
                  <div className="form-outline">
                      <label className="form-label" htmlFor="name">
                        Nombre
                      </label>
                      <Field
                        className="form-control"
                        type="text"
                        name="organismos.name"
                        id="name"
                        value={values.name}
                      />
                    </div>
                    <ErrorMessage name="organismos.name" component="p" className="text-danger" />
                    </div>

                  <div className="col-sm-6">
                    <div className="form-outline">
                      <label className="form-label" htmlFor="description">
                        Descripcion
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="organismos.description"
                        id="description"
                        value={values.description}
                      />
                    </div>
                    <ErrorMessage name="organismos.description" component="p" className="text-danger" />
                    </div>

                    <div className="col-sm-2 p-lg-5">
                    <div className="form-check form-switch">
                      <Field
                        className="form-check-input switch-lg"
                        type="checkbox"
                        role="switch"
                        name="organismos.priorizado"
                        id="priorizado"
                        checked={values.priorizado}
                      />
                      <label className="form-label" htmlFor="priorizado">
                        Priorizado
                      </label>
                    </div>
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

export default FormOrganismos;