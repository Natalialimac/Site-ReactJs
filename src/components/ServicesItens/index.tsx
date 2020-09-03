import React from 'react';
import { Link } from 'react-router-dom';

import receitaFederal from '../../assets/images/receitaFe.jpg';
import './styles.css';

function ServicesItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src={receitaFederal} alt="receita federal"/>
            <div>
                <strong>Declaração (PF) </strong>
            </div>
            </header>
            <p>
            Declara imposto de renda nunca foi tão fácil...
            </p>

            <footer>
            <p>
                Preço/hora
                 <strong> R$ 60.00</strong>
            </p>
                <div>
                <Link to = "/enviar">
                    <h1>Entrar em contato</h1>
                </Link>
                </div>
        </footer>
     </article>

    );
}

export default ServicesItem;