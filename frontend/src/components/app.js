import React from 'react';
import '../stylesheets/main_css';   // all stylesheets
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash/splash';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from './session/signup_form_container';
import BeachShow from "./beaches/beach_show";

const App = () => (
    <div className="app-container">
        <NavBarContainer />
        <Switch>
            <Route exact={true} path="/" component={Splash} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/beaches/:beach_id" component={BeachShow} />
        </Switch>
    </div>
);

export default App;
