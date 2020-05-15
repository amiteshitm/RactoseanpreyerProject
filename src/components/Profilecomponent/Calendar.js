import React, { Component } from 'react'
import Inbox from './Inbox'
export default class Calendar extends Component {
    render() {
        return (
            <div id = 'profile'>
          
            <Inbox/>
            <br/><br/><br/>
            <div style={{marginLeft:170}} >
      <section className="pb-3">

        <div className="row">
   
          <div className="col-lg-4 col-md-12 mb-4" >
   
            <div className="card card-image" >
   
              <div className="text-white text-center pricing-card d-flex align-items-center bg-warning text-white py-3 px-3">
                
                <div className="card-body">
                  <h3 >Job  Expiry</h3>
                  <div className="price pt-0">
                    <h1 >25</h1>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4"  >        
            <div className="card card-image" >
              <div className="text-white text-center pricing-card d-flex align-items-center bg-primary text-white py-3 px-3">
                <div className="card-body">
                  <h3>New Message</h3>
               
                  <div className="price pt-0">
                    <h1>96</h1>
                  </div> 
                </div>
              </div>
             
            </div>
          </div>
          
          <div className="col-lg-4 col-md-12 mb-4" >
          
            <div className="card card-image" >
          
              <div className="text-white text-center pricing-card d-flex align-items-center text-white py-3 px-3" style={{background:'#6d52a5'}}>
              
                <div className="card-body">
                  <h3>New Applicants</h3>
                 
                  <div className="price pt-0">
                    <h1>66</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
        )
    }
}

