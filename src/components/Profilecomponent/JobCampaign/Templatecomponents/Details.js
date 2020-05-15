import React, { Component } from 'react'
import {MDBInput } from 'mdbreact';
export default class Details extends Component {
    render() {
        return (
            <div className="md-form">
                <span style={{fontSize:15, fontWeight:"400"}}>Job Description</span>
            <div style={{fontSize:15, fontWeight:"400",marginTop:'20px'}}>  Short Description of job description the nature of the job and explaining any relevant details Short description
                                the nature of job and explaining any relevant details Short description
                                Short Description of job description the nature of the job and explaining any relevant details Short description
                                the nature of job and explaining any relevant details Short description
                               
                                the nature of job and explaining any relevant details Short description</div>
                                <hr/>
            <MDBInput label="Job Experience" value="10 Years" />
            <MDBInput label="Job Nature" value="Permanent" />
            <MDBInput label="Education" value="Graduate,Diploma" />
            <MDBInput label="Salary" value="50K p.a. " />
            <MDBInput label="Travel" value="" />
          </div>
          
        )
    }
}
