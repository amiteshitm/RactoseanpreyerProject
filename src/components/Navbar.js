import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Logo from '../image/osprey_logo_web.png'
import avatar from '../image/img_avatar.png'
import '../css/Navbar.css'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBNavbarToggler, MDBCollapse} from "mdbreact";


// import {Redirect } from 'react-router-dom'
// import newLogo from '../image/osprey_logo.png'
// import {Link} from 'react-router-dom'
class Navbar extends Component {
  state = {
    login: false,
    toggleButton:false,
    isOpen: false ,
    ishome:true,
    isfeatures:false,
    iscontact:false,
    islogin:false,
  }
  ishomeSelect=()=>{  
         this.setState({
         ishome: true,
         isfeatures: false,
         iscontact:false,
         islogin:false,
         isOpen:false,
         })
  }
  isfeaturesSelect=()=>{ 
         this.setState({
         ishome: false,
         isfeatures:true,
         iscontact:false,
         islogin:false,
         isOpen:false
         })
      }
      iscontactSelect=()=>{ 
        this.setState({
        ishome: false,
        isfeatures:false,
        iscontact:true,
        islogin:false,
        isOpen:false
        })
     }
     isloginSelect=()=>{ 
      this.setState({
      ishome: false,
      isfeatures:false,
      iscontact:false,
      islogin:true,
      isOpen:false
      })
   }
  toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
  }

  logOut(e) {
    e.preventDefault()
    localStorage.clear();
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {

    if (localStorage.usertoken) {

      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-green fixed-top" id="profileNavbar">
            <img src={Logo} alt="osprey logo" style={{ height: '55px' }} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav" >
                <li ><button type="button" id="postjob" className="btn mr-3" >Post Job</button></li>
                <li className="nav-item mr-3"><input className="form-control mr-lg-5 navs" id="search" type="text" placeholder="Search" /> </li>
                <li className="nav-item"><a href="!#"><img alt="" src={avatar} className="rounded-circle" /> </a></li>
                <li className="nav-item dropdown"  >
                  <a href="!#" className="nav-link dropdown-toggle" style={{ color: 'white' }} data-toggle="dropdown" >     Hello Amitesh
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ marginLeft: -70, textAlign: 'center', width: 220 }}>
                    <img alt="" src={avatar} className="rounded-circle" />
                    <div className="gb_ob gb_pb" >Amitesh Gupta</div>
                    <div className="gb_qb">amiteshitm2011@gmail.com</div>
                    <button ><a href="!#" onClick={this.logOut.bind(this)} className="gb_Fb gb_5f gb_dg gb_Ne gb_Vc" target="_top">Sign Out</a></button>
                  </div>
                </li>
                <li className="nav-item"><a href="!#"><div className="bellIcon" ><i className="fas fa-bell"> <span id="badge">20</span></i></div></a></li>
                <li className="nav-item"><a href="!#"><div className="questioIcon" ><i className="fas fa-question-circle"></i></div></a></li>
              </ul>
            </div>
          </nav>
        </div>
      )
    }
    else {
      return (
        <div >
          {/* <nav className="navbar navbar-expand-lg navbar-dark "  id='newNavbar' >
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" onClick={this.toggleCollapse}data-target="#navbarSupportedContent"      aria-controls="navbarSupportedContent"    isOpen={this.state.isOpen}     aria-expanded="false" aria-label="Toggle navigation">
              <span  class="navbar-toggler-icon"></span>
            </button>
            <img src={Logo} alt="osprey logo" id="ospreyLooimg"/>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
              <div class="navbar-nav ml-auto topnav" id='rightNavContent'  >
                <NavLink to="/" exact className="font-weight-bold ml-5" id='homeNavbar' >
                        Home
                </NavLink>
                <NavLink to="/features" exact className="font-weight-bold ml-5" id='FeaturesNavbar'>
                        Features
                </NavLink>
                <NavLink to="/contactform" exact className="font-weight-bold ml-5" id='ContactusNavbar' >
                      Contact Us
                </NavLink>
                <NavLink to="/login" exact className="font-weight-bold ml-5 mr-4" id='ContactusNavbar' >
                  Sign in
                </NavLink>
               
              </div>
              
            </div>
            
          </nav> */}
          
 <MDBNavbar  className="navbar navbar-expand-lg navbar-dark "  id='newNavbar' >
        <MDBNavbarBrand>
        <img src={Logo} alt="osprey logo" id="ospreyLooimg"/> 
        </MDBNavbarBrand>
        <MDBNavbarToggler  onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        
           <MDBNavbarNav right >
           <div class="navbar-nav ml-auto topnav" id='rightNavContent'  >
                    <NavLink to="/" exact className="font-weight-bold ml-5" id='homeNavbar' onClick={this.ishomeSelect} >
                        Home
                   </NavLink>
                    <NavLink to="/features" exact className="font-weight-bold ml-5" id='FeaturesNavbar' onClick=                {this.isfeaturesSelect}>
                      Features
                    </NavLink>
                    <NavLink to="/contactform" exact className="font-weight-bold ml-5" id='ContactusNavbar' onClick=              {this.iscontactSelect}>
                      Contact Us
                </NavLink>
                <NavLink to="/login" exact className="font-weight-bold ml-5 mr-4" id='ContactusNavbar' onClick=                   {this.isloginSelect}>
                  Sign in
                </NavLink>
                </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
        </div>
        // ------------------------------------
        // <div className='container-fluid' >
        //     <div className="row  newNavbar" style={{height:'75px'}}>
        //         <div className="col-sm-6">
        //           <img src={Logo} alt="osprey logo" style={{zIndex:2,width:'200px',marginLeft:'15px',marginTop:'15px'}}/>
        //         </div>
        //         <div className="col-sm-6">
        //           <nav className="navbar navbar-inverse "  
        //                 style={{ height: '40px', borderRadius: '50px', 
        //                 background: 'white', width: '400px', color: '#5e43aa',
        //                 float:'right' ,zIndex:2,marginTop:'17px'}}>
        //                 <NavLink to="/"  exact  className="font-weight-bold ml-3" id='homeNavbar' style={{color:'#5e43aa'}}>
        //                     Home
        //                 </NavLink>
        //                 <NavLink to="/features"  exact  className="font-weight-bold ml-3" id='FeaturesNavbar' style={{color:'#5e43aa'}}>
        //                     Features
        //                 </NavLink>
        //                 <NavLink to="/contactform"  exact  className="font-weight-bold ml-3" id='ContactusNavbar' style={{color:'#5e43aa'}}>
        //                   Contact Us
        //                 </NavLink>
        //                 <NavLink to="/login"  exact  className="font-weight-bold ml-3" id='ContactusNavbar' style={{color:'#5e43aa'}}>
        //                   Sign in
        //                 </NavLink>
        //             </nav> 
        //         </div>
        //     </div>
            
        //     </div>
      )
    }
  }
}

export default withRouter(Navbar)

