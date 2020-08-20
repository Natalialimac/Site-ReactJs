import React from 'react';

import {Link} from 'react-router-dom';

import logo from '../../assets/images/icons/logoSite.png';
import './styles.css';

function Landing(){
    return(
       <div id="page-landing">
           <div id="pages-landing-content">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="hero-image"/>
                    <h1>A.N.C</h1>
                    <h2>home adm</h2>
                    {/* <h2>Serviços Administrativos</h2> */}
                </div>

                <div className="buttons-container">
                    <Link to="/servicos" className="servicos">
                        Serviços
                    </Link>
                    <Link to="/enviarEmail" className="enviar"> 
                        Enviar
                    </Link>
                </div>
           </div>
       </div>
    )
};

export default Landing;