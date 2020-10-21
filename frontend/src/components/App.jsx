import React from 'react';
import ListingPage from './ListingPage/ListingPage';
import SearchPage from './SearchPage/SearchPage';
import Navbar from './Misc/Navbar';

export default function App() {
	return (
		<>
			<Navbar />
			<SearchPage />
		</>
	);
}
