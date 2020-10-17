import React from 'react';
import Navbar from '../Misc/Navbar';

export default function LandingPage() {
	return (
		<>
			<div className="background-image"></div>
			<Navbar />
			<div className="landing-page-wrapper">
				<h1 className="text-light">
					Where are <br className="d-lg-none" />
					you going?
				</h1>
				<br />
				<div class="input-group mb-3">
					<input
						type="text"
						class="form-control"
						placeholder="Search Location"
						aria-label="Search Location"
						aria-describedby="button-addon2"
					/>
					<div class="input-group-append">
						<button
							class="btn btn-primary"
							type="button"
							id="button-addon2">
							Search
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
