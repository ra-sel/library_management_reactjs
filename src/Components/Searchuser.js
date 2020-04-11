import React, { Component } from 'react';
import './Header.css'

class Searchuser extends Component {
    constructor(props) {
        super(props)
        
		this.state = {
			id: '',
			user:[],
		}
	}
    componentDidMount() {
        fetch('/readers')
          .then(res => res.json())
          .then(user => this.setState({user}, () => console.log('user fetched...', user)));
      }
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
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
                    <div className="form-group">  <label for="id">Search user Id:</label>
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
                    <table class="table table-hover">
    <thead>
      <tr>
        <th>User Id</th>
        <th>Name</th>
        <th>Department</th>
        <th>Role</th>
        <th>Phone Number</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
        {this.state.user.map(us=> 
        {if(this.state.id === us.id.toString())
            return(
                <tr>
                <td>{us.id}</td>
                <td>{us.name}</td>
                <td>{us.department}</td>
                <td>{us.role}</td>
                <td>{us.number}</td>
                <td>{us.email}</td>
              </tr>
                )
            else if(!this.state.id){
                return(
                    <tr>
                <td>{us.id}</td>
                <td>{us.name}</td>
                <td>{us.department}</td>
                <td>{us.role}</td>
                <td>{us.number}</td>
                <td>{us.email}</td>
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

export default Searchuser;