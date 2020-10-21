import React, { useState } from 'react';
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
	lat: 43.7,
	lng: -79.4
};

export default function Map(props) {
	const [myMarker, setMyMarker] = useState({ lat: 43.7, lng: -79.4 });

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries: libraries
	});
	if (loadError) return <h3 className="text-center">Error Loading Map.</h3>;
	if (!isLoaded) return <h3 className="text-center">Loading Map...</h3>;

	return (
		<GoogleMap
			mapContainerStyle={mapContainerStyle}
			zoom={12}
			center={center}
			onClick={
				props.adjustable
					? e => setMyMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() })
					: null
			}>
			{!props.adjustable ? (
				(props.markers || []).map(markerInfo =>
					markerInfo.price ? (
						<PricedMarker markerInfo={markerInfo} />
					) : (
						<Marker
							position={{ lat: markerInfo.lat, lng: markerInfo.lng }}
						/>
					)
				)
			) : (
				<Marker position={{ lat: myMarker.lat, lng: myMarker.lng }} />
			)}
		</GoogleMap>
	);
}

function PricedMarker(props) {
	return (
		<Marker
			icon={{
				url: '/images/marker.svg',
				scaledSize: new window.google.maps.Size(45, 45),
				origin: new window.google.maps.Point(0, 0),
				anchor: new window.google.maps.Point(15, 15)
			}}
			label={{
				text: '$' + props.markerInfo.price,
				color: 'white',
				fontWeight: '500',
				fontSize: '1rem'
			}}
			position={{ lat: props.markerInfo.lat, lng: props.markerInfo.lng }}
		/>
	);
}
