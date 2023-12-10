import React from "react";
import { Container, Col } from "react-bootstrap";
import Line from "../components/Line";
import phone from '../img_beaute/phone.png'
import mail from '../img_beaute/mail_icon.png'

export default function Contact() {

	const phoneNumber = '+389726157';
	const handlePhoneClick = () => {
		console.log("phone number clicked")
	}
	return (
		<>
		<Container fluid className="wrapper">
		<h1>Contact</h1>
		<Line/>
		<div className="contacts">
		<h2>Prendre rendez-vous</h2><br/>
		<h5>Téléphone: 03 89 72 61 57</h5><br/>
		<h5>Cliquez pour appeler</h5>
		<a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>
			<img
				src={phone}
				alt="phone"
				width="40"
				height="40"
				className="phone"
			/>
		</a>
		<h5>OU</h5>
		<h5>Envoyez un E-mail</h5>
		<a href="mailto:charmeetbeaute.68@gmail.com">
		<img
				src={mail}
				alt="mail"
				width="40"
				height="40"
				className="mail"
			/>
		</a>
			<h2>Vous pouvez nous trouver</h2>
			<Col>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.5537721916853!2d7.543574376417651!3d48.041644571233086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47916cc4ad69df43%3A0x67d43bad24977b5!2sInstitut%20Charme%20et%20Beaut%C3%A9!5e0!3m2!1sfr!2sfr!4v1700926260260!5m2!1sfr!2sfr" 
				title="map"
				width="600" 
				height="450" 
				style={{border:"0"}} 
				allowfullscreen="" 
				loading="lazy" 
				referrerpolicy="no-referrer-when-downgrade"
				className="map">
				</iframe>
				</Col>
		</div>
		</Container>
		</>
	)
}