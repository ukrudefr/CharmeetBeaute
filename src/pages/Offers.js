import React from "react"
import { Container, Image, Row, Col } from "react-bootstrap";
import Line from '../components/Line.js'
import offres1 from '../img_offres/soin_main.jpg'
import offres2 from '../img_offres/Aqua_Romantica.jpg'
import offres3 from '../img_offres/mains_vellours.jpg'
import offres4 from '../img_offres/Promo_Hiver_WEBSITE.jpg'
// import Snowfall from 'react-snowfall'

export default function Offers() {
	return (
		<>
			<Container fluid className="wrapper">
		<h1>Notre Offres d'Hiver</h1>
		<Line/>
		{/* <Snowfall className="snowfall"/> */}
		<Row>
		<Col>
		{/* <h3 style={{color: "#000", fontSize: "clamp(1.125rem, 0.875rem + 1.4286vw, 1.5rem)"}}>
		SOINS de BEAUTÉ en Hiver</h3> */}
		<Image 
		className="card"
		src={offres4}
		style={{width: "40rem", border: `none`}}
		alt="card1"/></Col>
		<Col><h3 style={{color: "#000", fontSize: "clamp(1.125rem, 0.875rem + 1.4286vw, 1.5rem)"}}>
		Coffret soin des mains 24€</h3>
		<Image 
		className="card"
		src={offres1}
		style={{width: "40rem", border: `none`}}
		alt="card1"/></Col>
		<Col><h3 style={{color: "#000", fontSize: "clamp(1.125rem, 0.875rem + 1.4286vw, 1.5rem)"}}>
		Aqua Romantica 62€</h3>
		<Image 
		className="card"
		src={offres2}
		style={{width: "40rem", border: `none`}}
		alt="card1"/></Col>
		<Col><h3 style={{color: "#000", fontSize: "clamp(1.125rem, 0.875rem + 1.4286vw, 1.5rem)"}}>
		Soin mains de velours 45€</h3>
		<Image 
		className="card"
		src={offres3}
		style={{width: "40rem", border: `none`}}
		alt="card1"/></Col>
		</Row>
		</Container>
		</>
	)
}