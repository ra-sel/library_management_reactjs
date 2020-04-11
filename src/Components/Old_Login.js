import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Header from './Header'

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

    // componentDidMount() {
    //     fetch('/jwt',this.state)
    //       .then(res => res.json())
    //       .then(jwtt => this.setState({jwtt}, () => console.log('attendreport fetched...', jwtt)));
    //   }

    changeHandler(e){
this.setState({
    [e.target.name]: e.target.value
})
    }
    submitHandler(e){
        e.preventDefault()
        const {username, password} = this.state
        fetch('/jwt')
        .then(res => res.json())
        .then(jwtt => this.setState({jwtt}, () => console.log('attendreport fetched...', jwtt)));

        this.state.jwtt.map(jwt =>
           this.state.wrong= jwt.token
            )
        if(username=== "rasel" && password === "123")
        {
            localStorage.setItem("token","amarnamras")
            this.setState({
                log: true
            })
        }
        

    }
    render() {
        if(this.state.log){
            return <Header/>
        }
        return (
            <div>
                <div>
				<h1>Login</h1>
                <div  class="row">
                    <div className="col-sm-3"></div>
					<div className="col-sm-6">
				<form onSubmit={this.submitHandler}>
					<div className="form-group">
					<label for="insid">Username:</label>
						<input
						className="form-control"
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="form-group">
					<label for="tid">Password:</label>
						<input
						className="form-control"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form> </div>
				</div>
        <h1>{this.state.wrong}</h1>
			</div>
            </div>
        )
    }
}
