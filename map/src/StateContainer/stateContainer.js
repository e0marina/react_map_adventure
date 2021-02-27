import React, { Component } from "react";
import Map from '../Map/map.js';


//to do: on load, have weather api called with the lat and long
class StateContainer extends Component {
    state = {
        lat: 42.2808,
        lng: -83.7430,
        zoom: 14,

    }
    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + this.state.lat + "&lon=" + this.state.lng + "&appid=c3b781a7de141c8e06094287b67539ce&units=imperial")
            .then(function (res) {
                // console.log(res.json())
                return res.json();
            }).then(function (data) {
                console.log(data)
            })
    }


    render() {
        const position = [this.state.lat, this.state.lng]

        return (
            <div>
                <Map position={position} zoom={this.state.zoom} />
            </div>

        );
    }
}
export default StateContainer;