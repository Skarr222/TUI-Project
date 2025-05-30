import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Use Link for internal navigation

export const AdminNavBar = () => {
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
        <Navbar.Brand
          as={Link}
          to="/admin/index"
          className="d-none d-xl-flex align-items-center mx-0"
        >
          <Image
            alt="admin-logo"
            src="../logo.svg"
            style={{ height: "60px" }}
            className="img-fluid"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="admin-navbar-nav" className="border-0" />

        <Navbar.Collapse
          id="admin-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="gap-4 align-items-center mx-auto">
            <Nav.Link
              as={Link}
              to="/admin/index"
              className="text-white fw-semibold fs-5"
            >
              📊 Dashboard
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/offers"
              className="text-white fw-semibold fs-5"
            >
              ➕ Dodaj Ofertę
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/workers"
              className="text-white fw-semibold fs-5"
            >
              👷 Zarządzaj Pracownikami
            </Nav.Link>
          </Nav>

          <div className="d-flex justify-content-center justify-content-xl-end mt-3 mt-xl-0">
            <Nav.Link as={Link} to="/login" className="p-0">
              <Button
                variant="light"
                className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm"
              >
                <span className="fw-medium text-primary">Wyloguj</span>
                {/* <Image
                  src="../logout.svg" // Replace with an appropriate logout icon if available
                  width={30}
                  height={30}
                  alt="logout icon"
                /> */}
              </Button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
