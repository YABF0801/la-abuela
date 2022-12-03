import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormOrganismos } from './components'; 
import { IOrganismos} from './interface';
import './styles/Organismos.scss';
/* import { useOrganismos } from '../context/organismos.context';  */
import { useNotification } from '@/context/Notification/NotificationProvider';
import { useNavigate } from 'react-router-dom';
import { router } from '@/constants';

export interface OrganismosInterface {}

const REQUIRED = 'Este campo es requerido';

  const SignupSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED),
  description: Yup.string().required(REQUIRED),
  priorizado: Yup.boolean(),
	}) 

const initialValues: IOrganismos = {
  	name: '',
	  description: '',
  	priorizado: false,
	}

const Organismos: React.FC<OrganismosInterface> = () => {
  /* const organismosContext = useOrganismos(); */
  const notification = useNotification();
  const navigate = useNavigate();
  return (
    <section className="main-home-sub">
    <div className="card-header col-12 container"><br/><br/>
    <div className="card-body col-12 organismo container justify-content-between">

      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          alert(values);
          /* try {
            const organismos = await organismosContext?.createOrganismos({ organismos: values });
            if (organismos) {
              notification.getSuccess('Organismo Guardado');
            }
            actions.setSubmitting(false);
          } catch (error) {
            notification.getError('Ocurrio un error intentalo mas tarde');
            actions.setSubmitting(false);
          } */
        }}
        validationSchema={SignupSchema} 
      >
        {({ values, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
    <section className="container">

        <div className="card-body">

        <FormOrganismos values={values} />

      </div>
    </section>

            
            <div className="d-flex d-flex justify-content-center  gap-2 pb-3">
 

              <button type="button" className="btn btn-group btn-gray justify-content-center" >
                <i className="ibtn bi bi-x-lg"></i>
              </button>

              <button type="submit" className="btn btn-group btn-primary justify-content-center">
                <i className="ibtn bi bi-check2"></i>
              </button>
            </div>
            
          </form>
        )}
      </Formik>
      
    </div>
    </div>
    <div className="card-footer col-12 container"><br/><br/>
    </div>
    <div className="col-12 container justify-content-between text-white">AQUI VA EL LISTADO DE TODOS LOS ORGANISMOS EN UN DATATABLE
    </div>
    </section>
  );
};

export default Organismos;
