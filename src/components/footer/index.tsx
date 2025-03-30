import { Container, Nav, Navbar, Image, Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar bg="light" variant="light" className=" py-4 w-80 flex-column">
      <Container fluid>
        <Row className="w-100 text-start justify-content-center">
          <Col md={3} sm={6} className="mb-3">
            <Navbar.Brand href="/">
              <Image
                alt="logo-lorem-ipsum"
                src={"../public/logo.png"}
                style={{ width: "auto", height: "250px", objectFit: "contain" }}
                className="img-fluid"
              />
            </Navbar.Brand>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h5>Ważne informacje</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about-us" className="text-dark">
                O nas
              </Nav.Link>
              <Nav.Link href="/faq" className="text-dark">
                FAQ
              </Nav.Link>
              <Nav.Link href="/regulamin" className="text-dark">
                Regulamin
              </Nav.Link>
              <Nav.Link href="/polityka" className="text-dark">
                Polityka prywatności
              </Nav.Link>
              <Nav.Link href="/ochrona" className="text-dark">
                Ochrona danych osobowych
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h5>Obsługa klienta</h5>
            <Nav className="flex-column">
              <Nav.Link href="/wysylka" className="text-dark">
                Wysyłka
              </Nav.Link>
              <Nav.Link href="/kontakt" className="text-dark">
                Kontakt
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h5>Dane firmy</h5>
            <p>Lorem Ipsum </p>
            <p>NIP 0000000000</p>
            <p>ul. Hebanowa 123/456 01-111 Warszawa </p>
            <p>tel. 111 222 333</p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mt-4 w-100 text-center">
          <div className="d-flex justify-content-center gap-3 pt-3">
            <Image src="../public/facebook.svg" height="24px" />
            <Image src="../public/twitter-x.svg" height="24px" />
            <Image src="../public/instagram.svg" height="24px" />
          </div>
          <p className="text-gray mt-2 mb-0">
            &copy; 2024 YourCompany. All rights reserved.
          </p>
        </Row>
      </Container>
    </Navbar>
  );
};
