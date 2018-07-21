import React, { Component } from 'react';
import "./BarsLayout.css";

class BarsLayout extends Component{

  render(){
    return(

        <div className="card">
          <img src="http://draftmag.com/wp-content/uploads/2016/07/Barrel-Republic-Paul-Body-006.jpg" alt="Avatar" style={{width:"100%"}}/>
          <div className="card-body" style={{fontSize:"10px"}}>
          <h6 style={{marginTop:"-2px"}}><span>Bussiness Name: </span>{this.props.barName}
          <span style={{fontSize:"11px", color:"gray",fontFamily:"aria"}}>({this.props.type})</span>
          </h6>
            <p><span>Address: </span>{this.props.street}</p>
            <p><span>Contact: </span>{this.props.contact}</p>
            <div className="card-btn-box">
              <button className="bar-link-btn"> <a href={this.props.url} target="_blank">Visit Bar</a> </button>
            </div>
          </div>
        </div>
    )
  }
}

export default BarsLayout;