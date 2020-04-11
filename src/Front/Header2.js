import React,{Component} from 'react'
import { BrowserRouter as Router,Switch, Route, Link,Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import About from './About'
import Teacher from './Teacher'
import Student from './Sudent'
import Search from './Search'
import Footer from './Footer'
import Logcss from '../Components/Logcss'
import axios from 'axios'
import Clock from 'react-live-clock';
import moment from 'moment'
// import './Header2.css'

class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      admin: '',
      time: moment().format('LTS'),
    }
  }
componentDidMount(){
  setInterval(this.timer, 1000);
}

timer=()=>{
  this.setState({
    time: moment().format('LTS')
  })
}

admin=()=>{
  this.setState({
    admin: "admin"
  })
}

 render()
 { 
  if(this.state.admin)
  {
    return (
      <Redirect to="/Logcss"/>
    )
  } 
  return(
      <Router>
        <div className="Appbody">
          <div className="divnav">
          <NavLink  className="nav-link"  to={"/"}><h1>
            Library Management 
        </h1></NavLink>
          </div>
     <nav  className="navbar  navbar-expand-sm navbar-dark sticky-top"> 
    {/* <input class="form-control mr-sm-2" type="Submit" placeholder="Search Books"/> */}
    {/* <button class="btn btn-dark col-sm-1.5" type="submit" ><b>Search Book</b></button> */}

      <NavLink exact activeClassName="hactive" className="nav-link btn btn-dark col-sm-1.5"  to={"/search"}>Search Book</NavLink>
  <h2 className="clock"> {this.state.time}</h2>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
      <NavLink exact activeClassName="hactive" className="nav-link"  to={"/"}>About</NavLink>
    </li>
    <li className="nav-item active">
      <NavLink exact  activeClassName="hactive" className="nav-link"  to={"/Teacher"}>Teacher Registration</NavLink>
    </li>
    <li className="nav-item active">
      <NavLink exact activeClassName="hactive" className="nav-link" to={"/Student"}>Student Registration</NavLink>
    </li>
    <li className="nav-item active">
    <Button  className="nav-link" onClick={() =>{this.admin()}} >Admin</Button>
    </li>
  </ul>
        </nav>
        
        
        <Switch>
          <Route exact path='/' component={About} />
          {/* <Route exact path='/logout' component={Logout} /> */}
          <Route exact path='/search'  component={Search} />
          <Route  exact path='/Teacher' component={Teacher} />
          <Route  exact path='/Student' component={Student} />
          {/* <Route  exact path='/Admin' component={Logcss} /> */}
        </Switch>
       <Footer> </Footer>
        </div> 
    </Router>
    );
 }
}

export default Header