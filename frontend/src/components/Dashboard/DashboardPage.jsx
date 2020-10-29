import React, { useState } from 'react';
import BarChart from './BarChart';
import MyProperty from './MyProperty';

export default function DashboardPage() {
	return (
		<>
			<div className="background-image"></div>
			<div className="search-section-wrapper search-section-wrapper-active">
				<div className="search-section">
					<h1>Earnings Overview</h1>

					<hr className="mt-4 mb-4" />

					<h4 className="mb-3">Earnings</h4>

					<div className="chart-container">
						<BarChart />
					</div>

					<hr className="mt-4 mb-4" />

					<h4 className="mb-3">My Property</h4>

					<div className="row my-listing-containers">
						<MyProperty calendar />
						<MyProperty />
						<MyProperty />
						<MyProperty />
					</div>
				</div>
			</div>
		</>
	);
}
