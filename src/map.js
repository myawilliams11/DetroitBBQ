import React from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";

const DetroitCoords = {
  lat: 42.3314,
  lng: -83.0
};
const NearbyDetroitCoords = {
  lat: 42.4,
  lng: -83.0458
};

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
          title={"Location 1"}
          name={"Monday - Thursday 11:00am - 9:00pm"}
          position={DetroitCoords}
        />
        <Marker
          onClick={this.onMarkerClick}
          title={"Location 2"}
          name={"Friday - Sunday 11:00am - 9:00pm"}
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
  apiKey: "AIzaSyBO4We7vjQJVCfBtlMbqYbDNkQfLX8rIAk"
})(MapContainer);


// export default class Form extends React.Component {
    
//   state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: ''
//   }

//   change = e => {
//       this.props.onChange({ [e.target.name]: e.target.value })
//       this.setState({
//           [e.target.name]: e.target.value
//       });
//   };

//   onSubmit = (e) => {
//       e.preventDefault()
//       // this.props.onSubmit(this.state);
//       this.setState({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: ''
//       });
//       this.props.onChange({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: ''
//       });
      
//   }

//   // render() {
//   //     return (
//   //         <Menu fixed='top' inverted>
//   //         <Container>
//   //           <Menu.Item as='a' header>
//   //             <Image size='mini' src='detroitbbq/src/bigkenlogo.png' style={{ marginRight: '1.5em' }} />
//   //             Big Ken's BBQ
//   //           </Menu.Item>
//   //           <Menu.Item as='a'>About</Menu.Item>
//   //           <Menu.Item as='a'>Order</Menu.Item>
//   //           <Menu.Item as='a'>Contact Us</Menu.Item>
      
      
      
//   //         </Container>
//   //       </Menu>

//       <div>
//           <h2>Contact Us!</h2>
//           <form>
//               <input 
//               name='firstName'
//               placeholder= 'First Name' 
//               value={this.state.firstName} 
//               onChange={e => this.change(e)} 
//               />
//               <br />
//               <input 
//               name='lastName'
//               placeholder= 'Last Name' 
//               value={this.state.lastName} 
//               onChange={e => this.change(e)} 
//               />
//               <br />
//               <input 
//               name='email'
//               placeholder= 'E-mail' 
//               value={this.state.email} 
//               onChange={e => this.change(e)} 
//               />
//               <br />
//               <input 
//               name='phone'
//               placeholder= 'Phone' 
//               value={this.state.phone} 
//               onChange={e => this.change(e)} 
//               />
//               <br />
//               <button onClick={e => this.onSubmit(e)}>Submit</button>
//           </form>
//       </div>
//       );
//   }
// }

// // return [
// //   <div key={1}>hello</div>,
// //   <div key={2}>world</div>
// // ]