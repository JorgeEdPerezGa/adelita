import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../../containers/Nav';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import Journal from '../../containers/Journal';
import Resources from '../../components/Resources';

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Nav}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/journal" component={Journal}/>
      <Route path="/resources" component={Resources}/>
    </div>
  );
};

export default Routes;
