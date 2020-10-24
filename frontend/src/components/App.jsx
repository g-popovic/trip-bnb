import React from 'react';
import ListingPage from './ListingPage/ListingPage';
import SearchPage from './SearchPage/SearchPage';
import AddPropertyPage from './AddPropertyPage/AddPropertyPage';
import LoginPage from './LoginPage/LoginPage';
import Navbar from './Misc/Navbar';

export default function App() {
	return (
		<>
			<Navbar />
			<LoginPage />
		</>
	);
}
