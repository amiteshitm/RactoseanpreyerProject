import React, { Component } from 'react'
import Candiate from './Candidate'
import ReactApexChart from 'react-apexcharts'
import { MDBTable, MDBTableBody, MDBCardBody, MDBCard } from 'mdbreact'
export default class Tracker extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            dataLabels: {
              enabled: false
            },
            
            size: '75%',
            background: 'transparent',
            fill: {
              type: 'gradient',
              colors: ['#ec9204', '#c82600', '#4CAF50']
            },
            legend: {
              show: false,
              position: 'left',
              formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
    
              }
            }]
    
          },
          series: [44, 55, 41],
        }
      }
    
    render() {
        return (
            <div>
                 <Candiate/>
                 <br/><br/><br/>
                <div style={{ marginLeft: 170 }}>
              <div className="row">
                  <div className='col-sm-5'>

                  <div>
         
      
         <table style={{ textAlign: 'center' ,padding:'5px'}} >
         
         <tr ><th colSpan="3">
         <div>
         <br/>
        
           <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="170" />
          
         </div>
         </th>
         </tr>
           <tr>
             <th >
               <div style={{ color: '#005d85', fontSize:"12px" }}>
                 25 Candidates<br />
                 Hired<br/>
             <i class="fas fa-user-friends"></i>
               </div>
             </th>
             <th style={{ padding: '4px',color: '#c82600', fontSize:"12px"}}>
               15 Candiates<br />
               Applied<br/>
              <i class="fas fa-user-friends"></i>
             </th>
             <th style={{ padding: '4px',color: '#00006b', fontSize:"12px"}}>
                 66
                 Candiates<br/>
                 Interviewed<br/>
                 <i class="fas fa-user-friends"></i>
             </th>
           </tr>
         </table>
       </div>
                  </div>
                  <div className='col-sm-7'>
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
                            <th><i class="fas fa-trophy"></i></th>
                            <th>Offer Accepted |Head cheff, Brooklyn</th>
                            <th><i className="fas fa-times-circle" /></th>
                          </tr>
                          <tr>
                            <th><i class="fas fa-redo"></i></th>
                            <th>Profile Updated| Job Name,Location</th>
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
        )
    }
}
