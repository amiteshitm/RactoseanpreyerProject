import React, { Component } from 'react'
import './Candidate.css'
export default class Actions extends Component {
    render() {
        return (
            <div>
                <div style={{ paddingTop: '5px' }}>
                <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Job 2 Name |</span>
                <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>
                </div>
                <div class="vline"><div className='actiondot'></div>
               <span style={{marginLeft:'10px',fontWeight:'400'}}>21st Nov'19</span>
               <div>
                   <span style={{marginLeft:'15px',fontSize:'20px', fontWeight:'400'}}>Interview Scheduled-Job 2
                   </span>
               </div>
               <div>
                   <span style={{marginLeft:'15px', fontWeight:'400', borderRadius:'30px',background:'#425da7',color:'white',padding:'5px'}}>5:30 - 7:30</span>
                   <span style={{marginLeft:'15px', fontWeight:'400'}}>PM | 12th Apr'19</span>
               </div>
               <div className='historydot' style={{marginTop:'30px'}}></div>
               <span style={{marginLeft:'10px',fontWeight:'400'}}>20th Nov'19</span>
               <div>
               <span style={{marginLeft:'15px',fontSize:'20px', fontWeight:'400'}}> Candidates Applied for Job 2
                   </span>
                   </div>
                   <hr/>
               </div>
             
            </div>
        )
    }
}
