import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormNewUser } from './components'; 
import { IUsers} from './interface';
import './styles/Users.scss';
/* import { useUsers } from '../context/users.context';  */
import { useNotification } from '@/context/Notification/NotificationProvider';
import { useNavigate } from 'react-router-dom';
import { router } from '@/constants';

export interface UsersInterface {}

const REQUIRED = 'Este campo es requerido';

 const SignupSchema = Yup.object().shape({
  no: Yup.number().required(REQUIRED),
  name: Yup.string().required(REQUIRED),
  capacidad_total: Yup.number().required(REQUIRED),
	normed_capacity2: Yup.number().required(REQUIRED),
	normed_capacity3: Yup.number().required(REQUIRED),
	normed_capacity4: Yup.number().required(REQUIRED),
	normed_capacity5: Yup.number().required(REQUIRED),
	normed_capacity6: Yup.number().required(REQUIRED),
    })

const initialValues: IUsers = {
	nick_name: '',
	fullNameUser: '',
	position: '',
	password: '',
    }

const Users: React.FC<UsersInterface> = () => {
/*   const usersContext = useUsers(); */
  const notification = useNotification();
  const navigate = useNavigate();
  return (
    <section className="main-home-sub">
    <div className="card-header col-12 container"><br/><br/>
    <div className="card-body col-12 users container justify-content-between">

      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          alert(values);
         /*  try {
            const users = await usersContext?.createUsers({ users: values });
            if (users) {
              notification.getSuccess('Usuario Guardado');
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

              <FormNewUser values={values} />

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
    <div className="col-12 container justify-content-between text-white">AQUI VA EL LISTADO DE TODOS LOS USUARIOS Y SUS DATOS UN DATATABLE
    </div>
    </section>
  );
};

export default Users;
