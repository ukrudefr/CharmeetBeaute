import React from "react";
import { Container } from "react-bootstrap";
import Line from "../../components/Line";
import { useNavigate } from "react-router";
import back from '../../img_beaute/back.png'

export default function Makeup() {

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<>
		<Container fluid className="wrapper">
			<h1>Maquillage</h1>
			<Line/>
			<button className="button" onClick={goBack}>
		<img
				src={back}
				alt="back"
				width="40"
				height="40"
			/>
		</button>
			<table>
				<tbody>
					<tr>
						<td>Maquillage jour</td>
						<td>30€</td>
					</tr>
					<tr>
						<td>Maquillage soir ou mariée</td>
						<td>37€</td>
					</tr>
					<tr>
						<td>Essai Maquillage</td>
						<td>25€</td>
					</tr>
					<tr>
						<td>Forfait Mariée : 
							<p>Soin Hydraclean 30min +<br/>épilation des sourcils +
								<br/>essai  maquilage + maquilage</p>
						</td>
						<td>95€</td>
					</tr>
				</tbody>
			</table>
		</Container>
		</>
	)
}