import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar expand="xl" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image
            alt="logo-lorem-ipsum"
            src={"../public/logo.png"}
            style={{
              width: "auto",
              height: "75px",
              objectFit: "contain",
            }}
            className="img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Wyszukaj</Nav.Link>
            <Nav.Link href="/offers">Oferty</Nav.Link>
            <Nav.Link href="/about-us">O nas</Nav.Link>
          </Nav>
          <Container
            style={{ display: "flex", flexDirection: "row-reverse", margin: 0 }}
          >
            <Nav.Link href="/login">
              <Button
                variant="outline-light"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <p style={{ margin: 0 }}>Zaloguj</p>
                <Image src="../public/account.svg" width={35} height={35} />
              </Button>
            </Nav.Link>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
