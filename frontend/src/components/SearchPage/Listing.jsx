import React from 'react';

export default function Listing() {
	return (
		<div className="card mb-3 listing">
			<div className="row no-gutters">
				<div className="col-md-5">
					<img
						src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200"
						className="card-img"
						alt="..."
					/>
				</div>
				<div className="col-md-7">
					<div className="card-body">
						<div>
							<h6>Amazing Apartment </h6>
							<p className="text-muted">Posted 3 days ago</p>
						</div>

						<div className="d-flex justify-content-between align-items-center">
							<p className="listing-rating">
								<svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									class="bi bi-star-fill"
									fill="#007BFF"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
								</svg>
								<span>4.92</span>
								<small className="text-muted">(18)</small>
							</p>

							<p className="card-text">
								<strong>$37</strong>
								<small className="text-muted">/ night</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
