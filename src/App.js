import React from 'react';

import './App.css';

import Logcss from './Components/Logcss';
import Header2 from './Front/Header2';
import About from './Front/About';
import Search from './Front/Search';
import Teacher from './Front/Teacher';
import Student from './Front/Sudent';
import Searchuser from './Components/Searchuser'
import Manageissue from './Components/Manageissue'
import Issue from './Components/Issue'
import Header from './Components/Header'
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Header2} />
      <Route exact path='/Header' component={Header} />
      <Route exact path='/Logcss' component={Logcss} />
      <Route exact path='/About' component={About} />
          <Route exact path='/search'  component={Search} />
          <Route  exact path='/Teacher' component={Teacher} />
          <Route  exact path='/Student' component={Student} />
      <Route exact path='/Searchuser' component={Searchuser} />
          <Route  exact path='/issue' component={Issue} />
          <Route  exact path='/manageissue' component={Manageissue} />
    </Switch>
</Router>
  );
}

export default App;
