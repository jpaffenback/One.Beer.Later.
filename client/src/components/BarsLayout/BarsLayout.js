import React, { Component } from 'react';
import "./BarsLayout.css";

class BarsLayout extends Component{

  render(){
    return(

        <div className="card">
          <img src="https://images.unsplash.com/photo-1515303900226-036e8b860207?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83b7b7ecf6d99a4b2742f825fe0d2cf4&auto=format&fit=crop&w=3450&q=80" alt="Avatar" style={{width:"100%"}}/>
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