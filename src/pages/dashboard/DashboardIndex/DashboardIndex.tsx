import { Link } from 'react-router-dom';
import './styles/Dashboard.scss';
export interface DashboardIndexInterface {}

const DashboardIndex: React.FC<DashboardIndexInterface> = () => {
  return (
<section>
    <div className="main-home text-bg-white"></div>
    </section>
  );
};

export default DashboardIndex;
