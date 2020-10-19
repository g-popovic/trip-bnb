import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

export default function BookNowSection() {
	const [focused, setFocused] = useState(false);
	const [dateSelected, setdateSelected] = useState(false);

	return (
		<div class="card text-center book-now-section">
			<div class="card-body">
				<div className="d-flex text-large justify-content-between align-items-center">
					<span>
						<strong>$37</strong>
						<small className="text-muted">/ night</small>
					</span>

					<span className="listing-rating">
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
					</span>
				</div>
				<DateRangePicker
					// startDate={moment()}
					// endDate={moment().date(26)}
					numberOfMonths={window.innerWidth < 600 ? 1 : 2}
					onDateChange={date => console.log(date)}
					focusedInput={focused}
					onFocusChange={focused => setFocused(focused)}
					isOutsideRange={() => false}
					// displayFormat="YYYY-MM-DD"
					// isDayBlocked={m => m.day() === 6 || m.day() === 0}
					// hideKeyboardShortcutsPanel
					// withPortal
					// withFullScreenPortal={window.innerWidth < 400}
				/>

				<button
					onClick={() =>
						// document
						// 	.getElementById('startDate')
						// 	.click()
						alert('hello')
					}
					class="btn btn-primary">
					Check Availability
				</button>
				{/* <div className="mt-3 d-flex text-large justify-content-between align-items-center">
										<span>Total:</span>
										<strong>$283</strong>
									</div> */}
			</div>
		</div>
	);
}
