import React from "react";

export function Card() {
	return (
		<div>
			<div className="card" style="width: 18rem;">
				<img src="..." className="card-img-top" alt="..."></img>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque in ex nunc. Pellentesque lobortis purus mi,
						a condimentum eros fermentum et. Nulla ultrices magna
						congue sem pretium, sed gravida nisl malesuada.
					</p>
					<a href="#" className="btn btn-primary">
						Find out
					</a>
				</div>
			</div>
		</div>
	);
}
