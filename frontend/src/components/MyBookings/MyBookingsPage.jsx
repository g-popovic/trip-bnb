import React, { useState } from 'react';
import BookedProperty from './BookedProperty';

export default function DashboardPage() {
	return (
		<>
			<div className="background-image"></div>
			<div className="search-section-wrapper search-section-wrapper-active">
				<div className="page-container">
					<h1>My Bookings</h1>

					<hr className="mt-4 mb-4" />

					<div className="row my-listing-containers">
						<BookedProperty stayed />
						<BookedProperty />
						<BookedProperty />
						<BookedProperty />
					</div>
				</div>
			</div>
		</>
	);
}
