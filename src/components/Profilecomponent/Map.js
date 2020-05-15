import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar'
import '../../css/Sidebar.css'
import './Profilecomponent.css'
export default class Map extends Component {
    render() {
        return (
            <div id = 'profile'>
            <Sidebar/>
    <div style={{marginLeft:30, padding:10 }} >
    
        <h4 style={{textAlign:'center'}}>this is Map</h4>
        <p>Osprey map cooming soon
        A map is defined as a representation, usually on a flat surface, of a whole or part of an area. 
        The job of a map is to describe spatial relationships of specific features that the map aims to represent.
        There are many different types of maps that attempt to represent specific things.
        </p>
    </div>
    </div>
        )
    }
}
