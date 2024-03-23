import React from "react";
import { Container } from "react-bootstrap";
import Line from "../../components/Line";
import { useNavigate } from "react-router";
import back from '../../img_beaute/back.png'

export default function SoinCorps() {

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
			<>
		<Container fluid className="wrapper">
			<h1>Soins du corps</h1>
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
						<td>Modelage dos pour enfant <br/>
						de 6 à 13 ans</td>
						<td>19€</td>
					</tr>
					<tr>
						<td>Soin du dos complet  - <span>40 min</span>
						<p>Soin nettoyant et relaxant</p></td>
						<td>47€</td>
					</tr>
					<tr>
						<td>Modelage dos relaxant - <span>25 min</span></td>
						<td>39€</td>
					</tr>
					<tr>
						<td>Gommage corps Mirific - <span>30 min</span></td>
						<td>45€</td>
					</tr>
					<tr>
						<td>Modelage relaxant - <span>45 min</span>
						<p>Modelage délassant et relaxant du corps</p></td>
						<td>68€</td>
					</tr>
					<tr>
						<td>Modelage Mirific - <span>60 min</span>
						<p>Modelage corps relaxant aux 4 huiles précieuses</p></td>
						<td>82€</td>
					</tr>
					<tr>
						<td>Modelage Mirific avec gommage  - <span>1h30 min</span></td>
						<td>124€</td>
					</tr>
					<tr>
						<td>Soin Rituel à la bougie - <span>50 min</span>
						<p>Modelage relaxant corps à la cire de bougie</p></td>
						<td>76€</td>
					</tr>
					<tr>
						<td>Modelage Japonais des pieds - <br/><span>35 min/55 min</span></td>
						<td>41€/61€</td>
					</tr>
					<br/>
					<tr>
						<td style={{textDecoration: "underline"}}>Soin minceur :</td>
					</tr>
					<tr>
						<td>Slim Logic - <span>60 min</span>
						<p>Modelage manuel + enveloppement anti-graisse, anti-eau </p></td>
						<td>77€</td>
					</tr>
				</tbody>
			</table>
		</Container>
		</>
	)
}