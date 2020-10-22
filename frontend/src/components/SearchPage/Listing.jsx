import React from 'react';
import PriceRating from '../Misc/PriceRating';

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
							<h5 className="font-weight-normal">
								Amazing Apartment with Beautiful View
							</h5>
							<p className="text-muted">Posted 3 days ago</p>
						</div>

						<PriceRating price="35" />
					</div>
				</div>
			</div>
		</div>
	);
}
