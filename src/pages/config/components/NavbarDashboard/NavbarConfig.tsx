import './styles/NavbarConfig.scss';
import { Link, NavLink } from 'react-router-dom';
import { router } from '@/constants';
import { useState } from 'react';
export interface NavbarConfigInterface {}

const NavbarConfig: React.FC<NavbarConfigInterface> = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const handleClickToggle = () => {
    setToggle((state) => !state);
  };
  return (

    <nav className="navbar navbar-expand-lg sticky-top bg-light shadow-sm ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <h1 className="d-inline-block m-3">
          <Link to={router.DASHBOARD} className="text">
            OCI
          </Link>
        </h1>
      </a>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"       >
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav align-center gap-5">
          <li className="nav-item ">
            <NavLink className="nav-link link text-dark" to="/">
            Organismos
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link link text-dark " to="/">
              Usuarios
            </NavLink>
          </li>
          
        </ul>
      </div>

      <div className="icong justify-content-right ">
          <a className="d-flex m-3 gap-3">

            <NavLink className="nav-link link text-success text-primary display-4" to="/">
            <i className="inav bi-question-lg"></i>
            </NavLink>
            
            <NavLink className="nav-link link text-success text-primary display-4" to={router.CONFIG}>
            <i className="inav bi bi-gear-fill"></i>
            </NavLink>


            <NavLink className="nav-link link text-success text-primary display-4" to="/">
            <i className="inav bi bi-box-arrow-in-right"></i>
            </NavLink>


           </a>
     </div>
    </div>
</nav>
      );
    }


export default NavbarConfig;
