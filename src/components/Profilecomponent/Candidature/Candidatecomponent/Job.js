import React, { Component } from 'react'

export default class Job extends Component {
    render() {
        return (
            <div>
            <div style={{ paddingTop: '5px' }}>
                <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Job 1 Name |</span>
                <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>
                <span style={{ float: 'right', marginRight: '20px' }}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
            </div>
            <div style={{ paddingTop: '5px' }}>
                                        <span style={{ fontSize: '15px', color: 'black', fontWeight: 400 }}>Newyork 41101 </span>
                                        <span style={{
                                            color: 'white', background: 'green', paddingLeft: '10px', paddingRight: '10px', borderRadius: '50px',
                                            fontSize: '10px', fontWeight: '400'
                                        }}>
                                            ACTIVE
                                    </span>
                                </div>
                                <div style={{ paddingTop: '5px' }}>
                                    <span style={{
                                        color: 'blue', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px',
                                        borderColor: 'light blue', border: '1px solid blue', fontSize: '10px', fontWeight: '400'
                                    }}>
                                        <span class="dot" ></span>Craiglist</span>
                                    <span style={{ fontSize: '12px', color: 'black', fontWeight: 400 }}>&nbsp;&nbsp;Posted:2 months back| Expiry:02/02/2020</span>
                                </div>
                                <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 350 }}>Short description of the job describing the nature of job and explaning
                            and relevant details hort description of the job describing the nature of job and explaning and relevant details</div>
                            <table style={{ textAlign: 'center' ,padding:'5px'}} >    
                           <tr ><th colSpan="3">
                            <div>
                            <br/>
                            </div>
                            </th>
                            
                           <th >
                     <div style={{ fontSize:"12px" }}><i class="fab fa-500px"></i>
                    16 Nov'19<br />
                   <span style={{fontWeight:500,fontSize:'13px'}}> Viewed</span>
       
              </div>
            </th>
            <th style={{ padding: '10px', fontSize:"12px"}}>
              18 Nov'19<br />
            <span style={{fontWeight:500,fontSize:'13px'}}> Applied</span>
       
            </th>
            <th style={{ padding: '10px',fontSize:"12px"}}>
                20
                Nov'19<br/>
                <span style={{fontWeight:500,fontSize:'13px'}}> Interviewed</span>
       
                    </th>
                    <th style={{ padding: '10px', fontSize:"12px"}}>
                22
                Nov'19<br/>
                <span style={{fontWeight:500,fontSize:'13px'}}>Selected</span>
       
                    </th>
                </tr>
                </table>
                <hr />
                <div style={{ paddingTop: '5px' }}>
                <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Job 2 Name |</span>
                <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>
                <span style={{ float: 'right', marginRight: '20px' }}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
            </div>
            <div style={{ paddingTop: '5px' }}>
                                        <span style={{ fontSize: '15px', color: 'black', fontWeight: 400 }}>Newyork 41101 </span>
                                        <span style={{
                                            color: 'white', background: 'green', paddingLeft: '10px', paddingRight: '10px', borderRadius: '50px',
                                            fontSize: '10px', fontWeight: '400'
                                        }}>
                                            INACTIVE
                                    </span>
                                </div>
                                <div style={{ paddingTop: '5px' }}>
                                    <span style={{
                                        color: 'blue', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px',
                                        borderColor: 'light blue', border: '1px solid blue', fontSize: '10px', fontWeight: '400'
                                    }}>
                                        <span class="dot1" ></span>Indeed</span>
                                    <span style={{ fontSize: '12px', color: 'black', fontWeight: 400 }}>&nbsp;&nbsp;Posted:2 months back| Expiry:02/02/2020</span>
                                </div>
                                <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 350 }}>Short description of the job describing the nature of job and explaning
                            and relevant details hort description of the job describing the nature of job and explaning and relevant details</div>
                            <table style={{ textAlign: 'center' ,padding:'5px'}} >    
                           <tr ><th colSpan="3">
                            <div>
                            <br/>
                            </div>
                            </th>
                            
                           <th >
                     <div style={{ fontSize:"12px" }}><i class="fab fa-500px"></i>
                    16 Nov'19<br />
                   <span style={{fontWeight:500,fontSize:'13px'}}> Viewed</span>
       
              </div>
            </th>
            <th style={{ padding: '10px', fontSize:"12px"}}>
              18 Nov'19<br />
            <span style={{fontWeight:500,fontSize:'13px'}}> Applied</span>
       
            </th>
            <th style={{ padding: '10px',fontSize:"12px"}}>
                20
                Nov'19<br/>
                <span style={{fontWeight:500,fontSize:'13px'}}> Interviewed</span>
       
                    </th>
                    <th style={{ padding: '10px', fontSize:"12px"}}>
                22
                Nov'19<br/>
                <span style={{fontWeight:500,fontSize:'13px'}}>Rejected</span>
       
                    </th>
                </tr>
                </table>
                <hr />
                </div>
        )
    }
}
