import React from "react";
import bg2 from '../img_beaute/image.png'
import { Image } from "react-bootstrap";




export default function Home() {
	return (
		<>
			<Image className="home" src= {bg2} alt= "home" fluid/>
		</>
	)
}