import { useState } from "react";
import {
  Container,
  Table,
  Button,
  Badge,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const initialOffers: Offer[] = [
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

export const AdminOffersList = () => {
  const [offers, setOffers] = useState<Offer[]>(initialOffers);

  const handleDelete = (id: number) => {
    if (window.confirm("Czy na pewno chcesz usunąć tę ofertę?")) {
      setOffers(offers.filter((offer) => offer.id !== id));
      alert("Oferta została usunięta.");
    }
  };

  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col>
          <h2 className="mb-0">Zarządzanie Ofertami</h2>
        </Col>
        <Col xs="auto">
          <Link to="/admin/offer/add">
            <Button variant="primary" className="d-flex align-items-center">
              <FaPlus className="me-2" /> Dodaj nową ofertę
            </Button>
          </Link>
        </Col>
      </Row>

      {offers.length === 0 ? (
        <Alert variant="info" className="text-center">
          Brak ofert do wyświetlenia. Dodaj pierwszą ofertę!
        </Alert>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Tytuł</th>
              <th>Destynacja</th>
              <th>Cena (PLN)</th>
              <th>Czas trwania</th>
              <th>Kategoria</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
              <tr key={offer.id}>
                <td>{offer.id}</td>
                <td>
                  <strong>{offer.title}</strong>
                </td>
                <td>{offer.destination}</td>
                <td>{offer.price}</td>
                <td>{offer.duration}</td>
                <td>
                  <Badge bg="secondary">{offer.category.toUpperCase()}</Badge>
                </td>
                <td>
                  <Link to={`/admin/offer/edit/${offer.id}`}>
                    <Button variant="outline-info" size="sm" className="me-2">
                      <FaEdit /> Edytuj
                    </Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(offer.id)}
                  >
                    <FaTrash /> Usuń
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};
