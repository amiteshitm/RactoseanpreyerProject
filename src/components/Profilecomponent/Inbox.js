import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar'
import '../../css/Sidebar.css'
import './Profilecomponent.css'
import { MDBRow, MDBCol, MDBCard, MDBCardBody} from 'mdbreact';
import { NavLink } from 'react-router-dom'

export default class Inbox extends Component {
  render() {
    return (
      

      <div id='profile'>
      <div>
        <Sidebar />
      </div >
      <div style={{marginTop:45, zIndex:-1 }} className="fixed-top" id="inbox">

        <MDBRow >
          <MDBCol md="12" >
            <MDBCard >
              <MDBCardBody >
                <div className="text-center " >
                  <NavLink to="/profile/inbox/alerts"  exact  className="font-weight-bold mr-5" >
                    Alerts
                  </NavLink>
              
                  <NavLink to="/profile/inbox/messages" exact  className="font-weight-bold ml-5" >
                    Message
                  </NavLink>
                  <NavLink to="/profile/inbox/calendar" exact  className="font-weight-bold ml-5" >
                    Calendar
                  </NavLink>
                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </div>
    </div>
    )
  }
}
