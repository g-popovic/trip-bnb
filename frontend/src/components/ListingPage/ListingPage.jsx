import React, { useState } from 'react';
import BookNowSection from './BookNowSection';
import Carousel from './Carousel';
import Map from './Map';

export default function ListingPage() {
	const [test, setTest] = useState(false);

	return (
		<>
			<div
				className={
					'full-screen-carousel' +
					(test ? ' full-screen-carousel-active' : '')
				}>
				<Carousel />
				<button
					type="button"
					class="carousel-close btn btn-primary"
					onClick={() => setTest(false)}
					aria-label="Close">
					Close
				</button>
			</div>
			<div className="background-image"></div>
			<div className="search-section-wrapper search-section-wrapper-active">
				<div className="search-section listing">
					<h2 onClick={() => setTest(true)}>
						Amazing apartment with awesome view
					</h2>
					<p className="text-muted listing-title listing-location">
						Budva, Montenegro
					</p>
					<div className="d-block d-lg-none">
						<Carousel />
					</div>

					<div className="d-none d-lg-block container listing-images">
						<div className="row">
							<div className="col-lg-6">
								<img src="https://a0.muscache.com/im/pictures/16fea089-1b30-48f9-ab64-8e7eb19bf742.jpg?im_w=960" />
							</div>
							<div className="col-lg-6">
								<div className="row">
									<div className="col-6">
										<img src="https://a0.muscache.com/im/pictures/16fea089-1b30-48f9-ab64-8e7eb19bf742.jpg?im_w=960" />
									</div>
									<div className="col-6">
										<img src="https://a0.muscache.com/im/pictures/16fea089-1b30-48f9-ab64-8e7eb19bf742.jpg?im_w=960" />
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<img src="https://a0.muscache.com/im/pictures/16fea089-1b30-48f9-ab64-8e7eb19bf742.jpg?im_w=960" />
									</div>
									<div className="col-6">
										<img src="https://a0.muscache.com/im/pictures/16fea089-1b30-48f9-ab64-8e7eb19bf742.jpg?im_w=960" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="row">
						<Carousel />

						<div className="col-lg-6 col-12">
							<h2>Amazing apartment with awesome view</h2>
							<u className="listing-location text-muted text-medium overflow-hidden text-truncate">
								Budva, Montenegro
							</u>
						</div>
					</div> */}
					<hr />
					<div className="row">
						<div className="col-12 col-lg-8 listing-description">
							<section>
								<h3>About The Place</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor incididunt
									ut labore et dolore magna aliqua. Ut enim ad
									minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
									Duis aute irure dolor in reprehenderit in
									voluptate velit esse cillum dolore eu fugiat
									nulla pariatur. Excepteur sint occaecat cupidatat
									non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum. eu fugiat nulla
									pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</section>
							<hr />
							<section>
								{/* <h3>The Host</h3> */}
								<div className="host-basic-info">
									<img
										className="host-image"
										src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80"
									/>
									<span>
										<p>George Popovic</p>
										<p className="text-muted">
											Joined 3 months ago
										</p>
									</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor incididunt
									ut labore et dolore magna aliqua.
								</p>

								<ul className="host-contact-info">
									<li className="mb-3">
										<small>
											<strong>EMAIL: </strong>
										</small>
										<br />
										<u> example@email.com</u>
									</li>

									<li>
										<small>
											<strong>PHONE: </strong>
										</small>
										<br />
										<u> +382 69 397 895</u>
									</li>
								</ul>
							</section>
							<hr />
							<div className="listing-map">
								<Map />
							</div>
						</div>
						<div className="col-12 col-lg-4">
							<BookNowSection />

							{/* <div className="listing-map">Ads</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
