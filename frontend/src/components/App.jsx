import React from 'react';
import ListingPage from './Listing/ListingPage';
import SearchPage from './Search/SearchPage';
import AddPropertyPage from './AddProperty/AddPropertyPage';
import LoginPage from './Login/LoginPage';
import DashboardPage from './Dashboard/DashboardPage';
import Navbar from './Misc/Navbar';

export default function App() {
	return (
		<>
			<Navbar />
			<DashboardPage />
		</>
	);
}
