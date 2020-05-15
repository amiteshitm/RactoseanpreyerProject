import React, { Component } from 'react'
import Jobscampaign from './Jobscampaign'
import Setting from './Templatecomponents/Setting';
import Details from './Templatecomponents/Details';
import Questions from './Templatecomponents/Questions'
import Company from './Templatecomponents/Company'

export default class Templates extends Component {
    constructor() {
        super()
        this.state = {
            isDetails: true,
            isCompany: false,
            isQuestions: false,
            isSetting: false,
        }
    }

    selectDetails = () => {
        this.setState({
            isDetails: true,
            isCompany: false,
            isQuestions: false,
            isSetting: false,

        });
    };
    selectCompany = () => {
        this.setState({
            isDetails: false,
            isCompany: true,
            isQuestions: false,
            isSetting: false,

        });
    };
    selectQuestions = () => {
        this.setState({
            isDetails: false,
            isCompany: false,
            isQuestions: true,
            isSetting: false,


        });
    };
    selectSetting = () => {
        this.setState({
            isDetails: false,
            isCompany: false,
            isQuestions: false,
            isSetting: true,
        });
    };
    render() {
        let details_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
        if (this.state.isDetails) {
            details_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa' }
        }
        let company_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
        if (this.state.isCompany) {
            company_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa' }
        }
        let questions_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
        if (this.state.isQuestions) {
            questions_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa' }
        }
        let setting_color = { cursor: 'pointer', fontWeight: '450px', fontSize: '15px' }
        if (this.state.isSetting) {
            setting_color = { borderBottom: "#5e43aa solid 2px", cursor: 'pointer', fontWeight: '450px', fontSize: '15px', color: '#5e43aa' }
        }
        return (
            <div id='profile'>
                 <Jobscampaign />
                <div style={{ marginLeft: 170 }} >
                <br /><br />
                <div className="row">
        <div className="col-sm-4 ">
            <div className="my-custom-scrollbar-1" striped style={{marginTop:'5px'}}>
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>A Accounts</span>
            <div>
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Accountant |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>
            </div>
            <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 350 }}>Short description of the job describing the nature of job and explaning
            and relevant details </div>
        <hr/>
        <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>A Accounts</span>
            <div>
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Accountant |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>
            </div>
            <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 350 }}>Short description of the job describing the nature of job and explaning
            and relevant details </div>
            <hr/>
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>A Accounts</span>
            <div>
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Accountant |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>
            </div>
            <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 350 }}>Short description of the job describing the nature of job and explaning
            and relevant details </div>
            <hr/>
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>A Accounts</span>
            <div>
            <span style={{ fontSize: '20px', color: '#5E43AA', fontWeight: 400 }}>Accountant |</span>
            <span style={{ fontSize: '15px', color: '#5E43AA', fontWeight: 400 }}>Job Category</span>
            </div>
            <div style={{ paddingTop: '5px', fontSize: '14px', color: 'black', fontWeight: 350 }}>Short description of the job describing the nature of job and explaning
            and relevant details </div>
            <hr/>
        </div>
        
        </div>
        <div className="col-sm-8 my-custom-scrollbar-1">
          <div style={{marginTop:'5px'}}>
                                <table id="job_table">
                                    <thead>
                                        <tr>
                                            <td onClick={this.selectDetails}><span style={details_color}>Detail</span></td>
                                            <td onClick={this.selectCompany}><span style={company_color}>Company</span></td>
                                            <td onClick={this.selectQuestions}><span style={questions_color}>Questions</span></td>
                                            <td onClick={this.selectSetting}><span style={setting_color}>Setting</span></td>
                                        </tr>
                                    </thead>
                                </table>
                                <hr />
                            </div>
                            {this.state.isDetails ?
                    (<Details />

              ) : (<div></div>)}

            {this.state.isCompany ?
            (<Company />

            ) : (<div></div>)}
            {this.state.isQuestions ?
            (<Questions />

          ) : (<div></div>)}
            {this.state.isSetting ?
            (<Setting/>

            ) : (<div></div>)}

            </div>
            </div>  
            </div>
            </div>
        )
    }
}
