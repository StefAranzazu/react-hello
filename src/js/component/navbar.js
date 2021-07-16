import React from "react";

export function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex bd-highlight">
				<a className="navbar-brand flex-grow-1 " href="#">
					Start Bootstrap
				</a>

				<div className="d-flex justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
