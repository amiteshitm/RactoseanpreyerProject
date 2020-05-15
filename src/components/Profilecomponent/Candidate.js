import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar'
export default class Candidate extends Component {
    render() {
        return (
            <div id='profile'>
            <div>
              <Sidebar />
            </div >
            <div style={{marginLeft:170,marginTop:'40px'}} >
                hello Candidate
              
    
            </div>
          </div>
        )
    }
}
