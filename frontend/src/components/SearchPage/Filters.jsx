import React from 'react';

export default function Filters() {
	return (
		<form class="form-row">
			<div class="col-lg-4 mb-3">
				<label for="validationCustom03">Location</label>
				<input
					type="text"
					placeholder="Location"
					class="form-control"
					id="validationCustom03"
				/>
			</div>
			<div class="col-lg-2 col-6 mb-3">
				<label for="validationCustom04">Check In</label>
				<input
					type="date"
					placeholder="Choose"
					class="form-control"
					id="validationCustom03"></input>
			</div>
			<div class="col-lg-2 col-6 mb-3">
				<label for="validationCustom04">Check Out</label>
				<input
					type="date"
					placeholder="Choose"
					class="form-control"
					id="validationCustom03"></input>
			</div>
			<div class="col-lg-1 col-3 mb-3">
				<label for="validationCustom04">Min $$</label>
				<input
					type="number"
					placeholder="0"
					class="form-control"
					id="validationCustom03"></input>
			</div>
			<div class="col-lg-1 col-3 mb-3">
				<label for="validationCustom04">Max $$</label>
				<input
					type="number"
					placeholder="0"
					class="form-control"
					id="validationCustom03"></input>
			</div>
			<div class="col-lg-2 col-6 mb-3">
				<label for="validationCustom04" style={{ opacity: 0 }}>
					.
				</label>
				<button
					type="submit"
					class="form-control btn btn-primary"
					id="validationCustom03">
					Search
				</button>
			</div>
		</form>
	);
}
