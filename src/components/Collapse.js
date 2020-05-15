import React, { Component } from 'react'
import '../css/Collapse.css'
export default class Collapse extends Component {
    // constructor(props) {
    //     super(props)
    //   this.state={
    //     Paragraph1:true,
    //     Paragraph2:false,
    //     Paragraph3:false,
    //     Paragraph4:false,
    //     Paragraph5:false,
    //     Paragraph6:false,
       
    //   }
    // }
    
    //   Paragraph1Select = () => {
    //       this.setState({
    //       Paragraph1:true,
    //       Paragraph2: false,
    //       Paragraph3:false,
    //       Paragraph4:false,
    //       Paragraph5:false,
    //       Paragraph6:false
    //       })
    //   }  
    //   Paragraph2Select = () => {
    //       this.setState({
    //       Paragraph2:true,
    //       Paragraph1: false,
    //       Paragraph3:false,
    //       Paragraph4:false,
    //       Paragraph5:false,
    //       Paragraph6:false
    //       })
    //   }
    //   Paragraph3Select = () => {
    //       this.setState({
    //       Paragraph3:true,
    //       Paragraph2: false,
    //       Paragraph1:false,
    //       Paragraph4:false,
    //       Paragraph5:false,
    //       Paragraph6:false
    //       })
    //   }
    //   Paragraph4Select = () => {
    //       this.setState({
    //       Paragraph4:true,
    //       Paragraph2: false,
    //       Paragraph3:false,
    //       Paragraph1:false,
    //       Paragraph5:false,
    //       Paragraph6:false
    //       })
    //   }
    //   Paragraph5Select = () => {
    //       this.setState({
    //       Paragraph5:true,
    //       Paragraph2: false,
    //       Paragraph3:false,
    //       Paragraph4:false,
    //       Paragraph1:false,
    //       Paragraph6:false
    //       })
    //   }
    //   Paragraph6Select = () => {
    //       this.setState({
    //       Paragraph6:true,
    //       Paragraph2: false,
    //       Paragraph3:false,
    //       Paragraph4:false,
    //       Paragraph5:false,
    //       Paragraph1:false
    //       })
    //   }
    render() {
        return (
            <div>
              <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                        <div className='paragraphHead' 
                            data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="false"
                            aria-controls="collapseOne1">
                            One place to post jobs. 
                            <a href="!#">
                          <span className="expanded" ><i class="fas fa-angle-down"  style={{cursor:'pointer',float:'right'}}></i></span>
                        </a>
                        </div>
                                  <div id="collapseOne1" class="collapse show" role="tabpanel" data-parent="#accordionEx">
                                    <p id='paragraphCollapse'>
                                      OspreyApp will allow posting of a single job
                                      request to multiple job sites like Craigslist, 
                                      Indeed, Google, Glassdoor and Zipcruiter without the need 
                                      for multiple logins/profiles or submitting the same information 
                                      over and over. 
                                    </p> 
                                  </div> 
                  <hr id="paragraph1Hr"/>
                    {/* ----------Paragraph1 End---------- */}
                       <div className='paragraphHead'
                     data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                       aria-expanded="false" aria-controls="collapseTwo2">
                          One place to track applicants. 
                          <a href="!#">
                          <span className="expanded" ><i class="fas fa-angle-down"  style={{cursor:'pointer',float:'right'}}></i></span>
                          </a>
                       </div>
                          <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                           <p id='paragraphCollapse'>
                              OspreyApp will aggregate replies from the multiple job sites to form a single candidate list. Employers will be able to short-list candidates, archive them
                              for later contact, or progress them to interviewing.
                            </p>
                         </div> 
                  <hr id="paragraph1Hr"/>
                    {/* ------------paragraph2 End----------- */}

                    <div  role="tab" >
                       <div className='paragraphHead'
                     data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo3"
                       aria-expanded="false" aria-controls="collapseTwo3">
                          Robo Interviews & Reference Checks. 
                          <a href="!#">
                          <span className="expanded" ><i class="fas fa-angle-down"  style={{cursor:'pointer',float:'right'}}></i></span>
                          </a>
                       </div>
                    </div>
                          <div id="collapseTwo3" class="collapse" role="tabpanel" aria-labelledby="headingTwo3" data-parent="#accordionEx">
                           <p id='paragraphCollapse'>
                           Later iterations will support robo-interviewing, robo-reference checks that will 
                                  allow employers to pre-record candidate and reference interviews
                                  and have the interviews executed while they are busy managing their
                                  businesses- a true force multiplier and feature unique to Osprey.  
                            </p>
                         </div> 
                  <hr id="paragraph1Hr" />
                  {/* ------------------Paragraph3 End------------- */}
                       <div className='paragraphHead'
                     data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo4"
                       aria-expanded="false" aria-controls="collapseTwo4">
                          Automated Scheduling & Reminders.
                          <a href="!#">
                          <span className="expanded" ><i class="fas fa-angle-down"  style={{cursor:'pointer',float:'right'}}></i></span>
                          </a>
                       </div>
                          <div id="collapseTwo4" class="collapse" role="tabpanel" aria-labelledby="headingTwo4" data-parent="#accordionEx">
                           <p id='paragraphCollapse'>
                                  The application will form a dialogue with the candidate over SMS and schedule them for interviews based on the employers’ pre-defined availability sparing an employer 
                                  from countless rounds of “phone-tag” with candidates. The app will 
                                  automatically follow up on non-replies ensuring that no candidate is
                                  left without an opportunity to interview.  
                            </p>
                         </div> 
                  <hr id="paragraph1Hr"/>
                   {/* ----------Paragraph4 End------------- */}
                       <div className='paragraphHead'
                     data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo5"
                       aria-expanded="false" aria-controls="collapseTwo5">
                           Onboarding & I9 Automation.
                          <a href="!#">
                          <span className="expanded" ><i class="fas fa-angle-down"  style={{cursor:'pointer',float:'right'}}></i></span>
                          </a>
                       </div>
                          <div id="collapseTwo5" class="collapse" role="tabpanel" aria-labelledby="headingTwo5" data-parent="#accordionEx">
                           <p id='paragraphCollapse'>
                           Later iterations will allow employers to collect 
                                  onboarding forms, send offer letters, and integration 
                                  with the UCIS employment verification system putting
                                  us on our way to offering a  fully integrated E2E recruiting solution
                            </p>
                         </div> 
                   
                  <hr id="paragraph1Hr"/>
                  {/* -------------Paragraph5 End------------------ */}
                       <div className='paragraphHead'
                     data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo6"
                       aria-expanded="false" aria-controls="collapseTwo6">
                           Privacy.   
                          <a href="!#">
                          <span className="expanded" ><i class="fas fa-angle-down"  style={{cursor:'pointer',float:'right'}}></i></span>
                          </a>
                       </div>
                          <div id="collapseTwo6" class="collapse" role="tabpanel" aria-labelledby="headingTwo6" data-parent="#accordionEx">
                           <p id='paragraphCollapse'>
                                Osprey will allow for anonymized SMS chatting with cand candidates 
                                allowing employers to maintain a degree of privacy.
                            </p>
                         </div> 
                  <hr id="paragraph1Hr"/>
                  {/* ---------------Paragraph6 End ---------------- */}
            </div>
            </div>

            // --------------------------------------Old code-----------------------------------------
            // <div>
            //     <div className='row'>
            //             <div className='col-sm-11' 
            //                 style={{color:'#707070',cursor:'pointer',fontWeight:'500',fontSize:'15px'}}
            //                 onClick={this.Paragraph1Select}
            //                 href="#block-id1"  data-toggle="collapse"
            //                 aria-expanded="false" aria-controls="block-id1" >
            //                 One place to post jobs. 
            //             </div>
            //             <div className='col-sm-1' 
            //               href="#block-id1"  data-toggle="collapse"
            //               aria-expanded="false" aria-controls="block-id1" >
            //               <span className="collapsed" ><i class="fas fa-angle-down" style={{cursor:'pointer'}}></i></span>
            //               <span className="expanded" ><i class="fas fa-angle-up"  style={{cursor:'pointer'}}></i></span>
            //             </div>
            //        </div>
            //           {this.state.Paragraph1 ?(
            //                   <div className='row'>
            //                     <div className=' col-sm-12' >
            //                       <p className="collapse" id='block-id1' 
            //                        style={{width:'460px',color:'#707070',fontWeight:'500',
            //                         fontSize:'15px'}}>
            //                         OspreyApp will allow posting of a single job
            //                         request to multiple job sites like Craigslist, 
            //                         Indeed, Google, Glassdoor and Zipcruiter without the need 
            //                         for multiple logins/profiles or submitting the same information 
            //                         over and over. 
            //                         </p> 
            //                     </div>
            //                 </div>
            //          ):(<div>
            //       </div>)}
            //       <hr style={{background:'white',height:'15px'}}/>
            //         {/* ----------Paragraph1 End---------- */}
            //         <div className='row'>
            //            <div className='col-sm-11'
            //            style={{color:'#707070',cursor:'pointer',fontWeight:'500',fontSize:'15px'}} 
            //            onClick={this.Paragraph2Select}
            //            href="#block-id2"  data-toggle="collapse" 
            //            aria-expanded="false" aria-controls="block-id2">
            //               One place to track applicants. 
            //            </div>
            //            <div className='col-sm-1'
            //               href="#block-id2"  data-toggle="collapse" 
            //               aria-expanded="false" aria-controls="block-id2">
            //                 <span className="collapsed" ><i class="fas fa-angle-down" style={{cursor:'pointer'}}></i></span>
            //               <span className="expanded" ><i class="fas fa-angle-up" style={{cursonr:'pointer'}}></i></span>
            //            </div>
            //         </div>
            //         {this.state.Paragraph2 ?(
            //           <div className='row'>
            //             <div className='col-sm-12'>
            //               <p className="collapse" id='block-id2' 
            //                 style={{width:'460px',color:'#707070',fontWeight:'500',fontSize:'15px'}}>
            //                 OspreyApp will aggregate replies from the multiple job sites to form a single candidate list. 
            //                 Employers will be able to short-list candidates, archive them
            //                 for later contact, or progress them to interviewing.
            //               </p>
            //             </div>
            //           </div>
            //        ):(<span></span>)}
            //       <hr style={{background:'white',height:'15px'}}/>
            //         {/* ------------paragraph2 End----------- */}
            //         <div className='row'>
            //           <div className='col-sm-11' style={{color:'#707070',cursor:'pointer',
            //                 fontWeight:'500',fontSize:'15px'}} onClick={this.Paragraph3Select}
            //                 href="#block-id3" data-toggle="collapse" 
            //                 aria-expanded="false" aria-controls="block-id3">
            //                 Robo Interviews & Reference Checks. 
            //           </div>
            //           <div className='col-sm-1' href="#block-id3" 
            //              data-toggle="collapse" aria-expanded="false" 
            //              aria-controls="block-id3">
            //               <span className="collapsed" ><i class="fas fa-angle-down" style={{cursor:'pointer'}}></i></span>
            //               <span className="expanded" ><i class="fas fa-angle-up" style={{cursor:'pointer'}} ></i></span>
            //              </div>
            //         </div>
            //         {this.state.Paragraph3 ?(
            //           <div className='row'>
            //             <div className='col-sm-12'>
            //                 <p className="collapse" id='block-id3' 
            //                    style={{width:'460px',color:'#707070',fontWeight:'500',fontSize:'15px'}}>
            //                       Later iterations will support robo-interviewing, robo-reference checks that will 
            //                       allow employers to pre-record candidate and reference interviews
            //                       and have the interviews executed while they are busy managing their
            //                       businesses- a true force multiplier and feature unique to Osprey.  
            //                 </p>
            //             </div>
            //           </div>
            //         ):(<span></span>)}
            //       <hr style={{background:'white',height:'15px'}} />
            //       {/* ------------------Paragraph3 End------------- */}
            //       <div className='row'>
            //         <div className='col-sm-11'
            //             style={{color:'#707070',cursor:'pointer',fontWeight:'500',fontSize:'15px'}} 
            //             onClick={this.Paragraph4Select} href="#block-id4"  data-toggle="collapse" 
            //             aria-expanded="false" aria-controls="block-id4">
            //             Automated Scheduling & Reminders.
            //         </div>
            //         <div className='col-sm-1' href="#block-id4"  data-toggle="collapse" aria-expanded="false" aria-controls="block-id4">
            //         <span className="collapsed" ><i class="fas fa-angle-down" style={{cursor:'pointer'}}></i></span>
            //               <span className="expanded"><i class="fas fa-angle-up" style={{cursor:'pointer'}} ></i></span>
            //         </div>
            //       </div>
            //         {this.state.Paragraph4 ?(
            //           <div className='row'>
            //             <div className='col-sm-12'>
            //                 <p className="collapse" id='block-id4'
            //                       style={{width:'460px',color:'#707070',fontWeight:'500',fontSize:'15px'}}>
            //                       The application will form a dialogue with the candidate over SMS and schedule them for interviews 
            //                       based on the employers’ pre-defined availability sparing an employer 
            //                       from countless rounds of “phone-tag” with candidates. The app will 
            //                       automatically follow up on non-replies ensuring that no candidate is
            //                       left without an opportunity to interview.  
            //                   </p>
            //             </div>
            //           </div>
            //       ):(<div></div>)}
            //       <hr style={{background:'white',height:'15px'}}/>
            //        {/* ----------Paragraph4 End------------- */}
            //        <div className='row'>
            //          <div className='col-sm-11' 
            //               style={{width:'500px',color:'#707070',cursor:'pointer',fontWeight:'500',fontSize:'15px'}}
            //               onClick={this.Paragraph5Select} href="#block-id5"  data-toggle="collapse" 
            //               aria-expanded="false" aria-controls="block-id5">
            //               Onboarding & I9 Automation.
            //          </div>
            //          <div className='col-sm-1' href="#block-id5"  data-toggle="collapse" 
            //               aria-expanded="false" aria-controls="block-id5">
            //               <span className="collapsed" ><i class="fas fa-angle-down" style={{cursor:'pointer'}}></i></span>
            //               <span className="expanded" ><i class="fas fa-angle-up" style={{cursor:'pointer'}} ></i></span>
            //         </div>
            //        </div>
            //         {this.state.Paragraph5 ?(
            //           <div className='row'>
            //             <div className='col-sm-12'>
            //                 <p className="collapse" id='block-id5'
            //                   style={{width:'460px',color:'#707070',fontWeight:'500',fontSize:'15px'}}>
            //                       Later iterations will allow employers to collect 
            //                       onboarding forms, send offer letters, and integration 
            //                       with the UCIS employment verification system putting
            //                       us on our way to offering a  fully integrated E2E recruiting solution
            //                   </p>   
            //             </div>
            //           </div>
            //         ):(<span></span>)}
            //       <hr style={{background:'white',height:'15px'}}/>
            //       {/* -------------Paragraph5 End------------------ */}
            //       <div className='row'> 
            //           <div className='col-sm-11' 
            //                 style={{color:'#707070',cursor:'pointer',fontWeight:'500',fontSize:'15px'}} 
            //                 onClick={this.Paragraph6Select}  href="#block-id6"  data-toggle="collapse" 
            //                 aria-expanded="false" aria-controls="block-id6">
            //                 Privacy.   
            //           </div>
            //           <div className='col-sm-1' href="#block-id6"  data-toggle="collapse" 
            //                 aria-expanded="false" aria-controls="block-id6">
            //               <span className="collapsed" ><i class="fas fa-angle-down" style={{cursor:'pointer'}}></i></span>
            //               <span className="expanded" ><i class="fas fa-angle-up" style={{cursor:'pointer'}}></i></span>
            //           </div>
            //        </div>
            //         {this.state.Paragraph6 ?(
            //           <div className='row'>
            //             <div className='col-sm-12'>
            //                   <p className="collapse" id='block-id6' 
            //                     style={{width:'460px',color:'#707070',fontWeight:'500',fontSize:'15px'}}>
            //                     Osprey will allow for anonymized SMS chatting with cand candidates 
            //                     allowing employers to maintain a degree of privacy.
            //                   </p>
            //             </div>
            //           </div>
            //         ):(<span></span>)}
            //       <hr style={{background:'white',height:'15px'}}/>
            //       {/* ---------------Paragraph6 End ---------------- */}
            // </div>
        
        )
    }
}
