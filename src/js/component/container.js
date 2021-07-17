import React from "react";
import { Card } from "./card";

export function Container() {
	return (
		<div className="card-group mx-auto justify-content-center">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}