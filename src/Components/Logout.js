import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import { Button } from 'reactstrap';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token")
        this.changeLog= this.changeLog.bind(this)
    }

changeLog(){
    { window.parent.location = window.parent.location.href; }
}
    render() {
        return (
            <div>
                <h1>Log Out Successfully</h1>
                <Button className="btn btn-primary" onClick={this.changeLog}>Refresh</Button>
            </div>
        )
    }
}
