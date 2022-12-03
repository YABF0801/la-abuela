import './styles/Buttons.scss';
import { Link, NavLink } from 'react-router-dom';
import { router } from '@/constants';

export interface ButtonAddInterface {}

const ButtonAdd: React.FC<ButtonAddInterface> = () => {


  return (
    <div className=" d-flex justify-content-center  ">

              <button type="submit" className="btn btn-add btn-primary text-white" >
                <i className="ibtn bi bi-plus-lg "></i>
              </button>
            </div>

  );
    }

    export default ButtonAdd;