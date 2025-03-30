import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export const Login = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #f0f2f5, #e0e0e0)", // Dodanie gradientu jako tła
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
              <h3
                className="text-center mb-4"
                style={{ fontWeight: "bold", color: "#007bff" }}
              >
                Zaloguj
              </h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-start">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Wpisz swój adres email"
                    className="p-2"
                    style={{ borderRadius: "6px" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Hasło"
                    className="p-2"
                    style={{ borderRadius: "6px" }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex justify-content-between"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Zapamiętaj" />
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    Zapomniałeś hasła?
                  </a>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2"
                  style={{ borderRadius: "6px", fontWeight: "bold" }}
                >
                  Zaloguj
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
