import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSave, FaArrowLeft, FaUserPlus } from "react-icons/fa";

interface Worker {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "admin" | "employee";
  password?: string;
}

export const AddWorker = () => {
  const [formData, setFormData] = useState<Omit<Worker, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    role: "employee",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    const { firstName, lastName, email, role, password } = formData;

    if (!firstName || !lastName || !email || !role || !password) {
      setErrorMessage("Wypełnij wszystkie wymagane pola.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Wprowadź prawidłowy adres e-mail.");
      return;
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      role: "employee",
      password: "",
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center fw-bold mb-4 text-primary">
                <FaUserPlus className="me-2" /> Dodaj Nowego Pracownika
              </h2>

              {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
              )}
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row className="g-4">
                  {/* Lewa kolumna */}
                  <Col md={6}>
                    <h5 className="mb-3 text-secondary">Dane osobowe</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Imię</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="Wprowadź imię"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Nazwisko</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Wprowadź nazwisko"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Wprowadź adres e-mail"
                        required
                      />
                    </Form.Group>
                  </Col>

                  {/* Prawa kolumna */}
                  <Col md={6}>
                    <h5 className="mb-3 text-secondary">Dane dostępowe</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Hasło</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Wprowadź hasło"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Rola</Form.Label>
                      <Form.Select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="employee">Pracownik</option>
                        <option value="admin">Administrator</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <hr className="my-4" />
                <div className="d-flex justify-content-end gap-3">
                  <Link to="/admin/workers">
                    <Button variant="outline-secondary">
                      <FaArrowLeft className="me-2" /> Anuluj
                    </Button>
                  </Link>
                  <Button variant="success" type="submit">
                    <FaSave className="me-2" /> Zapisz pracownika
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default AddWorker;
