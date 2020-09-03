import React from 'react';
import PageHeader from '../../components/PageHeader';
import ServicesItens from '../../components/ServicesItens';

import './styles.css';
import { Link } from 'react-router-dom';

function ServicesADM(){
    return(
        <div id="page-services-list" className="container">
            <PageHeader title="Estes são os serviços disponíveis.">
            <div id="containers">
               <div className="link-block">
               <Link to = "/enviar">
                    Entrar em contato
                </Link>
               </div>
               
               <div className="link-block">
               <a href = "https://www.instagram.com/" target={__dirname}>
                   Instagram
                </a>
               </div>
           </div>
        </PageHeader>

        <main>
            <ServicesItens/>
            <ServicesItens/>
            <ServicesItens/>
            <ServicesItens/>
            <ServicesItens/>
        </main>
        </div>

    )
}

export default ServicesADM;