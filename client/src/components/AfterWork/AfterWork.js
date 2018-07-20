import React, { Component } from 'react';
import axios from "axios";
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
      attenders:[],
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
  // ===========================GET ATTENDER FROM DB ============
  axios.get("api/attending").then(attender=>{
    this.setState({
      count:attender.data.length,
      attenders:attender.data.reverse()
    })
  })

  // ==========================================
    const value = localStorage.getItem("currentUser");
    const retrievedUserProfile =JSON.parse(value);
    this.setState({
        name:retrievedUserProfile.name,
        email:retrievedUserProfile.email,
        photo:retrievedUserProfile.image,
        userId:retrievedUserProfile.userId
      });
}

attendingAfterWork =event=>{
  event.preventDefault();
  console.log(this.state.name)

  const storageName = localStorage.getItem("name")

  const value = localStorage.getItem("currentUser");
  const retrievedUserProfile =JSON.parse(value);

  let attender ={
    name:this.state.name ? this.state.name : storageName,
    image:retrievedUserProfile.image,
    authID:retrievedUserProfile.userId
  }

// ===========================POST ATTENDER TO DB =============
  axios.post("api/attending", attender).then(attender=>{
    console.log(attender.data)
    axios.get("api/attending").then(attender=>{
      this.setState({
        count:attender.data.length,
        attenders:attender.data.reverse()
      })
    })
   
  });
}

leaveAttenders =event=>{
  event.preventDefault();
  // this.setState({count: this.state.count -1})
  console.log(this.state.userId)
  axios.delete("api/leave",{data:{authID:this.state.userId}}).then(leave=>{
    axios.get("api/attending").then(attender=>{
      this.setState({
        count:attender.data.length,
        attenders:attender.data.reverse()
      })
    })
  })
  
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
              {this.state.attenders.map(attender=>(
              <div key={attender._id} style={{width:"75%",margin:"10px auto", background:"maroon", border:"1px solid #000", color:"#fff" }}>
                <h5>{attender.name}</h5>
              </div>
              ))}
           
            </Cell>
          </Grid>
          </div>
          
        </div>
    )
  }
}

export default AfterWork;