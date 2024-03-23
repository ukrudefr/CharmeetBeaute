import React from "react";
import { Container } from "react-bootstrap";
import Line from "../../components/Line";
import { useNavigate } from "react-router";
import back from '../../img_beaute/back.png'

export default function Onglerie() {

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<>
			<Container fluid className="wrapper">
			<h1>Beauté des mains</h1>
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
						<td>Beauté des mains simple - <span>20 min</span></td>
						<td>25€</td>
					</tr>
					<tr>
						<td>Beauté des mains simple avec pose<br/> de vernis - <span>30 min</span></td>
						<td>31€</td>
					</tr>
					<tr>
						<td>Beauté des mains complète<br/>
						Beauté de l'ongle + gommage + <br/>modelage + pose de vernis -
						<span> 45 min</span></td>
						<td>46€</td>
					</tr>
					<tr>
						<td>Pose de vernis - <span>20 min</span></td>
						<td>16€</td>
					</tr>
					<tr>
						<td>Pose vernis semi-permanent french <br/>
						avec préparation de l'ongle</td>
						<td>33€</td>
					</tr>
						<tr>
						<td>Pose vernis semi-permanent couleur<br/> 
						avec préparation de l'ongle</td>
						<td>32€</td>
					</tr>
					<tr>
						<td>Retrait semi permanent</td>
						<td>13€</td>
					</tr>
				</tbody>
			</table>
			<h1>Beauté des pieds</h1>
			<Line/>
			<table>
				<tbody>
					<tr>
						<td>Beauté des pieds simple - <span> 20 min</span></td>
						<td>25€</td>
					</tr>
					<tr>
						<td>Beauté des pieds simple<br/> 
						avec pose de vernis - <span> 30 min</span></td>
						<td>31€</td>
					</tr>
					<tr>
						<td>Soin foot peeling -
						<span> 30 min</span>
						<p>Elimine les rougosités sur la plante du pied</p></td>
						<td>41€</td>
					</tr>
					<tr>
						<td>Beauté des pieds complète - <span>55 min</span>
						<p>Bain de pieds, beauté de l'ongle, gommage,<br/> modelage relaxant et pose de vernis</p></td>
						<td>52€</td>
					</tr>
				<tr>
						<td>Pose de vernis - <span>20 min</span></td>
						<td>16€</td>
					</tr>
					<tr>
						<td>Pose vernis semi-permanent french ou couleur</td>
						<td>33€</td>
					</tr>
					<tr>
						<td>Retrait semi-permanent</td>
						<td>13€</td>
					</tr>
				</tbody>
			</table>
		</Container>
		</>
	)
}