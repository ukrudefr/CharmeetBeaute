import React from "react";
import { Container } from "react-bootstrap";
import Line from "../../components/Line";
import { useNavigate } from "react-router";
import back from '../../img_beaute/back.png'

export default function Teinture() {

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<>
		<Container fluid className="wrapper">
			<h1>Teintures</h1>
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
						<td>Teinture sourcils</td>
						<td>12€</td>
					</tr>
					<tr>
						<td>Teinture cils</td>
						<td>17€</td>
					</tr>
					<tr>
						<td>Teintures cils  sourcils</td>
						<td>24€</td>
					</tr>
					<tr>
						<td>Décoloration du duvet lévres</td>
						<td>9,90€</td>
					</tr>
					<tr>
						<td>Permanente des cils</td>
						<td>47€</td>
					</tr>
				</tbody>
			</table>
		</Container>
		</>
	)
}