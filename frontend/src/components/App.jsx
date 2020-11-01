import React from 'react';
import ListingPage from './Listing/ListingPage';
import SearchPage from './Search/SearchPage';
import AddPropertyPage from './AddProperty/AddPropertyPage';
import LoginPage from './Login/LoginPage';
import MyBookingsPage from './MyBookings/MyBookingsPage';
import DashboardPage from './Dashboard/DashboardPage';
import ProfilePage from './Profile/ProfilePage';
import Navbar from './Misc/Navbar';

export default function App() {
	return (
		<>
			<Navbar />
			<AddPropertyPage />
		</>
	);
}
