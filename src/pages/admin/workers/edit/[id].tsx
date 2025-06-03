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
import { Link, useParams } from "react-router-dom";
import { FaSave, FaArrowLeft, FaUserEdit } from "react-icons/fa";

interface Worker {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "admin" | "employee";
  status: "active" | "inactive";
}
const workers = [
  {
    id: 1,
    firstName: "Anna",
    lastName: "Kowalska",
    position: "Recepcjonistka",
    email: "anna.kowalska@example.com",
    phone: "123-456-789",
    status: "Aktywny",
    startDate: "2020-03-15",
    address: "ul. Kwiatowa 5, 00-001 Warszawa",
    role: "employee",
    notes:
      "Anna jest bardzo sumienną i pomocną recepcjonistką. Doskonale radzi sobie z obsługą klienta i koordynacją rezerwacji. Zawsze uśmiechnięta i profesjonalna.",
    skills: [
      "Obsługa klienta",
      "Organizacja biura",
      "Znajomość języków obcych (angielski, niemiecki)",
    ],
    profileImage: "https://placehold.co/150x150/E0E0E0/333333?text=Anna+K",
  },
  {
    id: 2,
    firstName: "Piotr",
    lastName: "Nowak",
    position: "Doradca Klienta",
    email: "piotr.nowak@example.com",
    phone: "987-654-321",
    status: "Aktywny",
    startDate: "2019-07-01",
    address: "ul. Leśna 10, 01-123 Kraków",
    role: "employee",
    notes:
      "Piotr to doświadczony doradca z doskonałymi umiejętnościami sprzedażowymi i negocjacyjnymi. Zawsze stawia na pierwszym miejscu zadowolenie klienta.",
    skills: ["Sprzedaż", "Negocjacje", "Budowanie relacji", "Analiza rynku"],
    profileImage: "https://placehold.co/150x150/D0D0D0/222222?text=Piotr+N",
  },
  {
    id: 3,
    firstName: "Marta",
    lastName: "Wiśniewska",
    position: "Kierownik Biura",
    email: "marta.wisniewska@example.com",
    phone: "555-111-222",
    status: "Urlop",
    startDate: "2018-01-10",
    address: "al. Jerozolimskie 100, 00-901 Warszawa",
    role: "employee",
    notes:
      "Marta efektywnie zarządza zespołem i operacjami biurowymi. Jest zorganizowana i potrafi rozwiązywać problemy pod presją czasu.",
    skills: [
      "Zarządzanie zespołem",
      "Planowanie",
      "Rozwiązywanie problemów",
      "Komunikacja",
    ],
    profileImage: "https://placehold.co/150x150/C0C0C0/111111?text=Marta+W",
  },
];

export const EditWorker = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<Omit<Worker, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    role: "employee",
    status: "active",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const workerId = parseInt(id || "0", 10);
    const dummyWorker = workers.find((worker) => worker.id === workerId);

    if (dummyWorker && dummyWorker.id) {
      setFormData({
        firstName: dummyWorker.firstName,
        lastName: dummyWorker.lastName,
        email: dummyWorker.email,
        role: dummyWorker.role as "employee",
        status: dummyWorker.status as "active",
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
