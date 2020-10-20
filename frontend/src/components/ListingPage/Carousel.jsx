import React from 'react';

export default function Carousel() {
	return (
		<div
			id="carouselExampleIndicators"
			class="carousel slide"
			data-ride="carousel"
			data-interval="false">
			<ol class="carousel-indicators">
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to="0"
					class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
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
						src="https://a0.muscache.com/im/pictures/f0a0d382-2be8-4803-b8e5-f3a9576cc9b5.jpg?im_w=960"
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
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a
				class="carousel-control-next"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	);
}
