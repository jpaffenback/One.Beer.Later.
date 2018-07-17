import React, { Component } from 'react';
import "./AfterWork.css"
import Navbar from "../Navbar";
import firebase from "firebase";
import initialized from "../config/Authantification";
import {Grid, Cell} from "react-mdl";


class AfterWork extends Component{

state={
      name:"",
      email:"",
      photo:"",
      userId:"",
      count:0
   
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
    const value = localStorage.getItem("userProfile");
    const retrievedUserProfile =JSON.parse(value);
    console.log(retrievedUserProfile)
    this.setState({
        name:retrievedUserProfile.name,
        email:retrievedUserProfile.email,
        photo:retrievedUserProfile.image,
        userId:retrievedUserProfile.userId
      });

      console.log(this.state)
}

attendingAfterWork =event=>{
  event.preventDefault();
  const value = localStorage.getItem("userProfile");
  const retrievedUserProfile =JSON.parse(value);
    console.log(retrievedUserProfile)
  this.setState({count: this.state.count +1})
}
leaveAttenders =event=>{
  event.preventDefault();
  this.setState({count: this.state.count -1})
}

  render(){
    return(

        <div>
          <Navbar/>
          <div className="after-work" style={{textAlign:"center"}}>
          <Grid>
            <Cell col={12} >
                <h2 style={{color:"maroon", fontFamily:"cursive"}}>DE-STRESS YOURSELF</h2>
            </Cell>
            <Cell col={8}>
              <h3>Hosting Bar</h3>
              <hr style={{border:"3px solid black"}}/>
              <Grid style={{border:"3px solid #000",background:"maroon"}}>
                <Cell col={6} style={{border:"3px solid #000", background:"#fff"}}>
                <h4>Bar Name</h4>
                <hr style={{height: "5px"}}/>
                <img src="https://cdn.pixabay.com/photo/2013/11/12/01/29/bar-209148_960_720.jpg" style={{width:"100%",height:"300px"}}/>
                </Cell>
                
                <Cell col={6} style={{border:"3px solid #000", background:"#fff"}}>
                  <h4>Special Offers</h4>
                  <hr style={{height: "5px"}}/>
                </Cell>
              </Grid>

            </Cell>

            <Cell col={4}>
            
              <div>
                <h3>Attending</h3>
                <hr style={{border:"3px solid black"}}/>
                <button className="joing-event" onClick={this.attendingAfterWork }>Attend Event</button>
                <button className="joing-event" onClick={this.leaveAttenders}>Leave Event</button>
                <div className="attenders-number">
                  <h2>{this.state.count}</h2>
                </div>
              </div>
              <div>
                
                <p>Attending</p>
                <p>Attending</p>
                <p>Attending</p>
                <p>Attending</p>
                <p>Attending</p> 
              </div>
           
            </Cell>
          </Grid>
          </div>
          
        </div>
    )
  }
}

export default AfterWork;