import React, { useState } from 'react';
import { DayPickerRangeController } from 'react-dates';
import PriceRating from '../Misc/PriceRating';

export default function MyListing(props) {
	const [focused, setFocused] = useState(false);

	return (
		<div className="col-lg-3 col-12 p-2">
			<div className="card">
				<img
					src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200"
					className="card-img card-img-top"
					alt="..."
				/>

				<div className="card-body">
					<div>
						<h5 className="font-weight-normal">
							Amazing Apartment with Beautiful View
						</h5>
						<p className="text-muted">Posted 3 days ago</p>
					</div>

					<PriceRating price="35" />
				</div>
				<div className="d-flex">
					<button
						onClick={() => setFocused(true)}
						className="btn btn-primary mr-2 property-buttons">
						Bookings
					</button>
					<button className="btn btn-secondary property-buttons">
						Edit
					</button>
				</div>
				<div className={'my-property-calendar' + (focused ? ' active' : '')}>
					<DayPickerRangeController
						onOutsideClick={() => setFocused(false)}
						isDayHighlighted={date => date.day() === 6}
						keepOpenOnDateSelect={false}
					/>
				</div>
			</div>
		</div>
	);
}
