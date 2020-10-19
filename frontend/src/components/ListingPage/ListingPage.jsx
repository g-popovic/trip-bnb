import React from 'react';
import BookNowSection from './BookNowSection';

export default function ListingPage() {
	return (
		<>
			<div className="background-image"></div>
			<div className="search-section-wrapper search-section-wrapper-active">
				<div className="search-section listing">
					<div className="row">
						<div
							id="carouselExampleIndicators"
							class="carousel slide col-lg-8 col-12"
							data-ride="carousel"
							data-interval="false">
							<ol class="carousel-indicators">
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="0"
									class="active"></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="1"></li>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img
										src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200"
										class="d-block w-100"
										alt="..."
									/>
								</div>
								<div class="carousel-item">
									<img
										src="https://a0.muscache.com/im/pictures/16fea089-1b30-48f9-ab64-8e7eb19bf742.jpg?im_w=960"
										class="d-block w-100"
										alt="..."
									/>
								</div>
								<div class="carousel-item">
									<img
										src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200"
										class="d-block w-100"
										alt="..."
									/>
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="prev">
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="next">
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
						<div className="col-lg-4 col-12">
							<h2>Amazing apartment with awesome view</h2>
							<u className="listing-location text-muted text-medium overflow-hidden text-truncate">
								Budva, Montenegro
							</u>
							<BookNowSection />
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-12 col-lg-7 listing-description">
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
							<div className="listing-map">Map</div>
						</div>
						<div className="col-12 col-lg-5">
							<div className="listing-map">Ads</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
