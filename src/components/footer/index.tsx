import { Nav, Navbar, Image, Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar bg="light" variant="light" className="py-4">
      <Col xs={12} md={4} className="w-100 justify-content-center">
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={3} className="mb-3 text-center text-md-start">
            <Navbar.Brand href="/">
              <Image
                alt="logo-lorem-ipsum"
                src={"../public/logo.png"}
                style={{
                  width: "auto",
                  maxWidth: "250px",
                  height: "auto",
                  objectFit: "contain",
                }}
                className="img-fluid"
              />
            </Navbar.Brand>
          </Col>

          <Col xs={12} md={3} className="mb-3 text-center text-md-start">
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

          <Col xs={12} md={3} className="mb-3 text-center text-md-start">
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

          <Col xs={12} md={3} className="mb-3 text-center text-md-start">
            <h5>Dane firmy</h5>
            <p>Lorem Ipsum </p>
            <p>NIP 0000000000</p>
            <p>ul. Hebanowa 123/456 01-111 Warszawa </p>
            <p>tel. 111 222 333</p>
          </Col>
        </Row>

        <Row className="mt-4 w-100 text-center">
          <Col xs={12}>
            <div className="d-flex justify-content-center gap-3 pt-3">
              <Image
                src="../public/facebook.svg"
                height="24px"
                alt="Facebook"
              />
              <Image
                src="../public/twitter-x.svg"
                height="24px"
                alt="Twitter X"
              />
              <Image
                src="../public/instagram.svg"
                height="24px"
                alt="Instagram"
              />
            </div>
            <p className="text-gray mt-2 mb-0">
              &copy; 2024 YourCompany. All rights reserved.
            </p>
          </Col>
        </Row>
      </Col>
    </Navbar>
  );
};
