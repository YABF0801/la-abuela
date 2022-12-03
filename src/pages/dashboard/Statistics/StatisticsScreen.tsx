import './styles/Statistics.scss';

import { router } from '@/constants';
export interface StatisticsInterface {}

const Statistics: React.FC<StatisticsInterface> = () => {
  return(
    <section className="main-home-sub">
    <div className="card-header col-12 container"><br/><br/>
    <div className="card-body col-12 container justify-content-between text-white">
    AQUI VAN LAS GRAFICAS ESTADISTICAS
    </div>
    </div>
    </section>
  );
};

export default Statistics;
