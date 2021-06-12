import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import About from '../pages/About';
import Store from '../pages/store';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route exact path="/" component={Store}/>
            </Switch>
        </Router>
    );
}

export default Routes;