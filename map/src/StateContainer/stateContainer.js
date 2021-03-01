import React, { Component } from "react";
import Map from '../Map/map.js';

class StateContainer extends Component {
    state = {
        lat: 42.2808,
        lng: -83.7430,
        zoom: 14,
        value: '',
    }

    componentDidMount() {
        //call the api on mount to display default map
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + this.state.lat + "&lon=" + this.state.lng + "&appid=c3b781a7de141c8e06094287b67539ce&units=imperial")
            .then(function (res) {
                // console.log(res.json())
                return res.json();
            })
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        console.log('A city was submitted: ' + this.state.value);
        event.preventDefault();
        //call the weather api and get the data by city that was entered.
        //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.value + "&appid=c3b781a7de141c8e06094287b67539ce&units=imperial")
            .then((response) => response.json())
            .then(data => {
                this.setState({ lat: data.coord.lat, lng: data.coord.lon });
            });
    }



    render() {
        const position = [this.state.lat, this.state.lng];
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