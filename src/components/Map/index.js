import React, { useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './index.css';
import users from '../../data/users';
import L from 'leaflet';
import PopoverContent from "../PopoverContent";

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

	return (
		<Map center={position} zoom={state.zoom} zoomControl={false}>
			<TileLayer
				attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
				id="light-v10"
				accessToken="pk.eyJ1IjoiYmVya2VyZGVtaXJlciIsImEiOiJjazF3aHlxNDQwMXVyM2pwbW5zMjI1Z3BzIn0.m-xrbIqHg-s-hl3lqZcXSw"
			/>
			{Object.values(users).map((user, index) => {
				const img = `<img src="${user.avatar}" alt="icon" style="height: 40px;
                 width: 40px;
                  border-radius: 50px;
                  border: 2px solid ${user.current?'#3388ffdb':'green'};"/>`;

				const customMarker = L.divIcon({
					className: 'image-icon',
					html: img,
					iconSize: [40, 40],
				});

				return (
					<span key={index}>
						{' '}
						<Marker position={[user.location.lat, user.location.lng]} icon={customMarker}>
							<Popup>
								<PopoverContent user={user}/>
							</Popup>
						</Marker>
					</span>
				);
			})}
		</Map>
	);
}
export default Map2;
