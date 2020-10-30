import React from 'react';

export default function ProfilePage() {
	return (
		<>
			<div className="background-image"></div>
			<div className="search-section-wrapper search-section-wrapper-active">
				<div className="page-container profile-page">
					<h1>Profile</h1>
					<img
						className="host-image large mb-3 mt-3 mr-0"
						src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80"
					/>
					<label
						htmlFor="name"
						className="text-left d-block font-weight-500">
						Full Name
					</label>
					<input
						id="name"
						type="text"
						placeholder="Full Name"
						defaultValue="George Popovic"
						className="form-control mb-3"
					/>
					<label
						htmlFor="imgPath"
						className="text-left d-block font-weight-500">
						Profile Picture
					</label>
					<input
						id="imgPath"
						type="text"
						placeholder="Image URL"
						defaultValue="image-path"
						className="form-control mb-3"
					/>
					<label
						htmlFor="email"
						className="text-left d-block font-weight-500">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email"
						defaultValue="example@gmail.com"
						className="form-control mb-3"
					/>
					<label
						htmlFor="bio"
						className="text-left d-block font-weight-500">
						Short Bio
					</label>
					<textarea
						id="bio"
						placeholder="Write a short bio to introduce yourself to potential customers."
						defaultValue="Hi I'm George"
						rows="4"
						className="form-control mb-4"
					/>

					<div className="d-flex mb-3">
						<button className="btn btn-outline-dark mr-2 property-buttons">
							Discard
						</button>
						<button className="btn btn-primary property-buttons">
							Save
						</button>
					</div>
					<u
						data-toggle="collapse"
						data-target="#collapseExample"
						aria-expanded="false"
						style={{ cursor: 'pointer' }}>
						Reset Password
					</u>

					<div class="collapse mt-3" id="collapseExample">
						<div class="card card-body">
							<label
								htmlFor="password"
								className="text-left d-block font-weight-500">
								Old Password
							</label>
							<input
								id="password"
								type="password"
								placeholder="Old Password"
								className="form-control mb-3"
							/>

							<label
								htmlFor="newPassword"
								className="text-left d-block font-weight-500">
								New Password
							</label>
							<input
								id="newPassword"
								type="password"
								placeholder="New Password"
								className="form-control mb-4"
							/>

							<button className="btn btn-danger">
								Change Password
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
