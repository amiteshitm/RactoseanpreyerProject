import React, { Component } from 'react'
import '../Jobs.css'
export default class Quetions extends Component {
    render() {
        return (
            <div>
            <div> 
                 <span><i class="fas fa-angle-right" style={{fontSize:'20px'}}></i></span>
                <span style={{ fontSize: '25px', color: '#425da7', fontWeight: 400}}>Technical Interview |</span>
                <span style={{color:'#425da7',fontWeight: 400}}> Round1</span>
                <span style={{ float: 'right', marginRight: '20px',fontSize:'20px'}}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
                </div>
                <div>
                    
                    <span style={{fontSize: '14px',fontWeight: 400}}>&nbsp;&nbsp;&nbsp;&nbsp;Voice Questions (9)| Textual Quetions (9)</span>
                </div>
                <div>
                    <span style={{fontSize: '18px',fontWeight: 400}}>Question 1</span>
                </div>
                <div style={{ paddingTop: '5px', fontSize: '20px',
                             color: 'black', fontWeight: 400 }}>
                                Short description of the job describing the nature of job and explaning
                                and relevant</div>
        <hr />
                <div>
                    <span style={{fontSize: '18px',fontWeight: 400}}>Answer 1</span>
       </div>
       <div style={{ paddingTop: '5px', fontSize: '20px',
                             color: 'black', fontWeight: 400 }}>
                                Short description of the job describing the nature of job and explaning
                                and relevant</div>
                                <span  style={{fontSize:'20px'}} ><div style={{textAlign:'center',cursor:'pointer'}}><i class="fas fa-ellipsis-h "  data-toggle="collapse" data-target="#collapse" ></i></div></span>
                                <span>       
                                <div id="collapse" class="collapse">
                                Short description of the job describing the nature of job and explaning
                                and relevant Short description of the job describing the nature of job and explaning
                                and relevant
                            </div>
                                </span>
                                <hr />
                                <div> 
                 <span><i class="fas fa-angle-right" style={{fontSize:'20px'}}></i></span>
                <span style={{ fontSize: '25px', color: '#425da7', fontWeight: 400}}>HR Interview |</span>
                <span style={{color:'#425da7',fontWeight: 400}}> Round1</span>
                <span style={{ float: 'right', marginRight: '20px',fontSize:'20px'}}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
                </div>
                <div>
                    
                    <span style={{fontSize: '14px',fontWeight: 400}}>&nbsp;&nbsp;&nbsp;&nbsp;Voice Questions (9)| Textual Quetions (9)</span>
                </div>
                <div>
                    <span style={{fontSize: '18px',fontWeight: 400}}>Question 1</span>
                </div>
                <div style={{ paddingTop: '5px', fontSize: '20px',
                             color: 'black', fontWeight: 400 }}>
                                Short description of the job describing the nature of job and explaning
                                and relevant</div>
        <hr />                  
</div>
        )
    }
}
