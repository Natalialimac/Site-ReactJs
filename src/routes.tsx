import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import ServicesADM from './pages/ServicesADM';
import Enviar  from './pages/Enviar';


function Routes(){
    return(
    <BrowserRouter>
        <Route path="/" exact component={Landing}/>
        <Route path="/servicos" component={ServicesADM}/>
        <Route path="/enviar" component={Enviar}/>
    </BrowserRouter>
    );
};

export default Routes;