import React from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow
} from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
	width: '100%',
	height: '100%'
};
const center = {
	lat: 43.653,
	lng: -79.383
};

//
// TODO: Create custom marker with label
//

export default function Map() {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries: libraries
	});

	console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
	if (loadError) return <h3 className="text-center">Error Loading Map.</h3>;
	if (!isLoaded) return <h3 className="text-center">Loading Map...</h3>;

	return (
		<GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
			<Marker
				label={{ text: '$38', color: 'white', fontWeight: 'bold' }}
				position={{ lat: 43.653, lng: -79.383 }}
			/>
			{/* <Marker position={{ lat: 43.653, lng: -79.383 }} /> */}
		</GoogleMap>
	);
}
