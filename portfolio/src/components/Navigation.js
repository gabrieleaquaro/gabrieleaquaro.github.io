import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation(props) {
  const [activated, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let newCurrent = "";
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 500) {
          newCurrent = section.getAttribute("id");
        }
      });
      setActive(newCurrent);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToComponent = (e, name) => {
    let hero = document.getElementById(name);
    e.preventDefault(); // Stop Page Reloading
    hero && hero.scrollIntoView();
  };

  return (
    <Navbar variant="dark" className={"dark-transp-bg"} fixed="top" expand="md">
      <Container>
        <div>
          <Navbar.Brand className={"logo-nav primary-color"} onclick="#">
            {props.logo}
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"me-auto"}>
              <a
                href="/"
                className={activated === "home" ? "activated" : ""}
                onClick={(e) => {
                  scrollToComponent(e, "home");
                }}
              >
                HOME
              </a>
              <a
                href="/"
                className={activated === "about" ? "activated" : ""}
                onClick={(e) => {
                  scrollToComponent(e, "about");
                }}
              >
                ABOUT
              </a>
              <a
                href="/"
                className={activated === "skills" ? "activated" : ""}
                onClick={(e) => {
                  scrollToComponent(e, "skills");
                }}
              >
                SKILLS
              </a>
              <a
                href="/"
                className={activated === "projects" ? "activated" : ""}
                onClick={(e) => {
                  scrollToComponent(e, "projects");
                }}
              >
                PROJECTS
              </a>
              <a
                href="/"
                className={activated === "contact" ? "activated" : ""}
                onClick={(e) => {
                  scrollToComponent(e, "contact");
                }}
              >
                CONTACT
              </a>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
