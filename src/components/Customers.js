import React, { Component } from 'react'
import '../css/Customer.css'
import TalkingDog from '../image/talkingdog.png'
import JontkookImg from '../image/jontkook.png'
import Elefont from '../image/elefont.png'
import Bubalus from '../image/bubalus.png'
import AmericanImg from '../image/american.png'
import allowImg from '../image/allow.png'
// import Twenty from '../image/twenty.png'
// import Follow from '../image/follow.png'
export default class Customers extends Component {
    render() {
        return (
            <div>
                <section id='rectangleBanner'>
                    <div className="box">
                    </div>
                </section>
                <div style={{ marginLeft: '50px' }}>
                    <br />
                    <div style={{ color: '#4f4f6f', fontWeight: 600, fontSize: '30px' }}>Our Happy Customers</div><br /><br />
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="rectangleCustomer">
                                <div style={{ textAlign: 'center' }}><img src={TalkingDog} alt="TalkingDog" width='120px' /></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Chimoon Technology LLC</div>
                            <div style={{ fontSize: '11px', paddingTop: '10px', color: '#7d7d7d' }}>We have been partners since 1999.
                                Our mission is to satisfy our clients’ needs and deliver
                            the works to our customers beyond their expectations.</div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#7d7d7d', fontSize: '11px' }}>&nbsp;“ Vestibulum sollicitudin nunc in eros a <br />justo facilisis rutrum.
                                     Aenean id<br /> ullamcorper libero.
                                 Vestibulum imperdiet <br />nibh tortor mauris condimentum nibh ”
                                 </div>
                            <span id="jontkookimg"><img src={JontkookImg} alt='JontkookImg'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
                              <span style={{ color: '#4b2bb0', fontWeight: '600', fontSize: '12px' }}>JONT KOOK</span>
                            <div style={{ color: '#000000', fontSize: '11px', fontWeight: '500', marginLeft: '50px', marginTop: '-12px' }}>CEO lacinia faucibus risus</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="rectangleCustomer">
                                <div style={{ textAlign: 'center' }}><img src={AmericanImg} alt="American" width='120px' /></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Chimoon Technology LLC</div>
                            <div style={{ fontSize: '11px', paddingTop: '10px', color: '#7d7d7d' }}>We have been partners since 1999.
                                Our mission is to satisfy our clients’ needs and deliver
                            the works to our customers beyond their expectations.</div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#7d7d7d', fontSize: '11px' }}>&nbsp;“ Vestibulum sollicitudin nunc in eros a <br />justo facilisis rutrum.
                                     Aenean id<br /> ullamcorper libero.
                                 Vestibulum imperdiet <br />nibh tortor mauris condimentum nibh ”
                                 </div>
                            <span id="jontkookimg"><img src={JontkookImg} alt='JontkookImg'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
                              <span style={{ color: '#4b2bb0', fontWeight: '600', fontSize: '12px' }}>JONT KOOK</span>
                            <div style={{ color: '#000000', fontSize: '11px', fontWeight: '500', marginLeft: '50px', marginTop: '-12px' }}>CEO lacinia faucibus risus</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="rectangleCustomer">
                                <div style={{ textAlign: 'center' }}><img src={allowImg} alt="allow" width='120px' /></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Chimoon Technology LLC</div>
                            <div style={{ fontSize: '11px', paddingTop: '10px', color: '#7d7d7d' }}>We have been partners since 1999.
                                Our mission is to satisfy our clients’ needs and deliver
                            the works to our customers beyond their expectations.</div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#7d7d7d', fontSize: '11px' }}>&nbsp;“ Vestibulum sollicitudin nunc in eros a <br />justo facilisis rutrum.
                                     Aenean id<br /> ullamcorper libero.
                                 Vestibulum imperdiet <br />nibh tortor mauris condimentum nibh ”
                                 </div>
                            <span id="jontkookimg"><img src={JontkookImg} alt='JontkookImg'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
                              <span style={{ color: '#4b2bb0', fontWeight: '600', fontSize: '12px' }}>JONT KOOK</span>
                            <div style={{ color: '#000000', fontSize: '11px', fontWeight: '500', marginLeft: '50px', marginTop: '-12px' }}>CEO lacinia faucibus risus</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="rectangleCustomer">
                                <div style={{ textAlign: 'center' }}><img src={Bubalus} alt="Bubalus" width='120px' /></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Chimoon Technology LLC</div>
                            <div style={{ fontSize: '11px', paddingTop: '10px', color: '#7d7d7d' }}>We have been partners since 1999.
                                Our mission is to satisfy our clients’ needs and deliver
                            the works to our customers beyond their expectations.</div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#7d7d7d', fontSize: '11px' }}>&nbsp;“ Vestibulum sollicitudin nunc in eros a <br />justo facilisis rutrum.
                                     Aenean id<br /> ullamcorper libero.
                                 Vestibulum imperdiet <br />nibh tortor mauris condimentum nibh ”
                                 </div>
                            <span id="jontkookimg"><img src={JontkookImg} alt='JontkookImg'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
                              <span style={{ color: '#4b2bb0', fontWeight: '600', fontSize: '12px' }}>JONT KOOK</span>
                            <div style={{ color: '#000000', fontSize: '11px', fontWeight: '500', marginLeft: '50px', marginTop: '-12px' }}>CEO lacinia faucibus risus</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="rectangleCustomer">
                                <div style={{ textAlign: 'center' }}><img src={Elefont} alt="Elefont" width='120px' /></div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#000000', fontSize: '15px', fontWeight: '600' }}>Chimoon Technology LLC</div>
                            <div style={{ fontSize: '11px', paddingTop: '10px', color: '#7d7d7d' }}>We have been partners since 1999.
                                Our mission is to satisfy our clients’ needs and deliver
                            the works to our customers beyond their expectations.</div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ color: '#7d7d7d', fontSize: '11px' }}>&nbsp;“ Vestibulum sollicitudin nunc in eros a <br />justo facilisis rutrum.
                                     Aenean id<br /> ullamcorper libero.
                                 Vestibulum imperdiet <br />nibh tortor mauris condimentum nibh ”
                                 </div>
                            <span id="jontkookimg"><img src={JontkookImg} alt='JontkookImg'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
                              <span style={{ color: '#4b2bb0', fontWeight: '600', fontSize: '12px' }}>JONT KOOK</span>
                            <div style={{ color: '#000000', fontSize: '11px', fontWeight: '500', marginLeft: '50px', marginTop: '-12px' }}>CEO lacinia faucibus risus</div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <hr/>
                <div className="row">
          <div className="col-sm-3">
            <div style={{ marginLeft: '50px' }}>
              <span style={{ color: '#000000', fontWeight: '400', fontSize: '15px' }}>Contact Us</span><br />
              <div style={{ fontSize: '12px', fontWeight: '300' }}>London Oxford Street, 012<br /> New York, USA<br />
              </div>
              <div style={{ fontSize: '12px', fontWeight: '300' }}>+032 3456 7890<br /></div>
              <div style={{ fontSize: '12px', fontWeight: '300' }}>Business@osprey.com</div>
            </div>
          </div>
          <div className="col-sm-3"><span style={{ color: '#000000', fontWeight: '400', fontSize: '15px' }}>Extra links</span><br />
            <div style={{ fontSize: '12px', fontWeight: '300' }}>About<br /></div>
            <div style={{ fontSize: '12px', fontWeight: '300' }}>News<br /></div>
            <div style={{ fontSize: '12px', fontWeight: '300' }}>Contacts<br /></div>
            <div style={{ fontSize: '12px', fontWeight: '300' }}>Testimonials</div>
          </div>
          <div className="col-sm-3"><span style={{ color: '#000000', fontWeight: '400', fontSize: '15px' }}></span><br />
            <div style={{ fontSize: '12px', fontWeight: '300' }}>Services<br /></div>
            <div style={{ fontSize: '12px', fontWeight: '300' }}>Careers<br /></div>
            <div style={{ fontSize: '12px', fontWeight: '300' }}>Our team<br /></div>
            <div style={{ fontSize: '12px', fontWeight: '300' }}>Our approach</div>
          </div>
          <div className="col-sm-3"><span style={{ color: '#000000', fontWeight: '400', fontSize: '15px' }}>Email Newsletters</span><br />
            <div style={{ fontSize: '12px', fontWeight: '300' }}>Keep me up to date with content, updates, and offers from Thallo.<br /></div>
            <span ><input type='text' placeholder='Email Address' style={{borderRadius:'25px 0px 0px 25px',background:'#f1f8fc',padding:'5px',border:'1px solid #f1f8fc'}}/></span>
          <span ><button type="button" style={{outline:'none',fontSize:'10px',fontWeight:'300',background:'#2e3192',color:'white',padding:'9px',border:'1px solid #2e3192',borderRadius:'0px 25px 25px 0px',width:'90px'}}>SUBSCRIBE</button></span>
        
