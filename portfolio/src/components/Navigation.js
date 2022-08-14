import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation(props) {

  const activeSect = useRef('')
  const [linkStyles, setLinkStyles] = useState({});

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section");
      let newCurrent = ''
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          newCurrent = section.getAttribute("id")
        }
      });

      if (activeSect.current !== newCurrent) {
        const styles = { ...{ home: '', about: '', projects: '', contact: '' }, ...{ [newCurrent]: 'active' } }
        setLinkStyles(styles);
        activeSect.current = newCurrent;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [])


  const scrollToSection = (name) => {
    const sections = document.querySelectorAll("section");
    const index = Object.values(sections).findIndex(sect => sect.getAttribute('id') === name);
    if (index !== -1) {
      sections[index].scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  return (
    <Navbar variant="dark" className={'dark-transp-bg'} fixed="top" expand="md">
      <Container>
        <div>
          <Navbar.Brand className={"logo-nav primary-color"} >{props.logo}</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"me-auto"}>
              <Nav.Link className={linkStyles.home} onClick={() => scrollToSection('home')}>HOME</Nav.Link>
              <Nav.Link className={linkStyles.about} onClick={() => scrollToSection('about')}>ABOUT</Nav.Link>
              <Nav.Link className={linkStyles.skills} onClick={() => scrollToSection('skills')} >SKILLS</Nav.Link>
              <Nav.Link className={linkStyles.projects} onClick={() => scrollToSection('projects')} >PROJECTS</Nav.Link>
              <Nav.Link className={linkStyles.contact} onClick={() => scrollToSection('contact')} >CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}