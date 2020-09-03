import React from 'react';

import{Link} from 'react-router-dom';

import './styles.css';

interface PageHeaderProps{
    title: string;
}

//interface volátil pode mudar o conteúdo dentro da class header-content
const PageHeader: React.FunctionComponent<PageHeaderProps>=(props)=>{
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to = "/">
                    <h1>voltar</h1>
                </Link>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;