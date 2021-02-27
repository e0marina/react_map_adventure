import React, { Component } from "react";
import Map from '../Map/map.js';



class StateContainer extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,

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