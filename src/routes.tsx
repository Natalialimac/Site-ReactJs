import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import ServicesADM from './pages/ServicesADM';


function Routes(){
    return(
    <BrowserRouter>
        <Route path="/" exact component={Landing}/>
        <Route path="/servicos" component={ServicesADM}/>
    </BrowserRouter>
    );
};

export default Routes;