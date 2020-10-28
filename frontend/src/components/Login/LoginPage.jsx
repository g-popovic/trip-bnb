import React from 'react';

export default function LoginPage() {
	return (
		<>
			<div className="background-image"></div>
			<div className="search-section-wrapper search-section-wrapper-active">
				<div className="login-page search-section">
					<div className="d-flex justify-content-between align-items-end">
						<h3>TripBnb</h3>
						<h5 className="text-muted font-weight-light">
							Create Account
						</h5>
					</div>

					<div
						id="carouselExampleControls"
						class="carousel slide mt-4 mb-4"
						data-ride="carousel"
						data-interval="false">
						<div class="carousel-inner">
							<div class="carousel-item active">
								<label htmlFor="title">Username</label>
								<input
									name="title"
									id="title"
									type="text"
									autoComplete="off"
									className="form-control"
									placeholder="Username"
									aria-label="Username"
								/>
							</div>
							<div class="carousel-item">
								<label htmlFor="title">Email</label>
								<input
									name="title"
									id="title"
									type="text"
									autoComplete="off"
									className="form-control"
									placeholder="Username"
									aria-label="Username"
								/>
							</div>
							<div class="carousel-item">
								<label htmlFor="title">Password</label>
								<input
									name="title"
									id="title"
									type="password"
									autoComplete="off"
									className="form-control"
									placeholder="Username"
									aria-label="Username"
								/>
							</div>
						</div>
					</div>
					<div className="login-buttons">
						<a className="link">
							<u>Sign In</u>
						</a>
						<span>
							<a
								className="btn btn-outline-secondary mr-3"
								href="#carouselExampleControls"
								data-slide="prev">
								Back
							</a>
							<a
								className="btn btn-primary"
								href="#carouselExampleControls"
								data-slide="next">
								Next
							</a>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
