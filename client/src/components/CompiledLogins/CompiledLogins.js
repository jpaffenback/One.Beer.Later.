import React, { Component } from 'react';
import './CompiledLogins.css';
import Login from "../Login";
import firebase from "firebase";
import Navbar from "../Navbar";
import SideDrawer from "../Navbar/SideDrawer";
import BackDrop from "../Navbar/BackDrop";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import SearchBar from "../SearchBar";

class CompiledLogins extends Component {
  state={
    username:"",
    email:"",
    password:"",
    LoginErrorMassage:"",
    isSignedIn:false,
    sideDrawerOpen:false
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
  drawerTogglerHandler = ()=>{
    this.setState((previosState)=>{
      return {sideDrawerOpen: !previosState.sideDrawerOpen};
    })
   
   }
   
  backDropHandler = ()=>{
    this.setState({sideDrawerOpen:false})
  }
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
 
  })
  
}

handleInputsChanges = event =>{
  const {target:{name, value}}= event;
  this.setState({[name]:value});
}
handleSinUpSubmit = event=>{
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
  .catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    console.log(errorCode)
    let errorMessage = error.message;
    console.log(errorMessage)   
    // this.setState({
    //   LoginErrorMassage:errorMessage
    // })
    // ...
  });
}

  render() {
    let backDrop;
    if(this.state.sideDrawerOpen){
      backDrop = <BackDrop click={this.backDropHandler}/>;
    } 
    return (
      <div className="compiled-login">
        {this.state.isSignedIn ?
          (<div>
          <Navbar drawerClickHandler={this.drawerTogglerHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
          <SearchBar/>
          </div>
      ): 
      ( <div>
          <Login
            err={this.state.LoginErrorMassage}
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