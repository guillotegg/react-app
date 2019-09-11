import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import App from './App'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true} /> 
                <Route path="/App" component={App} />             
            </Switch>     
        </div>           
    </BrowserRouter>
)

export default AppRouter;