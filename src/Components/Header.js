import React,{Component} from 'react'
import Searchuser from './Searchuser'
import Manageissue from './Manageissue'
import Issue from './Issue'

import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Logcss from './Logcss';
import Logout from './Logout';
import { Button } from 'reactstrap';
import './Header.css'

class Header extends Component{
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")
    let log = true
    if(token === null)
    {
      log = false
    }
    this.state={
      log
    }
  }

  logout(){
    localStorage.removeItem("token");
    window.parent.location = window.parent.location.href;
  }
 render() { 
  if(!this.state.log)
  {
    return <Logcss/>
  } 
  return(
      <Router>
        <div className="csstest">
        <div>
          <div className="divnav">
          <NavLink  className="nav-link"  to={"/"}><h1> <h6>&nbsp;</h6>
            <i>Library Management</i> <h6>&nbsp;</h6>
        </h1></NavLink>
          </div>
        
     <nav  className="navbar navbar-expand-sm navbar-dark sticky-top">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <NavLink exact activeClassName="hactive" className="nav-link"  to={"/Searchuser"}>Search Users</NavLink>
    </li>
    <li className="nav-item active">
      <NavLink exact  activeClassName="hactive" className="nav-link"  to={"/issue"}>Issue New Book</NavLink>
    </li>
    <li className="nav-item active">
      <NavLink exact activeClassName="hactive" className="nav-link" to={"/manageissue"} >Manage Issue Book</NavLink>
    </li>
    <li className="nav-item active">
      <Button  className="nav-link" onClick={() =>{this.logout()}} >Log Out</Button>
    </li>
  </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Searchuser} />
          <Route exact path='/Searchuser' component={Searchuser} />
          {/* <Route exact path='/logout' component={Logout} /> */}
          {/* <Route exact path='/login'  component={Login} /> */}
          <Route  exact path='/issue' component={Issue} />
          <Route  exact path='/manageissue' component={Manageissue} />
        </Switch>
        </div> </div>
    </Router>
    );
 }
}

export default Header