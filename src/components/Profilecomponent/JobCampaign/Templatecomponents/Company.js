import React, { Component } from 'react'
import {MDBInput } from 'mdbreact';
export default class Company extends Component {
    render() {
        return (
            <div>
                <span style={{float:'right',color:'#425da7', fontSize:'18px', fontWeight:'400'}}>+Add New Company</span>
                <MDBInput label="Your Company Name" value="XYZ Group" />
            <MDBInput label="Company Specialization" value="Hospitality" />
            <MDBInput label="Company Type" value="Medium" />
            <MDBInput label="Number of Employeee" value="50-100" />
            <MDBInput label="Location" value="New York- 41141" />
            <MDBInput label="Web URL" value="www.XYZ.com" />
            <MDBInput label="Company Description" value="Short Description of the company describe the nature 
                             of company and explaining any" />
            </div>
        )
    }
}
