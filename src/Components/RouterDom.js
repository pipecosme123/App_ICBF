import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoutersLinks } from '../Constants/RoutersLinks';
import FormPaciente from '../Pages/FormPaciente';

const RouterDom = () => {
   return (
      <Router>
         <Switch>
            <Route exact path={RoutersLinks.formPacientes} component={() => <FormPaciente /> }/>
         </Switch>
      </Router>
   );
};

export default RouterDom;