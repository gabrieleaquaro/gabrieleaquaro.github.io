import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation(props) {
  const activeSect = useRef("");
  const [linkStyles, setLinkStyles] = useState({});

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section");
      let newCurrent = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          newCurrent = section.getAttribute("id");
        }
      });

      if (activeSect.current !== newCurrent) {
        const styles = {
          ...{ home: "", about: "", projects: "", contact: "" },
          ...{ [newCurrent]: "activated" },
        };
        setLinkStyles(styles);

        if (document.location.href.split("#").at(-1) === activeSect.current) {
          document.location.href = "#" + newCurrent;
        }

        activeSect.current = newCurrent;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar variant="dark" className={"dark-transp-bg"} fixed="top" expand="md">
      <Container>
        <div>
          <Navbar.Brand className={"logo-nav primary-color"}>
            {props.logo}
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"me-auto"}>
              <Nav.Link
                className={linkStyles.home}
                href={props.baseUrl ? props.baseUrl + "#home" : "#home"}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className={linkStyles.about}
                href={props.baseUrl ? props.baseUrl + "#about" : "#about"}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                className={linkStyles.skills}
                href={props.baseUrl ? props.baseUrl + "#skills" : "#skills"}
              >
                SKILLS
              </Nav.Link>
              <Nav.Link
                className={linkStyles.projects}
                href={props.baseUrl ? props.baseUrl + "#projects" : "#projects"}
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link
                className={linkStyles.contact}
                href={props.baseUrl ? props.baseUrl + "#contact" : "#contact"}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
