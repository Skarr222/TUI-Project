import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/authSlice";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (role: "admin" | "customer") => {
    try {
      dispatch(
        login({
          email: credentials.email,
          name: credentials.email.split("@")[0],
          password: credentials.password,
          role,
        })
      );
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError(
        "Nie udało się zalogować. Sprawdź swoje dane i spróbuj ponownie."
      );
      alert("Nie udało się zalogować. Sprawdź swoje dane i spróbuj ponownie.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #f0f2f5, #e0e0e0)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} sm={12}>
            <Card
              style={{
                padding: "30px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                borderRadius: "12px",
                backgroundColor: "#fff",
              }}
            >
              <Card.Header className="bg-transparent border-0 text-center">
                <h3 style={{ fontWeight: "bold", color: "#007bff" }}>
                  Zaloguj
                </h3>
              </Card.Header>
              <Alert
                hidden={!error}
                variant="danger"
                role="alert"
                style={{ textAlign: "center" }}
              >
                {error}
              </Alert>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Wpisz swój adres email"
                      className="p-2"
                      style={{ borderRadius: "6px" }}
                      value={credentials.email}
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Hasło
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Hasło"
                      className="p-2"
                      style={{ borderRadius: "6px" }}
                      value={credentials.password}
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 d-flex justify-content-between"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox" label="Zapamiętaj" />
                    <Link
                      to="#"
                      style={{ textDecoration: "none", color: "#007bff" }}
                    >
                      Zapomniałeś hasła?
                    </Link>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2"
                    style={{ borderRadius: "6px", fontWeight: "bold" }}
                    // disabled={isLoading}
                    onClick={() => handleLogin("customer")}
                  >
                    {"Zaloguj"}
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  <p className="mb-2">Nie masz jeszcze konta?</p>
                  <Link to="/register" className="text-decoration-none">
                    <Button
                      variant="outline-primary"
                      style={{ borderRadius: "6px" }}
                    >
                      Zarejestruj się
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
