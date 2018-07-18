import React, { Component } from 'react';
import Navbar from "../Navbar";

import firebase from "firebase";
import initialized from "../config/Authantification";

class MapLayout extends Component{
  constructor(props){
    super(props)
    const value = localStorage.getItem("currentUser");
    const retrievedUserProfile =JSON.parse(value);
    this.state={
      name:retrievedUserProfile.name,
      email:retrievedUserProfile.email,
      photo:retrievedUserProfile.image,
      userId:retrievedUserProfile.userId
    }
   
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

  render(){
    return(

        <div>
          
          <Navbar/>
          <h1>Map Layout</h1>
          
        </div>
    )
  }
}

export default MapLayout;