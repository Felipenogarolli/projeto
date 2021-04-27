import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import landing from './pages/Landing';
import login from './pages/login';

function Routes (){
    return(
        <BrowserRouter>
            <Route path="/" exact component={landing} />
            <Route path="/login" exact component={login} />
        </BrowserRouter>
    );
}

export default Routes;