import React, { Component } from "react";
import Map from '../Map/map.js';


//to do: have form where user can add their location
class StateContainer extends Component {
    state = {
        lat: 42.2808,
        lng: -83.7430,
        zoom: 14,
        value: '',

    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + this.state.lat + "&lon=" + this.state.lng + "&appid=c3b781a7de141c8e06094287b67539ce&units=imperial")
            .then(function (res) {
                // console.log(res.json())
                return res.json();
            }).then(function (data) {
                console.log(data);

            })
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        //console.log(this.state.value);
    }

    handleSubmit = (event) => {
        console.log('A city was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        const position = [this.state.lat, this.state.lng];
        // console.log(`Weather Data: ${this.state.weatherData}`);

        return (
            <div>
                <Map position={position} zoom={this.state.zoom} />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        City Weather Search:
                <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );
    }
}
export default StateContainer;