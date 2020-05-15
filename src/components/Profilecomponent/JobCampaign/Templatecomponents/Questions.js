import React, { Component } from 'react'
import './Template.css'
import './Template.css'
export default class Questions extends Component {
    render() {
        return (
            <div>
                <div>
                    <span><i class="fas fa-angle-right" style={{ fontSize: '20px' }}></i></span>
                    <span style={{ fontSize: '25px', color: '#425da7', fontWeight: 400, marginLeft: '20px' }}>Application Form  |</span>
                    <span style={{ color: '#425da7', fontWeight: 400 }}>Mandatory</span>
                    <div>
                        <span style={{ marginLeft: '30px', fontWeight: '400' }}>Candidate Name</span>
                        <div> <span style={{ marginLeft: '30px', fontWeight: '400' }}>Mobile phone</span></div>
                        <div><span style={{ marginLeft: '30px', fontWeight: '400' }}>Email</span></div>
                        <div><span style={{ marginLeft: '30px', fontWeight: '400' }}>Resume(upload)</span></div>
                        <div> <span style={{ marginLeft: '30px', fontWeight: '500', color: '#425da7', fontSize: '18px' }}>+ Add More</span></div>
                        <div style={{ marginLeft: '15px', fontWeight: '400' }}>Question 1</div>
                        <div style={{ marginLeft: '15px', fontWeight: '400', fontSize: '25px' }}>Any medical history?</div>
                        <hr />
                        <div style={{ fontWeight: '400' }}>Below are list of sample Questions that the candidate needs to answer to qualify the next round, please select your
                             choice which your would  like to ask, You can also add your own set of questions.
               </div>
                        <hr />
                        <div>
                            <span><i class="fas fa-angle-right" style={{ fontSize: '20px' }}></i></span>
                            <span style={{ fontSize: '25px', color: '#425da7', fontWeight: 400, marginLeft: '20px' }}>Technical Interview |</span>
                            <span style={{ color: '#425da7', fontWeight: 400 }}> Round1</span>
                            <div style={{ marginLeft: '30px' }}>Choose which question you would like to ask the candidate</div>
                            <div>
                                <div>
                                    <span style={{ marginLeft: '15px', fontWeight: '400' }}>Question 1/ OSPREY Question</span>
                                    <span class=" custom-switch" style={{ float: 'right' }}>
                                        <input type="checkbox" class="custom-control-input" id="customSwitches" />
                                        <label class="custom-control-label" for="customSwitches"></label>
                                    </span>
                                </div>
                                <div style={{ fontWeight: '400', fontSize: '20px', marginLeft: '15px' }}>How much is 108*24?</div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            
                            <div>
                                <div>
                                    <span style={{ marginLeft: '15px', fontWeight: '400' }}>Question 1/ OSPREY Question</span>
                                    <span class=" custom-switch" style={{ float: 'right' }}>
                                        <input type="checkbox" class="custom-control-input" id="customSwitches1" />
                                        <label class="custom-control-label" for="customSwitches1"></label>
                                    </span>
                                </div>
                                <div style={{ fontWeight: '400', fontSize: '20px', marginLeft: '15px' }}>How much is 108*24?</div>
                            </div>
                            <hr />
                            <div> <span style={{ fontWeight: '500', color: '#425da7', fontSize: '18px' }}>+ Add More</span></div>
                        </div>
                        </div>
                        
                    </div>
                <div>
                </div>
            </div>
        )
    }
}
