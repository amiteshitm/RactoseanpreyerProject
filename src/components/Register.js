import React, { Component } from 'react'
import { register, validateForm} from './UserFunctions'
import {Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody} from 'mdbreact';
import { NavLink} from 'react-router-dom'
import '../css/LoginRegister.css'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name:'',
      last_name:'',
      company_name: '',
      email_address: '',
      phone_number: '',
      business_category:'',
      zip_code: '',
      password: '',
      login_type: '',
      toLogin: false,
      values: { 'email': sessionStorage.email_address, 'login_type' : sessionStorage.login_type },
      errorFlag: false,
      errors: {
        first_name:'',
        last_name:'',
        company_name: '',
        email_address: '',
        phone_number: '',
        business_category:'',
        zip_code: '',
        password: '',
      },

    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    sessionStorage.clear();
  }

  
  onChange(e) {
    e.preventDefault();
    const name = e.target.name 
    const value = e.target.value
    let errors = this.state.errors;
    const validEmailRegex = RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/);
    switch (name) {
      case 'company_name': 
        errors.company_name = 
          value.length < 2 | value.trim === ""
            ? 'Company name must be at least 2 characters long!'
            : '';
        break;
      case 'email_address': 
        errors.email_address = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    if(validateForm(this.state.errors) === false){
      this.setState({errorFlag: true})
    }
    e.target.className += " was-validated";
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      company_name: this.state.company_name,
      email_address: this.state.email_address,
      phone_number: this.state.phone_number,
      business_category:this.state.business_category,
      zip_code: this.state.zip_code,
      login_type: this.state.login_type,
      password: this.state.password
    }

    if (this.state.values.email) {

      newUser.email_address = this.state.values.email
      newUser.login_type = this.state.values.login_type
    }

    register(newUser).then(res => {
      if (!res.error) {
        this.setState(() => ({
          toLogin: true
        }))

      }
    })
  }
  render() {

    if (this.state.toLogin === true) {
      return <Redirect to='/profile' />
    }

    const isEnabled = this.state.errors.email_address.length > 0 || this.state.errors.company_name.length > 0;
    if (this.state.values.email) {
      return (
        <div id="image">
          <MDBContainer  className='loginAndRegister'>
            <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
              <MDBCol md="4">
                <MDBCard style={{ background: "#FCFCFC", opacity: 0.7 }} >
                  <MDBCardBody  >
                    <form noValidate onSubmit={this.onSubmit} id="login-form" className="form" action method="post" >
                      <div>
                        <MDBInput
                          label="Company Name" required
                          icon="far fa-building"
                          group
                          type="text"
                          name="company_name"
                          size="sm"
                          value={this.state.company_name} 
                          onChange={this.onChange} 
                          id="company_name" 
                          className="form-control"
                          noValidate
                        >
                        {this.state.errors.company_name.length > 0 && 
                        <div id = 'error'>{this.state.errors.company_name}</div>
                        }
                        </MDBInput>
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
                          label="Zip Code" required
                          icon="crosshairs"
                          group
                          type="text"
                          name="zip_code"
                          size="sm"
                          value={this.state.zip_code} onChange={this.onChange} id="zipcode" className="form-control"
                        />
                        <div className="text-center ">
                          <MDBBtn color="cyan" type="submit" disabled={isEnabled}>
                            PROCCED
                          </MDBBtn>
                        </div>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      );
    }
    return (
      <div id="image">
        
        <MDBContainer >
        
          <MDBRow className="row justify-content-center align-items-center" id='loginAndRegister'>
          <MDBCol md="4">
              <MDBCard style={{ background: "#ffffff", opacity: 0.7 }} >
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
      
                  <form onSubmit={this.onSubmit} id="login-form" className="form" action method="post" >
                    <div style={{marginTop:-16}}>
                   <MDBRow  style={{marginBottom:-25}}>
                     <MDBCol className="md-col-6">
                      <MDBInput
                        label="FirstName" required
                        icon="user"
                        group
                        type="text"
                        name="first_name"
                        size="sm"
                        value={this.state.first_name} 
                        onChange={this.onChange} 
                      />
                      </MDBCol>
                      <MDBCol className="md-col-6">
                      <MDBInput
                        label="LastName" required
                        group
                        type="text"
                        name="last_name"
                        size="sm"
                        value={this.state.last_name} 
                        onChange={this.onChange} 
                      />
                    </MDBCol>
                  </MDBRow>
                      <MDBInput
                        label="Bussiness Email"
                        icon="envelope"
                        group
                        type="email"
                        name="email_address"
                        size="sm"
                        value={this.state.email_address} 
                        onChange={this.onChange} 
                        id="email"    
                        required
                      >
                      {this.state.errors.email_address.length > 0 && 
                        <div id='error'>{this.state.errors.email_address}</div>
                      }
                      </MDBInput>

                      <MDBInput
                        label="Company Name" 
                        icon="fas fa-building"
                        group
                        type="text"
                        name="company_name"
                        size="sm"
                        value={this.state.company_name} 
                        onChange={this.onChange} 
                        id="name" 
                        required
                      >
                      {this.state.errors.company_name.length > 0 && 
                        <div id = 'error'>{this.state.errors.company_name}</div>
                      }
                      </MDBInput>
                      <MDBInput
                        label="Phone No." 
                        icon="fas fa-mobile"
                        group
                        type="text"
                        name="phone_number"
                        size="sm"
                        value={this.state.phone_number} 
                        onChange={this.onChange} 
                        id="phone_number" 
                        required
                      />

                      <MDBInput
                        label="Zip Code" required
                        icon="crosshairs"
                        group
                        type="text"
                        name="zip_code"
                        size="sm"
                        value={this.state.zip_code} onChange={this.onChange} id="zipcode" className="form-control"
                      />
                      <MDBInput
                        label="Your password" required
                        icon="lock"
                        group
                        type="password"
                        name="password"
                        size="sm"
                        placeholder="Password" value={this.state.password} onChange={this.onChange} id="password" className="form-control"
                      />
                      <div className="text-center ">
                    <MDBBtn color="cyan" type="submit" disabled={isEnabled}>
                          CREATE ACCOUNT
                    </MDBBtn>
                      </div>
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

export default Register
