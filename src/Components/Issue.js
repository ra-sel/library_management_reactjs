import React, { Component } from 'react'
import axios from 'axios'
class Issue extends Component {
	constructor(props) {
		super(props)

		this.state = {
            isbn: '',
            reader_id: '',
            book: [],
            reader: [],
		}
	}
    componentDidMount() {
        fetch('/book')
          .then(res => res.json())
          .then(book => this.setState({book}, () => console.log('book fetched...', book)));
        fetch('/readers')
          .then(res => res.json())
          .then(reader => this.setState({reader}, () => console.log('reader fetched...', reader)));
      }
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/api/tregpost', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render()  {
		const { isbn,reader_id } = this.state
		return (
			<div>
				<h1>Issued A Book</h1>
                <div  class="row">
                    <div className="col-sm-3"></div>
					<div  className="col-sm-6 csshobe">
				<form onSubmit={this.submitHandler}>
					
					<div className="form-group">
					<label for="tid">Enter ISBN:</label>
						<input
						className="form-control"
							type="text"
							name="isbn"
							value={isbn}
							onChange={this.changeHandler}
						/>
					</div>
                    {this.state.book.map(book =>{
                         if(this.state.isbn === book.ISBN)
                         return(
                         <h4>Book: {book.Name} Is Available</h4>
                         )
                    })}
                    
					<div className="form-group">  <label for="reader_id">Enter Reader Id:</label>
						<input className="form-control"
							type="text"
							name="reader_id"
							value={reader_id}
							onChange={this.changeHandler}
						/>
					</div>
                    {this.state.reader.map(re =>{
                         if(this.state.reader_id === re.id)
                         return(
                         <h4>Name: {re.name} Is Verified</h4>
                         )
                    })}
					<button type="submit" class="btn btn-primary">SUBMIT</button>
				</form> </div>
				</div>
			</div>
		)
	}
	}

export default Issue
