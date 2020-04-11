import React, { Component } from 'react';
import './Header.css'
import moment from 'moment'
import axios from 'axios'



export default class Manageissue extends Component {
    constructor(props) {
        super(props)
        
		this.state = {
			id: '',
            user:[],
            issue: '',
            date: moment().format('L')
		}
	}
    componentDidMount() {
        fetch('/issue')
          .then(res => res.json())
          .then(user => this.setState({user}, () => console.log('user fetched...', user)));
          this.afteredit();
      }
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
edit= (issue) =>{

    this.setState({
        issue: issue
    })
    this.afteredit();
}
fetch1=()=>{
    fetch('/issue')
    .then(res => res.json())
    .then(user => this.setState({user}, () => console.log('user fetched...', user)));
}
afteredit= ()=>{
    fetch("http://localhost:5000/issues", {
        method: 'POST',
        headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                      },
    body: JSON.stringify(
      {
        issue :this.state.issue,
        date :this.state.date,
      }
    )
  })
  .catch(function (error) {
          alert(error);
   });
  this.fetch1();
}
    render() {
        const {id}=this.state
        return (
            <div className="conatainer">
                 <h4>&nbsp;</h4>
                <div className="row container">
                    <div className="col-sm-4">

                    </div>
                    
                    <div className="col-sm-4 csshobe">
                    <div className="form-group">  <label for="id">Enter user Id:</label>
						<input className="form-control"
							type="text"
                            name="id"
                            id="id"
							value={id}
							onChange={this.changeHandler}
						/>
					</div>
                    </div> 
                    <div className="col-sm-4">

                    </div>
                    {/* <div className="col-sm-4">

                    </div> */}
                    </div>
                   
                    {/* <br></br> <br></br><br></br><br></br> */}
                    <div className="container">
                    <table class="table ">
    <thead>
      <tr>
        <th>Readers Id</th>
        <th>ISBN</th>
        <th>Issue Date</th>
        <th>Reserve Date</th>
        <th>Return Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {this.state.user.map(us=> 
        {if(this.state.id === us.readers_id)
            return(
                <tr>
                <td>{us.readers_id}</td>
                <td>{us.ISBN}</td>
                <td>{us.issue_date}</td>
                <td>{us.reserve_date}</td>
                <td>{us.return_date}</td>
                <td data-toggle="tooltip" title="Mark As Return Book"> <button   onClick={()=>this.edit(us.readers_id)} ><i class="fas fa-check-square"></i></button> </td>
              </tr>
                )
            else if(!this.state.id){
                return(
                    <tr>
                <td>{us.readers_id}</td>
                <td>{us.ISBN}</td>
                <td>{us.issue_date}</td>
                <td>{us.reserve_date}</td>
                <td>{us.return_date}</td>
                <td data-toggle="tooltip" title="Mark As Return Book"> <button   onClick={()=>this.edit(us.readers_id)} ><i class="fas fa-check-square"></i></button> </td>
              </tr>
                )
            }
            }
    )}
    </tbody>
  </table>   
            </div>
            </div>
        );
    }
}

