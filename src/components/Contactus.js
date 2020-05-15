import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBCardBody,MDBCard } from 'mdbreact';
import { contactus } from './UserFunctions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Loader from 'react-loader-spinner'
import { Redirect } from 'react-router-dom'

class Contactus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email_address: '',
      customer_name: '',
      subject : '',
      open : true,
      loading: false,
      email_sent : false,
      toHome : false,
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)

  }
  handleClose(e) {
    this.setState({ open: false })
    this.setState(() => ({
      toHome: true
    }))
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    e.target.className += " was-validated";
    this.setState({loading : true})
    const details = {
      email_address: this.state.email_address,
      customer_name : this.state.customer_name,
      subject : this.state.subject,
      phone_number : this.state.phone_number,
      message : this.state.message
      
    }
    contactus(details).then(res => {
      this.setState({loading : false})
      if(!res.error){
        this.setState({email_sent: true})
      }
    })
  }
  render() {

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
            
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thank you for contacting Osprey. We have received your details. We will revert shortly.
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
        <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
        <MDBCol md="4">
        <MDBCard style={{ background: "#ffffff" ,opacity:0.7}}>
            <MDBCardBody >
          <form  onSubmit={this.onSubmit} id="login-form" action method="post">
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
              <MDBInput
                label="Customer Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="customer_name" required
                value={this.state.customer_name} onChange={this.onChange} id="customer_name" className="form-control"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email_address" required
                value={this.state.email_address} onChange={this.onChange} id="email_address" className="form-control"
              />
              <MDBInput
              label="Phone No." required
              icon="mobile-alt"
              group
              type="text"
              name="phone_number"
              size="sm"
              value={this.state.phone_number} onChange={this.onChange} id="phone_number" className="form-control"
            />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="subject" required
                value={this.state.subject} onChange={this.onChange} id="subject" className="form-control"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
                name="message" required
                value={this.state.message} onChange={this.onChange} id="message" className="form-control"
                style={{marginBottom:-20}}
              />
            </div>
            <div className="text-center" style={{marginBottom:-20}}>
              <MDBBtn color="cyan" type="submit">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
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
}

export default Contactus