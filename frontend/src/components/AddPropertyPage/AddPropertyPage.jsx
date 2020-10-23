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
							<label htmlFor="title">Location of Property:</label>
							<Search />
							<br />
							<div className="row mb-3">
								<div className="col-12 col-lg-8">
									<label htmlFor="title">Title of Property:</label>
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
								<div className="col-12 col-lg-4">
									<br className="d-lg-none" />
									<label htmlFor="title">Price Per Night</label>
									<div className="input-group mb-3">
										<div className="input-group-prepend">
											<span
												className="input-group-text"
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

							<label htmlFor="description">
								Description of Property:
							</label>
							<textarea
								name="description"
								id="description"
								type="text"
								className="form-control property-description-input"
								rows="7"
								placeholder="Property Description"
								aria-label="Property Description"
							/>
							<br className="d-lg-none" />
						</div>
						<div className="col-12 col-lg-5 col-xl-6 text-center mt-lg-0 mt-3">
							<h4 className="text-left property-location-label">
								Where is your property?
							</h4>
							<div className="add-property-map">
								<Map adjustable />
							</div>
						</div>
					</div>
					<hr className="mt-4" />
					<div>
						<h4>
							Add Pictures{' '}
							<span className="font-weight-light text-muted">
								(up to 10 images)
							</span>
						</h4>
						<form className="mt-3 col-12 col-lg-5 add-picture-form">
							<label htmlFor="description">Image Link :</label>

							<div className="input-group">
								<input
									name="description"
									id="description"
									type="text"
									className="form-control"
									placeholder="https://image-link.com"
									autoComplete="off"
								/>
								<div className="input-group-append">
									<button
										className="btn btn-primary"
										type="submit"
										id="button-addon2">
										Add <strong>(0/3)</strong>
									</button>
								</div>
							</div>
						</form>
						<ul className="property-images">
							<li>
								<img src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200" />
							</li>
							<li>
								<img src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200" />
							</li>
							<li>
								<img src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200" />
							</li>
							<li>
								<img src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200" />
							</li>
							<li>
								<img src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200" />
							</li>
							<li>
								<img src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200" />
							</li>
							<li>
								<img src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200" />
							</li>
							<li>
								<img src="https://a0.muscache.com/im/pictures/faded4c4-e8f2-4978-8d1d-b9e4438d836a.jpg?im_w=1200" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
