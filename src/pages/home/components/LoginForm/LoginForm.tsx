import { router } from '@/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LoginFormStyle.scss';
import { useNavigate } from 'react-router-dom'
export interface LoginFormInterface {}

  
const LoginForm: React.FC<LoginFormInterface> = () => {
const navigate = useNavigate();
  return (
    <div className="row">
<div className="col-6 col-md-7 ">
</div>
<div className ="transparentbox col-6 col-md-5 ">
    <div className ="smalldiv">
         <label className="transparentbox">          
          <input className="loginput"
            name="nick_name"
            type="text"
            placeholder=" Usuario"
          />
        </label>
     </div>
     <div className ="smalldiv">
           <label className="transparentbox">
          <input className="loginput"
            name="password"
            type="password"
            placeholder="Contrasena"
          />
        </label>
    </div>
      <div className ="smalldiv">
        <button type="button" className="btn btn-login btn-light text-green" onClick={() => navigate(router.DASHBOARD)}>Entrar</button>
        </div>
</div>
</div>
  );
}


export default LoginForm;



 

