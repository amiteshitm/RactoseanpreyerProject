import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import {MDBCardBody, MDBCard } from 'mdbreact'
import {job_dashboard_weekly_progress } from '../../../components/UserFunctions'

export default class Jobdashboard3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekly_progress:{
        employer_id:23
      },
    
      series: [{
        name: 'Number of Applicants',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Number of Interviews',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Number of Hires',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['26', '27', '28', '29', '30', '31', 'may'],
        },
        yaxis: {
          title: {
            // text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
    
    
    };
  }

      componentDidMount(){
        job_dashboard_weekly_progress(this.state.weekly_progress).then(res => {
          if (!res.error) {
            this.setState(() => ({               
              categories: res.result[0],
              result:res.result[1],
              //series:res.result[2]
            }))
      
          }
        })
        
      }
    render() {
        return (
            
            <div id="chart">
                
                <MDBCard >
                  <MDBCardBody >
            
                 <ReactApexChart options={this.state.options} categories={this.state.categories} series={this.state.series}  type="bar" height={200} />
                 </MDBCardBody>
                 </MDBCard>
            </div>
        )
    }
}
