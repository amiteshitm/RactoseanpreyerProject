import React, { Component } from 'react'
// import { MDBRow, MDBCol, MDBTable, MDBTableBody } from 'mdbreact';
import { NavLink } from 'react-router-dom'
export default class Jobarchivedrightpanel extends Component {
    render() {
        return (
            <div>
                <div className="my-custom-scrollbar">
                    <NavLink to="/profile/jobscampaign/jobsarchived/detail" exact className="font-weight-bold mr-5" id="jobDashboard">
                        Detail
                                                            </NavLink>
                    <NavLink to="/profile/jobscampaign/jobsarchived/candidate" exact className="font-weight-bold ml-5" id="jobsArchived">
                        Candidate
                                                            </NavLink>
                    <NavLink to="/profile/jobscampaign/jobsarchived/quetions" exact className="font-weight-bold ml-5" id="Template">
                        Quetions
                                                            </NavLink>
                    <NavLink to="/profile/jobscampaign/jobsarchived/history" exact className="font-weight-bold ml-5" id="Template">
                        History
                                                             </NavLink>
                </div>
            </div>
        )
    }
}
