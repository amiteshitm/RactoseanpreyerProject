import React, { Component } from 'react'
import '../css/Landing.css'
import research from '../image/research.png'
import hoursdelavary from '../image/24hoursdelivery.png'
import Hassel from '../image/hasselimg.png'
import Computer from '../image/comMob.png'
import Googleplay from '../image/googleplay.png'
import manImage from '../image/man_image.png'
import manImage2 from '../image/man_image2.png'
import FlageImage from '../image/flag2.png'
import video from '../image/video.mp4'
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
import Collapse from './Collapse'
class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SignupNormalButton: true,
      SignupExpandButton: false,
      isEnterprise: true,
      isAgencies: false,
      email_address_subscribe: '',
      email_address_beta_test: '',
      open: true,
      open_beta_test: true,
      loading: false,
      loading_beta_test: false,
      email_sent_beta_test: false,
      email_sent: false,
      toHome: false,
      errorFlag: false,
      errors: {
        email_address_subscribe: '',
        email_address_beta_test: '',
      }
    }
    this.baseState = this.state
  }
  handleClose = (e) => {
    this.setState({ open: false })
    this.setState({ open_beta_test: false })
    this.setState(() => ({
      toHome: true
    }))
  }
  onChange = (e) => {
    const name = e.target.name 
    const value = e.target.value
    let errors = this.state.errors;
    const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    switch (name) {
      case 'email_address_subscribe': 
        errors.email_address_subscribe = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
        case 'email_address_beta_test': 
        errors.email_address_beta_test = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      default:
        break;
    }
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    e.target.className += " was-validated";
    this.setState({ loading: true })
    this.setState({ loading_beta_test: true })
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
  isEnterpriseSelect = () => {
    this.setState({
      isEnterprise: true,
      isAgencies: false
    })
  }
  isAgenciesSelect = () => {
    this.setState({
      isEnterprise: false,
      isAgencies: true
    })
  }
  render() {
    const isEnabled = this.state.errors.email_address_subscribe.length > 0 ||
                      this.state.errors.email_address_beta_test.length > 0;
    if (this.state.loading) {
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
      this.setState(this.baseState)
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
    //-------------Beta testing end----------------------
    let style_Enterprise = { backgroundColor: 'white', color: '#4f4f6f' }
    let style_Agencies = { backgroundColor: '#ffffff', color: '#4f4f6f' }

    if (this.state.isEnterprise) {
      style_Enterprise = { backgroundColor: '#5a29c1', color: 'white', }
    }
    if (this.state.isAgencies) {
      style_Agencies = { backgroundColor: '#5a29c1', color: 'white', }
    }
    return (
      <div >
        <section >
          <div className="box">
            {this.state.SignupNormalButton ? (
              <div id='signupbetaimg' className="position-fixed" onClick={this.SignupNormalButtonClick}>
                <div id='signupbutton' >Sign Up for BETA TESTING</div>
              </div>
            ) : (<div></div>)}

            {this.state.SignupExpandButton ? (
              <div id='signupbetaExpandimg' className="position-fixed">
                <div id='signupbutton1' >
                  <span>Sign Up for BETA TESTING</span>
                  <span id='signupCancel' onClick={this.SignupExpandButtonClick}>X</span>
                </div>
                <div id='signtextcolor'>We are looking for someone like you to test our soft<br />
                  launch, please send us your intimation and we will<br />
                  reach back to you.
                    </div>
                <div id="flagImg">
                  <img src={FlageImage} alt='FlageImage' />
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
                
              </div>

            ) : (<div></div>)}
          </div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={video} type="video/mp4" />
          </video>
          <div className='parent'>
            <div className="child">
              <h2 >Welcome to the World's First</h2>
              <h1 className="heading">Robo Recruiter</h1>
            </div>
          </div>
        </section>
        <br /><br />
        <div className='container'>
          <div className=' row'>
            <div className='col-sm-6' id='sec2col1' >
              <img src={research} alt='research' />
              <p className='sec2col1h' > Eliminate annoying phone tag with candidates</p><br />
              <p className='sec2col1p'>Robo Scheduler will reach out to candidates so that you don't have to!          Experience True hassle free recruitment with Osprey App
                    </p>
              {/* -------first row end---------- */}
              <img src={hoursdelavary} alt='hoursdelavary' />
              <p className='sec2col1h'> 24 X 7 Availability - No Breaks required</p><br />
              <p className='sec2col1p'>Robots don't take breaks! Day or night our  app is working for you engaging   candidates,posting  jobs to your favorite job boards.
                    </p>
              {/* -------second row end---------- */}
              <img src={Hassel} alt='hassel' />
              <p className='sec2col1h'>Hassel Free is the Way to Be</p><br />
              <p className='sec2col1p'>Post once and we'll  do the leg work of getting it to Google jobs,LinkedIn,Glassdoor and the other top job boards.Need background checks?reference checks?Done,Done.This is truly  a one stop shop for all your recruiting needs!
                    </p>
              {/* -------third row end---------- */}
            </div>
            {/* --------------------first colomn end-------------- */}
            <div className='col-sm-6' >
              <span className='computer'><img src={Computer} alt="computer" className='computer' /></span>
            </div>
          </div>
          <br /><br /><br /><br />
          {/* ----------- section2----------          */}

          <div className='row'>
            <div className='col-sm-7'>
              <div className='sec3colh1'>Osprey helps small businesses engage talent <br />
                quickly to get the jump on your competitors.
                     </div>
            </div>
            <div className='col-sm-5' id='googleButton'>
              <span><img src={Googleplay} alt="goolgeplay" /></span>
            </div>
          </div>

          {/* --------------container end---------- */}
          <br /><br />
          {/* ----------- section3- ---------          */}

          <div className='row'>
            <div className='col-sm-7'>
              <div className='sec4colh1' >What the research says?</div>

              <div className='sec4colp1'>
                A 2017 LinkedIn study of American businesses found that job boards and social<br />
                professional networks still make up the top channels for finding quality hires (1)<br />
                with competition for talent also remaining a top concern for companies going into<br />
                the new decade. The American domestic market had 7.4 million available jobs as <br />
                of Q2 2019 yet with only 6 million potential candidates looking for work(2).
                </div>
            </div>
            {/* ----------- section4----------          */}
            <div className='col-sm-5' style={{ marginTop: '9px' }} id='sec5Rightchanel'>
              <div className='sec5colh1'>What are your top channels for quality hires?</div>
              <div id="progressBarInline">
                <div className='row' style={{ marginTop: '5px' }}>
                  <div className='col-sm-10' id='progessbar1'></div>
                  <div className='col-sm-2'>46%</div>
                </div>
                <div id='progessbarH'> Third-party website or online job boards</div>
                <div className='row'>
                  <div className='col-sm-9' id='progessbar2'></div>
                  <div className='col-sm-3'>40%</div>
                </div>
                <div id='progessbarH'>Social professional networks</div>
                <div className='row'>
                  <div className='col-sm-8' id='progessbar3'></div>
                  <div className='col-sm-4'>34%</div>
                </div>
                <div id='progessbarH'> A third-party recruiter/staffing firm</div>
                <div className='row'>
                  <div className='col-sm-7' id='progessbar4'></div>
                  <div className='col-sm-5'>28%</div>
                </div>
                <div id='progessbarH'>Internal hires</div>
              </div>
            </div>
          </div>
          <br /><br />
          {/* ----------- section5----------          */}

          <div id="staffandSmallmix">

            <button type="button" style={style_Enterprise} id="smallEnterprisebutton" onClick={this.isEnterpriseSelect}>Small to Mid Size Enterprise</button>
            <button type="button" style={style_Agencies} id='staffingAgency' onClick={this.isAgenciesSelect}>Staffing Agencies</button>
          </div>
          <br /><br />
          {/* ----------- section6----------          */}
        </div>
        {/* ---------section6 container end-------------- */}

        {/* ------container end----------- */}
        {this.state.isEnterprise ? (
          <div className='container '>
            <div className='row'>
              <div className='col-sm-6' id='buttonmanimg'>
                <img src={manImage} alt="manimage" />
              </div>
              <div className='col-sm-6' id='EnterprisebuttonContent' style={{ textAlign: 'justify' }}>
                <Collapse />
              </div>
              {/* ------------column End---------- */}
            </div>
            {/* --------------row end---------------- */}
          </div>) : (<span></span>)}
        {/* ------------------Small Enterprise End------------ */}
        {this.state.isAgencies ? (
          <div className='container '>
            <div className='row'>
              <div className='col-sm-6' id='buttonmanimg'>
                <img src={manImage2} alt="manimage" />
              </div>
              <div className='col-sm-6' id='EnterprisebuttonContent' style={{ textAlign: 'justify' }}>
                <Collapse />
              </div>
              {/* ------------column End---------- */}
            </div>
            {/* --------------row end---------------- */}
          </div>
        ) : (<span></span>)}
        {/* ---------container end-------------- */}

        {/* ----------- section7----------          */}
        <div className='container ' id="banner1">
          <div id='banner1Content'>
            <div className='sec8colh1'>GET A QUOTE</div>
            <div className='sec8colh2'>Request a call back</div>
            <div className='sec8colh3'>I would like to discuss:</div>
            {/* <div className="selectDropdown">
                <select className="selectBox">
                  <option>Business services consulting</option>
                  <option>Computer services consulting</option>
                  <option>Job services consulting</option>
                  <option>Naukari services consulting</option>
                </select>
              </div> */}
            <div id='PlaceholderName'><input type="text" placeholder="Type Your Business" /></div>
            <div id='PlaceholderName'><input type="text" placeholder="Name" /></div>
            <div >
              <span className='Sec8PlaceholderPhoneNumber'><input type="text" placeholder="Phone number" /></span>
              <span className='Sec8PlaceholderEmailbutton'><input type="text" placeholder="Email" /><br /></span>
            </div>
            <div className='sentTobutton'><button style={{ outline: 'none' }}>SEND TO US</button></div>
          </div>
        </div>
        <br /><br />
        {/* ----------- section8----------          */}
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
                      <div class="input-group mb-3">
                        <input type="text" name="email_address_subscribe" required placeholder="Your Email" value={this.state.email_address_subscribe} onChange={this.onChange} id='Sec9placeholdeEmail'
                                            className="form-control"/>
                        <div class="input-group-append">
                          <input type="submit" id='Sec9SubscribeButton' class="input-group-text" value='SUBSCRIBE' disabled={isEnabled}/>
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

      </div>
    )
  }
}
export default Landing
