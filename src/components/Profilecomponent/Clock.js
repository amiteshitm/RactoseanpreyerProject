// import React, { Component } from 'react'
// import Sidebar from '../../components/Sidebar'
// import Clock from 'react-clock';
// export default class Digital extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//         currentTime:new Date().toLocaleString()
//         }
//         this.updateTime()
//     }
//     updateTime=()=>{
//         setInterval(() => {
//             this.setState({
//             currentTime:new Date().toLocaleString()  
//             })
//         }, 1000);
//     }
//     render() {
//         return (
//             <div id = 'profile'>
//                 <Sidebar/>
//                 <h3 style={{textAlign:'center'}}>{this.state.currentTime}</h3>
//         <Clock
//         value={this.state.date}
//         />
//             </div>
//         )
//     }
// }



import React, { Component } from 'react';
import Clock from 'react-clock';
import Sidebar from '../../components/Sidebar'

class Digital extends Component {
    constructor(){
        super()
  this.state = {
    date: new Date(),
    currentTime:new Date().toLocaleString()
  }
  this.updateTime()
    }
    updateTime=()=>{
           setInterval(() => {
                    this.setState({
                     currentTime:new Date().toLocaleString()  
                     })
                 }, 1000);
             }
  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div id = 'profile' >
            <Sidebar/>
        <p style={{textAlign:'center'}}>Current time:</p>
        <h3 style={{textAlign:'center'}}>{this.state.currentTime}</h3>
        <div style={{float:'right'}}>
        <Clock 
          value={this.state.date}
         />
         </div>
      </div>
    );
  }
}
export default Digital