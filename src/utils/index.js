import L from 'leaflet';
import users from '../data/users'
import React from 'react';

let map;
let layerGroup;
const mapConfig = {
    minZoom: 4,
    attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoiYmVya2VyZGVtaXJlciIsImEiOiJjazF3aHlxNDQwMXVyM2pwbW5zMjI1Z3BzIn0.m-xrbIqHg-s-hl3lqZcXSw',
};

function init() {
    // create map
    const map = L.map('map').setView([27.825941, -82.711333], 15);
    // map.scrollWheelZoom.disable();
    map.setMaxBounds([[-90, -180], [90, 180]]);
    map.removeControl(map.zoomControl);
    map.doubleClickZoom.disable();
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', mapConfig).addTo(
        map,
    );

    return map;
}
export function renderMap() {
    if (!map) {
        map = init();
        layerGroup = L.layerGroup().addTo(map);
    }

    Object.values(users).map(user => {

        const img = `<img src="${user.avatar}" alt="icon" style="height: 40px;
            width: 40px;
            border-radius: 50px;
            border: 1px solid green;"/>`;

        const customMarker = L.divIcon({
            className: 'image-icon',
            html: img,
            iconSize: [40, 40],
        });
        const markerObj = L.marker([user.location.lat, user.location.lng], {icon: customMarker}).addTo(map);
        const item =
             `<div style="display: grid" >
               ${user.name}  is nearby 
                <button style="width: 90px;
                height: 30px;
                width: 100%;
                margin-top: 10px;
                background-color: #08a742;
                color: #fff;
                font-weight: 600;" id="person"> Get in Touch 
                </button> 
                
        </div>`;

        return markerObj.bindPopup(item);
    });

}
