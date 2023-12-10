import { Container, Image, Row, Col } from "react-bootstrap";
import Line from '../components/Line.js'
import gift1 from '../img_cheque/Carte de visite.jpg'
import gift2 from '../img_cheque/Carte de visite2.jpg'
import gift3 from '../img_cheque/Carte de visite3.jpg'

export default function Cards() {
	return (
		<>
		<Container fluid className="wrapper">
		<h1>Cartes Cadeaux</h1>
		<Line/>
		<h6 style={{fontSize: "20px"}}>
		Faites plaisir en offrant une carte cadeau à vos proches en choisissant la prestation ou le montant désiré.</h6>
		<h6 style={{fontSize: "20px"}}>
		L'achat de cartes cadeaux à distance est également possible, n'hésitez pas à nous contacter pour plus de renseignements.</h6>
		<Row className="justify-content-center">
		<Col sm={12} md={6} lg={6} className="col-gift">
		<Image fluid
		className="gift"
		src={gift1}
		style={{width: "40rem"}}
		alt="gift1"/>
		</Col>
		<Col sm={12} md={6} lg={6} className="col-gift">
		<Image fluid
		className="gift"
		src={gift2}
		style={{width: "40rem"}}
		alt="gift2"/>
		</Col>
		<Col sm={12} md={6} lg={6} className="col-gift">
		<Image fluid
		className="gift"
		src={gift3}
		style={{width: "40rem"}}
		alt="gift3"/>
		</Col>
		</Row>
		</Container>
		</>
	)
}