import './styles/GeneralList.scss';

import { router } from '@/constants';
import { DiffieHellman } from 'crypto';
export interface GeneralListInterface {}

const GeneralList: React.FC<GeneralListInterface> = () => {
  return(
    <section className="main-home-sub">
    <div className="card-header col-12 container"><br/><br/>
    <div className="card-body col-12 container justify-content-between text-white">
    AQUI VA EL LISTADO DE TODAS LAS PLANILLAS EN UN DATATABLE
    </div>
    
    </div>
    </section>
  );
};

export default GeneralList;
