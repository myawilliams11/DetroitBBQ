import React from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";

const DetroitCoords = {
  lat: 42.3314,
  lng: -83.0
};
const NearbyDetroitCoords = {
  lat: 42.4,
  lng: -83.0458
}

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: 400, height: 400 }}
        initialCenter={DetroitCoords}
        zoom={10}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"The marker`s title will appear as a tooltip."}
          name={"Current location"}
          position={DetroitCoords}
        />
        <Marker
          onClick={this.onMarkerClick}
          title={"The marker`s title will appear as a tooltip."}
          name={"Another Location"}
          position={NearbyDetroitCoords}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBO4We7vjQJVCfBtlMbqYbDNkQfLX8rIAk'
})(MapContainer);
