import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import {job_dashboard_interview_schedule } from '../../../components/UserFunctions'
export default class Jobdashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interview_schedule: {
        employer_id : 29
      },
      employer_id:'',
      options: {
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '10%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,

              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#ec9204', '#c82600', '#4CAF50'],
        labels: ['This Week', 'Tomorrow', 'Today'],
        legend: {
          show: true,
          floating: true,
          fontSize: '10px',
          position: 'right',
          offsetX: 80,
          offsetY: 10,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  (" + opts.w.globals.series[opts.seriesIndex] + ")"
          },
          itemMargin: {
            horizontal: 1,
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {

          }
        }]
      },
      series: [76, 67, 61],
    }
  }

  componentDidMount(){
    job_dashboard_interview_schedule(this.state.interview_schedule).then(res => {
      if (!res.error) {
        this.setState(() => ({
          series: res.values
        }))
  
      }
    })
  }
  render() {
    return (
      <div>
        <table>
          <tr style={{ alignItems: "top" }}><th>
            <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="200" />
            </div>
          </th>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <th style={{ padding: '4px', color: '#00006b', fontSize: "12px" }}>
              <i class="fas fa-toolbox"></i> Interviews <br />
              Scheduled<br /><br />
            </th>
          </tr>
        </table>
      </div>
    )
  }
}
