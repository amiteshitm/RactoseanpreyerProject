import React, { Component } from 'react'
import '../Jobs.css'
export default class History extends Component {
    render() {
        return (
            <div >
               <div class="vl"><div className='historydot'></div>
               <span style={{marginLeft:'10px',fontWeight:'400'}}>12th Oct 2019</span>
               <div>
                   <span style={{marginLeft:'15px',fontSize:'20px', fontWeight:'400'}}>Job Posted on Craiglist
                   </span>
               </div>
               <div className='historydot' style={{marginTop:'30px'}}></div>
               <span style={{marginLeft:'10px',fontWeight:'400'}}>16th Oct 2019</span>
               <div>
               <span style={{marginLeft:'15px',fontSize:'20px', fontWeight:'400'}}>4 Candidates Applied
                   </span>
                   </div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 1,New York, Sr.Accountant</span></div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 2,New York, Sr.Accountant</span></div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 3,New York, Sr.Accountant</span></div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 4,New York, Sr.Accountant</span></div>

                <div className='historydot' style={{marginTop:'30px'}}></div>
                <span style={{marginLeft:'10px',fontWeight:'400'}}>17th Oct 2019</span>
                <div>
               <span style={{marginLeft:'15px',fontSize:'20px', fontWeight:'400'}}>1 Candidates Shortlisted and Scheduled
                   </span>
                   </div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 4,New York, Sr.Accountant</span></div>
                <div className='historydot' style={{marginTop:'30px'}}></div>
               <span style={{marginLeft:'10px',fontWeight:'400'}}>16th Oct 2019</span>
               <div>
               <span style={{marginLeft:'15px',fontSize:'20px', fontWeight:'400'}}>4 Candidates Applied
                   </span>
                   </div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 1,New York, Sr.Accountant</span></div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 2,New York, Sr.Accountant</span></div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 3,New York, Sr.Accountant</span></div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 4,New York, Sr.Accountant</span></div>

                <div className='historydot' style={{marginTop:'30px'}}></div>
                <span style={{marginLeft:'10px',fontWeight:'400'}}>18th Oct 2019</span>
                <div>
               <span style={{marginLeft:'15px',fontSize:'20px', fontWeight:'400'}}>1 Candidates Rejected
                   </span>
                   </div>
                <div><span style={{marginLeft:'15px',fontWeight:'400'}}>Candidate 3,New York, Sr.Accountant</span></div>
               
               </div>
                  
            </div>
        )
    }
}
