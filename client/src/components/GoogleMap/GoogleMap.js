import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/marker";

// user input from searchBar

export const SimpleMap = props => {
    return (
      <div className="container" style={{ height: "450px", width: "650px", border:"3px solid black", marginTop: "300px"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBEukmwsUv1F_9RUGjfBDY_xcBLgCdLnag" }}
          center={props.mapcenter}
          zoom={props.mapzoom}
        >
          {props.mapdata.map((data, i) => (
            <Marker key={i} lat={data.lat} lng={data.lng} text={"marker"} />
          ))}
        </GoogleMapReact>
      </div>
    );
}