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
						<td>24€</td>
					</tr>
					<tr>
						<td>Beauté des mains simple avec pose<br/> de vernis - <span>30 min</span></td>
						<td>30€</td>
					</tr>
					<tr>
						<td>Beauté des mains avec gommage, modelage<br/> relaxant et pose de vernis -
						<span>40 min</span></td>
						<td>45€</td>
					</tr>
					<tr>
						<td>Pose de vernis avec limage - <span>15 min</span></td>
						<td>14€</td>
					</tr>
				</tbody>
			</table>
			<h1>Beauté des pieds</h1>
			<Line/>
			<table>
				<tbody>
					<tr>
						<td>Beauté des pieds simple</td>
						<td>24€</td>
					</tr>
					<tr>
						<td>Beauté des pieds simple<br/> avec pose de vernis</td>
						<td>30€</td>
					</tr>
					<tr>
						<td>Soin foot peeling -
						<span>30 min</span>
						<p>Elimine les rougosités sur la plante du pied</p></td>
						<td>40€</td>
					</tr>
					<tr>
						<td>Soin des pieds complet- <span>45 min</span>
						<p>Bain de pieds à bulles, gommage,<br/> modelage relaxant et pose de vernis</p></td>
						<td>50€</td>
					</tr>
				</tbody>
			</table>
			<h1>Onglerie</h1>
			<Line/>
			<table>
				<tbody>
					<tr>
						<td>Pose vernis semi-permanent french mains<br/> ou pieds</td>
						<td>33€</td>
					</tr>
					<tr>
						<td>Pose vernis semi-permanent couleur mains<br/> avec préparation de l'ongle</td>
						<td>31€</td>
					</tr>
					<tr>
						<td>Pose vernis semi-permanent couleur pieds</td>
						<td>33€</td>
					</tr>
					<tr>
						<td>Retrait semi-permanent</td>
						<td>13€</td>
					</tr>
					<tr>
						<td>Pose de gel avec french aux pieds</td>
						<td>40€</td>
					</tr>
					<tr>
						<td>Pose de gel couleur aux pieds</td>
						<td>39€</td>
					</tr>
				</tbody>
			</table>
		</Container>
		</>
	)
}