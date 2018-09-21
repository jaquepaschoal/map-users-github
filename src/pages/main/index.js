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
import Error from "../../components/Error";

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
        latitude: -46.5282,
        longitude: -22.9356,
        src: "https://avatars3.githubusercontent.com/u/28562703?v=4"
      },
      {
        latitude: -23.5439,
        longitude: -46.6065,
        src: "https://avatars3.githubusercontent.com/u/28562703?v=4"
      }
    ],
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -46.5282,
      longitude: -22.9356,
      zoom: 8
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

  removeUser = e => {
    const id = e.target.id;
    this.props.removeUser(Number(id));
  };

  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    // console.log(`Latitude: ${latitude} \nLongitude: ${longitude}`);

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
        {this.props.users.error && <Error />}

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
            teste={this.props.users.error}
          />
        )}
        <Sidebar>
          {this.props.users.data.map(user => {
            return (
              <User
                remove={this.removeUser}
                id={user.id}
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
          {this.state.markers.map(marker => {
            return (
              <Marker
                key={marker.latitude}
                latitude={marker.latitude}
                longitude={marker.longitude}
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
