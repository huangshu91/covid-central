import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { Redirect, Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Temp from './Temp'

/*using react router we set a constant equal to whatever component
we would like to render*/
const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Temp}/>
      <Route exact path="/*" exact component={Temp} />
    </Switch>
  </Router>
)

/*the code below reads the path and renders component on a conditional basis. 
i.e. /home throws two different components at different places...*/
ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();