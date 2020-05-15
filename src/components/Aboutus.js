import React, { Component } from 'react'
import travelandconsultImg from '../image/travelandconsult.png'
import bussinessconsultImg from '../image/bussinessconsult.png'
import financialconsultingImg from '../image/financialconsulting.png'
import eneryconsultImg from '../image/eneryconsult.png'
import consumerconsultImg from '../image/consumerconsult.png'
import educationsolutionImg from '../image/educationsolution.png'
import '../css/Aboutus.css'
export default class Aboutus extends Component {
    render() {
        return (
            <div>
                <section id='rectangleBanner'>
                    <div className="box">
                    </div>
                </section>   <br />
                <div style={{ marginLeft: '50px' }}>
                    <div style={{ fontSize: '30px', fontWeight: '600', color: '#4f4f6f' }}>Our Approach</div><br /><br />
                    <div className="row">
                        <div className="col-sm-2"><img src={travelandconsultImg} alt='travelandconsultImg'/></div>
                        <div className="col-sm-3">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Travel and Aviation Consulting</div><br />
                            <div style={{ fontSize: '11px', color: '#7d7d7d' }}>Company that offers design and build<br />
                                services for you from initial sketches to the<br /> final production.
                        </div>
                        </div>
                        <div className="col-sm-2">
                            <div> <img src={bussinessconsultImg} alt='bussinessconsult' /></div>

                        </div>
                        <div className="col-sm-3">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Business Services Consulting</div><br />
                            <div style={{ fontSize: '11px', color: '#7d7d7d' }}>We consider all the drivers of
                        change – from the<br /> ground up and we’ll motivate and support
                            you<br /> to make the change.
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div><br /><br /><br />
                    <div className="row">
                        <div className="col-sm-2"><img src={financialconsultingImg} alt='financial' /></div>
                        <div className="col-sm-3">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Financial Services Consulting</div><br />
                            <div style={{ fontSize: '11px', color: '#7d7d7d' }}>We work buy-side and sell-side and give our<br />
                                clients hard-hitting and  objective answers and <br />focus hard on the best opportunities.
       
                        </div>
                        </div>
                        <div className="col-sm-2">
                            <div> <img src={eneryconsultImg} alt='eneryconsult' /></div>

                        </div>
                        <div className="col-sm-3">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Energy and Environment Consulting</div><br />
                            <div style={{ fontSize: '11px', color: '#7d7d7d' }}>We work across all the major geographies,<br />
                                meaning we understand the underlying drivers <br />in construction markets.
       
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div><br /><br /><br />
                    <div className="row">
                        <div className="col-sm-2"><img src={consumerconsultImg} alt='consumerconsult' /></div>
                        <div className="col-sm-3">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Consumer Products Consulting</div><br />
                            <div style={{ fontSize: '11px', color: '#7d7d7d' }}>Design repeatable growth models and<br />
                                innovation pipelines that generate new <br />
                                products with higher potential and lower risks<br /> of failure.
    
                        </div>
                        </div>
                        <div className="col-sm-2">
                            <div> <img src={educationsolutionImg} alt='educationsolution' /></div>

                        </div>
                        <div className="col-sm-3">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Educational solutions</div><br />
                            <div style={{ fontSize: '11px', color: '#7d7d7d' }}>Scheduled transport operations,
                        from broad<br /> market trends and strategy to the development<br /> of integrated commercial strategies.
        
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <br /><br />
                    <div style={{ fontSize: '25px', fontWeight: '600', color: '#4f4f6f' }}>Meet the Team</div><br /><br />
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="row">
                                <div className='col-sm-6'><div className="rectangleGray"></div></div>
                                <div className='col-sm-6'><div className="rectangleWhite">
                                    <span style={{ color: '#4b2bb0', fontWeight: '600', fontSize: '12px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABCDEF PQRST</span>
                                    <div style={{ fontSize: '12px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founder & CEO</div>
                                    <span style={{ fontSize: '10px' }}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-square"></i>
                                    </span>
                                    <span style={{ fontSize: '10px', color: '#4b2bb0' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-twitter"></i></span>
                                    <span style={{ fontSize: '10px' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-google-plus-g"></i></span>
                                    <span style={{ fontSize: '10px' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-instagram"></i></span>
                                </div></div>
                            </div>

                        </div>
                        <div className="col-sm-4">
                            <div className="rectangledarkgrey"></div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#000000', fontWeight: '600', fontSize: '12px' }}>Areas of expertise</div>
                            <div style={{ fontSize: '12px', marginTop: '10px' }}>
                                <ul>
                                    <li >Work fewer hours & make money</li>
                                    <li>Attract and retain quality, high-paying customers</li>
                                    <li>Retain, high-paying customers</li>
                                    <li>You’ll get more done in less time</li>
                                    <li>Cut expenses without sacrificing quality</li>
                                    <li>Automate your business, so you can leave for days,</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="row">
                                <div className='col-sm-6'><div className="rectangleGray1"></div></div>
                                <div className='col-sm-6'><div className="rectangleWhite1">
                                    <span style={{ color: '#4b2bb0', fontWeight: '600', fontSize: '12px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABCDEF PQRST</span>
                                    <div style={{ fontSize: '12px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chief Marketing Officer</div>
                                    <span style={{ fontSize: '10px' }}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-square"></i>
                                    </span>
                                    <span style={{ fontSize: '10px', color: '#4b2bb0' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-twitter"></i></span>
                                    <span style={{ fontSize: '10px' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-google-plus-g"></i></span>
                                    <span style={{ fontSize: '10px' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-instagram"></i></span>
                                </div></div>
                            </div>

                        </div>
                        <div className="col-sm-4">

                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#000000', fontWeight: '600', fontSize: '12px' }}>Education</div>
                            <div style={{ fontSize: '12px', marginTop: '10px' }}>
                                <ul>
                                    <li >Work fewer hours & make money</li>
                                    <li>Attract and retain quality, high-paying customers</li>
                                    <li>Retain, high-paying customers</li>
                                    <li>You’ll get more done in less time</li>

                                </ul>
                            </div> 
                        </div>    
                    </div><br/><br/>
                    <div className="row">
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className='col-sm-6'><div className="rectangleGray1"></div></div>
                                    <div className='col-sm-6'><div className="rectangleWhite1">
                                        <span style={{ color: '#4b2bb0', fontWeight: '600', fontSize: '12px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABCDEF PQRST</span>
                                        <div style={{ fontSize: '12px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chief Marketing Officer</div>
                                        <span style={{ fontSize: '10px' }}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-square"></i>
                                        </span>
                                        <span style={{ fontSize: '10px', color: '#4b2bb0' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-twitter"></i></span>
                                        <span style={{ fontSize: '10px' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-google-plus-g"></i></span>
                                        <span style={{ fontSize: '10px' }}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-instagram"></i></span>
                                    </div></div>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div style={{ fontSize: '12px'}}>
                            Companies seem to dislike the term ‘turnaround consulting’ because it represents failure. The truth
                             is that turnaround consulting represents success at realizing the company is going in the wrong 
                             direction. The only time the company fails is when it is not possible to do a turnaround anymore.
                              We help companies pivot into more profitable directions where they can expand and grow. It is 
                              inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
                              <div className="col-sm-1"></div>
                              </div>

                              <div className="row">
                                <div className="col-sm-11">
                                   <div className="longRectange" style={{marginTop:'20px',height:'70px',fontSize:'12px',fontWeight:'400',paddingLeft:'20px'}}><br/>
                                   Consulting WP – we help companies assess their skills and choose a new direction 
                                   which utilizes <br/>the talents of the team and resources most productively.  
                                   </div>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                            <br/><br/>
                            </div>
                          
                            
                        </div>

                </div>


            </div>
        )
    }
}
