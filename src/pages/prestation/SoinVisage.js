import React from "react";
import { Container } from "react-bootstrap";
import Line from "../../components/Line";
import { useNavigate } from "react-router";
import back from '../../img_beaute/back.png'


export default function SoinVisage() {

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<>
		<Container fluid className="wrapper">
			<h1>Soins du visage</h1>
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
						<td>Nettoyage de peau moins de 20ans - <span>35 min</span></td>
						<td>33€</td>
					</tr>
					<tr>
						<td>Soin équilibre purifiant - <span>45 min</span>
						<p>Avec extraction des comédons</p></td>
						<td>47€</td>
					</tr>
					<tr>
						<td>L'instant nature - <span>40 min</span>
						<p>Soin naturel relaxant pour une peau éclatante</p></td>
						<td>44€</td>
					</tr>
					<tr>
						<td>Voyage aux coeur de la nature - <span>60 min</span>
						<p>Soin personnalisé aux huiles essentielles</p></td>
						<td>60€</td>
					</tr>
					<tr>
						<td>Soin du moment - <span>60 min</span></td>
						<td>63€</td>
					</tr>
					<tr>
						<td>Hydraclean - <span>30 min / 50 min</span>
						<p>Soin nettoyant profond</p></td>
						<td>38€/58€</td>
					</tr>
					<tr>
						<td>Soin détoxygène - <span>60 min</span>
						<p>Libère la peau des toxines et la réoxygène</p></td>
						<td>75€</td>
					</tr>
					<tr>
						<td>Hydradermie* - <span>1h10 min</span>
						<p>Soin profond personnalisé selon votre objectif beauté</p></td>
						<td>81€</td>
					</tr>
					<tr>
						<td>Hydradermie avec âge logic* - <span>1h10 min</span>
						<p>Peau matures à partir de 50 ans</p></td>
						<td>86€</td>
					</tr>
					<tr>
						<td>Hydradermie Lift* - <span>40 min/60 min</span>
						<p>Stimulation des muscles du visage pour un effet lifting immédiat</p></td>
						<td>66€/96€</td>
					</tr>
					<tr>
						<td>Lift Summum* - <span>1h10 min</span>
						<p>Peau repulpée et liftée, le visage apparaît visiblement plus jeune</p></td>
						<td>100€</td>
					</tr>
					<tr>
						<td>Hydra Peeling* Avec Hydra Ph - <span>1h10 min</span></td>
						<td>100€</td>
					</tr>
					<tr>
						<td>Hydra Peeling* Avec Hydrabrasion - <span>1h10 min</span>
						<p>Gomme les signes de l'âge, atténue les taches pigmentaires et<br/> apporte de l'éclat au teint.</p></td>
						<td>90€</td>
					</tr>
					<tr>
						<td>Age Summum* - <span>1h10 min</span>
						<p>Lisse les rides et ridules, atténue les taches pigmentaires.
						<br/>Pour une peau plus raffermie.</p></td>
						<td>103€</td>
					</tr>
					<tr>
						<td>Soni Eye Lift - <span>40 min</span>
						<p>Atténue poches, cernes, rides et ridules</p></td>
						<td>66€</td>
					</tr>
					<tr>
						<td style={{textDecoration: "underline"}}>Forfait soin sur demande</td>
					</tr>
					<tr>
						<td><p>*Modelage des bras pendant la pose du masque.<br/>
						L'épilation des sourcils est offerte sur tous les soins de 50€ et plus.</p></td>
					</tr>
				</tbody>
			</table>
		</Container>
		</>
	)
}