import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Map(props) {
    console.log(props)
    return (
        <div>

            <MapContainer style={{ height: '1000px', width: '70%', }} center={props.position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>

    );
}

export default Map;
