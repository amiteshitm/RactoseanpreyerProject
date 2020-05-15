import React, { Component } from 'react'
import {MDBRow, MDBCol } from 'mdbreact';
export default class Candidates extends Component {
    render() {
        return (
            <div>
                 {
                        (this.props.data) ?
                    <div>

<div> 
                <span style={{ fontSize: '15px', color: '#5e43aa', fontWeight: 400}}>16 Candidates</span>
                <span style={{ float: 'right' }}><i class="fa fa-filter" aria-hidden="true"></i></span>
                </div>
                <div style={{marginBottom:'-55px',marginRight:'20px'}}> 
                    <span style={{}}><i class="fas fa-circle" style={{fontSize:'50px',color:'grey'}}></i></span>
                    </div>
            <div >
               
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 ,marginLeft:'70px'}}>{this.props.data.name} |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Current Job Designation</span>
            <span style={{ float: 'right', marginRight: '20px'}}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
        </div>
        <div style={{ paddingTop: '5px' }}>   
        <MDBRow>
            <MDBCol md='1'>
               <span style={{color: 'white', background: 'green', paddingLeft:'5px',
                                paddingRight: '5px', borderRadius: '50px', 
                                fontSize: '10px', fontWeight: '400',
                            }}>
                                SELECTED
                </span>
                </MDBCol>
                
                    <MDBCol md='4'>
            <span style={{ fontSize: '15px', color: 'black', fontWeight: 400 }}>{this.props.data.city} {this.props.data.pincode} </span>
            </MDBCol>
            <MDBCol md='5'>
            <span style={{
                color: 'blue', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px',
                borderColor: 'light blue', border: '1px solid blue', fontSize: '10px', fontWeight: '400', 
            }}>
                <span class="dot" ></span>Craiglist</span>     
                </MDBCol>
<MDBCol md='2'>
                <span style={{color:'#297fca',fontWeight:'400',fontSize:'12px'}}><i class="far fa-file-pdf"></i>Resume</span>
                </MDBCol>
                </MDBRow>
        </div>
        <div style={{paddingTop:'5px'}}>
        <span style={{fontSize:'8px'}}><i className="fa fa-star text-primary " ></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'15px'}}><i class="fas fa-phone-alt"></i></span>
        <span style={{fontSize:'15px'}}>{this.props.data.mobile_number}</span>
        <span style={{fontSize:'10px',fontWeight:'400',float:'right'}}>Applied: 1 month back</span>
        </div>
        <div style={{ paddingTop: '5px' }}>
            
            
            
        </div>
        <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 400 }}>Short description of the job describing the nature of job and explaning
    and relevant details hort description of the job describing the nature of job and explaning and relevant details</div>
        
     
        <hr />

                <div style={{marginBottom:'-55px',marginRight:'20px'}}> 
                    <span ><i class="fas fa-circle" style={{fontSize:'50px',color:'grey'}}></i></span>
                    </div>
            <div >
               
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 ,marginLeft:'70px'}}>{this.props.data.name} |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Current Job Designation</span>
            <span style={{ float: 'right', marginRight: '20px'}}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
        </div>
        <div style={{ paddingTop: '5px' }}>   
        <MDBRow>
            <MDBCol md='1'>
               <span style={{color: 'white', background: 'green', paddingLeft:'5px',
                                paddingRight: '5px', borderRadius: '50px', 
                                fontSize: '10px', fontWeight: '400',
                            }}>
                          PLANNED
                </span>
                </MDBCol>
                
                    <MDBCol md='4'>
            <span style={{ fontSize: '15px', color: 'black', fontWeight: 400 }}>{this.props.data.city} {this.props.data.pincode} </span>
            </MDBCol>
            <MDBCol md='5'>
            <span style={{
                color: 'blue', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px',
                borderColor: 'light blue', border: '1px solid blue', fontSize: '10px', fontWeight: '400', 
            }}>
                <span class="dot1" ></span>Indeed</span>     
                </MDBCol>
<MDBCol md='2'>
                <span style={{color:'#297fca',fontWeight:'400',fontSize:'12px'}}><i class="far fa-file-pdf"></i>Resume</span>
                </MDBCol>
                </MDBRow>
        </div>
        <div style={{paddingTop:'5px'}}>
        <span style={{fontSize:'8px'}}><i className="fa fa-star text-primary " ></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'15px'}}><i class="fas fa-phone-alt"></i></span>
        <span style={{fontSize:'15px'}}>+1 108 887 6589</span>
        <span style={{fontSize:'10px',fontWeight:'400',float:'right'}}>Applied: 1 month back</span>
        </div>
        <div style={{ paddingTop: '5px' }}>
            
            
            
        </div>
        <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 400 }}>Short description of the job describing the nature of job and explaning
    and relevant details hort description of the job describing the nature of job and explaning and relevant details</div>
    
        <hr />
        
                    </div>:null
                    }
                
        </div>
        
        )
    }
}
