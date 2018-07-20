import React, { Component } from 'react';
import './CompiledLogins.css';
import Login from "../Login";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar"
class CompiledLogins extends Component {
  state={
    username:"",
    email:"",
    password:"",
    isSignedIn:false
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

componentDidMount=()=>{
  firebase.auth().onAuthStateChanged(user=>{
    this.setState({isSignedIn:!!user});

    const storageUser={
      name: firebase.auth().currentUser.displayName,
      image:firebase.auth().currentUser.photoURL ? (firebase.auth().currentUser.photoURL):("https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png"),
      email:firebase.auth().currentUser.email,
      userId:firebase.auth().currentUser.uid
    }
    localStorage.setItem("currentUser",JSON.stringify(storageUser));
    const value = localStorage.getItem("currentUser");
    const retrievedUserProfile =JSON.parse(value);
 
  })
  
}

handleInputsChanges = event =>{
  const {target:{name, value}}= event;
  this.setState({[name]:value});
  console.log(event.target.value)
}
handleSinUpSubmit = event=>{
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
  .then((user)=>{
 
  console.log(firebase.auth().currentUser)
});
}

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ?
          (<div>
            <Navbar/>
          <SearchBar/>
          </div>
      ): 
      ( <div>
          <Login
            email ={this.state.email}
            password ={this.state.password}
            handleInputsChanges = {this.handleInputsChanges}
            handleSinUpSubmit = {this.handleSinUpSubmit}
            socialMediaLogins={
              <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth = {firebase.auth()}
            />}
          />
        </div>
        )}
      </div>
    );
  }
}

export default CompiledLogins;