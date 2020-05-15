import React, { Component } from 'react'
// import {  MDBTable, MDBTableBody } from 'mdbreact';
import '../Jobs.css'
export default class Jobarchivedreftpanel extends Component {
    render() {
        return (
            <div>
                <div className="my-custom-scrollbar" striped >
                    <MDBTable >
                        <MDBTableBody>
                            <tr >
                               
                                {/* <tr style={{color:'#5E43AA'}}>Job Name | Job Category</tr><br/>Newyork 41101
                                <button style={{borderRadius:'15px',color:'white', background:'green'}}>Active</button>
                                <th>Job post Updated| head Cheff, Broklyn short description of the job describing the nature of jobs</th> */}
                                <div style={{color:'#5E43AA'}}>Job Name | Job Category</div>
                                <div style={{color:'#5E43AA'}}>Newyork 41101<button style={{borderRadius:'15px',color:'white', background:'green',paddingRight:'15px', paddingLeft:'15px'}}>Active</button ></div>
                                <div ><button  style={{borderRadius:'25px', borderColor:'blue' ,paddingRight:'15px', paddingLeft:'15px',color:'blue',border:'1px solid blue'}}> <span class="dot"></span>Craiglist</button>Posted:2 months back| Expiry:02/02/2020</div>
                                <div>Short description of the job describing the nature of job and explaning and relevant details</div>
                                <div><i class="fas fa-user-friends" style={{color:'blue'}}/> Applied(9)| ShortListed(5)|new| interview(2)</div>
                               
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Password Changed</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                            <tr>
                                <th><i className="fas fa-user" /></th>
                                <th>Job post Updated</th>
                                <th><i className="fas fa-times-circle" /></th>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        )
    }
}