          </div>
        </div>
        <br /> <hr/>
        <div className="row ">
          <div className="col-sm-2"><span style={{marginLeft:'50px',color:'#000000',fontWeight:'300',fontSize:'11px'}}> <strong>Privacy Policy</strong></span></div>
          <div className="col-sm-2"><span style={{color:'#000000',fontWeight:'300',fontSize:'11px'}}><strong>Terms and Conditions</strong></span></div>
          <div className="col-sm-1"><span style={{color:'#000000',fontWeight:'300',fontSize:'11px'}}><strong>Help</strong></span></div>
          <div className="col-sm-5"><span style={{color:'#000000',fontWeight:'300',fontSize:'11px'}}><strong>Partners</strong></span></div>
          <div className="col-sm-2">
          <span style={{ fontSize: '13px' }}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook-square"></i>
                </span>
                <span style={{ fontSize: '13px',color:'#4b2bb0' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-twitter"></i></span>
                <span style={{ fontSize: '13px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-google-plus-g"></i></span>
                <span style={{ fontSize: '13px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-instagram"></i></span>
          </div>
         <div> <span style={{marginLeft:'50px',fontSize:'10px'}}>© 2019 <span style={{color:'#4b2bb0',fontWeight:'400'}}>Osprey</span> - All Rights Reserved. Made by <span style={{color:'#4b2bb0',fontWeight:'400'}}>Progressive Robotics</span></span></div>
        </div>
            </div>
        )
    }
}
