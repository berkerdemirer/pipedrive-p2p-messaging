import L from 'leaflet';

let map;
let layerGroup;
const mapConfig = {
    minZoom: 2,
    attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmVya2VyZGVtaXJlciIsImEiOiJjazF3aHlxNDQwMXVyM2pwbW5zMjI1Z3BzIn0.m-xrbIqHg-s-hl3lqZcXSw',
};

function init() {
    // create map
    const map = L.map('map').setView([20.505, -10.09], 3);
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
}