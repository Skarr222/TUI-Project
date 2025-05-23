import axios from "axios";
import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import api from "../../utils/axiosConfig";

interface RegisterForm {
  email: string;
  login: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const [registerForm, setRegisterForm] = React.useState({
    email: "",
    login: "",
    password: "",
    confirmPassword: "",
  });

  const register = async (form: RegisterForm) => {
    try {
      await api.post(`/register`, form);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #f0f2f5, #e0e0e0)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-center",
        paddingTop: "10%",
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
                  <Form.Label className="text-start">Login</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Wpisz swoje imię"
                    className="p-2"
                    style={{ borderRadius: "6px" }}
                    onChange={(e) => {
                      setRegisterForm({
                        ...registerForm,
                        login: e.target.value,
                      });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Hasło"
                    className="p-2"
                    style={{ borderRadius: "6px" }}
                    onChange={(e) => {
                      setRegisterForm({
                        ...registerForm,
                        password: e.target.value,
                      });
                    }}
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
                    onChange={(e) => {
                      setRegisterForm({
                        ...registerForm,
                        confirmPassword: e.target.value,
                      });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-start">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Wpisz swój adres email"
                    className="p-2"
                    style={{ borderRadius: "6px" }}
                    onChange={(e) => {
                      setRegisterForm({
                        ...registerForm,
                        email: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2"
                  style={{ borderRadius: "6px", fontWeight: "bold" }}
                  onClick={() => {
                    register(registerForm);
                  }}
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
