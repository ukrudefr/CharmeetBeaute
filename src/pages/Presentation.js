import { Container, Row, Image, Col } from "react-bootstrap";
import React from "react";
import img_home from '../img_beaute/present1.jpg'
import Line from "../components/Line";


export default function Presentation() {


	return (
		<>
		<Container fluid className="wrapper">
		<h1>Présentation</h1>
		<Line/>
			<Row className="d-flex justify-content-center">
				<Col xs={12} sm={4} md={6} lg={4}>
				<Image fluid src={img_home} alt="" style={{paddingTop: "50px"}}/>
				</Col>
				<Col xs={12} sm={4} md={6} lg={4}>
				<h4 style={{fontSize: "35px", color: "rgb(119, 109, 94)"}}>Charme et Beauté</h4>
				<p>L'institut Charme et Beauté est situé à Biesheim, dans le Haut-Rhin.</p>
				<p>Laura et Antonia, vous accueillent dans un espace de détente et de sérénité pour realiser tous vos soins du visage et corps,
				épilation, onglerie et maquillage.</p>
				<p>Nous proposons une large gamme de soin, allant des massages relaxant aux soins du visage personnalisés.</p>
				<p>Nous utilisons des produits de haute qualité pour vous offrir des résultats éclatants et apaisants.</p>
				<p>Profitez d'un moment de pur relaxation dans un cadre élégant et raffiné.</p></Col>
				</Row>
			<Row className="d-flex justify-content-center">
			<Col xs={12} sm={4} md={6} lg={4}>
			<h1>Horaires</h1>
			<Line/>
			<p className="hours">Lundi 08:30 - 11:30 et 13:30 - 17:30 / Mardi 10:00 – 18:00 / Mercredi fermeture / Jeudi 10:00 – 18:00 / Vendredi 09:00 - 11:30 et 13:30 - 18:00 / Samedi 08:00 – 12:30 </p>
		</Col>
		</Row>
		</Container>
		</>
	)
}