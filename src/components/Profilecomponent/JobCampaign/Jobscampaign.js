import React, { Component } from 'react'
import Sidebar from '../../../components/Sidebar'
import { MDBRow, MDBCol, MDBCard, MDBCardBody} from 'mdbreact';
import { NavLink } from 'react-router-dom'
import './Jobs.css'
export default class Jobscampaign extends Component {
    render() {
        return (
            <div id='profile'>
            <div>
              <Sidebar />
            </div >
            <div style={{marginTop:46, zIndex:-1 }} className="fixed-top" id="jobcampain">
    
              <MDBRow >
                <MDBCol md="12" >
                  <MDBCard >
                    <MDBCardBody >
                      <div className="text-center " >
                        <NavLink to="/profile/jobscampaign/jobdashboard"  exact  className="font-weight-bold ml-5" id="jobDashboard">
                          Job Dashboard
                        </NavLink>
                    
                        <NavLink to="/profile/jobscampaign/jobsarchived" exact  className="font-weight-bold ml-5" id="jobsArchived">
                          Jobs Archived
                        </NavLink>
                        <NavLink to="/profile/jobscampaign/templates" exact  className="font-weight-bold ml-5" id="Template">
                          Templates
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
