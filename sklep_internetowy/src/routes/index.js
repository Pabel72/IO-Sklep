import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import About from '../pages/About';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}

export default Routes;