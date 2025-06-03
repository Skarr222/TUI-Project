import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom"; // useParams for getting ID from URL
import { FaSave, FaArrowLeft, FaUserEdit } from "react-icons/fa";

interface Worker {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "admin" | "employee";
  status: "active" | "inactive";
}

export const EditWorker = () => {
  const { id } = useParams<{ id: string }>(); // Get worker ID from URL
  const [formData, setFormData] = useState<Omit<Worker, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    role: "employee",
    status: "active",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // For real data fetching

  useEffect(() => {
    setLoading(true);
    const dummyWorker: Worker = {
      id: Number(id),
      firstName: "Jan",
      lastName: "Kowalski",
      email: "jan.kowalski@example.com",
      role: "employee",
      status: "active",
    };

    if (dummyWorker.id) {
      setFormData({
        firstName: dummyWorker.firstName,
        lastName: dummyWorker.lastName,
        email: dummyWorker.email,
        role: dummyWorker.role,
        status: dummyWorker.status,
      });
      setLoading(false);
    } else {
      setErrorMessage("Nie znaleziono pracownika.");
      setLoading(false);
    }
  }, [id]);

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

    const { firstName, lastName, email, role, status } = formData;

    if (!firstName || !lastName || !email || !role || !status) {
      setErrorMessage("Wypełnij wszystkie wymagane pola.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Wprowadź prawidłowy adres e-mail.");
      return;
    }

    setSuccessMessage("Dane pracownika zostały pomyślnie zaktualizowane!");
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <p>Ładowanie danych pracownika...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center fw-bold mb-4 text-primary">
                <FaUserEdit className="me-2" /> Edytuj Dane Pracownika (ID: {id}
                )
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
                    <h5 className="mb-3 text-secondary">Ustawienia konta</h5>

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

                    <Form.Group className="mb-3">
                      <Form.Label>Status Konta</Form.Label>
                      <Form.Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                      >
                        <option value="active">Aktywne</option>
                        <option value="inactive">Nieaktywne</option>
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
                    <FaSave className="me-2" /> Zapisz zmiany
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
