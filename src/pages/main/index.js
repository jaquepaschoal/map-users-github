import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Sidebar } from "./style";
import User from "../../components/User";
import Modal from "../../components/Modal";

class Main extends Component {
  constructor() {
    super();
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  state = {
    showModal: false,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    }
  };

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
      showModal: true,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: latitude,
        longitude: longitude,
        zoom: 14
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.showModal && (
          <Modal
            cancel={() => {
              this.setState({ showModal: true });
            }}
          />
        )}
        <Sidebar>
          <User />
          <User />
          <User />
        </Sidebar>
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
            />
          </Marker>
        </MapGL>
      </div>
    );
  }
}

export default Main;
