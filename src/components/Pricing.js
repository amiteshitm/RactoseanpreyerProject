import React, { Component } from 'react'
import '../css/Pricing.css'
import undrawBeerImg from '../image/undraw_beer.png'
import companyPlanImg from '../image/companyPlan.png'
import agencyPlanImg from '../image/agencyPlan.png'
export default class Pricing extends Component {
    render() {
        return (
            <div>
                <section id='rectangleBanner'>
                <div className="box">
                </div>
                </section>   <br/>
                <div style={{marginLeft:'50px'}}>
                <div style={{fontSize:'30px',fontWeight:'600',color:'#4f4f6f'}}>Our Customized prices for YOU</div> <br/><br/>           
                <div className="row">
                    <div className="col-sm-4">
                    <div className="rectanglePricing"><br/>
                    <div style={{textAlign:'center'}}><img src={undrawBeerImg} alt='undrawBeerImg'/></div>
                    <div>
                    <span style={{color:'#000000',fontSize:'15px',fontWeight:"600"}}>  &nbsp; &nbsp;&nbsp;Individual plan</span>
                    <span style={{color:'#4f4f6f',fontSize:'20px',fontWeight:"600"}}>&nbsp; &nbsp; &nbsp;$70/mont </span>
                    </div>
                    <hr/>
                    <div style={{fontSize:'11px',marginLeft:'15px'}}> &nbsp; &nbsp;Nemo enim ipsam voluptatem quia<br/> voluptas sit aspernatur aut odit aut fugit,<br/> 
                        sed quia consequuntur magni dolores eos<br/>
                         qui ratione voluptatem sequi nesciunt. <br/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Neque porro
                    </div><br/>
                    <div style={{textAlign:'center'}}><button style={{color:'white',background:'#7f22e7',borderRadius:'25px',fontSize:'9px',width:'120px',padding:'10px',outline:'none',border:'0px'}}>SELECT PLAN</button></div><br/>
                    </div>
                   
                    </div>
                    
                    <div className="col-sm-4">
                    <div className="rectanglePricing"><br/>
                    <div style={{textAlign:'center'}}><img src={companyPlanImg} alt='companyPlanImg'/></div>
                    <div>
                    <span style={{color:'#000000',fontSize:'15px',fontWeight:"600"}}>  &nbsp; &nbsp;&nbsp;Company plan</span>
                    <span style={{color:'#4f4f6f',fontSize:'20px',fontWeight:"600"}}>&nbsp; &nbsp; &nbsp;$170/mont </span>
                    </div>
                    <hr/>
                    <div style={{fontSize:'11px',marginLeft:'15px'}}> &nbsp; &nbsp;Nemo enim ipsam voluptatem quia<br/> voluptas sit aspernatur aut odit aut fugit,<br/> 
                        sed quia consequuntur magni dolores eos<br/>
                         qui ratione voluptatem sequi nesciunt. <br/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Neque porro
                    </div><br/>
                    <div style={{textAlign:'center'}}><button style={{color:'white',background:'#7f22e7',borderRadius:'25px',fontSize:'9px',width:'120px',padding:'10px',outline:'none',border:'0px'}}>SELECT PLAN</button></div><br/>
                    </div>

                    </div>
                    <div className="col-sm-4">
                    <div className="rectanglePricing"><br/>
                    <div style={{textAlign:'center'}}><img src={agencyPlanImg} alt='agencyPlanImg'/></div>
                    <div>
                    <span style={{color:'#000000',fontSize:'15px',fontWeight:"600"}}>  &nbsp; &nbsp;&nbsp;Agency Plan</span>
                    <span style={{color:'#4f4f6f',fontSize:'20px',fontWeight:"600"}}>&nbsp; &nbsp; &nbsp;$290/mont </span>
                    </div>
                    <hr/>
                    <div style={{fontSize:'11px',marginLeft:'15px'}}> &nbsp; &nbsp;Nemo enim ipsam voluptatem quia<br/> voluptas sit aspernatur aut odit aut fugit,<br/> 
                        sed quia consequuntur magni dolores eos<br/>
                         qui ratione voluptatem sequi nesciunt. <br/>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Neque porro
                    </div><br/>
                    <div style={{textAlign:'center'}}><button style={{color:'white',background:'#7f22e7',borderRadius:'25px',fontSize:'9px',width:'120px',padding:'10px',outline:'none',border:'0px'}}>SELECT PLAN</button></div><br/>
                    </div>

                    </div>
                </div>
                <br/><br/>    
                </div>
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
          <span ><button type="button" style={{fontSize:'10px',fontWeight:'300',background:'#2e3192',color:'white',padding:'9px',border:'1px solid #2e3192',borderRadius:'0px 25px 25px 0px',width:'90px',outline:'none'}}>SUBSCRIBE</button></span>
        
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

