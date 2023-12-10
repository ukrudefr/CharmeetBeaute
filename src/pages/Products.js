import React, { useState } from "react";
import Line from '../components/Line.js'
import jeunesse from '../img_produits/jeunesse.jpg'
import fermete from '../img_produits/fermeté.jpg'
import antiAge from '../img_produits/Longévité&antiAge.jpg'
import yeux from '../img_produits/SoinYeux-levre-cou.jpg'
import hydrat from '../img_produits/hydration.jpg'
import nutri from '../img_produits/nutrition.jpg'
import apaisement from '../img_produits/apaisement&douceur.jpg'
import purete from '../img_produits/pureté.jpg'
import eclat from '../img_produits/eclat.jpg'
import gommage from '../img_produits/gommages.jpg'
import demaquillant from '../img_produits/démaquillants.jpg'
import nettoyant from '../img_produits/nettoyants.jpg'
import homme from '../img_produits/soinHomme.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { Card, Col, Container, Row } from 'react-bootstrap'

const Products = () => {

	let images = [
		{
			id: 1,
			imgSrc: jeunesse,
		},
		{
			id: 2,
			imgSrc: fermete,
		},
		{
			id: 3,
			imgSrc: antiAge,
		},
		{
			id: 4,
			imgSrc: yeux,
		},
		{
			id: 5,
			imgSrc: hydrat,
		},
		{
			id: 6,
			imgSrc: nutri,
		},
		{
			id: 7,
			imgSrc: apaisement,
		},
		{
			id: 8,
			imgSrc: purete,
		},
		{
			id: 9,
			imgSrc: eclat,
		},
		{
			id: 10,
			imgSrc: gommage,
		},
		{
			id: 11,
			imgSrc: demaquillant,
		},
		{
			id: 12,
			imgSrc: nettoyant,
		},
		{
			id: 13,
			imgSrc: homme,
		}
	]

	const [model, setModel] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState('');
	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setModel(true);
	}
	

	return (
		<>
		<Container fluid className="wrapper">
		<h1>Notre Produits</h1>
			<Line/>
			<div className={model ? "model open" : "model"}>
			<img src={tempImgSrc} alt="" />
			<FontAwesomeIcon icon={faXmark} size="2x"  onClick={() => setModel(false)}/> 
		</div>
			<Row className="row-cols-xl-3 justify-content-md-center">
				{images.map((item, index)=> {
					return (
						<Col className="col">
						<Card className="card" xs={12} sm={4} md={4} 
						style={{width: '25rem', border: '2px solid #a69587'}} 
						key={index} onClick={() => getImg(item.imgSrc)}>
							<img src={item.imgSrc} style={{width:'100%'}} alt=""/>
							</Card>
							</Col>
					)
				})}
			</Row>
			
			</Container>
			</>
		)
	}

export default Products