const axios = require("axios");

const mapController = {
  getLocationsData: address => {
    return axios.get(
      "http://beermapping.com/webservice/loccity/8684fff265b3f1d7bb304b9dd198b66d/" +
        address + "&s=json");
        console.log(address);
  },
  getLatLng: convert => {
    return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBEukmwsUv1F_9RUGjfBDY_xcBLgCdLnag")
    console.log(getLatLng);
  },
  getMarkerData: markers => {
      const marker = mapController.getLatLng(data).then(locations => {
          console.log(marker);
      })
  }







//   getLatLng: locationId => {
//     return axios.get(
//       "http://beermapping.com/webservice/locmap/8684fff265b3f1d7bb304b9dd198b66d/" +
//         locationId + "&s=json"
//     );
//   },
//   getMarkerData: addresses => {
//     const latlng = mapController.getLocationsData(addresses).then(locations => {
//       console.log('locationsdata',locations.data);
//       locations.data.map(element => {
//         mapController.getLatLng(element.id).then(data => {
//             console.log('getlatlng',data.data)
//           return { location: data.data } ;
//         }).catch(err => console.log(err));
//       });
//     });
//     return latlng;
//   }
};


module.exports = mapController;
