import React from 'react';
import Map, { Search } from '../Misc/Map';

export default function ListingPage() {
	return (
		<>
			<div className="background-image"></div>
			<div className="search-section-wrapper search-section-wrapper-active">
				<div className="search-section add-property">
					<h1 className="text-center mb-5">Create Property</h1>
					<div className="row">
						<div className="col-12 col-lg-7 col-xl-6">
							<label for="title">Location of Property:</label>
							{/* <Search /> */}
							<br />
							<div className="row mb-3">
								<div className="col-8">
									<label for="title">Title of Property:</label>
									<input
										name="title"
										id="title"
										type="text"
										autoComplete="off"
										className="form-control property-title-input"
										placeholder="Property Title"
										aria-label="Property Title"
									/>
								</div>
								<div className="col-4">
									<label for="title">Price Per Night</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span
												class="input-group-text"
												id="basic-addon1">
												$
											</span>
										</div>
										<input
											name="price"
											id="price"
											type="number"
											className="form-control property-price-input"
											placeholder="Price"
											aria-label="Price"
										/>
									</div>
								</div>
							</div>

							<label for="description">Description of Property:</label>
							<textarea
								name="description"
								id="description"
								type="text"
								className="form-control property-description-input"
								rows="7"
								placeholder="Property Description"
								aria-label="Property Description"
							/>
							<br />
						</div>
						<div className="col-12 col-lg-5 col-xl-6 text-center">
							<h2>Images Go Here</h2>
							<h5>I think...</h5>
							<div className="add-property-map">
								<Map adjustable />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
