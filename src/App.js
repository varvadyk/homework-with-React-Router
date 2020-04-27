import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Layout from './components/layout';
import { routes } from './routes.js';

const  App = () =>{
  return (
    <Router>
      <Layout>
        <Switch>
{
  routes.map(route =>(
    <Route exact = {route.exact}
     key={route.toString()} 
     path={route.path}>
      {route.component}
    </Route>
     ))
    }
       </Switch>
      </Layout>
    </Router>
  );
}

export default App;
