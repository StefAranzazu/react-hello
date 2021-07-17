import React from "react";

export function Jumbotron() {
	return (
		<div>
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-4">A Warm Welcome!</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque in ex nunc. Pellentesque lobortis purus mi,
						a condimentum eros fermentum et. Nulla ultrices magna
						congue sem pretium, sed gravida nisl malesuada.
						Curabitur et metus id metus blandit imperdiet at in
						lectus.
					</p>
					<p>
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Call to action!
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
