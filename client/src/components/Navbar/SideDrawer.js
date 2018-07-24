import React from "react";
import "./SideDrawer.css";
import firebase from "firebase";
import initialized from "../config/Authantification";

const SideDrawer = props =>{
    let drawerClass ="side-drawer";
    if(props.show){
        drawerClass = "side-drawer open";
    }
    return(
    <nav className={drawerClass} >
        <div><h2>One.Beer.Later</h2></div>
        <hr/>
        <ul>
            <li><a href="/login">Home</a></li>
            <li><a href="/afterwork">After Work</a></li>
            <li><a href="/"><div onClick={() =>{ firebase.auth().signOut(),
              localStorage.removeItem("name")}} >
              Log Out</div></a></li>                     
        </ul>
    </nav>
    );
};
export default SideDrawer