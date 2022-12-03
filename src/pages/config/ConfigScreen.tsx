/* import './styles/GeneralList.scss'; */
import { Outlet } from 'react-router-dom';
import { router } from '@/constants';
import { NavbarConfig } from './components';

export interface ConfigInterface {}


const Config: React.FC<ConfigInterface> = () => {
  return(
    <>
      <NavbarConfig />
      <Outlet />
      <section className="main-home-sub">
    <div className="card-header col-12 container"><br/><br/>
    <div className="card-body col-12 container justify-content-between text-white">
    AQUI VA LA CONFIGURACION PARA USUARIOS Y ORGANISMOS
    </div>
    
    </div>
    </section>
    </>

  );
};

export default Config;