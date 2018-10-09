import React from 'react';
import Contact from './contact';
import Gallery from './gallery';
import Home from './home';


import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route path='/gallery' component={Gallery} />
    <Route path='/contact' component={Contact} />
  </Switch>
)

export default Main;
