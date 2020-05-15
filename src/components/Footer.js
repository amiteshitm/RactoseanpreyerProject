import React, { Component } from 'react'
import {subscribe_to_newsletter} from './UserFunctions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Loader from 'react-loader-spinner'
import { Redirect } from 'react-router-dom'
export default class Footer extends Component {
    constructor(props) {
        super(props)
      this.state={
        email_address: '',
          open : true,
          loading: false,
          email_sent : false,
          toHome : false,
          errors: {}  
      }
      this.baseState = this.state
    }
    handleClose=(e) =>{
        this.setState({ open: false })
        this.setState(() => ({
          toHome: true
        }))
      }
      onChange=(e) =>{
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit=(e) =>{
        
        e.preventDefault()
        e.target.className += " was-validated";
        this.setState({loading : true})
        const details = {
          email_address: this.state.email_address,
        }
        
        subscribe_to_newsletter(details).then(res => {
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
        return (
            
            <div>
                <div className="row">
              <div className='col-sm-5'>
                <div className='row'>
                  <div className='col-sm-6' >
                    <div id='sec9Contactus'>Contact Us</div>
                    <div id='sec9Contactsec1'>929.260.2850</div>
                    <div id='sec9Contactsec2'>info@ospreyapp.com</div>
                  </div>
                  <div className='col-sm-3' style={{marginLeft:'-30px'}} >
                    <div id='sect9ExtraLink'>Extra links</div>
                    <div id='sect9ExtraLinksec1'>About</div>
                    <div id='sect9ExtraLinksec2'>News</div>
                    <div id='sect9ExtraLinksec3'>Contacts</div>
                    <div id='sect9ExtraLinksec4'>Testimonials</div>
                  </div>
                  <div className='col-sm-3 '  style={{marginLeft:'30px'}}><br/>
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
                  <span id='Sec9placeholdeEmail'>
                    <input type="text" placeholder="Email" name="email_address" required
                        value={this.state.email_address} onChange={this.onChange} id="email_address" className="form-control"/>
                  </span>
                 <span id='Sec9SubscribeButton'>
                   <button type="submit" >SUBSCRIBE</button>
                 </span>
                </form>
             </div>
             </div>
        </div>
            </div>
        )
    }
}
