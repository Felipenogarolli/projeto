import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import landing from './pages/Landing';
import login from './pages/login';
import register from './pages/register';
import Pergunta from './pages/perguntas';

function Routes (){
    return(
        <BrowserRouter>
            <Route path="/" exact component={landing} />
            <Route path="/login" exact component={login} />
            <Route path="/registrar" exact component={register} />
            <Route path="/teste" exact component={Pergunta} />
        </BrowserRouter>
    );
}

export default Routes;