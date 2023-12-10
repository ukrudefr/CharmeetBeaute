import React from "react";
import { Container } from "react-bootstrap";
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<div className="footer">
			<Container fluid className="container text-center">
					<h5 className="text-uppercase mb-4 font-weight-bold text-white">Institut Charme et Beauté</h5>
					<p> <FontAwesomeIcon icon={faCopyright}/>2023 - Tatiana Schmitt - Tous droits réservés</p>
			</Container>
		</div>
	)
}