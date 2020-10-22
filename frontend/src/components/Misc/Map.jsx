import React, { useState } from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow
} from '@react-google-maps/api';
import PriceRating from './PriceRating';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng
} from 'use-places-autocomplete';
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption
} from '@reach/combobox';
import '@reach/combobox/styles.css';

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
	const [myMarker, setMyMarker] = useState(null);
	const [selected, setSelected] = useState(null);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries
	});

	const onMapClick = React.useCallback(
		props.adjustable
			? e => setMyMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() })
			: null,
		[]
	);

	const mapRef = React.useRef();
	const onMapLoad = React.useCallback(map => {
		mapRef.current = map;
	}, []);

	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
	}, []);

	if (loadError) return <h3 className="text-center">Error Loading Map.</h3>;
	if (!isLoaded) return <h3 className="text-center">Loading Map...</h3>;

	return (
		<>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={12}
				center={center}
				onClick={onMapClick}
				onLoad={onMapLoad}>
				{!props.adjustable ? (
					(props.markers || []).map(markerInfo =>
						markerInfo.price ? (
							<PricedMarker
								markerInfo={markerInfo}
								setSelected={setSelected}
							/>
						) : (
							<Marker
								position={{
									lat: markerInfo.lat,
									lng: markerInfo.lng
								}}
							/>
						)
					)
				) : !myMarker ? null : (
					<Marker position={{ lat: myMarker.lat, lng: myMarker.lng }} />
				)}

				{!selected ? null : (
					<InfoWindow
						position={{ lat: selected.lat, lng: selected.lng }}
						onCloseClick={() => setSelected(null)}>
						<div>
							<h5>Amazing apartment with awesome view!</h5>
							<PriceRating price={selected.price} />
						</div>
					</InfoWindow>
				)}
			</GoogleMap>
			<Search panTo={panTo} />
		</>
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
			onClick={() => props.setSelected(props.markerInfo)}
		/>
	);
}

export function Search({ panTo }) {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions
	} = usePlacesAutocomplete({
		requestOptions: {
			location: { lat: () => 43.653225, lng: () => -79.383186 },
			radius: 200 * 1000
		}
	});

	return (
		<Combobox
			onSelect={async address => {
				try {
					const results = await getGeocode({ address });
					const { lat, lng } = await getLatLng(results[0]);
					panTo({ lat, lng });
				} catch (err) {
					console.log(err);
				}
			}}>
			<ComboboxInput
				className="form-control"
				value={value}
				onChange={e => setValue(e.target.value)}
				disabled={!ready}
				placeholder="Find Location"
			/>
			<ComboboxPopover className="combobox-popover">
				<ComboboxList>
					{status === 'OK' &&
						data.map(({ id, description }) => (
							<ComboboxOption key={id} value={description} />
						))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
	);
}
