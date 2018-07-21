
import React from "react";
import "./GoogleMap.css";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker";

// user input from searchBar

export const GoogleMap = props => {
    return (
      <div className="googleMap" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBEukmwsUv1F_9RUGjfBDY_xcBLgCdLnag" }}
          center={props.mapcenter}
          zoom={props.mapzoom}
        >
          {props.mapdata.map((data, i) => (
            <Marker key={i} lat={data.lat} lng={data.lng} text={"Bar"} />
          ))}
        </GoogleMapReact>
      </div>
    );
}