import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
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

const allOffers: Offer[] = [
  {
    id: 1,
    title: "Magiczna Grecja",
    destination: "Santorini, Grecja",
    description:
      "Odkryj piękno białych domów i błękitnych kopuł na malowniczym Santorini.",
    price: 3999,
    duration: "7 dni",
    image: "/offers/greece.jpeg",
    category: "europa",
  },
  {
    id: 2,
    title: "Tajemnice Egiptu",
    destination: "Kair, Egipt",
    description:
      "Zwiedzanie piramid i rejsy po Nilu - poznaj historię starożytnego Egiptu.",
    price: 4500,
    duration: "10 dni",
    image: "/offers/egypt.jpeg",
    category: "afryka",
  },
  {
    id: 3,
    title: "Rajska Tajlandia",
    destination: "Phuket, Tajlandia",
    description:
      "Relaks na tropikalnych plażach i poznawanie tajskiej kultury.",
    price: 5200,
    duration: "12 dni",
    image: "/offers/thailand.jpeg",
    category: "azja",
  },
  {
    id: 4,
    title: "Włoskie Wakacje",
    destination: "Toskania, Włochy",
    description:
      "Odkryj uroki włoskiej kuchni i kultury w malowniczej Toskanii.",
    price: 3800,
    duration: "8 dni",
    image: "/offers/italy.jpeg",
    category: "europa",
  },
  {
    id: 5,
    title: "Amerykański Sen",
    destination: "Nowy Jork, USA",
    description:
      "Zobacz najbardziej ekscytujące miasto świata i jego największe atrakcje.",
    price: 7500,
    duration: "9 dni",
    image: "/offers/usa.jpeg",
    category: "ameryka",
  },
  {
    id: 6,
    title: "Marokańska Przygoda",
    destination: "Marrakesz, Maroko",
    description: "Poznaj magię orientalnych bazarów i pustynnych krajobrazów.",
    price: 4200,
    duration: "8 dni",
    image: "/offers/morocco.jpeg",
    category: "afryka",
  },
];

export const EditOffer = () => {
  const { id } = useParams<{ id: string }>();
  const [offer, setOffer] = useState<Offer | null>(null);
  const [formData, setFormData] = useState<Offer | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const foundOffer = allOffers.find((o) => o.id === Number(id));
    if (foundOffer) {
      setOffer(foundOffer);
      setFormData(foundOffer); // Ustaw początkowe dane formularza
    } else {
      // Jeśli oferta nie istnieje, przekieruj lub pokaż błąd
      setErrorMessage("Oferta o podanym ID nie została znaleziona.");
      // Opcjonalnie: navigate('/admin/offers');
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...(prev as Offer), // Rzutowanie, aby TypeScript wiedział, że prev nie jest nullem
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!formData) return;

    // Walidacja prostych pól
    if (
      !formData.title ||
      !formData.destination ||
      !formData.description ||
      formData.price <= 0 ||
      !formData.duration ||
      !formData.category
    ) {
      setErrorMessage(
        "Wypełnij wszystkie wymagane pola i upewnij się, że cena jest większa od 0."
      );
      return;
    }

    // W realnej aplikacji tutaj wysłałbyś zaktualizowane dane do API
    console.log("Aktualizowana oferta:", formData);

    // Symulacja sukcesu
    setSuccessMessage("Oferta została pomyślnie zaktualizowana!");
    // Opcjonalnie: setTimeout(() => navigate('/admin/offers'), 2000);
  };

  if (!offer && !errorMessage) {
    return (
      <Container className="py-5 text-center">
        <p>Ładowanie danych oferty...</p>
      </Container>
    );
  }

  if (errorMessage && !offer) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger">{errorMessage}</Alert>
        <Button href="/admin/offers" variant="primary" className="mt-3">
          <FaArrowLeft className="me-2" /> Powrót do listy ofert
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Edytuj ofertę: {offer?.title}</h2>
      <Card className="shadow-sm border-0">
        <Card.Body>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {formData && (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formTitle">
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

                  <Form.Group className="mb-3" controlId="formDestination">
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

                  <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Cena (PLN)</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Wprowadź cenę"
                      required
                      min="0"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDuration">
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
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Opis oferty</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Szczegółowy opis oferty..."
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>URL obrazu</Form.Label>
                    <Form.Control
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Np. /offers/greece.jpeg"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCategory">
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

              <div className="d-flex justify-content-end mt-4">
                <Link to="/admin/offers">
                  <Button variant="secondary" className="me-2">
                    <FaArrowLeft className="me-2" /> Anuluj
                  </Button>
                </Link>
                <Button variant="success" type="submit">
                  <FaSave className="me-2" /> Zapisz zmiany
                </Button>
              </div>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};
