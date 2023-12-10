import { Card, CardBody, CardImg, CardTitle, Container, Row, Col } from "react-bootstrap";
import soin_visage from '../img_beaute/soin_visage.jpg'
import soin_corps from '../img_beaute/soin_corps.jpg'
import makeup from '../img_beaute/makeup.jpeg'
import Line from "../components/Line";
import epilation from '../img_beaute/epilation.jpg'
import teinture from '../img_beaute/teinture.jpg'
import main from '../img_beaute/main.jpg'
import { Link } from 'react-router-dom'


export default function Prestation() {
	return (
		<>
		<Container fluid className="wrapper">
		<h1>Prestation & Tarif</h1>
		<Line/>
		<Row className="row-cols-xl-3 justify-content-sm-md-center">
			<Col className="col">
		<Card className="card" xs={12} sm={12} md={4}
		style={{width: '25rem', border: '2px solid #a69587', textDecoration: 'none'}}
		as={Link} to={"/soin_visage"}>
			<CardBody>
				<CardTitle className="title_text" 
				style={{fontSize: '25px'}}>Soins du visage</CardTitle>
				<CardImg src={soin_visage}/>
			</CardBody>
		</Card>
		</Col>
		<Col className="col"> 
		<Card className="card" xs={12} sm={12} md={4}
		style={{width: '25rem', border: '2px solid #a69587', textDecoration: 'none'}} 
		as={Link} to={"/soin_corps"}>
			<CardBody> 
				<CardTitle className="title_text" 
				style={{fontSize: '25px'}}>Soins du corps</CardTitle>
				<CardImg src={soin_corps}/>
			</CardBody>
		</Card>
		</Col>
		<Col className="col">
			<Card className="card" xs={12} sm={12} md={4}
			style={{width: '25rem', border: '2px solid #a69587', textDecoration: 'none'}} 
			as={Link} to={"/makeup"}>
			<CardBody>
				<CardTitle className="title_text" 
				style={{fontSize: '25px'}}>Maquillage</CardTitle>
				<CardImg src={makeup}/>
			</CardBody>
		</Card>
		</Col>
			<Col className="col">
		<Card className="card" xs={12} sm={12} md={4}
		style={{width: '25rem', border: '2px solid #a69587', textDecoration: 'none'}} 
		as={Link} to={"/epilation"}>
			<CardBody>
				<CardTitle className="title_text" 
				style={{fontSize: '25px'}}>Épilations</CardTitle>
				<CardImg src={epilation}/>
			</CardBody>
		</Card>
		</Col>
		<Col className="col">
		<Card className="card" xs={12} sm={12} md={4}
		style={{width: '25rem', border: '2px solid #a69587', textDecoration: 'none'}} 
		as={Link} to={"/teinture"}>
			<CardBody>
				<CardTitle className="title_text" 
				style={{fontSize: '25px'}}>Teintures</CardTitle>
				<CardImg src={teinture}/>
			</CardBody>
		</Card>
		</Col>
		<Col className="col">
		<Card className="card" xs={12} sm={12} md={4}
		style={{width: '25rem', border: '2px solid #a69587', textDecoration: 'none'}} 
		as={Link} to={"/onglerie"}>
			<CardBody>
				<CardTitle className="title_text" 
				style={{fontSize: '25px'}}>Beauté des mains & pieds</CardTitle>
				<CardImg src={main}/>
			</CardBody>
		</Card>
		</Col>
		</Row>
		</Container>
		</>
	)
}