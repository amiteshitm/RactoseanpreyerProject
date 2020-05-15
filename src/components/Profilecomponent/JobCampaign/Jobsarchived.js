import React, { Component } from 'react'
import Jobscampaign from './Jobscampaign'
import Detail from './JobarchivedComponent/Detail'
import './Jobs.css'
import Candidates from './JobarchivedComponent/Candidates';
import Quetions from './JobarchivedComponent/Quetions';
import History from './JobarchivedComponent/History';
import { job_archived } from '../../../components/UserFunctions'
import { job_archived_details } from '../../../components/UserFunctions'


export default class Jobsarchived extends Component {
  constructor() {
    super()
    this.state = {
      isDetail: true,
      isCandidate: false,
      isQuestions: false,
      isHistory: false,
      job_details: { employer_id: 24 },
      result: { '104': 'val' },
      first_job_id: '',
      publish_details: {},
      job_archived_details: { 'job_id': '' }
    }
  }

  selectDetail = () => {
    this.setState({
      isDetail: true,
      isCandidate: false,
      isQuestions: false,
      isHistory: false,

    });
  };
  selectCandidate = () => {
    this.setState({
      isDetail: false,
      isCandidate: true,
      isQuestions: false,
      isHistory: false,

    });
  };
  selectQuestions = () => {
    this.setState({
      isDetail: false,
      isCandidate: false,
      isQuestions: true,
      isHistory: false,


    });
  };
  selectHistory = () => {
    this.setState({
      isDetail: false,
      isCandidate: false,
      isQuestions: false,
      isHistory: true,
    });
  };

  // job_arhived_details = (this.state.job_archived_details).then(res => {
  //     if (!res.error) {
  //       this.setState(() => ({               
  //         job_archived_detailts_result : res.result.job_archived_details,

  //         //series:res.result[2] 
  //       }))

  //     }
  //   })

  componentDidMount() {
    job_archived(this.state.job_details).then(res => {
      if (!res.error) {
        console.log('first job id', this.state.first_job_id)
        this.setState(() => ({
          result: res.result.job_details,
          job_archived_details: { 'job_id': res.result.first_job_id },
          first_job_id: res.result.first_job_id
          //series:res.result[2] 
        }))
      }
    })
    if (this.state.first_job_id !== '') {
      job_archived_details(this.state.job_archived_details).then(res => {
        if (!res.error) {
          console.log('first job id', this.state.first_job_id)
          this.setState(() => ({
            job_archived_detailts_result: res.result.job_archived_details,

            //series:res.result[2] 
          }))

        }
      })
    }
  }
  render() {
    let detail_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
    if (this.state.isDetail) {
      detail_color = { borderBottom: "#5e43aa solid 2px ", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa', padding: '7px' }
    }
    let candidate_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
    if (this.state.isCandidate) {
      candidate_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa', padding: '7px' }
    }
    let questions_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
    if (this.state.isQuestions) {
      questions_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa', padding: '7px' }
    }
    let history_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
    if (this.state.isHistory) {
      history_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa', padding: '7px' }
    }

    return (
      <div id='profile'>
        <Jobscampaign />
        <div style={{ marginLeft: 170 }} >
          <br /><br />
          <div class="row" >
            <div class="col-sm-4" style={{ cursor: 'pointer' }}>
              <div className="my-custom-scrollbar-1" striped >
                {
                  Object.keys(this.state.result).map((e, i) => {
                    console.log('result e', e, this.state.result[e])
                    return (
                      <div>
                        {/* ---- <Jobarchivedreftpanel/>---- */}
                        <div style={{ paddingTop: '5px' }}>
                          <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>{this.state.result[e]['posting_title']} |</span>
                          <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>{this.state.result[e]['job_category']} </span>
                          <span style={{ float: 'right', marginRight: '20px' }}><i class="fas fa-ellipsis-v" style={{ color: 'grey' }}></i></span>
                        </div>
                        <div style={{ paddingTop: '5px' }}>
                          <span style={{ fontSize: '15px', color: 'black', fontWeight: 400 }}>{this.state.result[e]['city']}  {this.state.result[e]['postal_code']}  </span>
                          <span style={{
                            color: 'white', background: 'green', paddingLeft: '10px', paddingRight: '10px', borderRadius: '50px',
                            fontSize: '10px', fontWeight: '400'
                          }}>
                            {/* ..../Active/....... */}
                            {this.state.result[e]['job_post_status']}
                          </span>
                        </div>
                        {
                          Object.keys(this.state.result[e]).map((f, i) => {
                            if (f === 'publish_details') {
                              return (
                                <div>
                                  {
                                    Object.keys(this.state.result[e][f]).map((g, i) => {                               
                                      return (
                                        <div style={{ paddingTop: '5px' }}>
                                          <span style={{
                                            color: 'blue', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px',
                                            borderColor: 'light blue', border: '1px solid blue', fontSize: '10px', fontWeight: '400'
                                          }}>
                                            <span class="dot" ></span>{g}</span>
                                          <span style={{ fontSize: '12px', color: 'black', fontWeight: 400 }}>&nbsp;&nbsp;Posted:{this.state.result[e][f][g]['posted']} days back| Expiry:{this.state.result[e][f][g]['expiry']}</span>
                                        </div>
                                      )
                                    }
                                    )}
                                </div>
                              )
                            }
                          })
                        }
                        <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 350 }}>{this.state.result[e]['short_job_description']}</div>
                        <div style={{ paddingTop: '7px', fontSize: '12px', color: 'black', fontWeight: 400 }}><i class="fas fa-user-friends" style={{ color: 'blue' }} /> Applied({this.state.result[e]['applied']})  | ShortListed({this.state.result[e]['shortlisted']}) | Interview({this.state.result[e]['interview']})
                     </div>
                        <hr />
                        {/* --------------------------- */}
                      </div>)
                  })
                }
              </div></div>
            <div class="col-sm-8 my-custom-scrollbar-1"  >
              {/* <Jobarchivedrightpanel/>         */}
              <div >
                <div style={{ paddingTop: '5px' }} >
                  <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Job Name |</span>
                  <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>
                  <br />
                  <br />
                </div>
                <div>
                  <div className='row'>
                    <div className="col-sm-3" onClick={this.selectDetail}><span style={detail_color}>Detail</span></div>
                    <div className="col-sm-3" onClick={this.selectCandidate}><span style={candidate_color}>Candidate</span></div>
                    <div className="col-sm-3" onClick={this.selectQuestions}><span style={questions_color}>Questions</span></div>
                    <div className="col-sm-3" onClick={this.selectHistory}><span style={history_color}>History</span></div>
                  </div>
                  <hr className='borderline' />
                </div>
                {
                  Object.keys(this.state.result).map((e, i) => {
                    return (<div>
                      {this.state.isDetail ?
                        (<Detail data={this.state.result[e]['details']} />
                        ) : (<div></div>)}
                      {this.state.isCandidate ?
                        (<Candidates data={this.state.result[e]['candidate']}/>
                        ) : (<div></div>)}
                      {this.state.isQuestions ?
                        (<Quetions />
                        ) : (<div></div>)}
                      {this.state.isHistory ?
                        (<History />
                        ) : (<div></div>)}
                    </div>
                    )}
                  )
                }
              </div>

              {/* ---------------------------------------- */}
              <div >
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
