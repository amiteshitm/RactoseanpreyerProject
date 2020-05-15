import React, { Component } from 'react'
import Sidebar from '../../../components/Sidebar'
import { MDBRow, MDBCol, MDBCard, MDBCardBody} from 'mdbreact';
import { NavLink } from 'react-router-dom'
import './candidate.css'
export default class Candidate extends Component {
    render() {
        return (
          <div id='profile'>
          <div>
            <Sidebar />
          </div >
          <div style={{marginTop:46, zIndex:-1 }} className="fixed-top" id="candidature">
  
            <MDBRow >
              <MDBCol md="12" >
                <MDBCard >
                  <MDBCardBody >
                    <div className="text-center " >
                      <NavLink to="/profile/candidate/tracker"  exact  className="font-weight-bold ml-5" id="tracker">
                        Tracker
                      </NavLink>
                  
                      <NavLink to="/profile/candidate/candidature" exact  className="font-weight-bold ml-5" id="candidate">
                        Candidates
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
