import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Userlogs extends Component {

render() {
        return (
          <div>
            <h5>&nbsp;</h5> <h2>HERE ARE THE USERS DAILY LOGS</h2>
                <div class="row">
    <div className="col-sm-5"></div> 
    <form >
      <div className="form-group">
      <input type="date" className="col-sm-12 form-control" id="email" name="email" />  </div> <div className="form-group">
    <button type="button" className="col-sm-12 btn btn-dark">Select Date</button> 
    </div> <div className="form-group">
     <button type="button" className="col-sm-12 btn btn-dark">Export to Excel</button>
     </div>
    </form>     
    </div> 
  <Table hover>
    <thead>
      <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>SERIAL NUMBER</th>
      <th>FINGERPRINT ID</th>
        <th>TIME IN</th>
        <th>TIME OUT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Doe</td>
        <td>1</td>
        <td>yes</td>
        <td>10:00</td>
        <td>11:00</td>
      </tr>
      <tr>
      <td>1</td>
        <td>Doe</td>
        <td>1</td>
        <td>yes</td>
        <td>10:00</td>
        <td>11:00</td>
      </tr>
      <td>1</td>
        <td>Doe</td>
        <td>1</td>
        <td>yes</td>
        <td>10:00</td>
        <td>11:00</td>
    </tbody>
  </Table>
</div>
        );
    }
}

export default Userlogs;
