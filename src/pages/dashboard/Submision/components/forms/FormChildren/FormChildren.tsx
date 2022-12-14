import { ErrorMessage, Field } from 'formik';
import { IChildren } from '../../../interface';
import './styles/FormChildren.scss';

type FormChildrenProps = {
  values: IChildren;
};

const FormChildren: React.FC<FormChildrenProps> = ({ values }) => {
  return (
    <div className="container mt-3">
      <div className="card-header ">
        <h3 className="text-center">Datos del Niño</h3>
      </div>
      {/* primera seccion */}
      <section className="row ">
        <div className="col-12 col-md-4 d-flex flex-column">
          <label className="form-label">
            Nombre:
            <Field
              className="form-control"
              type="text"
              name="children.nameChildren"
              id="nameChildren"
              placeholder="Nombre del Menor"
              value={values.nameChildren}
            />
            <ErrorMessage name="children.nameChildren" component="p" className="text-danger" />
          </label>
          <label className="form-label">
            No Carnet Identidad:
            <Field
              className="form-control"
              type="number"
              name="children.noIdentity"
              id="noIdentity"
              placeholder="Numero de CI"
              value={values.noIdentity}
            />
            <ErrorMessage name="children.noIdentity" component="p" className="text-danger" />
          </label>
        </div>
        <div className="col-12 col-md-4">
          <label className="form-label w-100">
            Primer Apellido:
            <Field
              className="form-control"
              type="text"
              name="children.lastNameChildren"
              id="lastNameChildren"
              placeholder="Primer Apellido"
              value={values.lastNameChildren}
            />
            <ErrorMessage name="children.lastNameChildren" component="p" className="text-danger" />
          </label>
          <div className="d-flex justify-content-between align-center gap-3">
            <label className="form-label">
              Edad:
              <Field
                className="form-control"
                type="number"
                name="children.age"
                id="age"
                placeholder="Edad"
                value={values.age}
              />
              <ErrorMessage name="children.age" component="p" className="text-danger" />
            </label>
            <label className="form-label w-100">
              Año de Vida:
              <Field as="select" className="form-select" name="children.year_of_life">
                <option value="" selected>
                  ---Seleccione---
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Field>
              <ErrorMessage name="children.year_of_life" component="p" className="text-danger" />
            </label>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <label className="form-label w-100">
            Segundo Apellido:
            <Field
              className="form-control"
              type="text"
              name="children.lastNameChildren2"
              id="lastNameChildren2"
              placeholder="Segundo Apellido"
              value={values.lastNameChildren2}
            />
          </label>
          <div>
            <div className="form-check">
              <Field className="form-check-input" type="radio" name="children.sex" id="femenino" value="femenino" />
              <label className="form-check-label" htmlFor="femenino">
                Femenino
              </label>
            </div>
            <div className="form-check">
              <Field className="form-check-input" type="radio" name="children.sex" id="masculino" value="masculino" />
              <label className="form-check-label" htmlFor="masculino">
                Masculino
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* segunda section */}
      <section className="row mb-4 ">
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row">
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-center">
            <label className="form-label">
              Calle:
              <Field
                className="form-control"
                type="text"
                name="children.street"
                id="street"
                placeholder="Calle donde vive el menor"
                value={values.street}
              />
              <ErrorMessage name="children.street" component="p" className="text-danger" />
            </label>
            <label className="form-label">
              Entre:
              <Field
                className="form-control"
                type="text"
                name="children.between"
                id="between"
                placeholder="Entre..."
                value={values.between}
              />
            </label>
            <label className="form-label">
              Numero:
              <Field
                className="form-control"
                type="text"
                name="children.house"
                id="house"
                placeholder="Casa..."
                value={values.house}
              />
            </label>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column">
          <div className="d-flex flex-column flex-md-row gap-3">
            <label className="form-label">
              Escalera:
              <Field
                className="form-control"
                type="text"
                name="children.stair"
                id="stair"
                placeholder="Calle donde vive el menor"
                value={values.stair}
              />
            </label>
            <label className="form-label w-100">
              Localidad:
              <Field
                className="form-control"
                type="text"
                name="children.locality"
                id="locality"
                placeholder="Localidad"
                value={values.locality}
              />
              <ErrorMessage name="children.locality" component="p" className="text-danger" />
            </label>
          </div>
        </div>
      </section>
      {/* tercera section */}
      <section className="row mb-4 ">
        <div className="d-flex flex-column flex-md-row justify-content-between align-center gap-3">
          <label className="form-label w-100">
            Consejo Popular:
            <Field as="select" className="form-select" name="children.cPopular">
              <option value="" selected>
                ---Seleccione---
              </option>
              <option value="micro70">Micro 70</option>
              <option value="sierracaballo">Sierra Caballo</option>
              <option value="abelsantamaria">Abel Santamaria</option>
            </Field>
            <ErrorMessage name="children.cPopular" component="p" className="text-danger" />
          </label>
          <label className="form-label w-100">
            Municipio:
            <Field as="select" className="form-select" name="children.municipality">
              <option value="" selected>
                ---Seleccione---
              </option>
              <option value="isladelajuventud">Isla de la Juventud</option>
            </Field>
            <ErrorMessage name="municipality" component="p" className="text-danger" />
          </label>
          <label className="form-label w-100">
            Provincia:
            <Field as="select" className="form-select" name="children.province">
              <option value="" selected>
                ---Seleccione---
              </option>
            </Field>
            <ErrorMessage name="children.province" component="p" className="fill-error text-danger" />
          </label>
        </div>
      </section>
    </div>
  );
};

export default FormChildren;
