import React from "react";

export function Jumbotron() {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>
				</div>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</div>
	);
}
