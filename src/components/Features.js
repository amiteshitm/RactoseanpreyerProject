import React, { Component } from 'react'
import '../css/Features.css'
import Computer from '../image/comMob.png'
import  Hassel from '../image/hasselimg.png'
import Googleplay from '../image/googleplay.png'
import research from '../image/research.png'
import hoursdelavary from '../image/24hoursdelivery.png'
import roboScheduler from '../image/roboshedulee.PNG'
import roboInterviewer from '../image/roboInterviewer.PNG'
import translationEngine from '../image/translationEngine.PNG'
import Collaboration from '../image/Collaboration.PNG'
import Hiring from '../image/Hiring.PNG'
import Reporting from '../image/Reporting.PNG'
import Support from '../image/Support.PNG'
import INTEGRATIONS from '../image/INTEGRATIONS.PNG'
import ProgressiveRobot from '../image/progressive.png'
import FlageImage from '../image/flag2.png'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Loader from 'react-loader-spinner'
import { Redirect } from 'react-router-dom'
import { subscribe_to_newsletter } from './UserFunctions';
import { signup_for_beta_test } from './UserFunctions';
export default class Features extends Component {
  state = {
    SignupNormalButton: true,
    SignupExpandButton: false,
    roboScheduler: true,
    roboSchedulerExtend: false,
    roboInterviewer: true,
    roboInterviewerextendCard: false,
    translationEngine: true,
    translationEngineExtendCard: false,
    hiringCard: true,
    hiringExtendCard: false,
    collaborationCard: true,
    collaborationExtendCard: false,
    reportingCard: true,
    reportingExtendCard: false,
    integrationsCard: true,
    integrationsExtendCard: false,
    supportCard: true,
    supportExtendCard: false, 
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

  handleClose = (e) => {
    this.setState({ open: false })
    this.setState({ open_beta_test: false })
    this.setState(() => ({
      toHome: true
    }))
  }
  supportCardOpen = () => {
    this.setState({
      supportCard: false,
      supportExtendCard: true
    })
  }
  supportExtendCardClose = () => {
    this.setState({
      supportCard: true,
      supportExtendCard: false
    })
  }
  integrationsCardOpen = () => {
    this.setState({
      integrationsCard: false,
      integrationsExtendCard: true
    })
  }
  integrationsExtendCardClose = () => {
    this.setState({
      integrationsCard: true,
      integrationsExtendCard: false
    })
  }
  reportingCardOpen = () => {
    this.setState({
      reportingCard: false,
      reportingExtendCard: true
    })
  }
  reportingExtendCardClose = () => {
    this.setState({
      reportingCard: true,
      reportingExtendCard: false
    })
  }
  collaborationCardOpen = () => {
    this.setState({
      collaborationCard: false,
      collaborationExtendCard: true
    })
  }
  collaborationExtendCardClose = () => {
    this.setState({
      collaborationCard: true,
      collaborationExtendCard: false
    })
  }
  hiringCardOpen = () => {
    this.setState({
      hiringCard: false,
      hiringExtendCard: true
    })
  }
  hiringExtendCardClose = () => {
    this.setState({
      hiringCard: true,
      hiringExtendCard: false
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
  roboSchedulerOpen = () => {
    this.setState({
      roboScheduler: false,
      roboSchedulerExtend: true
    })
  }
  roboSchedulerExtendClose = () => {
    this.setState({
      roboScheduler: true,
      roboSchedulerExtend: false
    })
  }
  roboInterviewerOpen = () => {
    this.setState({
      roboInterviewer: false,
      roboInterviewerextendCard: true,
    })
  }
  roboInterviewerExtendClose = () => {
    this.setState({
      roboInterviewer: true,
      roboInterviewerextendCard: false
    })
  }
  translationEngineOpen = () => {
    this.setState({
      translationEngine: false,
      translationEngineExtendCard: true,
    })
  }
  translationEngineExtendCardClose = () => {
    this.setState({
      translationEngine: true,
      translationEngineExtendCard: false
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
    return (
      <div>
        <section id="rectangleBannerFeatures">
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
                  <img src={FlageImage} alt='FlageImage'/>
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
        </section>
        <br /><br />
        {/* -----------Banner End------------    */}
        <div className='container'>
        <div className=' row'>
              <div className='col-sm-6' id='sec2col1' >
                  <img src={research} alt='research' />
                    <p className= 'sec2col1h' > Eliminate annoying phone tag with candidates</p><br/>
                    <p className= 'sec2col1p'>Robo Scheduler will reach out to candidates so that you don't have to!          Experience True hassle free recruitment with Osprey App
                    </p>  
                 {/* -------first row end---------- */}
                <img src={hoursdelavary} alt='hoursdelavary'/>
                    <p className= 'sec2col1h'> 24 X 7 Availability - No Breaks required</p><br/>
                    <p className= 'sec2col1p'>Robots don't take breaks! Day or night our  app is working for you engaging   candidates,posting  jobs to your favorite job boards.
                    </p>
                       {/* -------second row end---------- */}
                    <img src={Hassel} alt='hassel' />
                    <p className= 'sec2col1h'>Hassel Free is the Way to Be</p><br/>
                    <p className= 'sec2col1p'>Post once and we'll  do the leg work of getting it to Google jobs,LinkedIn,Glassdoor and the other top job boards.Need background checks?reference checks?Done,Done.This is truly  a one stop shop for all your recruiting needs!
                    </p>
                       {/* -------third row end---------- */}
               </div>
              {/* --------------------first colomn end-------------- */}
              <div className='col-sm-6' >
                 <span className='computer'><img src={Computer} alt="computer" className='computer'/></span>
            </div>   
           </div>
          <br /><br /><br /><br />
          {/* ----------- section2----------          */}
          <div className='row'>
            <div className='col-sm-7'>
            </div>
            <div className='col-sm-5' id='googleButtonFeature'>
              <span><img src={Googleplay} alt="goolgeplay" /></span>
            </div>
          </div><br /><br /><br />

          {/* ----------- section3----------          */}
          <div  id='allCardMarginLeft'>
            <div className='row'  id='allCardHeight'>
              <div className='col-sm-4' >
                {this.state.roboScheduler ? (<div onClick={this.roboSchedulerOpen} style={{ cursor: 'pointer' }}>
                  <img src={roboScheduler} alt='roboScheduler' />
                  <div id='allCardHeading'>ROBO SCHEDULER</div>
                  <div >
                    <p  id="allCardParagraph">
                      Automated outreach to job candidates over<br />
                      Email or SMS <br />Smart Integration with employer iCal, Google<br />
                      </p>
                    <div  id='readmoreCard'>+Read More</div>
                  </div>
                </div>) : (<div></div>)}

                {/* -------------------- */}
                {this.state.roboSchedulerExtend ? (
                  <div id='extandCard'>
                    <img src={roboScheduler} alt='roboScheduler' />
                    <div  id='allExtendCardHeading'>ROBO SCHEDULER</div>
                    <div >
                    <p  id ='allExtendParagraph' >
                        Automated outreach to job candidates over<br />
                        Email or SMS <br />Smart Integration with employer iCal, Google<br/>
                    </p>
                    <p className="collapse allExtendCollapseParagraph" id="block-id1">
                          Calendar, Android Calendar
                          Reminders & Follow Up Alerts
                    </p>
                        <a href="#block-id1"  data-toggle="collapse" aria-expanded="false"
                           aria-controls="block-id1">
                            <span className="collapsed"  id ='allextendCardReadmore' >+Read More</span>
                            <span className="expanded" id ='allextendCardReadmore' >-Read Less</span>
                        </a>
                      <div  id ='allExtendCardCloss'  onClick={this.roboSchedulerExtendClose}>X</div>
                    </div>
                  </div>
                ) : (<div></div>)}

                {/* ---------robosheduler Extend card End----------- */}
              </div>
              {/* ------row1 first card end---------- */}
              <div className='col-sm-4'>
                {this.state.roboInterviewer ? (<div onClick={this.roboInterviewerOpen} style={{ cursor: 'pointer' }}>
                  <img src={roboInterviewer} alt="roboInterviewer" />
                  <div id='allCardHeading'>ROBO INTERVIEWER</div>
                  <div >
                    <p id="allCardParagraph" >
                      Define questions and prompts for <br />
                      interviews<br />
                      Conduct automated interviews over 
                      </p>
                      <div id='readmoreCard'>+Read More</div>
                  </div>
                </div>) : (<div></div>)}

                {/* ----------row1 Second Extend card ---------- */}
                {this.state.roboInterviewerextendCard ? (
                  <div id='extandCard'>
                    <img src={roboInterviewer} alt="roboInterviewer" />
                    <div id='allExtendCardHeading'>ROBO INTERVIEWER</div>
                    <div>
                      <p id ='allExtendParagraph'>
                          Define questions and prompts for<br /> interviews<br />
                          Conduct automated interviews over 
                      </p>
                      <p className="collapse allExtendCollapseParagraph" id="block-id2">
                          desktop or phone<br />
                          Response playback wizard<br />
                          Interview Scoring<br />
                      </p>
                      <a href="#block-id2"  data-toggle="collapse" aria-expanded="false"
                           aria-controls="block-id2">
                            <span className="collapsed"  id ='allextendCardReadmore'>+Read More</span>
                            <span className="expanded" id ='allextendCardReadmore'>-Read Less</span>
                        </a>
                      <div id ='allExtendCardCloss' onClick={this.roboInterviewerExtendClose}>X</div>
                    </div>
                  </div>
                ) : (<div></div>)}
              </div>
              {/* ------second card end---------- */}
              <div className='col-sm-4'>
                {this.state.translationEngine ? (
                  <div onClick={this.translationEngineOpen} style={{ cursor: 'pointer' }}>
                    <img src={translationEngine} alt="translationEngine" />
                    <div  id="allCardHeading">TRANSLATION ENGINE</div>
                    <div>
                      <p id="allCardParagraph">
                        Conduct Interviews in foreign language<br />
                        Job Posting Translation 
                      </p>
                      <div id='readmoreCard'>+Read More</div>
                    </div>
                  </div>
                ) : (<div></div>)}
                {/* -------------------------------------          */}
                {this.state.translationEngineExtendCard ? (
                  <div id='extandCard'>
                    <img src={translationEngine} alt="translationEngine" />
                    <div id='allExtendCardHeading'>TRANSLATION ENGINE</div>
                    <div >
                    <p id ='allExtendParagraph'>
                              Conduct Interviews in foreign language <br/>Job Posting Translation<br />
                      </p>
                      <p className="collapse allExtendCollapseParagraph" id="block-id3">
                            Job Posting Translation
                      </p>
                          <a href="#block-id3"  data-toggle="collapse" aria-expanded="false"
                              aria-controls="block-id3">
                              <span className="collapsed"  id ='allextendCardReadmore'>+Read More</span>
                              <span className="expanded"  id ='allextendCardReadmore'>-Read Less</span>
                        </a>
                      <div id ='allExtendCardCloss' onClick={this.translationEngineExtendCardClose}>X
                      </div>
                    </div>
                  </div>
                ) : (<div></div>)}

                {/* ---------third Extend Card End------- */}
              </div>
              {/* ------Third card end---------- */}
            </div>
            {/* --------first Row End-------- */}

            <div className='row' id='allCardHeight'>
              <div className='col-sm-4'>
                {this.state.hiringCard ? (
                  <div onClick={this.hiringCardOpen} style={{ cursor: 'pointer' }}>
                    <img src={Hiring} alt='Hiring' />
                    <div id='allCardHeading'>HIRING</div>
                    <div>
                      <p id="allCardParagraph">
                        One place to post job<br />
                        One place to track applicants<br />
                        Hiring & Interviewing Workflow<br />
                        Resume Archival
                      </p>
                      <div id='readmoreCard'>+Read More</div>
                    </div>
                  </div>
                ) : (<div></div>)}

                {/* ----------------------------------------- */}
                {this.state.hiringExtendCard ? (
                  <div id='extandCard'>
                    <img src={Hiring} alt='Hiring' />
                    <div id='allExtendCardHeading'>HIRING</div>
                    <div id="summaryExtand">
                      <p id ='allExtendParagraph'>
                        One place to post job<br />
                        One place to track applicants<br />
                        Hiring & Interviewing Workflow<br />
                        Resume Archival
                        </p>
                        <p className='collapse allExtendCollapseParagraph' id='block-id4'>
                            Hosted employer page on OspreyApp.com
                            Anonymized outreach to Candidates over Email or SMS
                        </p>
                        <a href="#block-id4"  data-toggle="collapse" aria-expanded="false"
                           aria-controls="block-id4">
                            <span className="collapsed"  id ='allextendCardReadmore'>+Read More</span>
                            <span className="expanded"  id ='allextendCardReadmore'>-Read Less</span>
                        </a>
                      <div id ='allExtendCardCloss' onClick={this.hiringExtendCardClose}>X
                      </div>
                    </div>
                  </div>
                ) : (<div></div>)}

                {/* --------Extend Card End------------ */}
              </div>
              {/* ------first card end---------- */}
              <div className='col-sm-4'>
                {this.state.collaborationCard ? (
                  <div onClick={this.collaborationCardOpen} style={{ cursor: 'pointer' }}>
                    <img src={Collaboration} alt="Collaboration" />
                    <div id='allCardHeading'>COLLABORATION</div>
                    <div >
                      <p id="allCardParagraph">
                        Custom permissions for managers<br />
                        Multi user / team access  <br />
                        Multi location / multi company adaptability<br />
                        for job posts
                      </p>
                        <div id='readmoreCard'>+Read More</div>
                    </div>
                  </div>) : (<div></div>)}
                {/* ---------------------------  */}
                {this.state.collaborationExtendCard ? (
                  <div id='extandCard'>
                    <img src={Collaboration} alt="Collaboration" />
                    <div id='allExtendCardHeading'>COLLABORATION</div>
                    <div id="summaryExtand">
                      <p id ='allExtendParagraph'>
                        Custom permissions for managers<br />
                        Multi user / team access  <br />
                        Multi location / multi company adaptability<br />
                      </p>
                      <p className="collapse allExtendCollapseParagraph" id='block-id5'>
                          for job posts
                      </p>
                               <a href="#block-id5"  data-toggle="collapse" aria-expanded="false"
                                  aria-controls="block-id5">
                                  <span className="collapsed"  id ='allextendCardReadmore'>+Read More</span>
                                  <span className="expanded"  id ='allextendCardReadmore'>-Read Less</span>
                               </a>
                      <div id ='allExtendCardCloss' onClick={this.collaborationExtendCardClose}>X
                      </div>
                    </div>
                  </div>) : (<div></div>)}

                {/* ------Extend Card End------------- */}
              </div>
              {/* ------second card end---------- */}
              <div className='col-sm-4'>
                {this.state.reportingCard ? (
                  <div onClick={this.reportingCardOpen} style={{ cursor: 'pointer' }}>
                    <img src={Reporting} alt="Reporting" />
                    <div id='allCardHeading'>REPORTING</div>
                    <div >
                      <p id="allCardParagraph" >
                        Job Campaign Dashboard<br />
                        Performance Reporting<br />
                        Candidate Status Reporting
                      </p>
                      <div id='readmoreCard'>+Read More</div>
                    </div>
                  </div>) : (<div></div>)}
                {/* ---------------------------------- */}
                {this.state.reportingExtendCard ? (
                  <div id='extandCard'>
                    <img src={Reporting} alt="Reporting" />
                    <div id='allExtendCardHeading'>REPORTING</div>
                    <div >
                      <p id ='allExtendParagraph'>
                            Job Campaign Dashboard<br />
                            Performance Reporting<br />
                      </p>
                      <p  className='collapse allExtendCollapseParagraph' id='block-id6'>
                                  Candidate Status Reporting
                      </p>
                                <a href="#block-id6"  data-toggle="collapse" aria-expanded="false"
                                  aria-controls="block-id6">
                                  <span className="collapsed"  id ='allextendCardReadmore'>+Read More</span>
                                  <span className="expanded"  id ='allextendCardReadmore'>-Read Less</span>
                               </a>
                      <div id ='allExtendCardCloss' onClick={this.reportingExtendCardClose}>X
                      </div>
                    </div>
                  </div>) : (<div></div>)}
                {/* -------Extend card End------------- */}
              </div>
            </div>
            {/* -----Second row end----- */}
            <div className='row' id='allCardHeight'>
              <div className='col-sm-4'>
                {this.state.integrationsCard ? (
                  <div onClick={this.integrationsCardOpen} style={{ cursor: 'pointer' }}>
                    <img src={INTEGRATIONS} alt='INTEGRATIONS' />
                    <div id='allCardHeading'>INTEGRATIONS</div>
                    <div id="summary">
                      <p id="allCardParagraph" >
                        Integrations with top jobsites (Google,<br /> Craigslist, Linkedin)<br />
                        API access
                      </p>
                        <div id='readmoreCard'>+Read More</div>
                    </div>
                  </div>) : (<div></div>)}
                {/* ------------------------------ */}
                {this.state.integrationsExtendCard ? (
                  <div id='extandCard'>
                    <img src={INTEGRATIONS} alt='INTEGRATIONS' />
                    <div id='allExtendCardHeading'>INTEGRATIONS</div>
                    <div >
                      <p id ='allExtendParagraph'>
                          Integrations with top jobsites (Google,<br /> Craigslist, Linkedin)<br />
                      </p>
                      <p className="collapse allExtendCollapseParagraph"  id='block-id7'>
                          API access
                      </p>
                                <a href="#block-id7"  data-toggle="collapse" aria-expanded="false"
                                    aria-controls="block-id7">
                                    <span className="collapsed"  id ='allextendCardReadmore'>+Read More</span>
                                    <span className="expanded"  id ='allextendCardReadmore'>-Read Less</span>
                                </a>
                      <div id ='allExtendCardCloss' onClick={this.integrationsExtendCardClose}>X
                      </div>
                    </div>
                  </div>) : (<div></div>)}
                {/* ----------Extend card End------------- */}
              </div>
              {/* ------first card end---------- */}
              <div className='col-sm-4' >
                {this.state.supportCard ? (
                  <div onClick={this.supportCardOpen} style={{ cursor: 'pointer' }}>
                    <img src={Support} alt="Support" />
                    <div id='allCardHeading'>SUPPORT</div>
                    <div>
                      <p id="allCardParagraph">
                        US-based support<br />
                        Dedicated account manager
                      </p>
                      <div id='readmoreCard'>+Read More</div>
                    </div>
                  </div >) : (<div></div>)}
                {/* --------------------------------- */}
                {this.state.supportExtendCard ? (
                  <div id='extandCard'>
                    <img src={Support} alt="Support" />
                    <div id='allExtendCardHeading'>SUPPORT</div>
                    <div >
                      <p id ='allExtendParagraph' >
                        US-based support<br />
                        Dedicated account manager
                      </p>
                      <p className="collapse allExtendCollapseParagraph" id='block-id8'>
                      </p>
                      <a href="#block-id8"  data-toggle="collapse" aria-expanded="false"
                                    aria-controls="block-id8">
                                    <span className="collapsed"  id ='allextendCardReadmore'>+Read More</span>
                                    <span className="expanded"  id ='allextendCardReadmore'>-Read Less</span>
                      </a>
                      <div id ='allExtendCardCloss' onClick={this.supportExtendCardClose}>X
                      </div>
                    </div>
                  </div>) : (<div></div>)}
                {/* ---------------Extend card end------------ */}
              </div>
              {/* ------second card end---------- */}
            </div>
            {/* ------third row end------------ */}
          </div >
        </div>
        <hr style={{ background: 'white' }} />
        {/* -----------Footer1 (section4)----------          */}
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
