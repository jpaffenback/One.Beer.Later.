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
    // localStorage.setItem("currentUser",user);
    // const value = localStorage.getItem("currentUser");
    // console.log(value)
    
      // const currentUser = JSON.parse(value);
      // console.log(currentUser)
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
          {/* <h1>Loged In!</h1> */}
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