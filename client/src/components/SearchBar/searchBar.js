import React, { Component } from "react";
import API from "../../Utils/API";
import {SimpleMap} from "../GoogleMap/map";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationSearch: "",
      locationAddress: "",
      data: [{lat: 33.7, lng: -84.4}]
    };
  }

  componentWillMount() {
    API.getLocationsData(this.state.locationSearch).then(res => {
      console.log(res.data);
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
      console.log(res.data);
      this.setState({ locationAddress });
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
        <input
          placeholder="Please search by city, state"
          value={this.state.locationSearch}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button
          className="btn-lrg"
          type="submit"
          value="SUBMIT"
          onClick={this.handleSubmit}
        />
        <SimpleMap locationsearch={this.state.locationSearch} mapdata={this.state.data} mapcenter={[this.state.data[0].lat, this.state.data[0].lng]} mapzoom={9}/>
      </div>
    );
  }
  onInputChange(locationSearch) {
    this.setState({ locationSearch });
    console.log(locationSearch);
  }
}
