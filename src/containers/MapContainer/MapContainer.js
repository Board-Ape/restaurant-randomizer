import React, {Component} from 'react';
import GoogleMapReact from 'google-maps-react';
import {connect} from 'react-redux';

export class MapContainer extends Component {
  render() {
    if(!this.props.location.length) {
      return(
        <div> Please Wait </div>
      )
    } else {
      return(
        <div className='google-map'>
          <GoogleMapReact
            defaultCenter={{lat: this.props.locatin[0].lat, lng: this.props.location[0].lng}}
            defaultZoom={10}>
          </GoogleMapReact>
        </div>
      )
    }
  }
}

export const mapStateToProps = (state) => {
 return{
   location: state.location
 }
}

export default connect(mapStateToProps, null)(MapContainer)
