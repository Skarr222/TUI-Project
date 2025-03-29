import { Container, Nav, Navbar, Image } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar bg="light" variant="light" className="mt-5 py-3">
      <Container className="d-flex flex-row align-items-center">
        <Navbar.Brand href="/">
          <Image
            alt="logo-lorem-ipsum"
            src={"../public/logo.png"}
            style={{ width: "auto", height: "75px", objectFit: "contain" }}
            className="img-fluid"
          />
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="mt-2">
          <Nav.Link href="/" className="text-dark mx-2">
            Home
          </Nav.Link>
          <Nav.Link href="/wares" className="text-dark mx-2">
            Lista towarów
          </Nav.Link>
          <Nav.Link href="/about-us" className="text-dark mx-2">
            O nas
          </Nav.Link>
        </Nav>

        <div className="mt-3 d-flex gap-3">
          <Image src="../public/facebook.svg" height="24px" />
          <Image src="../public/twitter-x.svg" height="24px" />
          <Image src="../public/instagram.svg" height="24px" />
        </div>

        <p className="text-dark mt-3 mb-0">
          &copy; 2024 YourCompany. All rights reserved.
        </p>
      </Container>
    </Navbar>
  );
};
