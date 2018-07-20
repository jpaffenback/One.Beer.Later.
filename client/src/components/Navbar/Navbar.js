import React, { Component } from "react";
import "./Navbar.css";
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
    console.log(this.state)

   this.updateState();
   const value = localStorage.getItem("currentUser");
   // console.log(value)
   const retrievedUserProfile =JSON.parse(value);
   console.log(retrievedUserProfile)

  }
  updateState = () => {
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user)
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

      <ul className="topnav" style={{ padding: "0px 30px" }}>
        <li ><h2 className="active" href="#home" style={{ paddingTop: "30px" }} >One.Beer.Later</h2></li>
        <li className="right" onClick={() => firebase.auth().signOut()} style={{ color: "#fff", paddingTop: "20px" }}><a href="/login">Logout</a></li>
        <li className="right">
          <a href="#contact">
            <img src={this.state.userProfilePicture ? this.state.userProfilePicture : require("../Images/beer3.jpg")} alt="profiles" style={{ height: "50px", width: "50px" }} />
            <p style={{ color: "#fff" }}>{this.state.userDisplayName ? this.state.userDisplayName : this.state.storageName}</p>
          </a>
        </li>
        <li className="right" style={{ color: "#fff", paddingTop: "20px" }}><a href="/mitup">After Work</a></li>        
        <li className="right" style={{ color: "#fff", paddingTop: "20px" }}><a href="/map">Map</a></li>
        <li className="right" style={{ color: "#fff", paddingTop: "20px" }}><a href="/login">Home</a></li>


      </ul>
    )
  }
}

export default Navbar;