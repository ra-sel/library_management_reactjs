import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Header from './Header'
import './Style.css'

export default class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
    let log = true
    if(token === null)
    {
      log = false
    }
        this.state={
            username: '',
            password: '',
            wrong: '',
            jwtt: [],
            log 
        }
        this.changeHandler= this.changeHandler.bind(this)
        this.submitHandler= this.submitHandler.bind(this)
    }
componentDidMount(){
    fetch('/jwtt')
        .then(res => res.json())
        .then(jwtt => this.setState({jwtt}, () => console.log('attendreport fetched...', jwtt)));
}
    changeHandler(e){
this.setState({
    [e.target.name]: e.target.value
})
    }
    submitHandler(e){
        e.preventDefault()
        const {username, password} = this.state
        this.state.jwtt.map(jwt => {
            if(username === jwt.Uname && password === jwt.Pword)
            {
                localStorage.setItem("token",jwt.token)
                this.setState({
                    log: true
                })
            }
            else {
             this.setState({
                 wrong: "Wrong Password!"
             })
            }
        }
            )
    }
    render() {
        if(this.state.log){
            return (
                <Header/>
            )
        }
        return (
            <div>
                <h1 className="admin">Admin Panel</h1>
                <div className="login-box">
				<h1>Login</h1>
                <div>
                    
					<div>
				<form onSubmit={this.submitHandler}>
					<div className="textbox">
                    <i class="fas fa-user"></i>
						<input
						
							type="text"
                            name="username"
                            placeholder = "Username"
							value={this.state.username}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="textbox">
					<i class="fas fa-lock"></i>
						<input
				
							type="password"
                            name="password"
                            placeholder = "Password"
							value={this.state.password}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit" className="btnn">Submit</button>
				</form> </div>
				</div>
			</div>
            <h1 className="wrong">{this.state.wrong}</h1>
            
            </div>
        )
    }
}
