import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation(props) {

  const [style, setStyle] = useState("light-color dark-bg");

  useEffect(() => {
    window.addEventListener('scroll', changeStyle, { passive: true });
    return () => window.removeEventListener('scroll', changeStyle);
  }, [])


  const changeStyle = () => {
    if (window.scrollY >= 60) {
      setStyle("dark-transp-bg");
    } else {
      setStyle("light-color")
    }
  }

  return (
    <Navbar variant="dark" className={style} fixed="top" expand="md">
      <Container>
        <div>
          <Navbar.Brand className={"logo-nav primary-color"} href="#home">{props.logo}</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"me-auto"}>
              <Nav.Link className="light-color" href="#home">HOME</Nav.Link>
              <Nav.Link className="light-color" href="#about">ABOUT</Nav.Link>
              <Nav.Link className="light-color" href="#projects">PROJECTS</Nav.Link>
              <Nav.Link className="light-color" href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}