import { Nav, Navbar, Image, Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar
      className="py-4 text-white"
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
        backdropFilter: "blur(10px)",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <Col xs={12} md={4} className="w-100 justify-content-center">
        <Row className="w-100 justify-content-center">
          {/* Logo */}
          <Col xs={12} md={3} className="mb-3 mt-3 text-center text-md-center">
            <Navbar.Brand href="/">
              <Image
                alt="logo-lorem-ipsum"
                src={"../logo.svg"}
                style={{
                  width: "auto",
                  maxWidth: "250px",
                  height: "auto",
                  objectFit: "contain",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                className="img-fluid"
              />
            </Navbar.Brand>
          </Col>

          {/* Important Info */}
          <Col xs={12} md={3} className="mb-3 text-center text-md-start">
            <h5 className="text-white">Ważne informacje</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about-us" className="text-white">
                O nas
              </Nav.Link>
              <Nav.Link href="/faq" className="text-white">
                FAQ
              </Nav.Link>
              <Nav.Link href="/regulamin" className="text-white">
                Regulamin
              </Nav.Link>
              <Nav.Link href="/polityka-prywatnosci" className="text-white">
                Polityka prywatności
              </Nav.Link>
              <Nav.Link href="/ochrona-danych-osobowych" className="text-white">
                Ochrona danych osobowych
              </Nav.Link>
            </Nav>
          </Col>

          {/* Customer Service */}
          <Col xs={12} md={3} className="mb-3 text-center text-md-start">
            <h5 className="text-white">Obsługa klienta</h5>
            <Nav className="flex-column">
              <Nav.Link href="/kontakt" className="text-white">
                Kontakt
              </Nav.Link>
            </Nav>
          </Col>

          {/* Company Info */}
          <Col
            xs={12}
            md={3}
            className="mb-3 text-center text-md-start text-white"
          >
            <h5 className="text-white">Dane firmy</h5>
            <p>Lorem Ipsum</p>
            <p>NIP 0000000000</p>
            <p>ul. Hebanowa 123/456 01-111 Warszawa</p>
            <p>tel. 111 222 333</p>
          </Col>
        </Row>

        {/* Social & Copyright */}
        <Row className="mt-4 w-100 text-center">
          <Col xs={12}>
            <div className="d-flex justify-content-center gap-3 pt-3">
              <Image src="../facebook.svg" height="24px" alt="Facebook" />
              <Image src="../twitter-x.svg" height="24px" alt="Twitter X" />
              <Image src="../instagram.svg" height="24px" alt="Instagram" />
            </div>
            <p className="text-white mt-2 mb-0">
              &copy; 2024 YourCompany. All rights reserved.
            </p>
          </Col>
        </Row>
      </Col>
    </Navbar>
  );
};
