import React, { Component} from 'react'
import jwt_decode from 'jwt-decode'
import Sidebar from './Sidebar'
// import '../css/LoginRegister.css'
// import '../css/Sidebar.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      employer_name: '',
      email_address: '',
      phone_number:'',
      zip_code: '',
      active: false,
      errors: {}
    }
    
  }
  
  
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      employer_name: decoded.identity.employer_name,
      email_address: decoded.identity.email_address
    })
  }

  render() {
    return (
      <div id="profile">
         <Sidebar/>
         <div style={{marginLeft:30, padding:10}} >
      <div className="container">
       
        
            <h3 className="text-center" style={{color:'#425da7', fontSize: '3x' }}>PROFILE</h3>
        
          {/* <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Company Name</td>
                <td>{this.state.employer_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email_address}</td>
              </tr>
            </tbody>
          </table> */}


<MDBContainer >
        
        <MDBRow className="mt-2 mb-3 d-flex justify-content-center" >
        <MDBCol md="4">
            <MDBCard style={{ background: "#ffffff", opacity: 0.7 }} >
              <MDBCardBody >
           
                <form onSubmit={this.onSubmit} id="login-form" className="form" action method="post" >
                  <div >
                 <MDBRow>
                   <MDBCol className="md-col-6" style={{color:'#425da7', fontSize: 18 }}>
                    Company Name:
                    </MDBCol>
                    <MDBCol className="md-col-6" style={{color:'#425da7', fontSize: 18 }}>
                    {this.state.employer_name}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                   <MDBCol className="md-col-6" style={{color:'#425da7', fontSize: 18 }}>
                    Email:
                    </MDBCol>
                    <MDBCol className="md-col-6" style={{color:'#425da7', fontSize: 18 }}>
                    {this.state.email_address}
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                   <MDBCol className="md-col-6" style={{color:'#425da7', fontSize: 18 }}>
                    Phone Number:
                    </MDBCol>
                    <MDBCol className="md-col-6" style={{color:'#425da7', fontSize: 18 }}>
                    {this.state.phone_number}
                  </MDBCol>
                </MDBRow>
                    
                 
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

        </div>
      </div>
  </div>
  
    )
  }
}

export default Profile
