import React from 'react';
import Chart from './Chart';

export default function DashboardPage() {
	return (
		<>
			<div className="background-image"></div>
			<div className="search-section-wrapper search-section-wrapper-active">
				<div className="search-section">
					<h1>Earnings Overview</h1>

					<hr className="mt-3 mb-3" />

					<label htmlFor="cars" className="mr-2">
						Density:
					</label>
					<select name="cars" id="cars">
						<option value="volvo">Daily</option>
						<option value="saab">Weely</option>
						<option value="mercedes">Monthly</option>
					</select>
					<div className="chart-container">
						<Chart />
					</div>

					<hr className="mt-3 mb-3" />

					<h4 className="mb-3">My Property</h4>
					<div className="input-group mb-3 search-by-name">
						<input
							type="text"
							className="form-control"
							placeholder="Property Name"
							aria-label="Property Name"
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button
								className="btn btn-primary"
								type="submit"
								id="button-addon2">
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
