import { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  //   const [date, setDate] = useState(new Date());

  //   useEffect(() => {
  //     let timer = setInterval(() => setDate(new Date()), 1000);
  //     return function cleanup() {
  //       clearInterval(timer);
  //     };
  //   }, []);

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
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
