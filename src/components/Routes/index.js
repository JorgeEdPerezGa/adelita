import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../../containers/Nav';

const Routes = () => {
  return (
    <div>
      <Route path="/" component={Nav}/>
    </div>
  );
};

export default Routes;
