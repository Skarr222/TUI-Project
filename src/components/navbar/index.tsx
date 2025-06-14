import {
  Button,
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/authSlice";

export const NavBar = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const user = auth.user;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
          to="/"
          className="d-none d-xl-flex align-items-center mx-0"
        >
          <Image
            alt="logo-lorem-ipsum"
            src="../logo.svg"
            style={{ height: "60px" }}
            className="img-fluid"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="gap-4 align-items-center mx-auto">
            <Nav.Link as={Link} to="/" className="text-white fw-semibold fs-5">
              🔍 Wyszukaj
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/offers"
              className="text-white fw-semibold fs-5"
            >
              💼 Oferty
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about-us"
              className="text-white fw-semibold fs-5"
            >
              🧭 O nas
            </Nav.Link>
          </Nav>

          <div className="d-flex justify-content-center justify-content-xl-end mt-3 mt-xl-0">
            {!auth.isAuthenticated ? (
              <Nav.Link as={Link} to="/login" className="p-0">
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
            ) : (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="light"
                  className="d-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm"
                >
                  <span className="fw-medium text-primary">
                    {user?.name || "Profil"}
                  </span>
                  <Image
                    src="../account.svg"
                    width={30}
                    height={30}
                    alt="account icon"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">
                    🧑‍💼 Mój Profil
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/settings">
                    ⚙️ Ustawienia
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>
                    🚪 Wyloguj
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
