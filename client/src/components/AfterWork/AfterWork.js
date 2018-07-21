import React, { Component } from 'react';
import axios from "axios";
import "./AfterWork.css";
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
      eventBar:{},
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
  // ==================Event Bar bar==============
      axios.get("api/beerbars").then(bars=>{
        console.log(bars.data[0])
        this.setState({
          eventBar:bars.data[1]
        })
      })
      console.log(this.state)
      
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
          <div className="after-work" style={{textAlign:"center"}}>
          <Grid>
            <Cell col={12} >
                <h2 style={{color:"#fff", fontFamily:"cursive"}}>DE-STRESS YOURSELF</h2>
                <h3 style={{color:"#fff",fontFamily:"impact"}}><span>Date:</span>  Friday, 07 - 27 - 2018</h3>
                <h3 style={{color:"#fff",fontFamily:"impact"}}><span>Time:</span>  4pm - 10pm</h3>  
            </Cell>
            <Cell col={8}>
              <hr style={{border:"3px solid orange"}}/>
              <Grid style={{border:"3px solid #000",background:"orange"}}>
                <Cell col={6} style={{border:"3px solid #000", background:"#fff"}}>
                <h4 style={{fontFamily:"impact"}}>{this.state.eventBar.name}</h4>
                
                <hr style={{height: "5px"}}/>
                <img src="https://igx.4sqi.net/img/general/600x600/462633803_lQNbyjnl1mFNQfhslv2ByRRI2ayua5BhseIfYirrLwA.jpg" style={{height:"150px", width:"75%"}}/>
                <div style={{textAlign:"left", margin:"0 20px", lineHeight:"1px"}}>
                  <h6><span>Business Type:</span>  {this.state.eventBar.status}</h6>                
                  <h6> <span>Address:
                    </span> {this.state.eventBar.street +" "+this.state.eventBar.city + ", " + this.state.eventBar.state + " " + this.state.eventBar.zip}
                  </h6>
                  <h6><span>Contact:</span> {this.state.eventBar.phone}</h6>
                  <h6><a href={`http://www.${this.state.eventBar.url}`}> Visit Website</a></h6>
                  <h6><a href={this.state.eventBar.reviewlink}> Map</a></h6>
                  
                </div>          
                </Cell>
                
                <Cell col={6} style={{border:"3px solid #000", background:"#fff"}}>
                  <h4 style={{fontFamily:"impact"}}>Special Offers</h4>
                  <hr style={{height: "5px", color:"orange"}}/>
                </Cell>
              </Grid>

            </Cell>

            <Cell col={4}>
            
              <div>
                <hr style={{border:"3px solid orange"}}/> 
                <h3 style={{color:"#fff"}}>PEOPLE YOU WILL MEET</h3>
                <button className="joing-event" onClick={this.attendingAfterWork }>Attend Event</button>
                <button className="joing-event" onClick={this.leaveAttenders}>Leave Event</button>
                <div className="attenders-number">
                  <h2 style={{color:"orange"}}>{this.state.count}</h2>
                </div>
              </div>
              {this.state.attenders.map(attender=>(
              <div className="attenders" key={attender._id}>
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