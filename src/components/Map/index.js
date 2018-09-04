import React, { Component } from "react";
import {} from "./style";

class Map extends Component {
  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);

    this.setState({
      showModal: true
    });
  }

  render() {
    <MapGL
      {...this.state.viewport}
      onClick={this.handleMapClick}
      mapStyle="mapbox://styles/mapbox/basic-v9"
      mapboxApiAccessToken={
        "pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
      }
      onViewportChange={viewport => this.setState({ viewport })}
    >
      <Marker
        latitude={-23.5439948}
        longitude={-46.6065452}
        onClick={this.handleMapClick}
        captureClick={true}
      >
        <img
          style={{
            borderRadius: 100,
            width: 48,
            height: 48
          }}
          src="https://avatars2.githubusercontent.com/u/2254731?v=4"
          alt="alt"
        />
      </Marker>
    </MapGL>;
  }
}

export default Map;
