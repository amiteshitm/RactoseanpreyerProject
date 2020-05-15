import React, { Component,lazy,Suspense } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Profile from './components/Profile'
import ForgotPassword from './components/ForgotPassword'
import PasswordResetValidator from './components/PasswordResetValidator'
import Contactus from './components/Contactus'
// --------------------------profileComponent-------------------------
// import Profiles from './components/Profilecomponent/Profiles'
// import Tables from './components/Profilecomponent/Tables'
// import Map from './components/Profilecomponent/Map'
import Candidate from './components/Profilecomponent/Candidature/Candidate'
import Setting from './components/Profilecomponent/Setting'
import Myaccount from './components/Profilecomponent/Myaccount'
import Contact from './components/Profilecomponent/Contact'
// --------------------------profileComponent(Inbox section)-------------------------
import Inbox from './components/Profilecomponent/Inbox'
import Alerts from './components/Profilecomponent/Alerts'
import Messages from './components/Profilecomponent/Messages'
import Calendar from './components/Profilecomponent/Calendar'
// --------------------------profileComponent(Jobscampaign section)-------------------------
import Jobscampaign from './components/Profilecomponent/JobCampaign/Jobscampaign'
import Jobsarchived from './components/Profilecomponent/JobCampaign/Jobsarchived'
import Jobdashboard from './components/Profilecomponent/JobCampaign/Jobdashboard'
import Templates from './components/Profilecomponent/JobCampaign/Templates'
import Tracker from './components/Profilecomponent/Candidature/Tracker'
import Candidature from './components/Profilecomponent//Candidature/Candidature'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Customers from './components/Customers'
import Aboutus from './components/Aboutus'
import Contactform from './components/Contactform'
// import Navbar from './components/Navbar'
import Loader from 'react-loader-spinner'
const Navbar = lazy(()=>import('./components/Navbar') )

class App extends Component {
  render() {
    return (  
      <Router>
        <div>
          <Suspense fallback={<div style={{ textAlign: 'center'}}>
          <br /><br /><br /><br /><br /><br />
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={35000} //3 secs
          />
          <br />
        </div>}>
          <Navbar />
            </Suspense>
             {/* <Route exact path="/" component={Login} /> */}
             <Route exact path="/" component={Landing} />
             <Route exact path="/features" component={Features} />
             <Route exact path="/contactform" component={Contactform} />
             <Route exact path="/pricing" component={Pricing} />
             <Route exact path="/customers" component={Customers} />
             <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route path="/password_reset/:token" component={PasswordResetValidator}/>
            <Route exact path="/contact" component={Contactus} />
{/* --------------------profile section-------------------------------            */}
            <Route exact path="/profile/jobscampaign" component={Jobscampaign} />
            <Route exact path="/profile/candidate" component={Candidate} />
            <Route exact path="/profile/inbox" component={Inbox} />
            <Route exact path="/profile/myaccount" component={Myaccount} />
            <Route exact path="/profile/setting" component={Setting} />
            <Route exact path="/profile/contact" component={Contact} />
{/* ------------------------------profile section(jobscampaign section)------------------------------ */}
<Route exact path="/profile/jobscampaign/jobdashboard" component={Jobdashboard} />
<Route exact path="/profile/jobscampaign/jobsarchived" component={Jobsarchived} />
<Route exact path="/profile/jobscampaign/templates" component={Templates} />
{/* ------------------------------profile section(candidate section)------------------------------ */}
<Route exact path="/profile/candidate/tracker" component={Tracker} />
<Route exact path="/profile/candidate/candidature" component={Candidature} />
{/* ------------------------------profile section(inbox section)------------------------------ */}
            <Route exact path="/profile/inbox/alerts" component={Alerts} /> 
            <Route exact path="/profile/inbox/messages" component={Messages} /> 
            <Route exact path="/profile/inbox/calendar" component={Calendar} /> 
  {/* ------------------------------Jobs Campaigns section--------------------------- */}
  {/* <Route exact path="/profile/dashboard/inbox/alerts" component={Alerts} /> 
            <Route exact path="/profile/inbox/messages" component={Messages} /> 
            <Route exact path="/profile/inbox/calendar" component={Calendar} />  */}
        </div>

      
      </Router>
      

    )
  }
}

export default App
