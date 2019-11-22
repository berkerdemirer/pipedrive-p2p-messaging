import React, {useEffect} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.css';
import users from '../../data/users'
import L from "leaflet";

function Map2() {

    useEffect(() => {
        //renderMap();
    }, []);
    const state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 15,
    };
    const position = [27.825941, -82.711333];

    return  <Map center={position} zoom={state.zoom} animate={true} >
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            Object.values(users).map((user,index) => {

                const img = `<img src="${user.avatar}" alt="icon" style="height: 40px;
                 width: 40px;
                  border-radius: 50px;
                  border: 1px solid green;"/>`;

                const customMarker = L.divIcon({
                    className: 'image-icon',
                    html: img,
                    iconSize: [40, 40],
                });

                return<span key={index}>  <Marker position={[user.location.lat, user.location.lng]} icon={customMarker}  >
                    <Popup>
                        <div style={{display: 'grid'}} >
                            {user.name}  is nearby
                            <button style={{width: '90px',
                                height: 30,
                                marginTop: 10,
                                backgroundColor: '#08a742',
                                color: '#fff',
                                fontWeight: 600}} id="person"> Get in Touch
                            </button>

                        </div>

                    </Popup>
                </Marker></span>
            })
        }

    </Map>

}
export default Map2;
