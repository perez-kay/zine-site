import { useState } from 'react';
import styles from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCircleQuestion,
  faPaintBrush,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

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
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand`}
          onClick={toggleNav}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
          show={navOpen}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton className="pb-0">
            <img
              src="/images/logo.png"
              className={styles.image}
              alt="the first sound logo"
            />
          </Offcanvas.Header>
          <Offcanvas.Body className="pb-3 overflow-y-auto">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink
                onClick={toggleNav}
                className={`${styles.navLink} fs-5 my-2`}
                to="/"
              >
                <FontAwesomeIcon icon={faHouse} /> Home
              </NavLink>
              <NavLink
                onClick={toggleNav}
                className={`${styles.navLink} fs-5 my-2`}
                to="/about"
              >
                <FontAwesomeIcon icon={faCircleQuestion} /> About
              </NavLink>
              <NavLink
                onClick={toggleNav}
                className={`${styles.navLink} fs-5 mt-2 mb-3 `}
                to="/contributors"
              >
                <FontAwesomeIcon icon={faPaintBrush} /> Contributors
              </NavLink>
              <a
                className={`${styles.navLink} fs-5 mt-2 mb-3`}
                href="https://x.com/firstsoundzine"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
              <a
                className={`${styles.navLink} fs-5`}
                href="https://firstsoundzine.neocities.org/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faStar} /> First Sound 2024
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
