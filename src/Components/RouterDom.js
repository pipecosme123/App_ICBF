import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoutersLinks } from '../Constants/RoutersLinks';
import Profile from '../Pages/Profile';
import FormAiepi from './FormPaciente/FormAiepi.js';
import FormClinicalHistory from './FormPaciente/FormClinicalHistory';
import FormPersonalInformation from './FormPaciente/FormPersonalInformation';

const RouterDom = () => {
   return (
      <Router>
         <Switch>
            <Route exact path={RoutersLinks.profile} component={() => <Profile />} />
            <Route exact path={RoutersLinks.createUser} component={() => <FormPersonalInformation />} />
            <Route exact path={RoutersLinks.clinicalHistory} component={() => <FormClinicalHistory />} />
            <Route exact path={RoutersLinks.aiepi} component={() => <FormAiepi />} />
         </Switch>
      </Router>
   );
};

export default RouterDom;