import React from 'react'
import { Table } from 'reactstrap';

function Users(){
    return(
      <div >
          <h2>&nbsp;</h2>
          <h2>&nbsp;</h2>
          <h2>HERE ARE ALL THE USERS</h2>
          <Table hover>
    <thead>
      <tr>
        <th>ID | NAME</th>
        <th>SERIAL NUMBER</th>
        <th>GENDER</th>
        <th>FINGER ID</th>
        <th>DATE</th>
        <th>TIME IN</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1 | Rasel</td>
        <td>12321</td>
        <td>M</td>
        <td>2132d</td>
        <td>20-12-2019</td>
        <td>10.30 AM</td>
      </tr>
      <tr>
        <td>2 | Fysal</td>
        <td>12321</td>
        <td>M</td>
        <td>2132d</td>
        <td>20-12-2019</td>
        <td>10.30 AM</td>
      </tr>
      <tr>
        <td>3 | Fahim</td>
        <td>12321</td>
        <td>M</td>
        <td>2132d</td>
        <td>20-12-2019</td>
        <td>10.30 AM</td>
      </tr>
      <tr>
        <td>4 | Fahim</td>
        <td>12321</td>
        <td>M</td>
        <td>2132d</td>
        <td>20-12-2019</td>
        <td>10.30 AM</td>
      </tr>
      
    </tbody>
  </Table>
      </div>  
    )
}

export default Users