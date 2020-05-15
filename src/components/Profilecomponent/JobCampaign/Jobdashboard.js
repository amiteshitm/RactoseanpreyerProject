import React, { Component } from 'react'
import Jobscampaign from './Jobscampaign'
import Jobdashboard1 from './Jobdashboard1'
import Jobdashboard2 from './Jobdashboard2'
import { MDBTable, MDBTableBody, MDBCardBody, MDBCard } from 'mdbreact'
import Jobdashboard3 from './Jobdashboard3'
import JobdashboardImg from '../../../image/Jobdashboard.png'
import './Jobs.css'

export default class JobDashboard extends Component {


  render() {
    return (
      <div >
        <div style={{ zIndex: 1 }}>
          <Jobscampaign />
          <div style={{ marginLeft: 190 }} >
            <br /><br /><br />
            <div class="row" >
              <div className="col-sm-6" id ="dashboard" >
                <div >
                  <div class="row" style={{backgroundImage:`url(${JobdashboardImg})` }}>
                    <div class="col-sm-6">
                      <Jobdashboard1 />
                    </div>
                    <div class="col-sm-6">
                      <Jobdashboard2 />
                    </div>
                  </div>
                  <div class="row" >
                    <div class="col-sm-12">
                      
                      <Jobdashboard3 />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-5" >
                <MDBCard >
                  <MDBCardBody >
                    <div className="my-custom-scrollbar">
                      <MDBTable striped>
                        <MDBTableBody>
                          <tr><th></th>
                          <th style={{color:'#425da7',fontWeight:'bold'}}>Recent Activity(12)</th>
                          <th></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated| head Cheff, Broklyn</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Password Changed</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i className="fas fa-user" /></th>
                            <th>Job post Updated</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                        </MDBTableBody>
                      </MDBTable>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}