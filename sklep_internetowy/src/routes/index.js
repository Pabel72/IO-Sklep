import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Store from '../pages/store';
import Cart from "../pages/cart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Routes = () => {
    return (
        <Router>
            <Switch>
        

    <Route path="/about" component={About} />
                <Route exact path="/" component={Store}/>
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
    <Route path="*" component={NotFound} />
            </Switch>

        </Router>
    );
}

export default Routes;