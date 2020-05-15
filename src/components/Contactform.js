import React, { Component } from 'react'
import '../css/Contactform.css'
import FlageImage from '../image/flag2.png'
import { contactus } from './UserFunctions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Loader from 'react-loader-spinner'
import { Redirect } from 'react-router-dom'
import ProgressiveRobot from '../image/progressive.png'
import { subscribe_to_newsletter } from './UserFunctions';
import { signup_for_beta_test,validateForm } from './UserFunctions';
export default class Contactform extends Component {
  constructor(props) {
    super(props)
  this.state = {
    SignupNormalButton: true,
    SignupExpandButton: false,
    email_address: '',
      customer_name: '',
      subject : '',
      phone_number:'',
      email_address_subscribe: '',
      email_address_beta_test: '',
      open_beta_test: true,
      loading_beta_test: false,
      email_sent_beta_test: false,
      open : true,
      loading: false,
      loading_contact:false,
      email_sent: false,
      email_sent_contact: false,
      toHome: false,
      errorFlag: false,
      errors: {
      email_address_subscribe: '',
      email_address_beta_test: '',
      email_address:'',
      phone_number:''
      }
  }
}

handleClose=(e) =>{
  this.setState({ open: false })
  this.setState({ open_beta_test: false })
  this.setState(() => ({
    toHome: true
  }))
}
onChange=(e) =>{
  const name = e.target.name 
    const value = e.target.value
    let errors = this.state.errors;
    const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    switch (name) {
      case 'email_address': 
        errors.email_address = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
        case 'email_address_subscribe': 
        errors.email_address_subscribe = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid! ';
        break;
        case 'email_address_beta_test': 
        errors.email_address_beta_test = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'phone_number': 
        errors.phone_number = 
          value.length > 10
            ? ''
            : '';
        break;
      default:
        break;
    }
  this.setState({ [e.target.name]: e.target.value })
}
onSubmit=(e) =>{
  e.preventDefault()
  e.target.className += " was-validated";
  if(validateForm(this.state.errors) === false){
    this.setState({errorFlag: true})
  }
  this.setState({loading : true})
  this.setState({loading_contact : true})
  this.setState({ loading_beta_test: true })
  const contactDetails = {
    email_address: this.state.email_address,
    customer_name : this.state.customer_name,
    subject : this.state.subject,
    phone_number : this.state.phone_number,
    message : this.state.message 
  }
  const details = {
    email_address_subscribe: this.state.email_address_subscribe,
  }
  const Signupdetails = {
    email_address_beta_test: this.state.email_address_beta_test,
  }
  subscribe_to_newsletter(details).then(res => {
    this.setState({ loading: false })
    if (!res.error) {
      this.setState({ email_sent: true })
    }
  })
  signup_for_beta_test(Signupdetails).then(res => {
    this.setState({ loading_beta_test: false })
    if (!res.error) {
      this.setState({ email_sent_beta_test: true })
    }
  })
  contactus(contactDetails).then(res => {
    this.setState({loading_contact : false})
    if(!res.error){
      this.setState({email_sent_contact: true})
    }
  })
}
  SignupNormalButtonClick = () => {
    this.setState({
      SignupNormalButton: false,
      SignupExpandButton: true
    })
  }
  SignupExpandButtonClick = () => {
    this.setState({
      SignupNormalButton: true,
      SignupExpandButton: false
    })
  }

  
  render() {
    const isEnabled = this.state.errors.email_address.length > 0 || 
                      this.state.errors.phone_number.length > 10|| 
                      this.state.errors.email_address_subscribe.length> 0 || 
                      this.state.errors.email_address_beta_test.length > 0;
    if (this.state.loading){
      return(
        
        <div style={{textAlign:'center'}}>
        <br/><br/><br/><br/><br/><br/>
        <Loader
           type="ThreeDots"
           color="#00BFFF"
           height={100}
           width={100}
           timeout={15000} //3 secs
        />
        <br/>
        </div>
        
       );
    }
    if (this.state.loading_contact){
      return(
        
        <div style={{textAlign:'center'}}>
        <br/><br/><br/><br/><br/><br/>
        <Loader
           type="ThreeDots"
           color="#00BFFF"
           height={100}
           width={100}
           timeout={15000} //3 secs
        />
        <br/>
        </div>
        
       );
    }
    if (this.state.loading_beta_test) {
      return (
        <div style={{ textAlign: 'center' }}>
          <br /><br /><br /><br /><br /><br />
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={15000} //3 secs
          />
          <br />
        </div>
      );
    }
    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }
    if (this.state.email_sent === true) {
      return (
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thank you for subscribe OspreyApp. We have received your details. We will revert shortly.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" >
                OK
                </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    // ------------Subscribe Newslatter End------------
    if (this.state.email_sent_beta_test === true) {
      return (
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thank you for subscribing to Beta test  OspreyApp. We have received your details and a team member    will reach out to you shortly.<br /><br />
                Thank You,<br />
                Progressive | Robotics Team
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" >
                OK
                </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    if (this.state.email_sent_contact === true) {
      return (
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thank you for contacting Progressive | Robotics. We have received your details and a team member will reach out to you shortly.<br/><br/>
                Thank you,<br/>
                Progressive | Robotics Team
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" >
                OK
                </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    return (
      <div>
        <section id="rectangleBannerContactus">
          <div className="box">
            {this.state.SignupNormalButton ? (
              <div id='signupbetaimgFeatures' className="position-fixed" onClick={this.SignupNormalButtonClick}>
                <div id='signupbutton' >Sign Up for BETA TESTING</div>
              </div>
            ) : (<div></div>)}
            {this.state.SignupExpandButton ? (
              <div id='signupbetaExpandimgFeatures' className="position-fixed">
                <div id='signupbutton1' >
                  <span>Sign Up for BETA TESTING</span>
                  <span id='signupCancel' onClick={this.SignupExpandButtonClick}>X</span>
                </div>
                <div id='signtextcolor'>We are looking for someone like you to test our soft<br />
                  launch, please send us your intimation and we will<br />
                  reach back to you.
                    </div>
                <div id="flagImg">
                  <img src={FlageImage}  alt='FlageImage'/>
                </div>
                <form onSubmit={this.onSubmit} id="login-form" action method="post">
                  <div id='signupInput'>
                    <input type='text' placeholder="Your Email" name="email_address_beta_test" required
                      value={this.state.email_address_beta_test} onChange={this.onChange} id="email_address_beta_test"
                      className="form-control" />
                  </div>
                  <div id="signInputbutton"><button type='submit' disabled={isEnabled}>Sign Up</button></div>
                  <div  id="validEmailError">
                    {   this.state.errors.email_address_beta_test.length > 0 && 
                        <div id = 'error' >{this.state.errors.email_address_beta_test}</div>
                    }
                  </div>  
                </form>
              </div>) : (<div></div>)}
          </div>
        </section>
        {/* -------Banner End----------------- */}
        <div className="backpag">
          <div className='container'>
            <div className='row'  id='RowMargin'>
              <div className='col-sm-5'>
                <div id='firtRowHeading'>CONTACT INFO </div>
              </div>
              <div className='col-sm-7'>
                <div id='firtRowHeading' >CONNECT WITH OSPREY </div>
              </div>
            </div>
            {/* --------First Row End---------- */}
            <div className='row' id='RowMargin'>
              <div className='col-sm-5'>
                <div  id ='secondRowheading' >Thanks for coming here </div>
              </div>
              <div className='col-sm-7'>
                <div id ='secondRowheading'>Get in touch </div>
              </div>
            </div>
            {/* -----------Second Row End------------- */}
            {/* ---------------Third row---------------------- */}
            <div className='row' id='RowMargin'>
              <div className='col-sm-5'>
                <p id='thirdRowParagraph' >We   would love to meet you, <br />
                  Do let us know if you happen to be in New York,<br />
                  We can have coffee together to discuss and,<br />
                  YES the coffee is on us :)
                </p>
              </div>
              
              <div className='col-sm-7' >
              <form onSubmit={this.onSubmit} id="login-form" action method="post">
                <div id='contactdetails'>
                  <div id='input'>
                      <input type="text" placeholder="Name"  name="customer_name" required 
                        value={this.state.customer_name} onChange={this.onChange} id="customer_name" className="form-control"/></div>
                  <div id='input2'>
                    <span ><input type="text" placeholder="Email" name="email_address" required
                        value={this.state.email_address} onChange={this.onChange} id="email_address" className="form-control"/>
                     
                    </span>
                    <span  id="contactPhoneMargin"><input type="number" pattern="\d{3}[\-]\d{3}[\-]\d{4}"                        placeholder="Phone number" name="phone_number" required 
                          value={this.state.phone_number} onChange={this.onChange} id="phone_number" className="form-control" /><br />
                    </span>
                    {this.state.errors.phone_number.length > 0 && 
                        <span id='error'>{this.state.errors.phone_number}</span>
                      }  
                    {this.state.errors.email_address.length > 0 && 
                        <span id='error'>{this.state.errors.email_address}</span>
                      }  
                  </div>
                  <div id='textarea'><textarea type='text' placeholder="Your message"  name="message" required
                    value={this.state.message} onChange={this.onChange} id="message" /></div>
                    <div>
                        <button  id ='contactDetailsSendButton' disabled={isEnabled}>SEND TO US
                        </button>
                    </div>
                </div>
                </form>
              </div>
            </div><br /><br />
            {/* ----------Third Row end------------ */}
          </div>
          {/* -----container End -------------- */}

          <div className='container'>
          <div id='contactUsForm'>
            <div className="row">
              <div className='col-sm-5'>
                <div className='row'>
                  <div className='col-sm-6' >
                    <div id='sec9Contactus'>Contact Us</div>
                    <div id='sec9Contactsec1'>929.260.2850</div>
                    <div id='sec9Contactsec2'>info@progressive-robotics.com</div>
                  </div>
                  <div className='col-sm-3' id='contactUsExtralinkForm' >
                    <div id='sect9ExtraLink'>Extra links</div>
                    <div id='sect9ExtraLinksec1'>About</div>
                    <div id='sect9ExtraLinksec2'>News</div>
                    <div id='sect9ExtraLinksec3'>Contacts</div>
                    <div id='sect9ExtraLinksec4'>Testimonials</div>
                  </div>
                  <div className='col-sm-3 ' id='contactusServiceform' ><br />
                    <div id='sec9serCarour1'>Services </div>
                    <div id='sec9serCarour2'>Careers </div>
                    <div id='sec9serCarour3'>Our team  </div>
                    <div id='sec9serCarour4'>Our approach</div>
                  </div>
                </div>
              </div>
              <div className='col-sm-7' >
                <div className='col-sm-2'>
                </div>
                <div className='col-sm-10  offset-sm-1'>
                  <div id='sec9EmailNewslatter'> Email Newsletters</div>
                  <div id='sec9EmailNewsCont'> Keep me up to date with content, updates, and offers from Osprey.</div>
                  <form onSubmit={this.onSubmit} id="login-form" action method="post">
                      <div className="input-group mb-3">
                        <input type="text" name="email_address_subscribe" required placeholder="Your Email" value={this.state.email_address_subscribe} onChange={this.onChange} id='Sec9placeholdeEmail'
                                            className="form-control"/>
                        <div className="input-group-append">
                          <input type="submit" id='Sec9SubscribeButton' className="input-group-text" value='SUBSCRIBE' disabled={isEnabled}/>
                        </div>                        
                      </div>
                      { this.state.errors.email_address_subscribe.length > 0 && 
                        <div id = 'error' >{this.state.errors.email_address_subscribe}</div>
                      }
                    </form>
                  {/* ----------------------------- */}
                </div>
              </div>
            </div>

            <br /> <hr id='sec10Hr' />
            {/* ----------- section9----------          */}
            <div className='row'>
              <div className='col-sm-9' >
                <span id='sec10colLeftpanel1'>Privacy Policy</span>
                <span id='sec10colLeftpanel2'>Terms and Conditions</span>
                <span id='sec10colLeftpanel3'>Help</span>
                <span id='sec10colLeftpanel4'>Partners</span>
                <div id='sec10leftFooter'>
                  <span id='sec10ospreyfooter'>© 2020</span><span id='sec10ospreyfooter1'> Osprey App</span>
                  <span id='sec10ospreyfooter2'>-All Rights Reserved. Made by</span>
                  <span id='sec10ospreyfooter3'><img src={ProgressiveRobot} alt='progessive' /></span>


                </div>
              </div>

              <div className='col-sm-3'>
                <span id='facebookIcon'> <i class="fab fa-facebook-square"></i>
                </span>
                <span id='twitterIcon'><i class="fab fa-twitter"></i></span>
                <span id='googleIcon'><i class="fab fa-google-plus-g"></i></span>
                <span id='instagramIcon'><i class="fab fa-instagram"></i></span>
              </div>
            </div>
            {/* ----------- section10----------          */}
            <br /><br />
          </div>
          {/* ---------container end----------- */}
      </div>
        
        {/* -------------container End---------- */}    
        </div>
        
      </div>
    
    )
  }
}
