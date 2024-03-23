import React from "react";
import { Container } from "react-bootstrap";
import Line from "../../components/Line";
import { useNavigate } from "react-router";
import back from '../../img_beaute/back.png'

export default function Epilation() {

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<>
		<Container fluid className="wrapper">
			<h1>Épilations</h1>
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
						<td>Sourcils ou lévres ou menton</td>
						<td>10€</td>
					</tr>
					<tr>
						<td>Visage complet</td>
						<td>26€</td>
					</tr>
					<tr>
						<td>Nez ou oreilles</td>
						<td>4€</td>
					</tr>
					<tr>
						<td>1/2 jambes ou cuisses</td>
						<td>17€</td>
					</tr>
					<tr>
						<td>3/4 jambes</td>
						<td>27,50€</td>
					</tr>
					<tr>
						<td>Jambes complètes + fesses</td>
						<td>31€</td>
					</tr>
					<tr>
						<td>Avants bras</td>
						<td>14€</td>
					</tr>
					<tr>
						<td>Bras complets</td>
						<td>17€</td>
					</tr>
					<tr>
						<td>Maillot simple ou aisselles</td>
						<td>11,50€</td>
					</tr>
					<tr>
						<td>Maillot échancré</td>
						<td>14,50€</td>
					</tr>
					<tr>
						<td>Maillot string</td>
						<td>18,50€</td>
					</tr>
					<tr>
						<td>Maillot semi-intégral</td>
						<td>21,50€</td>
					</tr>
					<tr>
						<td>Maillot intégral</td>
						<td>23,50€</td>
					</tr>
				</tbody>
			</table>
			<h1>Forfaits épilations</h1>
			<Line/>
			<table>
				<tbody>
					<tr>
						<td> Sourcils + lèvres ou menton</td>
						<td>18€</td>
					</tr>
					<tr>
						<td>Sourcils + lèvres + menton</td>
						<td>23€</td>
					</tr>
					<tr>
						<td>Maillot simple + aisselles</td>
						<td>20€</td>
					</tr>
					<tr>
						<td>Maillot string + aisselles</td>
						<td>28€</td>
					</tr>
					<tr>
						<td>Maillot intégral + aisselles</td>
						<td>32€</td>
					</tr>
					<tr>
						<td>1/2 Jambes + maillot simple + aisselles</td>
						<td>36€</td>
					</tr>
					<tr>
						<td>1/2 Jambes + maillot intégral + aisselles</td>
						<td>46€</td>
					</tr>
					<tr>
						<td>3/4 Jambes + maillot simple ou aisselles</td>
						<td>35€</td>
					</tr>
					<tr>
						<td>3/4 Jambes + maillot simple + aisselles</td>
						<td>41,50€</td>
					</tr>
					<tr>
						<td>3/4 Jambes + maillot intégral + aisselles</td>
						<td>56,50€</td>
					</tr>
				</tbody>
			</table>
			<h1>Épilations pour lui</h1>
			<Line/>
			<table>
				<tbody>
					<tr>
						<td><span>Aisselles</span></td>
						<td><span>12,50€</span></td>
					</tr>
					<tr>
						<td><span>Sourcils</span></td>
						<td><span>10€</span></td>
					</tr>
					<tr>
						<td><span>Torse</span></td>
						<td><span>20€</span></td>
					</tr>
					<tr>
						<td><span>Torse + ventre</span></td>
						<td><span>29€</span></td>
					</tr>
					<tr>
						<td><span>Haut du dos + épaules</span></td>
						<td><span>24€</span></td>
					</tr>
					<tr>
						<td><span>Dos complet</span></td>
						<td><span>28,50€</span></td>
					</tr>
				</tbody>
			</table>
		</Container>
		</>
	)
}