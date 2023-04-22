import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
    return (
        <Container>
            <Navbar expand="lg" className="navbar">
                <Navbar.Brand href="/">Stressie</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/check-in">Check In</Nav.Link>
                        <Nav.Link href="/de-stress">De-stress</Nav.Link>
                        <Nav.Link href="/rewards">Rewards</Nav.Link>
                        <Nav.Link href="/find-care">Find Care</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}