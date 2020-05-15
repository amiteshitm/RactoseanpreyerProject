import React,{Component} from 'react'
import ReactApexChart from "react-apexcharts";
import Sidebar from '../../components/Sidebar'
import '../../css/Sidebar.css'
import './Profilecomponent.css'
class Piechart extends Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
          }
        },
        stroke: {
          width: 0,
        },
        labels: ["India", "America", "Canada", "Australia", "Pakistan"],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true
                        }
                    }
                }
            }
        },
        fill: {
          type: 'pattern',
          opacity: 1,
          pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
          },
        },
        states: {
          hover: {
            enabled: false
          }
        },
        theme: {
          palette: 'palette2'
        },
        title: {
          text: "Increse Order Share Market"
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [44, 55, 41, 17, 15]
    }
  }

  render() {
    return (
      <div id = 'profile'>
            <Sidebar/>
    <div style={{marginLeft:500,padding:10}} >

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
      </div>
      </div>
    )
  }
}
export default  Piechart