import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar
      expand="xl"
      className="navbar-custom sticky-top shadow"
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
        borderRadius: "0 0 20px 20px",
        padding: "1rem 0.5rem",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container
        fluid
        className="d-flex flex-wrap justify-content-between align-items-center"
      >
        {/* Left Nav */}
        <Nav className="d-none d-xl-flex gap-4">
          <Nav.Link href="/offers" className="text-white fw-semibold fs-5">
            💼 Oferty
          </Nav.Link>
          <Nav className="d-none d-xl-flex">
            <Nav.Link href="/about-us" className="text-white fw-semibold fs-5">
              🧭 O nas
            </Nav.Link>
          </Nav>
        </Nav>

        {/* Center Logo */}
        <Navbar.Brand href="/" className="mx-auto">
          <Image
            alt="logo-lorem-ipsum"
            src="../logo.svg"
            style={{ height: "60px", objectFit: "contain" }}
            className="img-fluid"
          />
        </Navbar.Brand>

        {/* Right Nav */}
        <div className="d-flex gap-4 align-items-center">
          <Nav.Link href="/login">
            <Button
              variant="light"
              className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm"
            >
              <span className="fw-medium text-primary">Zaloguj</span>
              <Image
                src="../account.svg"
                width={30}
                height={30}
                alt="account icon"
              />
            </Button>
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};
