import React from "react"
import logo from "../img_beaute/logo1.jpg"
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo2 from '../img_beaute/logo4.png'

export default function Header() {

	return (
		<>
	<Navbar className="nav" fixed= 'top' collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand1" href="/">
			<img
				alt="logo"
				src={logo}
				width= "80"
				height="80"
				className="d-unline-block align-top"/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center me-auto mx-auto mb-2 mb-lg-0">
            <Nav.Link href="/">Présentation/Horaires</Nav.Link>
				<Nav.Link href="/prestation">Prestation & Tarifs</Nav.Link>
				<Nav.Link href="/gift-card">Cartes Cadeaux</Nav.Link>
				<Nav.Link href="/products">Notre Produits</Nav.Link>
				<Nav.Link href="/offers">Offres</Nav.Link>
				<Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
				<Navbar.Brand className="brand2" href="/">
			<img
				alt="logo"
				src={logo2}
				width= "80"
				height="60"
				className="d-unline-block align-top"/>
			</Navbar.Brand>
      </Container>
    </Navbar>
		</>
	)
}