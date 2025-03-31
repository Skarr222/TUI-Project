import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export const Register = () => {
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
              <h3
                className="text-center mb-4"
                style={{ fontWeight: "bold", color: "#007bff" }}
              >
                Zarejestruj się
              </h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="text-start">Imię</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Wpisz swoje imię"
                    className="p-2"
                    style={{ borderRadius: "6px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label className="text-start">Nazwisko</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Wpisz swoje nazwisko"
                    className="p-2"
                    style={{ borderRadius: "6px" }}
                  />
                </Form.Group>

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
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Potwierdź hasło</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Potwierdź hasło"
                    className="p-2"
                    style={{ borderRadius: "6px" }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2"
                  style={{ borderRadius: "6px", fontWeight: "bold" }}
                >
                  Zarejestruj
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
