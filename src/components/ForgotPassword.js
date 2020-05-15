import React, { Component } from 'react'
import { forgotpassword } from './UserFunctions'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Loader from 'react-loader-spinner'
import '../css/LoginRegister.css'
import { Redirect } from 'react-router-dom'

class ForgotPassword extends Component {
  constructor() {
    super()
    this.state = {
      email_address: '',
      email_sent: false,
      open: true,
      toHome: false,
      loading : false,
      errors: {
        email_address: '',
      }
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClickOpen(e) {
    this.setState.open = true
  }

  handleClose(e) {
    this.setState({ open: false })
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
      case 'email_address': 
        errors.email_address = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      default:
        break;
    }
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    e.target.className += " was-validated";
    this.setState({loading : true})
    const user = {
      email_address: this.state.email_address
    }
    forgotpassword(user).then(res => {
      this.setState({loading : false})
      if (!res.error) {
        this.setState(() => ({
          email_sent: true
        }))
      }

    })

  }

  render() {
    const isEnabled = this.state.errors.email_address.length > 0 ;
                      
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
            <DialogTitle id="alert-dialog-title">{"Email password reset link sent"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please check your email to proceed further on resetting the password
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
<div id="image">
      <MDBContainer style={{marginTop:90}}>
        <br /><br/>
        <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
          <MDBCol  md="4">
            <MDBCard style={{ background: "#FCFCFC", opacity: 0.7 }}>
              <MDBCardBody >
                <br/>
                <form  onSubmit={this.onSubmit}>

                  <div className="grey-text">
                    <MDBInput
                      label="Email Address" placeholder required
                      icon="envelope "
                      group
                      type="email"
                      name="email_address"
                      value={this.state.email_address}
                      onChange={this.onChange}       
                    />
                  </div>
                  <div style={{marginLeft:'40px',fontWeight:'600',marginTop:'-15px'}}>
                    {   this.state.errors.email_address.length > 0 && 
                        <div id = 'error' >{this.state.errors.email_address}</div>
                    }
                  </div>  
                  <div className="text-center " style={{marginTop:'10px'}}>
                    <MDBBtn color="cyan" type="submit" disabled={isEnabled}>
                      SUBMIT
                  </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
      </MDBContainer>
      </div>
    )
  }
}

export default ForgotPassword