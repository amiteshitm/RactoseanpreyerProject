import React, { Component } from 'react'
import {MDBInput } from 'mdbreact';
export default class Detail extends Component {
    render() {
        return (
            <div className="md-form">
                <span style={{fontSize:'15px',fontWeight:400}}> About Candidate</span>
            <div style={{fontSize:18, fontWeight:"500"}}>  Short Description of job description the nature of the job and explaining any relevant details Short description
                                the nature of job and explaining any relevant details Short description
                                Short Description of job description the nature of the job and explaining any relevant details Short description
                                the nature of job and explaining any relevant details Short description
                               
                                the nature of job and explaining any relevant details Short description</div>
                                <hr/>
            <MDBInput label="Job Experience" value="10 Years" />  
            <MDBInput label="Education" value="Graduate,Diploma" />
            <MDBInput label="Salary" value="20k $ PA" />
         
          </div>
        )
    }
}
