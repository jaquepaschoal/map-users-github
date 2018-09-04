import React, { Component } from "react";
// import PropTypes from "prop-types";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "../../store/ducks/users";

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
    userInput: "",
    markers: [
      {
        latitude: -23.5439948,
        longitude: -46.6065452,
        src: "https://avatars3.githubusercontent.com/u/28562703?v=4"
      }
    ],
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

  handleUser = e => {
    e.preventDefault();
    this.props.addUserRequest(this.state.userInput);
    this.setState({
      userInput: "",
      showModal: false
    });
  };

  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    // alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);

    this.setState({
      showModal: true,
      markers: [
        ...this.state.markers,
        {
          latitude: latitude,
          longitude: longitude,
          src: "https://avatars3.githubusercontent.com/u/28562703?v=4"
        }
      ]
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
            value={this.state.userInput}
            change={e => {
              this.setState({
                userInput: e.target.value
              });
            }}
            submit={this.handleUser}
          />
        )}
        <Sidebar>
          {this.props.users.data.map(user => {
            return (
              <User
                key={user.id}
                img={user.image}
                alt={user.username}
                name={user.named}
                user={user.username}
              />
            );
          })}
        </Sidebar>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            "pk.eyJ1IjoiamFxdWVwYXNjaG9hbCIsImEiOiJjamw2dGczcmUwaHRtM3ZydmVpYTY4b21xIn0.ZdO5svxNjpfqHR3DuTQ6HA"
          }
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {console.log(this.state.markers)}
          {this.state.markers.map(marker => {
            return (
              <Marker
                key={marker.latitude}
                latitude={marker.latitude}
                longitude={marker.longitude}
                onClick={this.handleMapClick}
                captureClick={true}
              >
                <img
                  style={{
                    borderRadius: 100,
                    width: 48,
                    height: 48
                  }}
                  src={marker.src}
                  alt="alt"
                />
              </Marker>
            );
          })}
        </MapGL>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
