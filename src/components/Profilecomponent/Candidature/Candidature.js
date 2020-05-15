import React, { Component } from 'react'
import Candidate from './Candidate'
import { MDBRow, MDBCol } from 'mdbreact';
import Detail from './Candidatecomponent/Detail'
import Job from './Candidatecomponent/Job'
import Score from './Candidatecomponent/Score'
import Actions from './Candidatecomponent/Actions'
export default class Candidature extends Component {
    constructor() {
        super()
        this.state = {
            isDetail: true,
            isCandidate: false,
            isQuestions: false,
            isHistory: false,
        }
    }

    selectDetail = () => {
        this.setState({
            isDetail: true,
            isCandidate: false,
            isQuestions: false,
            isHistory: false,

        });
    };
    selectCandidate = () => {
        this.setState({
            isDetail: false,
            isCandidate: true,
            isQuestions: false,
            isHistory: false,

        });
    };
    selectQuestions = () => {
        this.setState({
            isDetail: false,
            isCandidate: false,
            isQuestions: true,
            isHistory: false,


        });
    };
    selectHistory = () => {
        this.setState({
            isDetail: false,
            isCandidate: false,
            isQuestions: false,
            isHistory: true,
        });
    };
    render() {
        let detail_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
        if (this.state.isDetail) {
            detail_color = { borderBottom: "#5e43aa solid 2px ", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa' }
        }
        let candidate_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
        if (this.state.isCandidate) {
            candidate_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa' }
        }
        let questions_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
        if (this.state.isQuestions) {
            questions_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa' }
        }
        let history_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
        if (this.state.isHistory) {
            history_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa' }
        }
        return (
            <div>
                <Candidate />
                <div style={{ marginLeft: 170 }} >
                    <br /><br />
                    <div class="row" >
                        <div class="col-sm-5 my-custom-scrollbar-1"  >
                            {/* ---- <Jobarchivedreftpanel/>---- */}
                            <div style={{ paddingTop: '5px' }}> 
                <span style={{ fontSize: '15px', color: '#5e43aa', fontWeight: 400}}>16 Candidates</span>
                <span style={{ float: 'right' }}><i class="fa fa-filter" aria-hidden="true"></i></span>
                </div>
                <hr/>
                <div style={{marginBottom:'-50px',marginRight:'20px'}}> 
                    <span style={{}}><i class="fas fa-circle" style={{fontSize:'50px',color:'grey'}}></i></span>
                    </div>
                 <div >
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 ,marginLeft:'70px'}}>Jhon Doe |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Current Job Designation</span>
            <span style={{ float: 'right', marginRight: '20px'}}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
        </div>
        <div style={{ paddingTop: '5px' }}>   
        <MDBRow>
            <MDBCol md='1'>
               <span style={{color: 'white', background: 'green', paddingLeft:'7px',
                                paddingRight: '7px', borderRadius: '50px', 
                                fontSize: '10px', fontWeight: '400',marginLeft:'-2px',padding:'3px'
                            }}>
                                SELECTED
                </span>
                </MDBCol>    
                    <MDBCol md='5'>
            <span style={{ fontSize: '15px', color: 'black', fontWeight: 400,marginLeft:'30px' }}>Newyork 41101 </span>
            </MDBCol>
            <MDBCol md='3'>
            <span style={{
                color: 'blue', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px',
                borderColor: 'light blue', border: '1px solid blue', fontSize: '10px', fontWeight: '400', 
            }}>
                <span class="dot" ></span>Craiglist</span>     
                </MDBCol>
            <MDBCol md='3'>
                <span style={{color:'#297fca',fontWeight:'400',fontSize:'12px'}}><i class="far fa-file-pdf"></i>Resume</span>
                </MDBCol>
                </MDBRow>
        </div>
        <div style={{paddingTop:'5px',marginLeft:'-10px'}}>
        <span style={{fontSize:'8px'}}><i className="fa fa-star text-primary " ></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star desiable"></i></span>
        <span style={{fontSize:'15px'}}><i class="fas fa-phone-alt"></i></span>
        <span style={{fontSize:'15px'}}>+1 108 887 6589</span>
        <span style={{fontSize:'12px',fontWeight:'400',marginLeft:'50px'}}>Applied: 1 month back</span>
        </div>
        <div style={{ paddingTop: '5px' }}>

        </div>
        <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 400 }}>Short description of the job describing the nature of job and explaning
    and relevant details </div>    
                <hr/>
                <div style={{marginBottom:'-50px',marginRight:'20px'}}> 
                    <span style={{}}><i class="fas fa-circle" style={{fontSize:'50px',color:'grey'}}></i></span>
                    </div>
                 <div >
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 ,marginLeft:'70px'}}>Jhon Doe |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Current Job Designation</span>
            <span style={{ float: 'right', marginRight: '20px'}}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
        </div>
        <div style={{ paddingTop: '5px' }}>   
        <MDBRow>
            <MDBCol md='1'>
               <span style={{color: 'white', background: 'green', paddingLeft:'7px',
                                paddingRight: '7px', borderRadius: '50px', 
                                fontSize: '10px', fontWeight: '400',marginLeft:'-2px',padding:'3px'
                            }}>
                                SCHEDULED
                </span>
                </MDBCol>    
                    <MDBCol md='5'>
            <span style={{ fontSize: '15px', color: 'black', fontWeight: 400,marginLeft:'30px' }}>Newyork 41101 </span>
            </MDBCol>
            <MDBCol md='3'>
            <span style={{
                color: 'blue', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px',
                borderColor: 'light blue', border: '1px solid blue', fontSize: '10px', fontWeight: '400', 
            }}>
                <span class="dot" ></span>Indeed</span>     
                </MDBCol>
            <MDBCol md='3'>
                <span style={{color:'#297fca',fontWeight:'400',fontSize:'12px'}}><i class="far fa-file-pdf"></i>Resume</span>
                </MDBCol>
                </MDBRow>
        </div>
        <div style={{paddingTop:'5px',marginLeft:'-10px'}}>
        <span style={{fontSize:'8px'}}><i className="fa fa-star text-primary " ></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star desiable"></i></span>
        <span style={{fontSize:'15px'}}><i class="fas fa-phone-alt"></i></span>
        <span style={{fontSize:'15px'}}>+1 108 887 6589</span>
        <span style={{fontSize:'12px',fontWeight:'400',marginLeft:'50px'}}>Applied: 1 month back</span>
        </div>
        <div style={{ paddingTop: '5px' }}>

        </div>
        <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 400 }}>Short description of the job describing the nature of job and explaning
    and relevant details </div>
       
                <hr/>
                <div style={{marginBottom:'-50px',marginRight:'20px'}}> 
                    <span ><i class="fas fa-circle" style={{fontSize:'50px',color:'grey'}}></i></span>
                    </div>
                 <div >
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 ,marginLeft:'70px'}}>Jhon Doe |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Current Job Designation</span>
            <span style={{ float: 'right', marginRight: '20px'}}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
        </div>
        <div style={{ paddingTop: '5px' }}>   
        <MDBRow>
            <MDBCol md='1'>
               <span style={{color: 'white', background: 'green', paddingLeft:'7px',
                                paddingRight: '7px', borderRadius: '50px', 
                                fontSize: '10px', fontWeight: '400',marginLeft:'-2px',padding:'3px'
                            }}>
                          ARCHIVED
                </span>
                </MDBCol>    
                    <MDBCol md='5'>
            <span style={{ fontSize: '15px', color: 'black', fontWeight: 400,marginLeft:'30px' }}>Newyork 41101 </span>
            </MDBCol>
            <MDBCol md='3'>
            <span style={{
                color: 'blue', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px',
                borderColor: 'light blue', border: '1px solid blue', fontSize: '10px', fontWeight: '400', 
            }}>
                <span class="dot" ></span>Indeed</span>     
                </MDBCol>
            <MDBCol md='3'>
                <span style={{color:'#297fca',fontWeight:'400',fontSize:'12px'}}><i class="far fa-file-pdf"></i>Resume</span>
                </MDBCol>
                </MDBRow>
        </div>
        <div style={{paddingTop:'5px',marginLeft:'-10px'}}>
        <span style={{fontSize:'8px'}}><i className="fa fa-star text-primary " ></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star text-primary"></i></span>
        <span style={{fontSize:'8px',marginLeft:'-30px'}}><i className="fa fa-star desiable"></i></span>
        <span style={{fontSize:'15px'}}><i class="fas fa-phone-alt"></i></span>
        <span style={{fontSize:'15px'}}>+1 108 887 6589</span>
        <span style={{fontSize:'12px',fontWeight:'400',marginLeft:'50px'}}>Applied: 1 month back</span>
        </div>
        <div style={{ paddingTop: '5px' }}>

        </div>
        <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 400 }}>Short description of the job describing the nature of job and explaning
    and relevant details </div>
        
     
        <hr />

                            {/* --------------------------- */}
                        </div>
                        <div class="col-sm-7 my-custom-scrollbar-1"  >
                            {/* <Jobarchivedrightpanel/>         */}

                            <div >

                                <div style={{ paddingTop: '5px' }} >

                                    <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Job Name |</span>
                                    <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>

                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <table id="job_table">
                                        <thead >
                                            <tr >
                                                <td onClick={this.selectDetail} ><span style={detail_color}>Detail</span></td>
                                                <td onClick={this.selectCandidate}><span style={candidate_color}>Job</span></td>
                                                <td onClick={this.selectQuestions}><span style={questions_color}>Score</span></td>
                                                <td onClick={this.selectHistory}><span style={history_color}>Actions</span></td>

                                            </tr>

                                        </thead>

                                    </table>
                                    <hr />
                                </div>

                                {this.state.isDetail ?
                                    (<Detail />

                                    ) : (<div></div>)}

                                {this.state.isCandidate ?
                                    (<Job />

                                    ) : (<div></div>)}
                                {this.state.isQuestions ?
                                    (<Score />

                                    ) : (<div></div>)}
                                {this.state.isHistory ?
                                    (<Actions />

                                    ) : (<div></div>)}


                            </div>
                            {/* ---------------------------------------- */}

                            <div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
