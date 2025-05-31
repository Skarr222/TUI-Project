import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";

interface Offer {
  id: number;
  title: string;
  destination: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: string;
}

export const AddOffer = () => {
  const [formData, setFormData] = useState<Omit<Offer, "id">>({
    title: "",
    destination: "",
    description: "",
    price: 0,
    duration: "",
    image: "",
    category: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    const { title, destination, description, price, duration, category } =
      formData;

    if (
      !title ||
      !destination ||
      !description ||
      price <= 0 ||
      !duration ||
      !category
    ) {
      setErrorMessage(
        "Wypełnij wszystkie wymagane pola i upewnij się, że cena jest większa od 0."
      );
      return;
    }

    setSuccessMessage("Oferta została pomyślnie dodana!");
    setFormData({
      title: "",
      destination: "",
      description: "",
      price: 0,
      duration: "",
      image: "",
      category: "",
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center fw-bold mb-4 text-primary">
                Dodaj Nową Ofertę
              </h2>

              {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
              )}
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row className="g-4">
                  {/* Lewa kolumna */}
                  <Col md={6}>
                    <h5 className="mb-3 text-secondary">Podstawowe dane</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Tytuł oferty</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Wprowadź tytuł oferty"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Destynacja</Form.Label>
                      <Form.Control
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Np. Santorini, Grecja"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Cena (PLN)</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Wprowadź cenę"
                        min="0"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Czas trwania</Form.Label>
                      <Form.Control
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="Np. 7 dni"
                        required
                      />
                    </Form.Group>
                  </Col>

                  {/* Prawa kolumna */}
                  <Col md={6}>
                    <h5 className="mb-3 text-secondary">Szczegóły oferty</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Opis oferty</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Szczegółowy opis oferty..."
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>URL obrazu</Form.Label>
                      <Form.Control
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Np. /offers/greece.jpeg"
                      />
                      {formData.image && (
                        <div className="text-center mt-3">
                          <Image
                            src={formData.image}
                            alt="Podgląd oferty"
                            thumbnail
                            style={{ maxHeight: "150px", objectFit: "cover" }}
                          />
                        </div>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Kategoria</Form.Label>
                      <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Wybierz kategorię</option>
                        <option value="europa">Europa</option>
                        <option value="azja">Azja</option>
                        <option value="afryka">Afryka</option>
                        <option value="ameryka">Ameryka</option>
                        <option value="oceania">Oceania</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <hr className="my-4" />
                <div className="d-flex justify-content-end gap-3">
                  <Link to="/admin/offers">
                    <Button variant="outline-secondary">
                      <FaArrowLeft className="me-2" /> Anuluj
                    </Button>
                  </Link>
                  <Button variant="success" type="submit">
                    <FaSave className="me-2" /> Zapisz ofertę
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
