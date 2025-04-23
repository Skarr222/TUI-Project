import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";

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

export const OffersList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Example offers data
  const offers: Offer[] = [
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
      description:
        "Poznaj magię orientalnych bazarów i pustynnych krajobrazów.",
      price: 4200,
      duration: "8 dni",
      image: "/offers/morocco.jpeg",
      category: "afryka",
    },
  ];

  const categories = [
    { value: "all", label: "Wszystkie" },
    { value: "europa", label: "Europa" },
    { value: "azja", label: "Azja" },
    { value: "afryka", label: "Afryka" },
    { value: "ameryka", label: "Ameryka" },
  ];

  const filteredOffers = offers.filter((offer) => {
    const matchesSearch =
      offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || offer.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4" style={{ color: "#007bff" }}>
        Nasze Oferty
      </h1>

      <Row className="mb-4">
        <Col md={8}>
          <Form.Control
            type="search"
            placeholder="Szukaj wycieczki..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3 mb-md-0"
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row className="g-4">
        {filteredOffers.map((offer) => (
          <Col key={offer.id} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <div style={{ height: "200px", overflow: "hidden" }}>
                <Card.Img
                  variant="top"
                  src={offer.image}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title className="mb-0">{offer.title}</Card.Title>
                  <Badge bg="primary" pill>
                    {offer.duration}
                  </Badge>
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                  {offer.destination}
                </Card.Subtitle>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">{offer.price} PLN</span>
                  <Button variant="outline-primary">Zobacz szczegóły</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredOffers.length === 0 && (
        <div className="text-center py-5">
          <h3>Nie znaleziono ofert spełniających kryteria wyszukiwania</h3>
          <p>Spróbuj zmienić kryteria wyszukiwania</p>
        </div>
      )}
    </Container>
  );
};
