
import React, { Component } from 'react';
import firebase from "firebase";
// import axios from "axios";
import CompiledLogins from "../CompiledLogins";
import "./SignUp.css";
// import Navbar from "../Navbar";

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedIn: false,
            username: "",
            email: "",
            profileImage: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png",
            password: "",
            userId:"",
            confirmPassword: ""
        }
        // firebase ==============================================
        this.uiConfig = {
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
            },
        };
        this.componentDidMount = () => {
            console.log("Mounted!")
            firebase.auth().onAuthStateChanged(user => {
                this.setState({ isSignedIn: !!user })
                const NewUser={
                    name: user.displayName,
                    image:user.photoURL ? (user.photoURL):("https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png"),
                    email:user.email,
                    userId:user.uid
                  }
                //   console.log(NewUser)
                  
                  if(this.state.isSignedIn === true){
                  localStorage.setItem("userProfile", JSON.stringify(NewUser))
                //   const value = localStorage.getItem("userProfile");
                //   const retrievedUserProfile =JSON.parse(value);
                //   this.setState({
                //     username: retrievedUserProfile.name,
                //     email: retrievedUserProfile.email,
                //     profileImage: retrievedUserProfile.image,
                //     userId:retrievedUserProfile.userId

                //   })
                //   console.log(retrievedUserProfile.name);
                //   console.log(retrievedUserProfile.email);  
                //   console.log(retrievedUserProfile.image);      
                //   console.log(retrievedUserProfile.userId);
                //   console.log(this.state);
                //   ;
                //   }else if(firebase.auth().signOut()){
                //     localStorage.removeItem("userProfile")
              
                  }



            })
        }
        this.handleInputsChanges = event => {
            const { target: { name, value } } = event;
            this.setState({ [name]: value });
        }
        this.handleSignUpSubmit = event => {
            event.preventDefault();


            const { username, password, confirmPassword, email } = this.state;
            const localUsername = username;
            // console.log(localUsername)
            if (password !== confirmPassword) {
                this.setState({
                    passwordErr: "Password does not match the confirm password"
                })
            } else {
                firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
                    .then(function (user) {
                        console.log(localUsername)
                        user.user.updateProfile({
                            displayName: localUsername,
                            photoURL:"http://i.dailymail.co.uk/i/pix/2016/11/15/01/3A6146F900000578-3936638-image-a-71_1479173478763.jpg"
                        })

                    });
                   
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.isSignedIn ?
                    (
                        <div>
                            <CompiledLogins/>
                        </div>
                    )
                    :
                    (
                        <div className="container-login100" >
                            <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title p-b-37">
                                        Sign Up
                        </span>
                                    <p className="passwordErr">{this.state.passwordErr}</p>
                                    <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
                                        <input className="input100" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInputsChanges} />
                                        <span className="focus-input100"></span>
                                    </div>

                                    <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
                                        <input className="input100" type="email" placeholder="example@example.com" name="email" required title="Must be a example.com email address" onChange={this.handleInputsChanges} />
                                        <span className="focus-input100"></span>
                                    </div>

                                    {/* ========================== */}
                                    <div className="wrap-input100 validate-input m-b-20" data-validate="Password">
                                        <input className="input100" placeholder="password" name="password" type="current password" value={this.state.password} onChange={this.handleInputsChanges} />
                                        <span className="focus-input100"></span>
                                    </div>

                                    <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
                                        <input className="input100" placeholder="Confirm Password" name="confirmPassword" type="password" value={this.state.matchedPassword} onChange={this.handleInputsChanges} />
                                        <span className="focus-input100"></span>
                                    </div>
                                    {/* =========================== */}

                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn" onClick={this.handleSignUpSubmit}>
                                            Sign Up
                            </button>
                                    </div>

                                    <div className="text-center">
                                        <ul>
                                            <li>
                                                <a href="/" className="txt2 hov1">Home</a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>

                    )}
            </div>
        );
    }
}

export default SignUp;

export let currentUser = firebase.auth().currentUser;
