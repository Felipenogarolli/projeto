import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import landing from './pages/Landing';
import login from './pages/login';
import register from './pages/register';


function Routes (){
    return(
        <BrowserRouter>
            <Route path="/" exact component={landing} />
            <Route path="/login" exact component={login} />
            <Route path="/registrar" exact component={register} />
        </BrowserRouter>
    );
}

export default Routes;