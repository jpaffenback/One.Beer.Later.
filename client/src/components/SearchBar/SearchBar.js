import React, { Component } from "react";
import "./SearchBar.css";
import BarsLayout from "../BarsLayout";
import API from "../Utils/API";
import {GoogleMap} from "../GoogleMap/GoogleMap";
import {Grid, Cell} from "react-mdl";
import axios from "axios";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barsData:[],
      locationSearch: "",
      locationAddress: "",
      data: [{lat: 33.7, lng: -84.4}]
    };
  }

  componentWillMount() {
    API.getLocationsData(this.state.locationSearch).then(res => {
    });
  }

  handlePromises = (array, cb) => {
    const promises = array.map(async val => {
      return {
        data: await cb(val)
      };
    });
    return Promise.all(promises);
  };

  handleSubmit = () => {
    const locationAddress = [];

    API.getLocationsData(this.state.locationSearch).then(res => {
      res.data.forEach(latlng => {
        locationAddress.push(
          `${latlng.street}, ${latlng.city}, ${latlng.state}`
            .split(" ")
            .join("+")
        );
      });
      // console.log(res.data);
      
      // ==================Post bar==============
      // axios.post("api/beerbars", res.data).then(bars=>{
      //   console.log(bars)
      // })
      this.setState({ 
        locationAddress:locationAddress,
        barsData:res.data
       });
      this.handlePromises(this.state.locationAddress, API.getLatLng).then(
        geocodes => {
          console.log(geocodes);
          this.setState({
            data: geocodes.map(
              element => {
                  if(element.data.data.results[0]) {
                    return element.data.data.results[0].geometry.location
                  } else {
                      return "No geocode";
                  }
              }
            )
          })
        }
      );
    });
  };

  render() {
    return (
      <div className="search-bar">
        <Grid style={{textAlign:"center"}}>
          <Cell col={8}>
            <Grid >
              <Cell col={6} style={{margin:"auto", display:"flex",
              justifyContent: "space-between"
              }}>
              <input className="search-input"
              placeholder="Please search by city, state"
              value={this.state.locationSearch}
              onChange={event => this.onInputChange(event.target.value)}
              />
              <button
              className="search-btn"
              type="submit"
              value="SUBMIT"
              onClick={this.handleSubmit}
              >
              Submit
              </button>
              </Cell>
            </Grid>
            <GoogleMap 
            marker={this.state.data.barsData}
            locationsearch={this.state.locationSearch}
            mapdata={this.state.data} 
            mapcenter={[this.state.data[0].lat, 
            this.state.data[0].lng]} mapzoom={10}
            />
            </Cell>
            <Cell col={4} style={{height:"500px"}}>
              <h3 style={{fontFamily:"Permanent Marker", color:"#fff"}}>On Tap</h3>
              <div style={{height:"100%", overflow:"auto"}}>
                {this.state.barsData.map(bar=>(
                <div key={bar.id}>
                  <BarsLayout style={{margin:"10px auto"}}
                  barName={bar.name}
                  type={bar.status}
                  street={bar.street + " " + bar.city + ", "+ bar.state + " " + bar.country  + " " + bar.zip}
                  contact={bar.phone}
                  url={`http://www.${bar.url}`} 
                  />
                </div>
              ))}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
  onInputChange(locationSearch) {
    this.setState({ locationSearch });
    // console.log(locationSearch);
  }
}