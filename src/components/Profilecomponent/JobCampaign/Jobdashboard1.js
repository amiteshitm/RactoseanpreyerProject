import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import {job_dashboard_applications_active_jobs } from '../../../components/UserFunctions'
export default class Jobdashboard1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicants_job:{
      employer_id : 21,
      
      },
      new_applicants:'',
      total_applicants:'',
      active_jobs:'',
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
      series: [1,1,1],
    }
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  componentDidMount(){
    job_dashboard_applications_active_jobs(this.state.applicants_job).then(res => {
      if (!res.error) {
        this.setState(() => ({     
          new_applicants:res.values[0],
          total_applicants:res.values[1],
          active_jobs:res.values[2],
          series: res.values
        }))
  
      }
    })
    
  }
  render() {
    return (
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
              <div style={{ color: '#ec9204', fontSize:"12px" }}    >
              {this.state.new_applicants} <br/>New<br />
                Applicants<br/>
            <i class="fas fa-user-friends"></i>
              </div>
            </th>
            <th style={{ padding: '4px',color: '#c82600', fontSize:"12px"}}>
            {this.state.total_applicants} <br/>Total<br />
              Applicants<br/>
             <i class="fas fa-user-friends"></i>
            </th>
            <th style={{ padding: '4px',color: '#4CAF50', fontSize:"12px"}}>
           
            {this.state.active_jobs} <br/>active<br/>
                Jobs<br/>
          <i class="fas fa-toolbox"></i>
            </th>
          </tr>
        </table>
      </div>
    )
  }
}

