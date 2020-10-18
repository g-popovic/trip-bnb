import React, { useEffect, useState } from 'react';
import Navbar from '../Misc/Navbar';
import Listing from './Listing';
import Filters from './Filters';

export default function LandingPage() {
	const [test, setTest] = useState(false);

	function searchListings(e) {
		e.preventDefault();
		setTest(true);
	}

	return (
		<>
			<div className="background-image"></div>
			<div
				className={
					'search-section-wrapper' +
					(test ? ' search-section-wrapper-active' : '')
				}>
				<div className="search-section">
					<Filters />
					<div className="row">
						<div className="listings col-lg-8 col-12">
							<Listing />
							<Listing />
							<Listing />
							<Listing />
						</div>
					</div>

					<nav aria-label="Page navigation example">
						<ul className="pagination justify-content-center">
							<li className="page-item disabled">
								<a
									className="page-link"
									href="#"
									tabindex="-1"
									aria-disabled="true">
									Previous
								</a>
							</li>
							<li className="page-item active">
								<a className="page-link" href="#">
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									Next
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<Navbar />
			<form
				onSubmit={searchListings}
				className={
					'landing-page-wrapper' +
					(test ? ' landing-page-wrapper-hidden' : '')
				}>
				<h1 className="text-light">
					Where are <br className="d-lg-none" />
					you going?
				</h1>
				<br />
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Search Location"
						aria-label="Search Location"
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
			</form>
		</>
	);
}
