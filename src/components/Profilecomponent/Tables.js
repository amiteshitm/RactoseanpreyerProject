import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar'

export default class Tables extends Component {
    render() {
        return (
            <div id = 'profile'>
            <Sidebar/>
    <div style={{marginLeft:30, padding:10}} >
        
       <h4 style={{textAlign:'center'}}> this is Tables</h4>
       <p>The Osprey table  benches have elegant solid wood legs and edge detail.
            Choose from a range of solid woods and over 100 laminate colours for the table ... </p>
    </div>
    </div>
        )
    }
}
