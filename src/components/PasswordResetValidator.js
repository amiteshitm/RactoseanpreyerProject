import React, { Component } from 'react'
import { validatePasswordResetToken, sendPasswordResetData } from './UserFunctions'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class PasswordResetValidator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '', 
      passwordreset: false, 
      redirectHome:false,
      redirectForgetPassword:false,
      open : true,
      token: '',
      isValidated: false,
      tokenInvalid : false
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleCloseExpireToken = this.handleCloseExpireToken.bind(this)
  }

  handleClickOpen(e) {
    this.setState.open = true
  }

  handleClose(e) {
    this.setState ({open : false,passwordreset : false, redirectHome : true})
  }

  handleCloseExpireToken(e) {
    this.setState ({open : false, passwordreset: false, redirectForgotPassword : true})
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  async componentDidMount() {
    
    const { match = {} } = this.props;
    console.log(match.params.token)

    validatePasswordResetToken(match.params.token).then(res => {
      if (!res.error) {
        this.setState({ isValidated: true })
      } 
      else{
        this.setState({ tokenInvalid: true })
      }
    })
  }
  // handleClose(e) {
  //   this.setState({ open: false })
  //   this.setState(() => ({
  //     toHome: true
  //   }))
  // }
  onSubmit (e) {
    e.preventDefault()
    const { match = {} } = this.props;
    const { password, confirm_password } = this.state;
    // perform all neccassary validations
    if (password !== confirm_password) {
        alert("Passwords don't match");
    } 
    else {
    

    const passwordUpdate = {
      token : match.params.token,
      password : this.state.password,
      //confrim_password: this.state.confrim_password
      
    }
    console.log(passwordUpdate)
    //sendPasswordResetData({password, passwordReset, token})
    sendPasswordResetData(passwordUpdate).then(res => {
      if (!res.error) {
        
        this.setState(() => ({
          passwordreset: true
        }))        
      }
      else{
        this.setState(() => ({
          redirectForgetPassword: true
        }))
      }
      
    })
  }

  }

  render() {

    if (this.state.redirectForgotPassword){
      return <Redirect to="/forgotpassword" />
    }

    if (this.state.toHome){
      return <Redirect to="/" />
    }
    if (this.state.tokenInvalid){
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
                Token is expired, Please reset the password again.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseExpireToken} color="primary" >
                OK
                </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    if (this.state.passwordreset === true){
      return (<div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">     
              Password has been reset, Please sign in again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>);
    }

    if (this.state.redirectHome === true) {
      return <Redirect to='/' />
    }

    if (this.state.redirectForgetPassword === true) {
      return <Redirect to='/forgotpassword' />
    }

    if (this.state.isValidated){
    return (
      <div id="image">
<MDBContainer  style={{marginTop:90}}  >
<br/>
      <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
        <MDBCol md="4">
          <MDBCard style={{ background: "#FCFCFC" ,opacity:0.7}}>
            <MDBCardBody >
              <form noValidate onSubmit={this.onSubmit}>
                <div className="grey-text">
                  <MDBInput
                    label="Enter password" required
                    icon="lock"
                    group
                    type="password"
                    name="password"
                    className="validate" 
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                   <MDBInput
                    label="Confirm Password" required
                    icon="lock"
                    group
                    type="password"
                    name="confirm_password"
                    className="validate" 
                     value={this.state.confirm_password}
                     onChange={this.onChange}
                  />
                </div>
                <div className="text-center ">
                  <MDBBtn color="cyan" type="submit">
                    SUBMIT
                  </MDBBtn>
                </div>
            
              </form>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
     </MDBContainer> 
     </div>
    )
  }
     return (<div className="text-center"><br/><br/>Token is being validated, Please wait.</div>)
}
}
export default PasswordResetValidator