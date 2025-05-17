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
        {/* Logo hidden on mobile */}
        <Navbar.Brand
          href="/"
          className="d-none d-xl-flex align-items-center mx-0"
        >
          <Image
            alt="logo-lorem-ipsum"
            src="../logo.svg"
            style={{ height: "60px" }}
            className="img-fluid"
          />
        </Navbar.Brand>

        {/* Hamburger menu */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

        {/* Collapsible Nav */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="gap-4 align-items-center mx-auto">
            <Nav.Link href="/" className="text-white fw-semibold fs-5">
              🔍 Wyszukaj
            </Nav.Link>
            <Nav.Link href="/offers" className="text-white fw-semibold fs-5">
              💼 Oferty
            </Nav.Link>
            <Nav.Link href="/about-us" className="text-white fw-semibold fs-5">
              🧭 O nas
            </Nav.Link>
          </Nav>

          {/* Login Button moved inside Collapse */}
          <div className="d-flex justify-content-center justify-content-xl-end mt-3 mt-xl-0">
            <Nav.Link href="/login" className="p-0">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
