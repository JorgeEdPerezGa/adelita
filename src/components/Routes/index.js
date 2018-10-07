import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../../containers/Nav';
import Home from '../Home';
import Login from '../../containers/Login';
import Incident from '../../containers/Incident';
import Journal from '../../containers/Journal';
import Resources from '../Resources';

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Nav}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/incident" component={Incident}/>
      <Route path="/journal" component={Journal}/>
      <Route path="/resources" component={Resources}/>
    </div>
  );
};

export default Routes;
