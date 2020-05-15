import React, { Component } from 'react'
import { GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { login } from './UserFunctions';
import { Link,Redirect} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Loader from 'react-loader-spinner'
import { NavLink} from 'react-router-dom'
import '../css/LoginRegister.css'

class Login extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email_address: '',
      password: '',
      login_type: '',
      toLogin : false,
      completeRegistration : false,
      incorrect_usr_pwd : false,
      gotohome : false,
      open : true,
      loading: false,
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.signin = this.signin.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.baseState = this.state
    
  }
  handleClose(e) {
    this.setState({ open: false })
    this.setState(() => ({
      gotohome: true,
      incorrect_usr_pwd : false
    }))
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  signin(email_address,type){
 
    const user = {
      email_address: email_address,
      password: '',
      login_type: type
    }
    
    login(user).then(res => {
      if (!res.error) {
        this.setState(() => ({
          toLogin: true,
          toHome: false
        }))         
 
      }
      else{
        sessionStorage.setItem('login_type', user.login_type)
        sessionStorage.setItem('email_address', user.email_address)
        if (user.email_address){
        this.setState({completeRegistration: true})}
      }
    })
  }
  onSubmit(e) {
    this.setState({loading:true})
    e.preventDefault()
    e.target.className += " was-validated";
    const user = {
      email_address: this.state.email_address,
      password: this.state.password,
      login_type: this.state.login_type
    }
    login(user).then(res => {
      this.setState({loading : false})
      if (!res.error) {
        this.setState(() => ({
          toLogin: true
        }))         
      }
      else{
        this.setState({incorrect_usr_pwd : true})
      }
    })

    
  }
  render() {

    if (this.state.loading){
      return(
        <div style={{textAlign:'center',marginTop:100}}>
        <Loader
           type="ThreeDots"
           color="#00BFFF"
           height={100}
           width={100}
           timeout={15000} //3 secs
  
        />
        </div>
       );
    }

    if (this.state.gotohome===true){
      this.setState(this.baseState)
      return <Redirect to='/'/>
    }
    if(this.state.incorrect_usr_pwd){
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
                Incorrect Username or password, please try again.
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
    const responseGoogle = (response) => {
      this.setState({
        login_type : 'google', 
        email_address : response.w3.U3, 
        password : ''
      })
      this.signin(response.w3.U3,'google');
    }
    
    const responseFacebook = (response) => {
      this.setState({
        login_type : 'facebook',
        email_address : response.email,
        password : ''
      })
      this.signin(response.email,'facebook');
    }
    
      if (this.state.toLogin === true) {
        return <Redirect to='/profile' />
      }
      if (this.state.completeRegistration === true) {
        return <Redirect to='/register' />
      }
    return (           
      <div id="image" >
     <MDBContainer >
      
      <MDBRow className="row justify-content-center align-items-center" id='loginAndRegister'>
        <MDBCol md="4">
          <MDBCard style={{ background: "#ffffff" ,opacity:0.7}}>
            <MDBCardBody >   
               
            <div className="text-center pt-8">
            <NavLink to="/login" exact activeStyle={{color:'#5e43aa'}} style={{color:'#404449'}} className="font-weight-bold mr-5" id='activeLoginLink'>
                SIGN IN
          </NavLink>
          <NavLink to="/register" exact activeStyle={{color:'#5e43aa'}} style={{color:'#404449'}} className="font-weight-bold ml-5" id='activeRegisterLink'>
            SIGN UP
          </NavLink>
          <hr/>
            </div>    
            
              <div className="row justify-content-center align-items-center">
              <GoogleLogin
               clientId="674731610928-tprea95avu700u93gakl2a1hmgb78avv.apps.googleusercontent.com"
               buttonText ="Continue with Google"
               className="btnGoogle"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}
               cookiePolicy={'single_host_origin'}
              />
                  </div>
                  <br/>
                <div className="row justify-content-center align-items-center">
                    <FacebookLogin
                    appId="413663425981585"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="btnFacebook "
                    textButton = "  Continue with Facebook" 
                    icon="fa fa-facebook"
                    />
                  </div>
                 <br/>
                  <h6 className="text-center  pt-2">Or</h6>
                
              <form onSubmit={this.onSubmit} id="login-form" action method="post" >
  
                <div className="grey-text" >
                  
                  <MDBInput
                    label="Bussiness Email" 
                    placeholder  
                    icon="envelope "
                    group
                    type="email"
                    name="email_address"
                    className="validate" 
                    size="sm"
                    value={this.state.email_address} 
                    onChange={this.onChange}
                    required
                  />
                  <MDBInput
                    label="Your password" 
                    icon="lock"
                    group
                    type="password"
                    name="password"
                    class="validate" 
                    size="sm"
                    value={this.state.password} 
                    onChange={this.onChange}
                    required
                  />
                  
                </div>
                <div className="text-center ">
                  <MDBBtn color="cyan"  type="submit">
                    SUBMIT
                  </MDBBtn>
                </div>
            
              </form>
              <div id="register-link" className="text-center">
              <a href="!#" className="text-info"><Link to='/forgotpassword'>Forget password</Link></a>
              </div>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    <br/>
     </MDBContainer> 
</div>
    )
  }
}

export default Login
