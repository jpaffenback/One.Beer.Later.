import React, { Component } from "react";
import "./Navbar.css";
import ToggleDrawer from "./ToggleDrawer";
import firebase from "firebase";
import initialized from "../config/Authantification";

class Navbar extends Component {

  state = {
    isSignedIn: false,
    localStorageName: "",
    userProfilePicture: "",
    userDisplayName: "",
    userID: "",
    storageName:localStorage.getItem("name")
  }
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    }
  };

  componentDidMount = () => {
   this.updateState();
  }
  updateState = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user,
        userProfilePicture: user.photoURL,
        userDisplayName: user.displayName,
        userID: user.uid

      });
    })
  }

  render() {
    return (
      <header className="toolBar">
        <nav className="toolBar-navigation">
          <div className="toolBar-logo"><a href="/">One.Beer.Later.</a></div>
          <div className="spacer"></div>
          <div className="toolBar-links">
            <ul>
              <li><a href="/login">Home</a></li>
              <li><a href="/afterwork">After Work</a></li>
              <li style={{marginTop:"5px",paddingBottom:"-20px",textAlign:"center"}}>
                <img src={this.state.userProfilePicture ? this.state.userProfilePicture : require("../Images/profile-default.jpg")} alt="profiles" style={{ height: "50px", width: "50px" }} />
                <p style={{ color: "#fff", marginBottom:"0px" }}>{this.state.userDisplayName ? this.state.userDisplayName : localStorage.getItem("name")}</p>
             </li>              
              <li><a href="/"><div onClick={() =>{ firebase.auth().signOut(),
              localStorage.removeItem("name")}} >
              Log Out</div></a></li>
            </ul>
          </div> 
          <div className="toolBar-toggle-button">
            <ToggleDrawer click={this.props.drawerClickHandler}/>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar;