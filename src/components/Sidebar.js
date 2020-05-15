import React, { Component} from 'react'
import { MDBListGroup, MDBListGroupItem} from 'mdbreact';
import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css'

export default class Sidebar extends Component {

    state = {
        isOpen: false,
        nestedOpen: false,
        
      }
      handleClickOpen = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      };

      handleClickClose = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      };
      handleNestedToggle = () => this.setState({ nestedOpen: !this.state.nestedOpen });

    render() {

        if(!this.state.isOpen){
        return (
            <div >
            <div className="sidebar-fixed position-fixed"  >
            {/* <MDBListGroup className="list-group-flush"> */}
            <MDBListGroup>
                <NavLink exact={true} to="/profile/jobscampaign" activeClassName="activeClass" style={{color:'#5e43aa'}}>
                    <MDBListGroupItem style={{marginLeft:-8}} >
                    <div style={{fontWeight:'400'}}><i className='fas fa-toolbox mr-2 '/>Job Campaign</div>    
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile/candidate" activeClassName="activeClass" style={{color:'#5e43aa'}}>
                    <MDBListGroupItem style={{marginLeft:-8}}>
                        {/* <MDBIcon icon="far fa-address-card" className="mr-3" size="2x" fixed/>
                        <text style={{fontSize:20, textAlign:'middle'}}>Candidate</text> */}
                <div style={{fontWeight:'400'}}><i className='far fa-address-card mr-2'/>Candidate</div>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile/inbox" activeClassName="activeClass" style={{color:'#5e43aa'}}>
                    <MDBListGroupItem style={{marginLeft:-8}}>
                        {/* <MDBIcon icon="fas fa-envelope" className="mr-3" size="2x" fixed/>
                        <text style={{fontSize:20, textAlign:'middle'}}>Inbox</text> */}
                        <div style={{fontWeight:'400'}}><i className='fas fa-envelope mr-2'/>Inbox</div>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile/myaccount" activeClassName="activeClass" style={{color:'#5e43aa'}}>
                    <MDBListGroupItem style={{marginLeft:-8}}>
                        {/* <MDBIcon icon="far fa-user-circle" className="mr-3" size="2x" fixed />
                        <text style={{fontSize:20, textAlign:'middle'}}>My Account</text> */}
                         <div style={{fontWeight:'400'}}><i className='far fa-user-circle mr-2'/>My Account</div>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile/setting" activeClassName="activeClass" style={{color:'#5e43aa'}}>
                    <MDBListGroupItem style={{marginLeft:-8}}>
                        {/* <MDBIcon icon="fas fa-cog" className="mr-3"  size="2x" fixed/>
                        <text style={{fontSize:20, textAlign:'middle'}}>Settings</text> */}
                          <div style={{fontWeight:'400'}}><i className='fas fa-cog mr-2'/>Settings</div>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/" activeClassName="activeClass" style={{color:'#5e43aa'}}>
                    <MDBListGroupItem style={{marginLeft:-8}}>
                        {/* <MDBIcon icon="fas fa-sign-out-alt" className="mr-3" size="2x" fixed/>
                        <text style={{fontSize:20, textAlign:'middle'}}>Logout</text> */}
                           <div style={{fontWeight:'400'}} ><i className='fas fa-sign-out-alt mr-2' />Logout</div>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile/contact" activeClassName="activeClass" style={{color:'#5e43aa'}}>
                    <MDBListGroupItem style={{marginLeft:-8}}>
                        {/* <MDBIcon icon="fas fa-phone-square" className="mr-3" size="2x" fixed/>
                        <text style={{fontSize:20, textAlign:'middle'}}>Contact</text> */}
                          <div style={{fontWeight:'400'}}><i className='fas fa-phone-square mr-2'/>Contact</div>
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
            
        </div>        
        </div>
        )
        
    }
    else{
    return(
        <div>
       <MDBListGroup className="list-group-flush" onMouseOver={this.handleClickOpen} id="sidebar-expand-1" >
        <div id="sidebar-expand" className="position-fixed" >
        {/* <button type="button"  onMouseOver={this.handleClickOpen} id="sidebar-expand-1"   >
            <i className="fas fa-angle-double-right" color="yellow">  </i> 
            
        </button> */}
        <MDBListGroupItem style={{marginLeft:-8}}>
        {/* <MDBIcon icon="toolbox" size="2x"  />    */}
        <div style={{color:'#5e43aa'}}><i className='fas fa-toolbox mr-2 '/></div>
        </MDBListGroupItem>   
        <MDBListGroupItem style={{marginLeft:-8}}>
        {/* <MDBIcon icon="far fa-address-card" size="2x" />     */}
        <div style={{color:'#5e43aa'}}><i className='far fa-address-card mr-2'/></div>
        </MDBListGroupItem>   
        <MDBListGroupItem style={{marginLeft:-8}}>
        {/* <MDBIcon icon="fas fa-envelope" size="2x" /> */}
        <div style={{color:'#5e43aa'}}><i className='fas fa-envelope mr-2'/></div>
        </MDBListGroupItem>
        <MDBListGroupItem style={{marginLeft:-8}}>
        {/* <MDBIcon icon="far fa-user-circle" size="2x"/> */}
        <div style={{color:'#5e43aa'}}><i className='far fa-user-circle mr-2'/></div>
        </MDBListGroupItem>
        <MDBListGroupItem style={{marginLeft:-8}}>
        {/* <MDBIcon icon="fas fa-cog" size="2x"/> */}
        <div style={{color:'#5e43aa'}}><i className='fas fa-cog mr-2' /></div>
        </MDBListGroupItem>
        <MDBListGroupItem style={{marginLeft:-8}}>
        {/* <MDBIcon icon="fas fa-sign-out-alt" size="2x"/> */}
        <div style={{color:'#5e43aa'}}><i className='fas fa-sign-out-alt mr-2'/></div>
        </MDBListGroupItem>
        <MDBListGroupItem style={{marginLeft:-8}}>
        {/* <MDBIcon  icon="fas fa-phone-square" size="2x"/> */}
        <div style={{color:'#5e43aa'}}><i className='fas fa-phone-square mr-2'/></div>
        </MDBListGroupItem>
       <br/>
        </div>
        </MDBListGroup>
 </div>
    )
    }
    }
    
}

