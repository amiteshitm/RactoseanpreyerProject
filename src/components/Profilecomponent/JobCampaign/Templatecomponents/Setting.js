import React, { Component } from 'react'
import {MDBInput, MDBRow, MDBCol } from 'mdbreact';
export default class Setting extends Component {
    render() {
        return (
            <div>
                  <span><i class="fas fa-angle-right" style={{ fontSize: '20px' }}></i></span>
               <span style={{ fontSize: '25px', color: '#425da7', fontWeight: 400, marginLeft: '20px' }}>Schedule/Availability</span>
               <div><span style={{  background: '#425da7',color:'white', borderRadius:'10px', 
                                    fontWeight: 400, marginLeft: '30px',padding:'5px' }}>Sync Calendar</span>
                <span>  which you would like to choose from.  </span>                
                                    </div>
<div style={{marginTop:'10px', fontWeight:'400'}}>please Choose atleast 4 options from your calendar to avoid any meeting conflict  for the interviews with the candidates.</div>
<hr/>
<div>
<span><i class="fas fa-angle-down" style={{ fontSize: '20px' }}></i></span>
<span style={{ fontSize: '25px', color: '#425da7', fontWeight: 400, marginLeft: '20px' }}>Language Options</span>
</div>
<div>
<MDBRow>
    <MDBCol className="md-col-6">
<span><MDBInput label="Select your language" value="English" /></span>
</MDBCol>
<MDBCol className="md-col-6">
<span><MDBInput label="Select candidate's language" value="Spanish" /></span>
</MDBCol>
</MDBRow>
</div>
<div>
    <span style={{fontWeight:'400'}}>We will work behind the scene to make sure that you communicate with the candidates who don't speak your 
        language,language is a no barrier here.
    </span>
</div>
<hr/>
<div>
<span><i class="fas fa-angle-down" style={{ fontSize: '20px' }}></i></span>
<span style={{ fontSize: '25px', color: '#425da7', fontWeight: 400, marginLeft: '20px' }}>Communication Options</span>
</div>
<hr/>
<div>
    <span style={{ fontWeight: 400 }}>Select your channel of communication with candidate</span>
    <span><i class="fas fa-angle-up"  style={{ fontSize: '20px',float:'right' }}></i></span>
</div>
<div>
    <span style={{fontWeight:400, fontSize:'20px',marginLeft:'15px'}}>SMS</span>
    <span class=" custom-switch" style={{ float: 'right' }}>
    <input type="checkbox" class="custom-control-input" id="customSwitches" />
    <label class="custom-control-label" for="customSwitches"></label>
     </span>
</div>
<div>
    <span style={{fontWeight:400, fontSize:'20px',marginLeft:'15px'}}>Email</span>
    <span class=" custom-switch" style={{ float: 'right' }}>
    <input type="checkbox" class="custom-control-input" id="customSwitches1" />
    <label class="custom-control-label" for="customSwitches1"></label>
     </span>
</div>
<div>
    <span style={{fontWeight:400, fontSize:'20px',marginLeft:'15px'}}>Voice Prompt</span>
    <span class=" custom-switch" style={{ float: 'right' }}>
    <input type="checkbox" class="custom-control-input" id="customSwitches2" />
    <label class="custom-control-label" for="customSwitches2"></label>
     </span>
</div>
<hr/>
<div style={{ fontWeight: 400 }}>Choose the information that  you would like to share </div>
<div>
<span style={{fontWeight:400, fontSize:'20px',marginLeft:'15px'}}>Via SMS</span>
    <span class=" custom-switch" style={{ float: 'right' }}>
    <input type="checkbox" class="custom-control-input" id="customSwitches3" />
    <label class="custom-control-label" for="customSwitches3"></label>
     </span>
</div>
<div>
<div class="form-check form-check-inline" style={{marginLeft:'30px',fontWeight:500}}>
  <input type="checkbox" class="form-check-input" id="materialInline1" width='20px'/>
  <label class="form-check-label" for="materialChecked2">Complete Address</label>
</div>
</div>
<div class="form-check form-check-inline" style={{marginLeft:'30px',fontWeight:500}}>
  <input type="checkbox" class="form-check-input" id="materialInline1" width='20px'/>
  <label class="form-check-label" for="materialChecked2">Zip Code in Job Templates</label>
</div>
<div>
<div class="form-check form-check-inline" style={{marginLeft:'30px',fontWeight:500}}>
  <input type="checkbox" class="form-check-input" id="materialInline1" width='20px'/>
  <label class="form-check-label" for="materialChecked2">Zip Code in Interview Requests</label>
</div>
</div>
<div class="form-check form-check-inline" style={{marginLeft:'30px',fontWeight:500}}>
  <input type="checkbox" class="form-check-input" id="materialInline1" width='20px'/>
  <label class="form-check-label" for="materialChecked2">Your Phone Number</label>
</div>
<div style={{marginLeft:'50px',fontWeight:400}}>Selecting will deactive anonymouse SMS text and share your phone number </div>
<div class="form-check form-check-inline" style={{marginLeft:'30px',fontWeight:500}}>
  <input type="checkbox" class="form-check-input" id="materialInline1" width='20px'/>
  <label class="form-check-label" for="materialChecked2">Your Signature</label>
</div>
            </div>
        )
    }
}
