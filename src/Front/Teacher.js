import React, { Component } from 'react'
import axios from 'axios'
import './Css/Teacher.css'
class Teacher extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tid: '',
			tname: '',
			depart:'',
			mno: '',
			email: '',
			success: '',
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/treg', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
			this.setState({
				success: "Submit To Server"
			})

	}

	render() {
		const {  tid, tname, mno, email,depart } = this.state
		return (
			<div>
				<h1>Teacher Registration</h1>
                <div  class="row">
                    <div className="col-sm-3"></div>
					<div  className="col-sm-6 csshobe">
				<form onSubmit={this.submitHandler}>
					
					<div className="form-group">
					<label for="tid">Teacher ID:</label>
						<input
						className="form-control"
							type="text"
							name="tid"
							value={tid}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="form-group">  <label for="tname">Teacher Full Name:</label>
						<input className="form-control"
							type="text"
							name="tname"
							value={tname}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="form-group">  <label for="depart">Department:</label>
						<input className="form-control"
							type="text"
							name="depart"
							value={depart}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="form-group">       <label for="tno">Teacher Number:</label>
						<input className="form-control"
							type="number"
							name="mno"
							value={mno}
							onChange={this.changeHandler}
						/>
					</div> 
					<div className="form-group"> <label for="email">Email Address:</label>
						<input className="form-control"
							type="email"
							name="email"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit" class="btn btn-primary">Register</button>
				</form> 
		<h6>{this.state.success}</h6>
				</div>
				</div>
			</div>
		)
	}
}

export default Teacher
