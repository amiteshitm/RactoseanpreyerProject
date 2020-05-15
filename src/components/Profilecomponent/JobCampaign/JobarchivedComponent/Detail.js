import React, { Component } from 'react'
import { MDBInput } from 'mdbreact';
export default class Detail extends Component {

    render() {
        return (

            <div className="md-form">
                <div style={{ fontSize: 15, fontWeight: "400" }} >
                    {
                        (this.props.data) ?
                            <div> {this.props.data.job_description}
                                <MDBInput label="Job Experience" value={this.props.data.job_experience} />
                                <MDBInput label="Job Nature" value="Permanent" />
                                <MDBInput label="Education" value={this.props.data.highest_degree} />
                                <MDBInput label="Education" value={this.props.data.highest_degree} />
                                <MDBInput label="Education" value={this.props.data.highest_degree} />
                            </div> : null
                    }
                </div>
                <hr/>
            </div>
        )
    }
}
