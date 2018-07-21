import React, { Component } from 'react';
import ApptRouter from "./components/AppRouter"
import Navbar from "./components/Navbar";
import SideDrawer from "./components/Navbar/SideDrawer";
import BackDrop from "./components/Navbar/BackDrop";

class App extends Component {
  state = {
    sideDrawerOpen:false
  }

drawerTogglerHandler = ()=>{
 this.setState((previosState)=>{
   return {sideDrawerOpen: !previosState.sideDrawerOpen};
 })

}

backDropHandler = ()=>{
  this.setState({sideDrawerOpen:false})
}

  render() {
    // let sideDrawer;
    let backDrop;
    if(this.state.sideDrawerOpen){
      // sideDrawer = <SideDrawer/>;
      backDrop = <BackDrop click={this.backDropHandler}/>;
    } 
    return (
      <div className="App">
          <Navbar drawerClickHandler={this.drawerTogglerHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
          <ApptRouter/>
          
      </div>
    );
  }
}

export default App;
