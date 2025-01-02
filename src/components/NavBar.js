import { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen(!navOpen);
  }

  function handleClose() {
    setNavOpen(false);
  }
  return (
    <Navbar
      bg="transparent"
      data-bs-theme="dark"
      key="navbar"
      expand={false}
      className="mb-3"
    >
      <Container fluid>
        {/* <Navbar.Brand>&nbsp;</Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand`}
          onClick={toggleNav}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="top"
          show={navOpen}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton className="pb-0">
            {/* <Offcanvas.Title
              className="fs-3"
              id={`offcanvasNavbarLabel-expand`}
            >
              
            </Offcanvas.Title> */}
            <img
              src="/images/logo.png"
              className={styles.image}
              alt="the first sound logo"
            />
          </Offcanvas.Header>
          <Offcanvas.Body className="pb-3 overflow-y-hidden">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink
                onClick={toggleNav}
                className={`${styles.navLink} fs-5 my-2`}
                to="/"
              >
                <i class="bi bi-house-fill"></i> Home
              </NavLink>
              <NavLink
                onClick={toggleNav}
                className={`${styles.navLink} fs-5 my-2`}
                to="/about"
              >
                <i class="bi bi-question-circle-fill"></i> About
              </NavLink>
              <NavLink
                onClick={toggleNav}
                className={`${styles.navLink} fs-5 mt-2 mb-3 `}
                to="/contributors"
              >
                <i class="bi bi-brush-fill"></i> Contributors
              </NavLink>
              <a
                className={`${styles.navLink} fs-5`}
                href="https://x.com/firstsoundzine"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-twitter"></i> Twitter
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
